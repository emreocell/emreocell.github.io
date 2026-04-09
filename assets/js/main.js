/* ============================================================
   Main JS — Theme toggle, mobile menu, header scroll, loader
   ============================================================ */

(function () {
  'use strict';

  // ---- Loader ----
  window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    if (loader) {
      setTimeout(function () {
        loader.classList.add('hidden');
        // Remove from DOM after transition
        setTimeout(function () {
          loader.remove();
        }, 700);
      }, 600);
    }
  });

  // ---- Theme Toggle ----
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    var iconDark = themeToggle.querySelector('.theme-icon-dark');
    var iconLight = themeToggle.querySelector('.theme-icon-light');

    function setThemeIcons() {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      if (iconDark && iconLight) {
        iconDark.style.display = current === 'dark' ? 'block' : 'none';
        iconLight.style.display = current === 'light' ? 'block' : 'none';
      }
    }

    setThemeIcons();

    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setThemeIcons();
    });
  }

  // ---- Header Scroll State ----
  var header = document.getElementById('site-header');
  var lastScroll = 0;

  function onHeaderScroll() {
    var scrollY = window.scrollY;
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', onHeaderScroll, { passive: true });
  onHeaderScroll(); // Initial check

  // ---- Mobile Menu ----
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on link click
    var mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ---- Smooth Scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;

      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var targetPosition = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Active Nav Link Highlighting ----
  var sections = document.querySelectorAll('.section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    var scrollPos = window.scrollY + 200;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  // ---- Project Filter ----
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      // Update active state
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // Filter cards
      projectCards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(function () {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(function () {
            card.style.display = 'none';
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
          }, 400);
        }
      });
      // Refresh early for immediate shifts
      setTimeout(function() {
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }, 50);
    });
  });

  // Force trigger active filter shortly after load to ensure projects display correctly with GSAP
  window.addEventListener('load', function () {
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    if (activeFilterBtn) {
      activeFilterBtn.click();
    }
    setTimeout(function() {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      highlightNav();
    }, 500);
  });

  // Bulletproof GSAP refresh on any layout shift (images loading, window resizing, content expanding)
  if (typeof window.ResizeObserver !== 'undefined') {
    var debounceTimer;
    var resizeObserver = new ResizeObserver(function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }, 150);
    });
    resizeObserver.observe(document.body);
  }

})();
