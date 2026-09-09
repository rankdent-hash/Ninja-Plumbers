// Tamesis Plumbers — site search. Loaded by script.js on first use.
//
// Everything runs in the browser against /search-index.json, a list of every
// page built from the site's data files. Ranking: the query is split into
// words; a word scores most on a title, then on the page's keywords, then on
// its one-line description. Results are grouped by kind, main services first,
// then the services related to a matched group, then local pages, areas,
// postcode districts, brands and other pages. A query that looks like a
// postcode lifts the pages that cover it to the top.
(function () {
  var overlay = document.getElementById('site-search');
  if (!overlay) return;
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var enquiryLink = overlay.querySelector('[data-search-enquiry]');
  var index = null, loading = null, lastTrigger = null, timer = null;

  var STOP = { in: 1, near: 1, me: 1, the: 1, a: 1, an: 1, for: 1, my: 1, i: 1, need: 1, want: 1, to: 1, of: 1, and: 1, london: 1, please: 1, someone: 1, help: 1, with: 1 };
  var LIMIT = { group: 3, service: 6, appliance: 6, damp: 3, blog: 4, related: 5, combo: 6, area: 6, postcode: 8, brand: 4, page: 4 };
  var HEAD = { group: 'Main services', service: 'Services', appliance: 'Appliances & fixtures', damp: 'Damp & condensation', blog: 'Advice', related: 'Related services', combo: 'Local pages', area: 'Areas we cover', postcode: 'Postcode districts', brand: 'Boiler brands', page: 'Pages' };
  var ICON = {
    group: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    service: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    related: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    combo: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    area: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    postcode: '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
    brand: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    appliance: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="14" r="3.5"/><line x1="7.5" y1="7" x2="7.51" y2="7"/><line x1="11" y1="7" x2="16.5" y2="7"/>',
    damp: '<path d="M12 3c3.5 4 6 6.6 6 9.5a6 6 0 0 1-12 0C6 9.6 8.5 7 12 3z"/><line x1="8.5" y1="14" x2="15.5" y2="14"/>',
    blog: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    page: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'
  };
  var PLACE = { combo: 1, area: 1, postcode: 1 };
  // On a tied score the page about the thing itself beats a page about it somewhere.
  var RANK = { service: 0, appliance: 1, damp: 2, blog: 3, group: 4, area: 5, combo: 6, postcode: 7, brand: 8, page: 9 };

  function svg(inner) {
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function reEsc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function tokens(q) {
    return q.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(function (t) { return t && !STOP[t]; });
  }
  function singular(t) { return t.length > 3 && /s$/.test(t) && !/ss$/.test(t) ? t.slice(0, -1) : t; }
  function wordIn(text, t) { return new RegExp('(^|[^a-z0-9])' + reEsc(t)).test(text); }

  function scoreEntry(e, toks, phrase) {
    var title = e.title.toLowerCase(), sub = e.sub.toLowerCase(), k = e.k;
    var s = 0, hits = 0;
    // The whole query as typed: "boiler repair" is the Boiler Repair page
    // before it is any page that merely mentions both words.
    if (phrase && title === phrase) s += 80;
    else if (phrase && title.indexOf(phrase) === 0) s += 30;
    for (var i = 0; i < toks.length; i++) {
      var t = toks[i], t1 = singular(t), best = 0;
      if (title === t || title === t1) best = 100;
      else if (title.indexOf(t) === 0 || title.indexOf(t1) === 0) best = 60;
      else if (wordIn(title, t) || wordIn(title, t1)) best = 40;
      else if (wordIn(k, t) || wordIn(k, t1)) best = 20;
      else if (sub.indexOf(t) !== -1) best = 8;
      if (best) hits++;
      s += best;
    }
    return { s: s, hits: hits };
  }

  // "SW6", "sw6 3lq" and "SW63LQ" all mean the SW6 district.
  function postcodeOf(q) {
    var m = q.toUpperCase().replace(/\s+/g, '').match(/^([A-Z]{1,2}[0-9][0-9A-Z]?)([0-9][A-Z]{2})?$/);
    return m ? m[1] : null;
  }

  function search(q) {
    var toks = tokens(q), pc = postcodeOf(q), out = [], pcHit = false;
    if (!toks.length && !pc) return { empty: true };
    var need = toks.length ? Math.max(1, Math.ceil(toks.length / 2)) : 0;
    var phrase = toks.join(' ');
    index.forEach(function (e) {
      var r = toks.length ? scoreEntry(e, toks, phrase) : { s: 0, hits: 0 };
      var bonus = 0;
      if (pc && e.pc) {
        if (e.pc.indexOf(pc) !== -1) { bonus = 200; pcHit = true; }
        else if (e.pc.some(function (p) { return p.indexOf(pc) === 0; })) bonus = 80;
      }
      if (bonus || (r.hits > 0 && r.hits >= need)) out.push({ e: e, s: r.s + bonus });
    });
    out.sort(function (a, b) { return b.s - a.s || RANK[a.e.t] - RANK[b.e.t] || (b.e.w || 0) - (a.e.w || 0) || a.e.title.localeCompare(b.e.title); });

    // A matched group brings its other services along as related results.
    var seen = {}, related = [];
    out.forEach(function (o) { seen[o.e.url] = true; });
    out.filter(function (o) { return o.e.t === 'group'; }).forEach(function (o) {
      index.forEach(function (e) {
        if (e.t === 'service' && e.g === o.e.g && !seen[e.url]) { seen[e.url] = true; related.push({ e: e, s: 10 }); }
      });
    });
    var serviceHit = out.some(function (o) { return o.e.t === 'group' || o.e.t === 'service' || o.e.t === 'appliance' || o.e.t === 'damp'; });
    return { out: out, related: related, pc: pc, pcHit: pcHit, serviceHit: serviceHit };
  }

  function mark(title, toks) {
    var html = esc(title);
    if (!toks.length) return html;
    var sorted = toks.slice().sort(function (a, b) { return b.length - a.length; }).map(reEsc);
    return html.replace(new RegExp('(' + sorted.join('|') + ')', 'ig'), '<mark>$1</mark>');
  }
  function hit(e, t, toks) {
    var kind = PLACE[t] ? ' is-place' : (t === 'group' ? ' is-group' : '');
    return '<li><a class="search-hit" href="' + esc(e.url) + '">' +
      '<span class="search-hit-ico' + kind + '">' + svg(ICON[t]) + '</span>' +
      '<span class="search-hit-text"><strong>' + mark(e.title, toks) + '</strong><small>' + esc(e.sub) + '</small></span>' +
      '<span class="search-hit-go" aria-hidden="true">&rarr;</span></a></li>';
  }
  function section(head, list, t, toks) {
    if (!list.length) return '';
    return '<section class="search-section"><h3>' + head + '</h3><ul class="search-list">' +
      list.map(function (e) { return hit(e, t, toks); }).join('') + '</ul></section>';
  }
  function say(msg) { status.textContent = msg; }

  function renderEmpty() {
    var groups = index.filter(function (e) { return e.t === 'group'; });
    var popular = ['/services/emergency-plumbing', '/services/boiler-repair', '/services/drain-unblocking', '/services/boiler-service']
      .map(function (u) { return index.filter(function (e) { return e.url === u; })[0]; }).filter(Boolean);
    var where = index.filter(function (e) { return e.url === '/areas-we-cover' || e.url === '/postcodes'; });
    results.innerHTML = section('Main services', groups, 'group', []) + section('Popular', popular, 'service', []) + section('Where we work', where, 'page', []);
    results.removeAttribute('data-best');
    say('');
  }

  function render(res, q) {
    if (res.empty) { renderEmpty(); return; }
    var toks = tokens(q), byType = {}, total = 0, html = '';
    res.out.forEach(function (o) { (byType[o.e.t] = byType[o.e.t] || []).push(o.e); });
    if (res.related.length) byType.related = res.related.map(function (o) { return o.e; });
    var order = res.serviceHit
      ? ['group', 'service', 'appliance', 'damp', 'related', 'combo', 'area', 'postcode', 'brand', 'blog', 'page']
      : ['area', 'postcode', 'combo', 'brand', 'page', 'group', 'service', 'appliance', 'damp', 'related', 'blog'];
    order.forEach(function (t) {
      var list = (byType[t] || []).slice(0, LIMIT[t]);
      total += list.length;
      html += section(HEAD[t], list, t, toks);
    });
    if (!total && res.pc && !res.pcHit) {
      html = '<p class="search-empty"><strong>' + esc(res.pc) + '</strong> is not a district we list. We work across Greater London, so ' +
        '<a href="/areas-we-cover">check the areas we cover</a>, or call and we will tell you straight away.</p>';
    } else if (!total) {
      html = '<p class="search-empty">Nothing matched &ldquo;' + esc(q) + '&rdquo;. Try a service such as boiler repair, or a place such as Fulham or SW6.</p>';
    }
    results.innerHTML = html;
    // Enter follows the strongest match, whichever section it sits in.
    if (res.out.length) results.setAttribute('data-best', res.out[0].e.url); else results.removeAttribute('data-best');
    say(total ? total + (total === 1 ? ' result' : ' results') + ' for ' + q : 'No results for ' + q);
  }

  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) {
      loading = fetch('/search-index.json')
        .then(function (r) { return r.json(); })
        .then(function (d) { index = d; return d; })
        .catch(function () { index = []; return index; });
    }
    return loading;
  }
  function run() {
    var q = input.value.trim();
    load().then(function () { render(search(q), q); });
  }

  function triggers() { return document.querySelectorAll('[data-search-open]'); }
  function open(trigger) {
    lastTrigger = trigger || document.activeElement;
    // Opened from the drawer: put the drawer away first.
    var navToggle = document.querySelector('.nav-toggle');
    if (document.body.classList.contains('nav-open') && navToggle) navToggle.click();
    if (enquiryLink) enquiryLink.setAttribute('href', document.getElementById('enquiry') ? '#enquiry' : '/contact#enquiry');
    overlay.hidden = false;
    document.body.classList.add('search-open');
    triggers().forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    input.value = '';
    results.innerHTML = '<p class="search-empty">Loading&hellip;</p>';
    load().then(function () { if (!overlay.hidden) render({ empty: true }); });
    input.focus();
  }
  function close() {
    overlay.hidden = true;
    document.body.classList.remove('search-open');
    triggers().forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 60); });
  overlay.querySelector('.search-form').addEventListener('submit', function (e) {
    // Enter follows the first result; with none, the site map is the fallback.
    var first = results.querySelector('.search-hit');
    var best = results.getAttribute('data-best') || (first && first.getAttribute('href'));
    if (best) { e.preventDefault(); location.href = best; }
  });
  overlay.querySelectorAll('[data-search-close]').forEach(function (el) { el.addEventListener('click', close); });
  overlay.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (a && (a.getAttribute('href') || '').charAt(0) === '#') close();
  });

  overlay.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    var hits = Array.prototype.slice.call(results.querySelectorAll('.search-hit'));
    var i = hits.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && hits.length) {
      e.preventDefault();
      (hits[i + 1] || hits[0]).focus();
    } else if (e.key === 'ArrowUp' && hits.length) {
      e.preventDefault();
      if (i <= 0) input.focus(); else hits[i - 1].focus();
    } else if (e.key === 'Tab') {
      // Keep focus inside the dialog.
      var f = Array.prototype.slice.call(overlay.querySelectorAll('input, button, a[href]')).filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    } else if (i >= 0 && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      // Typing while a result is focused goes back into the box.
      input.focus();
    }
  });

  window.TamesisSearch = { open: open, close: close };
})();
