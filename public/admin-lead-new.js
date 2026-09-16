// "Log an enquiry": posts the form to /api/admin/leads and, on success, goes
// straight to the new lead's own page. The office has just been on the phone,
// so the next thing they want is the record they created, not this form again.
(function () {
  var form = document.getElementById('lead-new-form');
  if (!form) return;

  var errorBox = document.getElementById('lead-new-error');
  var FIELDS = ['phone', 'name', 'email', 'postcode', 'address_line', 'service', 'urgency', 'description', 'lead_source'];

  // Field-level errors are keyed by the server's own field names, so a
  // rejected postcode says so under the postcode box rather than in a banner
  // at the top that scrolls out of sight on a phone.
  var ERROR_BOXES = {
    phone: 'lead-phone-error',
    name: 'lead-name-error',
    email: 'lead-email-error',
    postcode: 'lead-postcode-error',
    lead_source: 'lead-source-error',
  };

  function clearErrors() {
    if (errorBox) errorBox.hidden = true;
    Object.keys(ERROR_BOXES).forEach(function (field) {
      var box = document.getElementById(ERROR_BOXES[field]);
      if (box) { box.hidden = true; box.textContent = ''; }
      var input = form.querySelector('[name="' + field + '"]');
      if (input) input.removeAttribute('aria-invalid');
    });
  }

  function showErrors(errors) {
    var firstInput = null;
    Object.keys(errors).forEach(function (field) {
      var box = document.getElementById(ERROR_BOXES[field]);
      var input = form.querySelector('[name="' + field + '"]');
      if (box) { box.textContent = errors[field]; box.hidden = false; }
      if (input) {
        input.setAttribute('aria-invalid', 'true');
        if (!firstInput) firstInput = input;
      }
    });
    if (firstInput) firstInput.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    var submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;

    var body = { channel: (form.querySelector('input[name="channel"]:checked') || {}).value || '' };
    FIELDS.forEach(function (field) {
      var input = form.querySelector('[name="' + field + '"]');
      if (input) body[field] = input.value.trim();
    });

    fetch('/api/admin/leads', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (b) { return { ok: res.ok, body: b }; });
      })
      .then(function (r) {
        if (r.ok && r.body.ok && r.body.id) {
          window.location.href = '/admin/leads/' + encodeURIComponent(r.body.id);
          return;
        }
        submit.disabled = false;
        if (r.body && r.body.errors) showErrors(r.body.errors);
        if (errorBox) {
          errorBox.textContent = (r.body && r.body.message) || 'Could not save that — please try again.';
          errorBox.hidden = false;
        }
      })
      .catch(function () {
        submit.disabled = false;
        if (errorBox) {
          errorBox.textContent = 'Could not reach the server — you may be offline. Nothing has been saved.';
          errorBox.hidden = false;
        }
      });
  });
})();
