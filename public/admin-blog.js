// Blog admin: the generate form (new.astro) and the edit/publish screen
// ([id].astro). Both live in one file since a page only ever has one of them.
(function () {
  function jsonFetch(url, opts) {
    return fetch(url, opts).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) { return { ok: res.ok, body: body }; });
    });
  }

  // ---- New post: generate a draft ----
  var generateForm = document.getElementById('blog-generate-form');
  if (generateForm) {
    var genError = document.getElementById('generate-error');
    generateForm.addEventListener('submit', function (e) {
      e.preventDefault();
      genError.hidden = true;
      var submit = document.getElementById('generate-submit');
      submit.disabled = true;
      submit.textContent = 'Generating…';

      jsonFetch('/api/admin/blog/generate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          topic: generateForm.topic.value,
          provider: generateForm.provider.value,
          tone: generateForm.tone.value,
        }),
      }).then(function (r) {
        if (r.ok && r.body.ok) {
          location.href = '/admin/blog/' + r.body.id;
        } else {
          submit.disabled = false;
          submit.textContent = 'Generate draft';
          genError.textContent = (r.body && r.body.message) || 'Something went wrong. Please try again.';
          genError.hidden = false;
        }
      }).catch(function () {
        submit.disabled = false;
        submit.textContent = 'Generate draft';
        genError.textContent = 'Could not reach the server — you may be offline.';
        genError.hidden = false;
      });
    });
  }

  // ---- Edit screen: save fields ----
  var editForm = document.getElementById('blog-edit-form');
  if (editForm) {
    var postId = editForm.getAttribute('data-post-id');
    var editError = document.getElementById('edit-error');
    var editSaved = document.getElementById('edit-saved');
    var splitList = function (v) { return v.split(',').map(function (s) { return s.trim(); }).filter(Boolean); };

    editForm.addEventListener('submit', function (e) {
      e.preventDefault();
      editError.hidden = true;
      editSaved.hidden = true;
      var submit = editForm.querySelector('button[type="submit"]');
      submit.disabled = true;

      jsonFetch('/api/admin/blog/' + encodeURIComponent(postId), {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          title: editForm.title.value,
          h1: editForm.h1.value,
          slug: editForm.slug.value,
          meta_title: editForm.meta_title.value,
          meta_description: editForm.meta_description.value,
          excerpt: editForm.excerpt.value,
          body: editForm.body.value,
          related_services: splitList(editForm.related_services.value),
          related_appliances: splitList(editForm.related_appliances.value),
          related_damp: splitList(editForm.related_damp.value),
        }),
      }).then(function (r) {
        submit.disabled = false;
        if (r.ok && r.body.ok) {
          editSaved.hidden = false;
        } else {
          editError.textContent = (r.body && r.body.message) || 'Something went wrong. Please try again.';
          editError.hidden = false;
        }
      }).catch(function () {
        submit.disabled = false;
        editError.textContent = 'Could not reach the server — you may be offline.';
        editError.hidden = false;
      });
    });
  }

  // ---- Edit screen: generate hero image ----
  var imageBtn = document.getElementById('generate-image-btn');
  if (imageBtn) {
    var imageError = document.getElementById('image-error');
    imageBtn.addEventListener('click', function () {
      imageError.hidden = true;
      imageBtn.disabled = true;
      var original = imageBtn.textContent;
      imageBtn.textContent = 'Generating…';

      jsonFetch('/api/admin/blog/generate-image', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          id: imageBtn.getAttribute('data-post-id'),
          prompt: document.getElementById('image-prompt').value,
        }),
      }).then(function (r) {
        imageBtn.disabled = false;
        if (r.ok && r.body.ok) {
          imageBtn.textContent = 'Regenerate image';
          var img = document.getElementById('hero-preview-img');
          var empty = document.getElementById('hero-preview-empty');
          img.src = r.body.url + '?t=' + Date.now();
          img.hidden = false;
          if (empty) empty.hidden = true;
        } else {
          imageBtn.textContent = original;
          imageError.textContent = (r.body && r.body.message) || 'Something went wrong. Please try again.';
          imageError.hidden = false;
        }
      }).catch(function () {
        imageBtn.disabled = false;
        imageBtn.textContent = original;
        imageError.textContent = 'Could not reach the server — you may be offline.';
        imageError.hidden = false;
      });
    });
  }

  // ---- Edit screen: publish / unpublish / delete ----
  var publishBtn = document.getElementById('publish-btn');
  if (publishBtn) {
    publishBtn.addEventListener('click', function () {
      publishBtn.disabled = true;
      jsonFetch('/api/admin/blog/' + encodeURIComponent(publishBtn.getAttribute('data-post-id')), {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: 'published' }),
      }).then(function (r) {
        if (r.ok && r.body.ok) location.reload();
        else { publishBtn.disabled = false; window.alert((r.body && r.body.message) || 'Could not publish — please try again.'); }
      }).catch(function () { publishBtn.disabled = false; window.alert('Could not reach the server — you may be offline.'); });
    });
  }

  var unpublishBtn = document.getElementById('unpublish-btn');
  if (unpublishBtn) {
    unpublishBtn.addEventListener('click', function () {
      if (!window.confirm('Take this post off the live site?')) return;
      unpublishBtn.disabled = true;
      jsonFetch('/api/admin/blog/' + encodeURIComponent(unpublishBtn.getAttribute('data-post-id')), {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ status: 'draft' }),
      }).then(function (r) {
        if (r.ok && r.body.ok) location.reload();
        else { unpublishBtn.disabled = false; window.alert((r.body && r.body.message) || 'Could not unpublish — please try again.'); }
      }).catch(function () { unpublishBtn.disabled = false; window.alert('Could not reach the server — you may be offline.'); });
    });
  }

  var deleteBtn = document.getElementById('delete-btn');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', function () {
      if (!window.confirm('Delete this post? This cannot be undone.')) return;
      deleteBtn.disabled = true;
      jsonFetch('/api/admin/blog/' + encodeURIComponent(deleteBtn.getAttribute('data-post-id')), { method: 'DELETE' })
        .then(function (r) {
          if (r.ok && r.body.ok) location.href = '/admin/blog';
          else { deleteBtn.disabled = false; window.alert((r.body && r.body.message) || 'Could not delete — please try again.'); }
        }).catch(function () { deleteBtn.disabled = false; window.alert('Could not reach the server — you may be offline.'); });
    });
  }
})();
