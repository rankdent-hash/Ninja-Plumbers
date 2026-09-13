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

  /* Which class on an ancestor means which area of the page. Checked nearest
     ancestor first, so the innermost match wins — a link inside the hero's
     form reports "form", not "hero". */
  var ZONE_CLASSES = [
    ['mobile-cta',    'sticky bar'],
    ['qr-overlay',    'phone QR popup'],
    ['book-overlay',  'book popup'],
    ['search-overlay','search panel'],
    ['lp-header',     'header'],
    ['top-strip',     'top strip'],
    ['lp-form-card',  'form'],
    ['lp-hero',       'hero'],
    ['hero-split',    'hero'],
    ['page-hero',     'hero'],
    ['section-navy',  'closing CTA'],
    ['trust',         'trust bar']
  ];
  /* Deliberately not listed: lp-cta. It is the hero's row of buttons, not a
     closing band, and being the nearer ancestor it would shadow lp-hero and
     report every landing-page hero click as a closing CTA. The real closing
     band carries section-navy. */

  /* Where on the page the link sits, so the header CTA and the footer CTA can
     be compared in the admin panel without instrumenting every button by hand.
     Anything the rules above do not recognise falls back to the heading of the
     nearest <section>, which stays descriptive as new sections are added. */
  function zoneFor(a) {
    var explicit = a.getAttribute('data-track-zone');
    if (explicit) return explicit.slice(0, 60);

    var section = null;
    var el = a;
    while (el && el !== document.body) {
      var tag = (el.tagName || '').toLowerCase();
      var cls = el.classList;

      if (cls) {
        for (var i = 0; i < ZONE_CLASSES.length; i++) {
          if (cls.contains(ZONE_CLASSES[i][0])) return ZONE_CLASSES[i][1];
        }
      }
      if (tag === 'header') return 'header';
      if (tag === 'footer') return 'footer';
      if (tag === 'form') return 'form';
      if (tag === 'section' && !section) section = el;

      el = el.parentElement;
    }

    if (section) {
      var h = section.querySelector('h1, h2');
      var heading = h ? (h.textContent || '').replace(/\s+/g, ' ').trim() : '';
      if (heading) return heading.slice(0, 60);
    }
    return 'other';
  }

  function labelFor(a) {
    var explicit = a.getAttribute('data-track-label');
    if (explicit) return explicit.slice(0, 120);
    var text = (a.textContent || '').replace(/\s+/g, ' ').trim();
    return (text || a.getAttribute('href') || 'link').slice(0, 120);
  }

  function send(kind, zone, label) {
    var now = Date.now();
    var key = kind + '|' + zone + '|' + label;
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
      zone: zone,
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
      send(kind, zoneFor(a), labelFor(a));
    },
    true
  );
})();
