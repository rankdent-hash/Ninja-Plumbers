// Zoom, pan and hover for the Greater London map on /admin/areas.
//
// Plain DOM, no library, loaded with a <script src> like every other admin
// script here. The map is fully rendered and readable server-side; everything
// below is enhancement, so if this file never loads the page still works and
// the table underneath still carries all the numbers.
(function () {
  var root = document.querySelector('[data-areamap]');
  if (!root) return;

  var svg = root.querySelector('[data-areamap-svg]');
  var pan = root.querySelector('[data-areamap-pan]');
  var tip = root.querySelector('[data-areamap-tip]');
  var stage = root.querySelector('.areamap-stage');
  if (!svg || !pan || !tip || !stage) return;

  var MIN = 1;
  var MAX = 8;
  var scale = 1;
  var tx = 0;
  var ty = 0;

  var vbW = parseFloat(svg.getAttribute('data-vb-w')) || 1000;
  var vbH = parseFloat(svg.getAttribute('data-vb-h')) || 1000;

  function apply() {
    // Keep the map from being dragged entirely off screen: at scale s the
    // visible span is vb/s, so translation is bounded by what falls outside.
    var maxX = (vbW * (scale - 1)) / scale;
    var maxY = (vbH * (scale - 1)) / scale;
    tx = Math.min(0, Math.max(-maxX, tx));
    ty = Math.min(0, Math.max(-maxY, ty));
    pan.setAttribute('transform', 'scale(' + scale + ') translate(' + tx + ',' + ty + ')');
    root.classList.toggle('is-zoomed', scale > 1);
    sizeText();
  }

  // Everything in the pan group is scaled by the browser, text included, so a
  // label set in user units doubles on screen every time the map doubles. The
  // postcode codes are only ever read at high zoom, so their size is solved
  // backwards from the pixels they should occupy: at scale s a user unit is
  // (renderedWidth / vbW) * s pixels, so the unit size that yields a constant
  // CODE_PX is that ratio inverted. Set once here rather than per element.
  var CODE_PX = 11;
  var NAME_PX = 13;
  function sizeText() {
    var rect = svg.getBoundingClientRect();
    if (!rect.width) return;
    var pxPerUnit = (rect.width / vbW) * scale;
    root.style.setProperty('--areamap-code-size', CODE_PX / pxPerUnit + 'px');
    root.style.setProperty('--areamap-name-size', NAME_PX / pxPerUnit + 'px');
    sizeDots();
  }
  window.addEventListener('resize', sizeText);

  // Dots are markers, not geography. Left alone they would scale with the map
  // and a borough opened at 7x would show dots seven times too big, swamping
  // the thing they sit on. Radius AND the rosette offset are both divided by
  // the zoom, so a dot keeps its size and four dots at one district stay a
  // tight cluster instead of drifting apart.
  var dotEls = root.querySelectorAll('.areamap-dot');
  var hitEls = root.querySelectorAll('.areamap-code-hit');
  function sizeDots() {
    for (var i = 0; i < dotEls.length; i++) {
      var d = dotEls[i];
      var bx = parseFloat(d.getAttribute('data-x'));
      var by = parseFloat(d.getAttribute('data-y'));
      var ox = parseFloat(d.getAttribute('data-ox'));
      var oy = parseFloat(d.getAttribute('data-oy'));
      var br = parseFloat(d.getAttribute('data-r'));
      if (isNaN(bx) || isNaN(br)) continue;
      d.setAttribute('cx', bx + ox / scale);
      d.setAttribute('cy', by + oy / scale);
      d.setAttribute('r', br / scale);
    }
    // Same reasoning for the invisible hover target around each district code.
    for (var j = 0; j < hitEls.length; j++) hitEls[j].setAttribute('r', 26 / scale);
  }

  function zoomBy(factor) {
    var next = Math.min(MAX, Math.max(MIN, scale * factor));
    if (next === scale) return;
    // Hold the centre of the view still while the scale changes.
    var cx = -tx + vbW / (2 * scale);
    var cy = -ty + vbH / (2 * scale);
    scale = next;
    tx = -(cx - vbW / (2 * scale));
    ty = -(cy - vbH / (2 * scale));
    apply();
  }

  // --- open a borough: zoom to it and name the districts inside ---
  var focused = null;

  function focusShape(shape) {
    var name = shape.getAttribute('data-borough');
    if (!name) return;
    // getBBox is the shape's own extent in user units, which is exactly what
    // the transform is expressed in — no measuring against the screen needed.
    var box = shape.getBBox();
    var pad = 1.25;
    var next = Math.min(MAX, Math.max(MIN, Math.min(vbW / (box.width * pad), vbH / (box.height * pad))));
    scale = next;
    tx = -(box.x + box.width / 2 - vbW / (2 * scale));
    ty = -(box.y + box.height / 2 - vbH / (2 * scale));
    focused = name;
    root.classList.add('is-focused');
    var codes = 0;
    var all = root.querySelectorAll('.areamap-code');
    for (var i = 0; i < all.length; i++) {
      var on = all[i].getAttribute('data-parent') === name;
      all[i].classList.toggle('is-shown', on);
      if (on) codes++;
    }
    for (var h = 0; h < hitEls.length; h++) {
      hitEls[h].classList.toggle('is-shown', hitEls[h].getAttribute('data-parent') === name);
    }
    for (var j = 0; j < shapes.length; j++) shapes[j].classList.toggle('is-open', shapes[j] === shape);
    if (readout) {
      readout.textContent = codes
        ? name + ' — ' + codes + ' postcode ' + (codes === 1 ? 'district' : 'districts')
        : name + ' — no postcode districts on the map here';
      readout.hidden = false;
    }
    apply();
  }

  // Closing puts the whole map back. Dropping the labels but staying zoomed
  // would strand the reader inside a shape with nothing left to read.
  function clearFocus() {
    focused = null;
    root.classList.remove('is-focused');
    var all = root.querySelectorAll('.areamap-code.is-shown, .areamap-code-hit.is-shown');
    for (var i = 0; i < all.length; i++) all[i].classList.remove('is-shown');
    for (var j = 0; j < shapes.length; j++) shapes[j].classList.remove('is-open');
    if (readout) readout.hidden = true;
    scale = 1;
    tx = 0;
    ty = 0;
    apply();
  }

  var shapes = root.querySelectorAll('.areamap-borough, .areamap-district');
  var readout = root.querySelector('[data-areamap-readout]');

  root.addEventListener('click', function (e) {
    var toggle = e.target.closest('[data-areamap-toggle]');
    if (toggle) {
      var on = toggle.getAttribute('aria-pressed') !== 'true';
      toggle.setAttribute('aria-pressed', on ? 'true' : 'false');
      root.classList.toggle('hide-corridor', !on);
      return;
    }
    var btn = e.target.closest('[data-areamap-zoom]');
    if (btn) {
      var action = btn.getAttribute('data-areamap-zoom');
      if (action === 'in') zoomBy(1.6);
      else if (action === 'out') zoomBy(1 / 1.6);
      else {
        clearFocus();
        scale = 1;
        tx = 0;
        ty = 0;
        apply();
      }
      return;
    }

    // A drag that ends over a shape is a pan, not a click on it. Without this
    // every pan would snap the map to whatever happened to be under the
    // pointer when the mouse came up.
    if (movedDuringPress) return;
    // The district rings sit above the shape and are hit-testable, so a click
    // landing on one has to resolve back to the area it belongs to — otherwise
    // they punch holes in the open borough and it cannot be clicked shut.
    var onRing = e.target.closest('.areamap-code-hit');
    var shape = null;
    if (onRing) {
      var owner = onRing.getAttribute('data-parent');
      for (var s = 0; s < shapes.length; s++) {
        if (shapes[s].getAttribute('data-borough') === owner) { shape = shapes[s]; break; }
      }
    } else {
      shape = e.target.closest('.areamap-borough, .areamap-district');
    }
    if (!shape) return;
    if (shape.getAttribute('data-borough') === focused) clearFocus();
    else focusShape(shape);
  });

  // Escape backs out, which is the shortcut people try first when something
  // has zoomed in on them.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && focused) clearFocus();
  });

  // --- drag to pan ---
  var dragging = false;
  var lastX = 0;
  var lastY = 0;
  // Tracked from the moment of press, not just while dragging, so a press that
  // wanders a few pixels on a trackpad still counts as a click.
  var movedDuringPress = false;
  var pressX = 0;
  var pressY = 0;
  var CLICK_SLOP = 5;

  function pointFromEvent(e) {
    var t = e.touches && e.touches[0];
    return { x: t ? t.clientX : e.clientX, y: t ? t.clientY : e.clientY };
  }

  function beginPress(e) {
    var p = pointFromEvent(e);
    movedDuringPress = false;
    pressX = p.x;
    pressY = p.y;
  }

  function trackPress(e) {
    if (movedDuringPress) return;
    var p = pointFromEvent(e);
    if (Math.abs(p.x - pressX) > CLICK_SLOP || Math.abs(p.y - pressY) > CLICK_SLOP) movedDuringPress = true;
  }

  function startDrag(e) {
    beginPress(e);
    if (scale <= 1) return;
    var p = pointFromEvent(e);
    dragging = true;
    lastX = p.x;
    lastY = p.y;
    root.classList.add('is-dragging');
  }

  function moveDrag(e) {
    trackPress(e);
    if (!dragging) return;
    var p = pointFromEvent(e);
    var rect = svg.getBoundingClientRect();
    // Convert pixels dragged into user units, accounting for the current zoom.
    var unitsPerPx = vbW / rect.width / scale;
    tx += (p.x - lastX) * unitsPerPx;
    ty += (p.y - lastY) * unitsPerPx;
    lastX = p.x;
    lastY = p.y;
    apply();
    if (e.cancelable) e.preventDefault();
  }

  function endDrag() {
    dragging = false;
    root.classList.remove('is-dragging');
  }

  svg.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('mouseup', endDrag);
  svg.addEventListener('touchstart', startDrag, { passive: true });
  svg.addEventListener('touchmove', moveDrag, { passive: false });
  window.addEventListener('touchend', endDrag);

  // --- hover readout ---
  var LABEL = { enquiries: 'enquiries', phone: 'phone taps', whatsapp: 'WhatsApp taps', sms: 'text taps' };

  function showTip(html, e) {
    tip.innerHTML = html;
    tip.hidden = false;
    var rect = stage.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    // Flip to the other side near the right edge so the tip stays in view.
    tip.style.left = (x > rect.width - 180 ? x - 168 : x + 14) + 'px';
    tip.style.top = Math.max(0, y - 10) + 'px';
  }

  function hideTip() {
    tip.hidden = true;
  }

  svg.addEventListener('mousemove', function (e) {
    if (dragging) return hideTip();
    var dot = e.target.closest('.areamap-dot');
    if (dot) {
      var count = dot.getAttribute('data-count');
      var kind = dot.getAttribute('data-kind');
      var borough = dot.getAttribute('data-borough');
      showTip(
        '<strong>' + dot.getAttribute('data-district') + '</strong>' +
          (borough ? ' &middot; ' + borough : '') +
          '<br>' + count + ' ' + (LABEL[kind] || kind),
        e
      );
      return;
    }
    // A district marker inside the open area, checked before the shape beneath
    // it so pointing at a district gives the district rather than the borough
    // it happens to sit in.
    var hit = e.target.closest('.areamap-code-hit');
    if (hit) {
      var place = hit.getAttribute('data-place');
      showTip(
        '<strong>' + hit.getAttribute('data-code') + '</strong>' +
          (place ? '<br>' + place : '') +
          '<br><span class="areamap-tip-dim">' + hit.getAttribute('data-area') + '</span>',
        e
      );
      return;
    }

    var shape = e.target.closest('.areamap-borough, .areamap-district');
    if (shape) {
      // Say outright whether we work there. A shape with only a name on it
      // invites the reader to assume the whole map is our patch, and most of
      // what is drawn out past London is not.
      var covered = shape.getAttribute('data-covered') !== 'no';
      showTip(
        '<strong>' + shape.getAttribute('data-borough') + '</strong><br>' +
          (covered ? 'Covered' : 'Not covered yet'),
        e
      );
      return;
    }
    hideTip();
  });

  svg.addEventListener('mouseleave', hideTip);

  apply();
})();
