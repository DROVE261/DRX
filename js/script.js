// script.js — كامل للحركات الأساسية (Slider, menus, scroll reveal, login)
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1) SLIDER (Prev / Next + Auto) ---------- */
  (function initSlider(){
    const slides = Array.from(document.querySelectorAll('.hero-slider .slide'));
    if (!slides.length) return; // لو ما فيه سلايدر ما نعمل شي

    const nextBtn = document.querySelector('.hero-slider .next');
    const prevBtn = document.querySelector('.hero-slider .prev');
    let current = 0;
    let intervalId = null;

    function show(i){
      slides.forEach(s => s.classList.remove('active'));
      slides[i].classList.add('active');
    }

    function next(){
      current = (current + 1) % slides.length;
      show(current);
    }
    function prev(){
      current = (current - 1 + slides.length) % slides.length;
      show(current);
    }

    // زرّات
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

    // تشغيل تلقائي
    function startAuto(){
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(next, 5000);
    }
    function resetAuto(){
      startAuto();
    }

    // init
    show(current);
    startAuto();

    // توقف الاوتو لما ما يكون عنصر ظاهر (اختياري)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearInterval(intervalId);
      else startAuto();
    });
  })();

  /* ---------- 2) MAIN NAV: submenu hover / click for mobile ---------- */
  (function initNav(){
    const navItems = document.querySelectorAll('.main-nav ul li');
    navItems.forEach(item => {
      const submenu = item.querySelector('.sub-menu');
      // desktop hover: show submenu
      item.addEventListener('mouseenter', () => { if (submenu) submenu.style.display = 'block'; });
      item.addEventListener('mouseleave', () => { if (submenu) submenu.style.display = 'none'; });

      // mobile: toggle on click (if touch device)
      item.addEventListener('click', (e) => {
        // لو في رابط حقيقي اتركه يشتغل
        const anchor = e.target.closest('a');
        if (anchor && anchor.getAttribute('href')) return;
        if (submenu) {
          e.stopPropagation();
          e.preventDefault();
          submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
        }
      });
    });
  })();

  /* ---------- 3) MENU TOGGLE (mobile) لو عندك زر قائمة */ 
  (function initMenuToggle(){
    const toggle = document.querySelector('.menu-toggle'); // لو ضفت زر في header
    const mainNav = document.querySelector('.main-nav');
    if (!toggle || !mainNav) return;
    toggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
    // إغلاق لو نضغط خارج القوائم
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !toggle.contains(e.target)) {
        mainNav.classList.remove('open');
      }
    });
  })();

  /* ---------- 4) SCROLL REVEAL (fade-in sections) ---------- */
  (function initScrollReveal(){
    const revealItems = document.querySelectorAll('section, .product-card, .finance-card, .service-card');
    if (!revealItems.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // CSS: .visible { opacity:1; transform:none; transition:... }
          // obs.unobserve(entry.target); // لو بدك يظهر مرة وحدة فقط
        }
      });
    }, { threshold: 0.15 });
    revealItems.forEach(el => {
      el.classList.add('reveal'); // البداية في CSS: .reveal { opacity:0; transform: translateY(20px); }
      obs.observe(el);
    });
  })();

  /* ---------- 5) SIMPLE SEARCH BEHAVIOR (اختياري) ---------- */
  (function initSearch(){
    const input = document.querySelector('header input[type="text"]');
    if (!input) return;
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (!q) return;
        // سلوك بسيط: تقدر توجه لصفحة نتائج أو تعمل فلترة محلياً
        alert('بحث عن: ' + q + ' (تجريبي)');
      }
    });
  })();

  /* ---------- 6) LOGIN SCREEN (لو موجود #login-screen / #enter-btn ) ---------- */
  (function initLoginScreen(){
    const login = document.getElementById('login-screen');
    const enter = document.getElementById('enter-btn');
    const main = document.getElementById('main-content');
    if (!login || !enter || !main) return;
    enter.addEventListener('click', () => {
      // حركة خروج أنيقة
      login.classList.add('fade-out');
      setTimeout(() => {
        login.style.display = 'none';
        main.classList.remove('hidden');
      }, 400);
    });
  })();

  /* ---------- 7) SAFETY / FALLBACKS ---------- */
  // لو العناصر مش موجودة لا ينهار السكربت — كل وحدة محمية بشرط وجودها
});
