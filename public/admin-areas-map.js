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

  root.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-areamap-zoom]');
    if (!btn) return;
    var action = btn.getAttribute('data-areamap-zoom');
    if (action === 'in') zoomBy(1.6);
    else if (action === 'out') zoomBy(1 / 1.6);
    else {
      scale = 1;
      tx = 0;
      ty = 0;
      apply();
    }
  });

  // --- drag to pan ---
  var dragging = false;
  var lastX = 0;
  var lastY = 0;

  function pointFromEvent(e) {
    var t = e.touches && e.touches[0];
    return { x: t ? t.clientX : e.clientX, y: t ? t.clientY : e.clientY };
  }

  function startDrag(e) {
    if (scale <= 1) return;
    var p = pointFromEvent(e);
    dragging = true;
    lastX = p.x;
    lastY = p.y;
    root.classList.add('is-dragging');
  }

  function moveDrag(e) {
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
    var shape = e.target.closest('.areamap-borough');
    if (shape) {
      showTip('<strong>' + shape.getAttribute('data-borough') + '</strong>', e);
      return;
    }
    hideTip();
  });

  svg.addEventListener('mouseleave', hideTip);

  apply();
})();
