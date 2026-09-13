// MCP token management on /admin/settings: create (reveals the raw token
// exactly once) and revoke. Separate from admin-settings.js since it's a
// distinct concern with its own reveal-once behaviour.
//
// Deliberately never reloads the page after creating a token: the reveal box
// says "copy this now, it will not be shown again", and a timed auto-reload
// would make that a lie for anyone slower than the timer. The new row is
// built and inserted by hand instead.
(function () {
  function jsonFetch(url, opts) {
    return fetch(url, opts).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) { return { ok: res.ok, body: body }; });
    });
  }

  function fmtDate(iso) {
    return new Date(iso).toLocaleString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London',
    });
  }

  function attachRevokeHandler(btn) {
    btn.addEventListener('click', function () {
      if (!window.confirm('Revoke this token? Anything using it will stop working immediately.')) return;
      btn.disabled = true;
      jsonFetch('/api/admin/mcp-tokens', {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id: btn.getAttribute('data-token-id') }),
      }).then(function (r) {
        if (r.ok && r.body.ok) {
          var cell = btn.closest('td');
          var row = btn.closest('tr');
          cell.innerHTML = '';
          var status = row.querySelector('.admin-urgency');
          if (status) { status.textContent = 'Revoked'; status.classList.remove('is-live'); status.classList.add('is-draft'); }
        } else {
          btn.disabled = false;
          window.alert((r.body && r.body.message) || 'Could not revoke — please try again.');
        }
      }).catch(function () { btn.disabled = false; window.alert('Could not reach the server — you may be offline.'); });
    });
  }

  /** Adds one row for a freshly created token, building the whole table
   * first if this was the site's first one (replacing the "No tokens yet"
   * empty state). Mirrors the server-rendered markup in settings.astro. */
  function addTokenRow(row) {
    var section = document.getElementById('mcp-create-form').closest('section');
    var scroll = section.querySelector('.admin-table-scroll');
    var tbody;

    if (scroll) {
      tbody = scroll.querySelector('tbody');
    } else {
      var empty = section.querySelector('.admin-empty');
      scroll = document.createElement('div');
      scroll.className = 'admin-table-scroll';
      scroll.tabIndex = 0;
      scroll.innerHTML =
        '<table class="admin-table"><thead><tr>' +
        '<th>Name</th><th>Created</th><th>Last used</th><th>Status</th><th></th>' +
        '</tr></thead><tbody></tbody></table>';
      empty.replaceWith(scroll);
      tbody = scroll.querySelector('tbody');
    }

    var tr = document.createElement('tr');
    var nameTd = document.createElement('td');
    nameTd.textContent = row.name;
    var createdTd = document.createElement('td');
    createdTd.className = 'admin-nowrap';
    createdTd.textContent = fmtDate(row.created_at);
    var lastUsedTd = document.createElement('td');
    lastUsedTd.className = 'admin-dim';
    lastUsedTd.textContent = 'Never';
    var statusTd = document.createElement('td');
    var statusSpan = document.createElement('span');
    statusSpan.className = 'admin-urgency is-live';
    statusSpan.textContent = 'Active';
    statusTd.appendChild(statusSpan);
    var actionTd = document.createElement('td');
    var revokeBtn = document.createElement('button');
    revokeBtn.type = 'button';
    revokeBtn.className = 'btn btn-ghost mcp-revoke-btn';
    revokeBtn.setAttribute('data-token-id', row.id);
    revokeBtn.textContent = 'Revoke';
    attachRevokeHandler(revokeBtn);
    actionTd.appendChild(revokeBtn);

    tr.append(nameTd, createdTd, lastUsedTd, statusTd, actionTd);
    tbody.insertBefore(tr, tbody.firstChild);
  }

  var createForm = document.getElementById('mcp-create-form');
  if (!createForm) return;

  var errorBox = document.getElementById('mcp-error');
  var reveal = document.getElementById('mcp-reveal');
  var revealValue = document.getElementById('mcp-reveal-value');
  var copyBtn = document.getElementById('mcp-copy-btn');

  createForm.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.hidden = true;
    var submit = createForm.querySelector('button[type="submit"]');
    submit.disabled = true;

    jsonFetch('/api/admin/mcp-tokens', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: createForm.name.value }),
    }).then(function (r) {
      submit.disabled = false;
      if (r.ok && r.body.ok) {
        revealValue.value = r.body.token;
        reveal.hidden = false;
        reveal.scrollIntoView({ behavior: 'smooth', block: 'center' });
        addTokenRow(r.body.row);
        createForm.reset();
      } else {
        errorBox.textContent = (r.body && r.body.message) || 'Something went wrong. Please try again.';
        errorBox.hidden = false;
      }
    }).catch(function () {
      submit.disabled = false;
      errorBox.textContent = 'Could not reach the server — you may be offline.';
      errorBox.hidden = false;
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      revealValue.select();
      navigator.clipboard?.writeText(revealValue.value).then(function () {
        var original = copyBtn.textContent;
        copyBtn.textContent = 'Copied';
        setTimeout(function () { copyBtn.textContent = original; }, 1500);
      }).catch(function () { /* select()-then-Ctrl+C still works without the API */ });
    });
  }

  document.querySelectorAll('.mcp-revoke-btn').forEach(attachRevokeHandler);
})();
