// Landing-page admin edit screen: save fields, publish/unpublish, delete.
// Mirrors admin-blog.js's conventions (data-page-id, jsonFetch, button ids)
// with one addition — several fields are edited as raw JSON in a textarea,
// so every save first tries to JSON.parse each one and reports exactly
// which field failed, before anything is sent to the server.
(function () {
  function jsonFetch(url, opts) {
    return fetch(url, opts).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) { return { ok: res.ok, body: body }; });
    });
  }

  var JSON_FIELDS = [
    'covers', 'proof', 'form', 'fixes', 'diagnosis', 'steps', 'close',
    'bullets', 'reassure', 'faqs', 'cross_link', 'rating', 'trust_extra', 'offer',
  ];
  var TEXT_FIELDS = [
    'h1', 'sub', 'meta_title', 'meta_description', 'eyebrow',
    'campaign', 'head_term', 'form_label', 'related_service', 'card_icon',
  ];

  var form = document.getElementById('lp-form');
  if (form) {
    var pageId = form.getAttribute('data-page-id');
    var errorBox = document.getElementById('lp-error');
    var savedBox = document.getElementById('lp-saved');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      errorBox.hidden = true;
      savedBox.hidden = true;

      var update = {};
      TEXT_FIELDS.forEach(function (name) {
        var el = document.getElementById(name);
        if (el) update[name] = el.value;
      });
      update.urgent = document.getElementById('urgent').checked;

      var badField = null;
      for (var i = 0; i < JSON_FIELDS.length; i++) {
        var name = JSON_FIELDS[i];
        var el = document.getElementById(name);
        if (!el) continue;
        var raw = el.value.trim();
        try {
          update[name] = raw ? JSON.parse(raw) : null;
        } catch (err) {
          badField = name;
          break;
        }
      }
      if (badField) {
        errorBox.textContent = '"' + badField + '" is not valid JSON — check for a missing comma or bracket.';
        errorBox.hidden = false;
        return;
      }

      var submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;

      jsonFetch('/api/admin/landing-pages/' + encodeURIComponent(pageId), {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(update),
      }).then(function (r) {
        submit.disabled = false;
        if (r.ok && r.body.ok) {
          savedBox.hidden = false;
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
  }

  var publishBtn = document.getElementById('lp-publish-btn');
  if (publishBtn) {
    publishBtn.addEventListener('click', function () {
      publishBtn.disabled = true;
      jsonFetch('/api/admin/landing-pages/' + encodeURIComponent(publishBtn.getAttribute('data-page-id')), {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: 'published' }),
      }).then(function (r) {
        if (r.ok && r.body.ok) location.reload();
        else { publishBtn.disabled = false; window.alert((r.body && r.body.message) || 'Could not publish — please try again.'); }
      }).catch(function () { publishBtn.disabled = false; window.alert('Could not reach the server — you may be offline.'); });
    });
  }

  var unpublishBtn = document.getElementById('lp-unpublish-btn');
  if (unpublishBtn) {
    unpublishBtn.addEventListener('click', function () {
      if (!window.confirm('Take this page off the live site? It stays built until the next deploy removes it.')) return;
      unpublishBtn.disabled = true;
      jsonFetch('/api/admin/landing-pages/' + encodeURIComponent(unpublishBtn.getAttribute('data-page-id')), {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: 'draft' }),
      }).then(function (r) {
        if (r.ok && r.body.ok) location.reload();
        else { unpublishBtn.disabled = false; window.alert((r.body && r.body.message) || 'Could not unpublish — please try again.'); }
      }).catch(function () { unpublishBtn.disabled = false; window.alert('Could not reach the server — you may be offline.'); });
    });
  }

  var deleteBtn = document.getElementById('lp-delete-btn');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', function () {
      if (!window.confirm('Delete this landing page? This cannot be undone.')) return;
      deleteBtn.disabled = true;
      jsonFetch('/api/admin/landing-pages/' + encodeURIComponent(deleteBtn.getAttribute('data-page-id')), { method: 'DELETE' })
        .then(function (r) {
          if (r.ok && r.body.ok) location.href = '/admin/landing-pages';
          else { deleteBtn.disabled = false; window.alert((r.body && r.body.message) || 'Could not delete — please try again.'); }
        }).catch(function () { deleteBtn.disabled = false; window.alert('Could not reach the server — you may be offline.'); });
    });
  }
})();
