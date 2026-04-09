/* ============================================================
   Animations — GSAP ScrollTrigger
   ============================================================ */

(function () {
  'use strict';

  // Skip if reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Wait for GSAP to be available
  function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(initAnimations, 100);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Cancel CSS fallback animations — GSAP is in control now
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .hero-label, .hero h1, .hero-subtitle, .hero-cta-group').forEach(function(el) {
      el.style.animation = 'none';
    });

    // Also cancel on blog/project cards
    document.querySelectorAll('.blog-card, .project-card, .skill-category').forEach(function(el) {
      el.style.animation = 'none';
    });

    ScrollTrigger.defaults({
      invalidateOnRefresh: true
    });

    // ---- Hero Section Entrance ----
    var heroTl = gsap.timeline({ delay: 0.8 });

    heroTl
      .to('.hero-label', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
      })
      .to('.hero h1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
      }, '-=0.4')
      .to('.hero-cta-group', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3');

    // ---- Generic Reveal Animations ----
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(function (el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 60%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    var revealsLeft = document.querySelectorAll('.reveal-left');
    revealsLeft.forEach(function (el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    var revealsRight = document.querySelectorAll('.reveal-right');
    revealsRight.forEach(function (el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    var revealsScale = document.querySelectorAll('.reveal-scale');
    revealsScale.forEach(function (el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    // ---- Staggered Card Animations ----
    var cardGroups = ['.projects-grid', '.skills-categories', '.blog-grid'];
    cardGroups.forEach(function (selector) {
      var container = document.querySelector(selector);
      if (!container) return;

      var cards = container.children;
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out'
        }
      );
    });

    // ---- Skill Bars Animation ----
    var skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(function (bar) {
      var level = bar.getAttribute('data-level') || '0';
      gsap.to(bar, {
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        width: level + '%',
        duration: 1.5,
        ease: 'power2.out'
      });
    });

    // ---- Stat Numbers Count Up ----
    var statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count') || el.textContent, 10);
      if (isNaN(target)) return;

      var obj = { val: 0 };
      gsap.to(obj, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          el.textContent = Math.round(obj.val) + '+';
        }
      });
    });

    // ---- Section Labels Slide In ----
    var sectionLabels = document.querySelectorAll('.section-label');
    sectionLabels.forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, x: -30 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out'
        }
      );
    });

    // ---- Section Dividers ----
    var dividers = document.querySelectorAll('.section-divider');
    dividers.forEach(function (el) {
      gsap.fromTo(el,
        { width: 0 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          width: '100%',
          duration: 0.8,
          ease: 'power2.out'
        }
      );
    });

    // ---- Parallax effect on section backgrounds ----
    var parallaxSections = document.querySelectorAll('.section');
    parallaxSections.forEach(function (section) {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        backgroundPositionY: '30%',
        ease: 'none'
      });
    });
  }

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();
