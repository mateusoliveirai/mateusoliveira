// ============================================================
// main.js — Cursor · Nav · Scroll Reveal · Interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── PAGE LOADER ──────────────────────────────────────────
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 1400);
  }

  // ── CUSTOM CURSOR ────────────────────────────────────────
  const cursor     = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');

  if (cursor && cursorRing && window.innerWidth > 768) {
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    });

    // ring follows with lag
    function animateRing() {
      rx += (mx - rx) * .12;
      ry += (my - ry) * .12;
      cursorRing.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // hover state
    document.querySelectorAll('a, button, .work-item, .prod-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
    });

    document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; cursorRing.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; cursorRing.style.opacity = '1'; });
  }

  // ── NAV SCROLL ───────────────────────────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── ACTIVE NAV LINK ──────────────────────────────────────
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === '/') || href === './' + currentPath) {
      link.classList.add('active');
    }
  });

  // ── MOBILE NAV ───────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── SCROLL REVEAL ────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }

  // ── COUNTER ANIMATION ────────────────────────────────────
  function animateCounter(el, target, suffix = '') {
    const duration = 1800;
    const start = performance.now();
    const from = 0;
    const isFloat = target % 1 !== 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const val = from + (target - from) * ease;
      el.textContent = (isFloat ? val.toFixed(1) : Math.round(val)).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const val    = parseFloat(el.dataset.counter);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, val, suffix);
          counterObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObs.observe(el));
  }

  // ── VIDEO HOVER PLAY ─────────────────────────────────────
  document.querySelectorAll('.work-item video').forEach(video => {
    const parent = video.closest('.work-item');
    if (!parent) return;
    parent.addEventListener('mouseenter', () => video.play().catch(() => {}));
    parent.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  });

  // ── SMOOTH ANCHOR SCROLL ─────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
