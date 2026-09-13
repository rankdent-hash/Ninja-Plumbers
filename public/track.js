/*
 * Contact-intent click tracking for the public site.
 *
 * One delegated listener on the document catches every tel:, wa.me and sms:
 * link anywhere on any page — there are well over sixty of them across the
 * site and the landing pages, and none needed a markup change to be counted.
 * Links added later are picked up for free.
 *
 * Sent with navigator.sendBeacon: clicking a tel: link hands the page straight
 * to the dialler, and a normal fetch() is cancelled when that happens.
 * sendBeacon is queued by the browser and delivered regardless.
 *
 * No cookies and no localStorage. The repeat-click guard below is a plain
 * variable that dies with the page, so nothing is stored on the visitor's
 * device and nothing needs consent to work.
 */
(function () {
  var ENDPOINT = '/api/track';
  var REPEAT_WINDOW_MS = 3000;

  if (!navigator.sendBeacon) return;

  var lastKey = '';
  var lastAt = 0;

  function kindOf(href) {
    if (!href) return null;
    var h = href.toLowerCase();
    if (h.indexOf('tel:') === 0) return 'phone';
    if (h.indexOf('sms:') === 0) return 'sms';
    if (h.indexOf('wa.me') > -1 || h.indexOf('api.whatsapp.com') > -1 || h.indexOf('web.whatsapp.com') > -1) {
      return 'whatsapp';
    }
    return null;
  }

  /* Where on the page the link sits, so "header" and "sticky bar" can be told
     apart in the admin panel without instrumenting each button by hand. */
  function labelFor(a) {
    var explicit = a.getAttribute('data-track-label');
    if (explicit) return explicit.slice(0, 120);

    var zone = '';
    var el = a;
    while (el && el !== document.body) {
      var tag = (el.tagName || '').toLowerCase();
      var cls = el.classList;
      if (cls && cls.contains('mobile-cta')) { zone = 'sticky bar'; break; }
      if (cls && cls.contains('lp-header')) { zone = 'landing header'; break; }
      if (cls && cls.contains('book-popup')) { zone = 'book popup'; break; }
      if (tag === 'header') { zone = 'header'; break; }
      if (tag === 'footer') { zone = 'footer'; break; }
      if (tag === 'form') { zone = 'form'; break; }
      el = el.parentElement;
    }

    var text = (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
    if (zone && text) return zone + ' · ' + text;
    return (zone || text || 'link').slice(0, 120);
  }

  function send(kind, label) {
    var now = Date.now();
    var key = kind + '|' + label;
    /* A double-tap, or a click that bubbles from an icon inside the link, is
       one intent to call — not two. */
    if (key === lastKey && now - lastAt < REPEAT_WINDOW_MS) return;
    lastKey = key;
    lastAt = now;

    var gclid = '';
    try {
      gclid = new URLSearchParams(location.search).get('gclid') || '';
    } catch (e) { /* older browser, not worth failing the beacon over */ }

    var payload = JSON.stringify({
      kind: kind,
      page: location.pathname,
      label: label,
      gclid: gclid,
      referrer: document.referrer || ''
    });

    try {
      navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: 'application/json' }));
    } catch (e) { /* tracking must never break the click itself */ }
  }

  document.addEventListener(
    'click',
    function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a) return;
      var kind = kindOf(a.getAttribute('href'));
      if (!kind) return;
      send(kind, labelFor(a));
    },
    true
  );
})();
