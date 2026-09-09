// Settings form: submits only the fields that were actually typed into, so a
// blank field never overwrites a key that's already saved.
(function () {
  var form = document.getElementById('settings-form');
  if (!form) return;
  var errorBox = document.getElementById('settings-error');
  var savedBox = document.getElementById('settings-saved');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.hidden = true;
    savedBox.hidden = true;
    var submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;

    var body = {};
    ['openai_api_key', 'anthropic_api_key', 'gemini_api_key'].forEach(function (key) {
      var input = form.querySelector('#' + key);
      if (input && input.value.trim()) body[key] = input.value.trim();
    });

    fetch('/api/admin/settings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(function (res) { return res.json().catch(function () { return {}; }).then(function (b) { return { ok: res.ok, body: b }; }); })
      .then(function (r) {
        submit.disabled = false;
        if (r.ok && r.body.ok) {
          form.reset();
          if (r.body.settings) {
            Object.keys(r.body.settings).forEach(function (key) {
              var input = form.querySelector('#' + key);
              var value = r.body.settings[key];
              if (input) input.placeholder = value ? 'Currently set (ends ' + value + ')' : 'Not set';
            });
          }
          savedBox.hidden = false;
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
})();
