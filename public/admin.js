// Tamesis Plumbers — admin panel. Changing a lead's status saves immediately
// via the API; no separate save button, no page reload.
(function () {
  document.querySelectorAll('.admin-status-form').forEach(function (form) {
    var select = form.querySelector('select[name="status"]');
    var saved = form.querySelector('.admin-status-saved');
    var id = form.getAttribute('data-lead-id');
    var timer = null;

    select.addEventListener('change', function () {
      select.classList.remove('is-new', 'is-contacted', 'is-quoted', 'is-booked', 'is-closed', 'is-spam');
      select.classList.add('is-' + select.value);
      select.disabled = true;
      if (saved) saved.hidden = true;

      fetch('/api/admin/leads/' + encodeURIComponent(id) + '/status', {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: select.value }),
      })
        .then(function (res) { return res.json().catch(function () { return {}; }).then(function (body) { return { ok: res.ok, body: body }; }); })
        .then(function (r) {
          select.disabled = false;
          if (r.ok && r.body.ok && saved) {
            saved.hidden = false;
            clearTimeout(timer);
            timer = setTimeout(function () { saved.hidden = true; }, 2000);
          } else if (!r.ok) {
            window.alert('Could not save that — please try again.');
          }
        })
        .catch(function () {
          select.disabled = false;
          window.alert('Could not save that — you may be offline.');
        });
    });
  });
})();
