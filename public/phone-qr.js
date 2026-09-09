// Ninja Plumbers — "scan instead of dialling" popup.
//
// A phone number is only worth a QR code on a device that cannot just place
// the call itself. On phones this script gets out of the way entirely and
// tel: links behave exactly as normal (tap to call). At tablet width and
// above, clicking a tel: link opens the popup instead, showing the Call
// code for whichever number was actually clicked, plus the fixed SMS and
// WhatsApp codes for the one real mobile number in the project.
(function () {
  var overlay = document.getElementById('phone-qr-popup');
  if (!overlay) return;

  var desktop = window.matchMedia('(min-width: 721px)');
  var managementTel = overlay.getAttribute('data-management-tel');
  var lastTrigger = null;

  function isOpen() { return !overlay.hidden; }

  function showCallVariant(tel) {
    var isManagement = !!tel && tel === managementTel;
    var booking = overlay.querySelector('[data-qr-call="booking"]');
    var management = overlay.querySelector('[data-qr-call="management"]');
    if (booking) booking.hidden = isManagement;
    if (management) management.hidden = !isManagement;
  }

  function open(tel, trigger) {
    if (isOpen()) return;
    lastTrigger = trigger || document.activeElement;
    showCallVariant(tel);
    overlay.hidden = false;
    document.body.classList.add('qr-open');
    var close = overlay.querySelector('.qr-close');
    if (close) close.focus();
  }

  function close() {
    if (!isOpen()) return;
    overlay.hidden = true;
    document.body.classList.remove('qr-open');
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  document.addEventListener('click', function (e) {
    var tel = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (tel) {
      if (!desktop.matches) return;
      e.preventDefault();
      open(tel.getAttribute('href').slice(4), tel);
      return;
    }
    if (e.target.closest && e.target.closest('[data-qr-close]')) close();
  });

  overlay.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    var f = Array.prototype.slice.call(overlay.querySelectorAll('button, a[href]'))
      .filter(function (el) { return el.offsetParent !== null && !el.disabled && el.tabIndex !== -1; });
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  });

  // Crossing from tablet down to phone with the popup open would strand it.
  desktop.addEventListener('change', function (e) { if (!e.matches) close(); });

  window.NinjaPhoneQr = { open: open, close: close };
})();
