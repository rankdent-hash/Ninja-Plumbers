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
  var cellEls = root.querySelectorAll('.areamap-cell');
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
    for (var h = 0; h < cellEls.length; h++) {
      cellEls[h].classList.toggle('is-shown', cellEls[h].getAttribute('data-parent') === name);
    }
    for (var j = 0; j < shapes.length; j++) shapes[j].classList.toggle('is-open', shapes[j] === shape);
    if (readout) {
      readout.innerHTML =
        '<span>' +
        (codes
          ? name + ' — ' + codes + ' postcode ' + (codes === 1 ? 'district' : 'districts')
          : name + ' — no postcode districts on the map here') +
        '</span> <button type="button" class="areamap-close" data-areamap-close>Close</button>';
      readout.hidden = false;
    }
    apply();
  }

  // Closing puts the whole map back. Dropping the labels but staying zoomed
  // would strand the reader inside a shape with nothing left to read.
  // Set by the search box once it has wired itself up; left null otherwise.
  var onFocusCleared = null;

  function clearFocus() {
    if (onFocusCleared) onFocusCleared();
    clearSelection();
    focused = null;
    root.classList.remove('is-focused');
    var all = root.querySelectorAll('.areamap-code.is-shown, .areamap-cell.is-shown');
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
  var panels = root.querySelectorAll('[data-areamap-detail]');
  var emptyPanel = root.querySelector('[data-areamap-detail-empty]');
  var selected = null;

  // Selecting a district opens its panel. Only districts with something to
  // report have one; the rest get the empty note, which is better than a click
  // that appears to do nothing.
  function selectDistrict(code) {
    if (selected === code) return clearSelection();
    selected = code;
    var found = false;
    for (var i = 0; i < panels.length; i++) {
      var on = panels[i].getAttribute('data-areamap-detail') === code;
      panels[i].hidden = !on;
      if (on) found = true;
    }
    if (emptyPanel) emptyPanel.hidden = found;
    for (var j = 0; j < cellEls.length; j++)
      cellEls[j].classList.toggle('is-selected', cellEls[j].getAttribute('data-code') === code);
    for (var k = 0; k < dotEls.length; k++)
      dotEls[k].classList.toggle('is-selected', dotEls[k].getAttribute('data-district') === code);
    // Opening a district also spells out the other places it covers.
    var labels = root.querySelectorAll('.areamap-code');
    for (var L = 0; L < labels.length; L++)
      labels[L].classList.toggle('is-selected', labels[L].getAttribute('data-code') === code);
    var panel = root.querySelector('[data-areamap-detail="' + code + '"]:not([hidden])') || (found ? null : emptyPanel);
    if (panel && panel.scrollIntoView) panel.scrollIntoView({ block: 'nearest' });
  }

  function clearSelection() {
    selected = null;
    for (var i = 0; i < panels.length; i++) panels[i].hidden = true;
    if (emptyPanel) emptyPanel.hidden = true;
    for (var j = 0; j < cellEls.length; j++) cellEls[j].classList.remove('is-selected');
    for (var k = 0; k < dotEls.length; k++) dotEls[k].classList.remove('is-selected');
    var labels = root.querySelectorAll('.areamap-code.is-selected');
    for (var L = 0; L < labels.length; L++) labels[L].classList.remove('is-selected');
  }

  root.addEventListener('click', function (e) {
    var toggle = e.target.closest('[data-areamap-toggle]');
    if (toggle) {
      var on = toggle.getAttribute('aria-pressed') !== 'true';
      toggle.setAttribute('aria-pressed', on ? 'true' : 'false');
      root.classList.toggle('hide-corridor', !on);
      return;
    }
    if (e.target.closest('[data-areamap-close]')) { clearFocus(); return; }
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
    // Inside an open area a dot or a district is a thing in its own right, so
    // clicking one opens its numbers rather than closing the area around it.
    var onDot = e.target.closest('.areamap-dot');
    if (onDot && focused) return selectDistrict(onDot.getAttribute('data-district'));
    var onCell = e.target.closest('.areamap-cell.is-shown');
    if (onCell) return selectDistrict(onCell.getAttribute('data-code'));

    // A dot outside an open area still opens the area it sits in, which is the
    // step the reader wanted anyway.
    if (onDot) {
      var host = onDot.getAttribute('data-parent-shape');
      for (var h2 = 0; h2 < shapes.length; h2++) {
        if (shapes[h2].getAttribute('data-borough') === host) { focusShape(shapes[h2]); return; }
      }
    }

    var shape = e.target.closest('.areamap-borough, .areamap-district');
    // Clicking the open area's own outline, or the ground outside it, closes.
    // The district cells now cover the whole interior, so without this the only
    // ways out would be Escape and Reset.
    if (!shape) {
      if (focused) clearFocus();
      return;
    }
    if (shape.getAttribute('data-borough') === focused) clearFocus();
    else focusShape(shape);
  });

  // Escape backs out, which is the shortcut people try first when something
  // has zoomed in on them.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    // Back out one step at a time: the panel first, then the area.
    if (selected) clearSelection();
    else if (focused) clearFocus();
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
      // The whole district, not just the dot under the pointer: four dots sit
      // on top of each other here and reading them one at a time is the slow
      // way to learn nothing.
      var summary = dot.getAttribute('data-summary');
      showTip(
        '<strong>' + dot.getAttribute('data-district') + '</strong>' +
          (borough ? ' &middot; ' + borough : '') +
          '<br>' + (summary || count + ' ' + (LABEL[kind] || kind)) +
          '<br><span class="areamap-tip-dim">Click for the full breakdown</span>',
        e
      );
      return;
    }
    // A district marker inside the open area, checked before the shape beneath
    // it so pointing at a district gives the district rather than the borough
    // it happens to sit in.
    var hit = e.target.closest('.areamap-cell');
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

  // --- find an area or postcode ---
  // 329 districts is too many to hunt for by eye, which is the whole reason
  // this exists. Matching is done here rather than by a datalist so a district
  // can be found by its code OR by any of the several names it covers.
  var qEl = root.querySelector('[data-areamap-search]');
  var listEl = root.querySelector('[data-areamap-suggestions]');
  var statusEl = root.querySelector('[data-areamap-search-status]');
  var clearEl = root.querySelector('[data-areamap-search-clear]');
  var indexEl = root.querySelector('[data-areamap-index]');
  var INDEX = [];
  try { INDEX = JSON.parse(indexEl ? indexEl.textContent : '[]'); } catch (err) { INDEX = []; }

  if (qEl && listEl && INDEX.length) {
    var active = -1;
    var results = [];

    // "sw18 2ab" and "SW 18" are both SW18. Strip everything but letters and
    // digits, then drop a trailing inward code (digit + two letters) so a full
    // postcode finds its district instead of finding nothing.
    function asOutcode(q) {
      var t = q.toUpperCase().replace(/[^A-Z0-9]/g, '');
      var m = /^([A-Z]{1,2}\d{1,2}[A-Z]?)\d[A-Z]{2}$/.exec(t);
      return m ? m[1] : t;
    }

    function search(q) {
      var raw = q.trim().toLowerCase();
      if (raw.length < 1) return [];
      var out = asOutcode(q);
      var hits = [];
      for (var i = 0; i < INDEX.length; i++) {
        var it = INDEX[i];
        var code = it.c.toUpperCase().replace(/[^A-Z0-9]/g, '');
        var score = -1;
        if (it.t === 'd' && code === out) score = 0;                       // exact postcode
        else if (it.c.toLowerCase() === raw) score = 1;                    // exact name
        else if (it.t === 'd' && out && code.indexOf(out) === 0) score = 2; // postcode prefix
        else if (it.c.toLowerCase().indexOf(raw) === 0) score = 3;         // name prefix
        else if ((it.n || '').toLowerCase().indexOf(raw) === 0) score = 4; // place prefix
        else if ((it.n || '').toLowerCase().indexOf(raw) > -1) score = 5;  // place anywhere
        else if (it.c.toLowerCase().indexOf(raw) > -1) score = 6;
        if (score > -1) hits.push({ it: it, s: score });
      }
      hits.sort(function (a, b) { return a.s - b.s || a.it.c.localeCompare(b.it.c); });
      return hits.slice(0, 8).map(function (h) { return h.it; });
    }

    function renderList() {
      listEl.innerHTML = '';
      if (!results.length) { listEl.hidden = true; qEl.setAttribute('aria-expanded', 'false'); return; }
      for (var i = 0; i < results.length; i++) {
        var it = results[i];
        var li = document.createElement('li');
        li.className = 'areamap-suggestion' + (i === active ? ' is-active' : '');
        li.id = 'areamap-sugg-' + i;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', i === active ? 'true' : 'false');
        li.setAttribute('data-i', String(i));
        li.innerHTML = '<strong>' + it.c + '</strong>' + (it.n ? '<span>' + it.n + '</span>' : '');
        listEl.appendChild(li);
      }
      listEl.hidden = false;
      qEl.setAttribute('aria-expanded', 'true');
      if (active > -1) qEl.setAttribute('aria-activedescendant', 'areamap-sugg-' + active);
      else qEl.removeAttribute('aria-activedescendant');
    }

    function shapeByName(name) {
      for (var i = 0; i < shapes.length; i++)
        if (shapes[i].getAttribute('data-borough') === name) return shapes[i];
      return null;
    }

    function markFound(code) {
      for (var i = 0; i < cellEls.length; i++)
        cellEls[i].classList.toggle('is-found', !!code && cellEls[i].getAttribute('data-code') === code);
      for (var j = 0; j < shapes.length; j++)
        shapes[j].classList.toggle('is-found', !!code && shapes[j].getAttribute('data-borough') === code);
    }

    function go(it) {
      if (!it) return;
      var shape = shapeByName(it.t === 'd' ? it.p : it.c);
      if (!shape) return;
      focusShape(shape);
      if (it.t === 'd') {
        selectDistrict(it.c);
        markFound(it.c);
        statusEl.textContent = it.c + (it.n ? ' — ' + it.n : '') + ', in ' + it.p + '.';
      } else {
        markFound(it.c);
        statusEl.textContent = it.c + ' opened.';
      }
      listEl.hidden = true;
      qEl.setAttribute('aria-expanded', 'false');
      if (clearEl) clearEl.hidden = false;
    }

    qEl.addEventListener('input', function () {
      results = search(qEl.value);
      active = results.length ? 0 : -1;
      renderList();
      if (clearEl) clearEl.hidden = !qEl.value;
      if (qEl.value && !results.length) statusEl.textContent = 'Nothing matches "' + qEl.value + '".';
      else statusEl.textContent = '';
    });

    qEl.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (!results.length) return;
        e.preventDefault();
        active = (active + (e.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length;
        renderList();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        go(results[active > -1 ? active : 0]);
      } else if (e.key === 'Escape') {
        if (!listEl.hidden) { listEl.hidden = true; qEl.setAttribute('aria-expanded', 'false'); e.stopPropagation(); }
      }
    });

    listEl.addEventListener('mousedown', function (e) {
      var li = e.target.closest('[data-i]');
      if (!li) return;
      e.preventDefault();
      go(results[+li.getAttribute('data-i')]);
    });

    if (clearEl) {
      clearEl.addEventListener('click', function () {
        qEl.value = '';
        results = [];
        active = -1;
        renderList();
        markFound(null);
        statusEl.textContent = '';
        clearEl.hidden = true;
        qEl.focus();
      });
    }

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.areamap-search')) { listEl.hidden = true; qEl.setAttribute('aria-expanded', 'false'); }
    });

    // Closing the area clears the highlight with it, so a stale green shape
    // cannot outlive the search that put it there.
    onFocusCleared = function () { markFound(null); };
  }

  apply();
})();
