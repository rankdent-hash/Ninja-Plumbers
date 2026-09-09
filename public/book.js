// Ninja Plumbers — "Book now" popup on phones.
//
// Tapping the sticky Book now button moves the page's own enquiry form into
// a full-screen panel, and closing moves it back where it came from. One
// form, one set of ids, one script: validation, the postcode check and the
// thank-you state behave exactly as they do in the page. On a page with no
// form this script does nothing and the button stays a link to /contact.
(function () {
  var overlay = document.getElementById('book-popup');
  var body = document.getElementById('book-body');
  var form = document.getElementById('enquiry');
  if (!overlay || !body || !form) return;

  var phone = window.matchMedia('(max-width: 900px)');
  var home = document.createComment('enquiry form goes back here');
  var lastTrigger = null;

  function isOpen() { return !overlay.hidden; }

  function open(trigger) {
    if (isOpen()) return;
    lastTrigger = trigger || document.activeElement;
    // Anything else covering the page goes away first.
    var navToggle = document.querySelector('.nav-toggle');
    if (document.body.classList.contains('nav-open') && navToggle) navToggle.click();
    if (window.NinjaSearch) window.NinjaSearch.close();

    form.parentNode.insertBefore(home, form);
    body.appendChild(form);
    body.scrollTop = 0;
    overlay.hidden = false;
    document.body.classList.add('book-open');
    // Straight into the first field: this runs inside the tap, so the
    // keyboard is allowed to open.
    var first = form.querySelector('input:not([type="hidden"]):not([tabindex="-1"])');
    (first || overlay.querySelector('.book-close')).focus();
  }

  function close() {
    if (!isOpen()) return;
    overlay.hidden = true;
    document.body.classList.remove('book-open');
    if (home.parentNode) home.parentNode.replaceChild(form, home);
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-book-open]');
    if (!t || !phone.matches) return;
    e.preventDefault();
    open(t);
  });
  overlay.querySelectorAll('[data-book-close]').forEach(function (el) { el.addEventListener('click', close); });

  overlay.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    // Keep focus inside the dialog.
    var f = Array.prototype.slice.call(overlay.querySelectorAll('input, select, textarea, button, a[href], summary'))
      .filter(function (el) { return el.offsetParent !== null && !el.disabled && el.tabIndex !== -1; });
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  });

  // Growing past the phone breakpoint with the popup open would strand the form in it.
  phone.addEventListener('change', function (e) { if (!e.matches) close(); });

  window.NinjaBook = { open: open, close: close };
})();
