// Tamesis Plumbers — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  var dropdownToggles = Array.prototype.slice.call(document.querySelectorAll('.dropdown-toggle'));
  var desktop = window.matchMedia('(min-width: 1101px)');

  function closeDropdowns(except) {
    dropdownToggles.forEach(function (t) {
      if (t !== except) t.setAttribute('aria-expanded', 'false');
    });
  }

  function closeMenu() {
    body.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    }
    closeDropdowns();
  }

  // --- Mobile menu ---
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = !body.classList.contains('nav-open');
      // The drawer starts where the header ends. That edge moves (the top
      // strip sits above the header until the page scrolls), so measure it.
      var header = document.querySelector('.site-header');
      if (open && header && nav) {
        nav.style.setProperty('--drawer-top', Math.round(header.getBoundingClientRect().bottom) + 'px');
      }
      body.classList.toggle('nav-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (!open) closeDropdowns();
    });
  }

  // --- Services mega menu ---
  // Click and keyboard driven so it works on touch and for keyboard users.
  // On wide screens it also opens on hover, with a short close delay so the
  // pointer can cross from the trigger into the panel without it vanishing.
  dropdownToggles.forEach(function (toggle) {
    var menu = document.getElementById(toggle.getAttribute('aria-controls'));
    var item = toggle.parentNode;
    var closeTimer = null;

    // A panel hangs from its trigger's left edge. If that would run it off
    // the right of the viewport, hang it from the right edge instead.
    function place() {
      if (!menu || !desktop.matches) return;
      menu.classList.remove('flip');
      if (menu.getBoundingClientRect().right > window.innerWidth - 12) menu.classList.add('flip');
    }

    // A mouse click lands after mouseenter has already opened the panel, so
    // a plain toggle would close what hover just opened. If hover opened it,
    // a click keeps it open; keyboard and touch users, who never hover, toggle.
    var hoverOpened = false;

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      if (hoverOpened && toggle.getAttribute('aria-expanded') === 'true') return;
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      closeDropdowns(toggle);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) place();
    });

    if (item) {
      item.addEventListener('mouseenter', function () {
        if (!desktop.matches) return;
        clearTimeout(closeTimer);
        closeDropdowns(toggle);
        hoverOpened = true;
        toggle.setAttribute('aria-expanded', 'true');
        place();
      });
      item.addEventListener('mouseleave', function () {
        if (!desktop.matches) return;
        closeTimer = setTimeout(function () {
          hoverOpened = false;
          toggle.setAttribute('aria-expanded', 'false');
        }, 180);
      });
    }

    // Down arrow opens the menu and moves into it.
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        toggle.setAttribute('aria-expanded', 'true');
        place();
        var first = menu && menu.querySelector('a');
        if (first) first.focus();
      }
    });

    if (!menu) return;

    // Arrow keys move through the menu; Escape closes and returns focus.
    menu.addEventListener('keydown', function (e) {
      var links = Array.prototype.slice.call(menu.querySelectorAll('a'));
      var i = links.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        (links[i + 1] || links[0]).focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (i <= 0) { toggle.focus(); } else { links[i - 1].focus(); }
      } else if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Tabbing out of the panel closes it.
    menu.addEventListener('focusout', function (e) {
      if (!menu.contains(e.relatedTarget) && e.relatedTarget !== toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Escape anywhere closes the menu; clicking outside closes it too.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeDropdowns();
    if (body.classList.contains('nav-open')) {
      closeMenu();
      if (navToggle) navToggle.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target) && (!navToggle || !navToggle.contains(e.target))) {
      closeDropdowns();
      if (body.classList.contains('nav-open')) closeMenu();
    }
  });

  // Tapping a nav link closes the mobile drawer.
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Leaving the mobile breakpoint with the drawer open would strand it.
  desktop.addEventListener('change', function (e) { if (e.matches) closeMenu(); });

  // --- Site search ---
  // The search UI and its index load on first use, so a page that is never
  // searched never pays for them.
  var searchTriggers = Array.prototype.slice.call(document.querySelectorAll('[data-search-open]'));
  var searchLoading = null;
  function openSearch(trigger) {
    if (window.TamesisSearch) { window.TamesisSearch.open(trigger); return; }
    if (!searchLoading) {
      searchLoading = new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = '/search.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    searchLoading.then(
      function () { if (window.TamesisSearch) window.TamesisSearch.open(trigger); },
      function () { location.href = '/site-map'; }
    );
  }
  searchTriggers.forEach(function (b) { b.addEventListener('click', function () { openSearch(b); }); });
  // "/" opens the search from anywhere on the page, as on most sites with one.
  document.addEventListener('keydown', function (e) {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey || !searchTriggers.length) return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
    e.preventDefault();
    openSearch(searchTriggers[0]);
  });

  // Set current year in footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
