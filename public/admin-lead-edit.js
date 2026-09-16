// Editing a lead in place. Reloads on success rather than patching the page
// by hand: changing the postcode moves the borough, the district and the
// in-area banner with it, and a page that showed the new postcode beside the
// old borough would be quietly wrong in exactly the way this whole feature
// exists to avoid.
(function () {
  var form = document.getElementById('lead-edit-form');
  if (!form) return;

  var id = form.getAttribute('data-lead-id');
  var isManual = form.getAttribute('data-manual') === 'true';
  var errorBox = document.getElementById('lead-edit-error');
  var savedBox = document.getElementById('lead-edit-saved');

  // Only fields the server will accept for this lead. Sending a name on a
  // website submission gets the whole request rejected, so the form never
  // offers one and this list never asks for one.
  var FIELDS = ['postcode', 'lead_source'];
  if (isManual) FIELDS = FIELDS.concat(['channel', 'name', 'phone', 'email', 'address_line', 'description']);

  var ERROR_BOXES = {
    postcode: 'edit-postcode-error',
    lead_source: 'edit-lead-source-error',
    channel: 'edit-channel-error',
    phone: 'edit-phone-error',
    email: 'edit-email-error',
  };

  function clearErrors() {
    if (errorBox) errorBox.hidden = true;
    if (savedBox) savedBox.hidden = true;
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

    var body = {};
    FIELDS.forEach(function (field) {
      var input = form.querySelector('[name="' + field + '"]');
      if (input) body[field] = input.value.trim();
    });

    fetch('/api/admin/leads/' + encodeURIComponent(id) + '/details', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (b) { return { ok: res.ok, body: b }; });
      })
      .then(function (r) {
        if (r.ok && r.body.ok) {
          window.location.reload();
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
