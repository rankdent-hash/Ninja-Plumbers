// Reviews queue: approve toggle, delete, and the add form — all saved
// immediately via the API, no separate save button.
(function () {
  document.querySelectorAll('[data-review-approve]').forEach(function (box) {
    box.addEventListener('change', function () {
      var id = box.getAttribute('data-review-approve');
      var label = box.nextElementSibling;
      box.disabled = true;
      fetch('/api/admin/reviews/' + encodeURIComponent(id), {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ approved: box.checked }),
      })
        .then(function (res) { return res.json().catch(function () { return {}; }).then(function (body) { return { ok: res.ok, body: body }; }); })
        .then(function (r) {
          box.disabled = false;
          if (r.ok && r.body.ok) {
            if (label) label.textContent = box.checked ? 'Live' : 'Hidden';
          } else {
            box.checked = !box.checked;
            window.alert('Could not save that — please try again.');
          }
        })
        .catch(function () {
          box.disabled = false;
          box.checked = !box.checked;
          window.alert('Could not save that — you may be offline.');
        });
    });
  });

  document.querySelectorAll('[data-review-delete]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-review-delete');
      if (!window.confirm('Delete this review? This cannot be undone.')) return;
      btn.disabled = true;
      fetch('/api/admin/reviews/' + encodeURIComponent(id), { method: 'DELETE' })
        .then(function (res) { return res.json().catch(function () { return {}; }).then(function (body) { return { ok: res.ok, body: body }; }); })
        .then(function (r) {
          if (r.ok && r.body.ok) {
            var row = document.querySelector('[data-review-row="' + id + '"]');
            if (row) row.remove();
          } else {
            btn.disabled = false;
            window.alert('Could not delete that — please try again.');
          }
        })
        .catch(function () {
          btn.disabled = false;
          window.alert('Could not delete that — you may be offline.');
        });
    });
  });

  var form = document.getElementById('review-add-form');
  if (form) {
    var errorBox = document.getElementById('review-add-error');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      errorBox.hidden = true;
      var submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;

      fetch('/api/admin/reviews', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: form.name.value,
          rating: Number(form.rating.value),
          text: form.text.value,
        }),
      })
        .then(function (res) { return res.json().catch(function () { return {}; }).then(function (body) { return { ok: res.ok, body: body }; }); })
        .then(function (r) {
          submit.disabled = false;
          if (r.ok && r.body.ok) {
            location.reload();
          } else {
            errorBox.textContent = (r.body && r.body.message) || 'Something went wrong. Please try again.';
            errorBox.hidden = false;
          }
        })
        .catch(function () {
          submit.disabled = false;
          errorBox.textContent = 'Could not reach the server — you may be offline.';
          errorBox.hidden = false;
        });
    });
  }
})();
