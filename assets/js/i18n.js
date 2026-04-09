/* ============================================================
   i18n — TR/EN Language System
   Uses i18next loaded from CDN (UMD build)
   ============================================================ */

(function () {
  'use strict';

  // Translation resources
  var translations = {
    tr: {
      translation: {
        // Navigation
        'nav.skip': 'İçeriğe Geç',
        'nav.about': 'Hakkımda',
        'nav.projects': 'Projeler',
        'nav.skills': 'Yetenekler',
        'nav.blog': 'Blog',
        'nav.contact': 'İletişim',

        // Hero
        'hero.label': '// Merhaba, Ben',
        'hero.title': 'Emre Öcel',
        'hero.subtitle': 'Bilgisayar Mühendisi & Web Geliştirici',
        'hero.description': 'Modern, performanslı ve etkileyici web deneyimleri tasarlıyor ve geliştiriyorum.',
        'hero.cta.projects': 'Projelerimi Gör',
        'hero.cta.contact': 'İletişime Geç',
        'hero.scroll': 'Kaydır',

        // About
        'about.label': '// Hakkımda',
        'about.title': 'Kim Olduğumu Keşfedin',
        'about.p1': 'Fırat Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yazılım geliştirme süreçlerinde kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir çözümler üretmeye odaklanıyorum.',
        'about.p2': '<a href="https://www.webioo.com.tr/" target="_blank" rel="noopener">Webioo Dijital Ajans</a> bünyesinde geliştirdiğim projelerde <a href="https://www.webioo.com.tr/web-tasarim" target="_blank" rel="noopener">web tasarım hizmetleri</a> ve <a href="https://www.webioo.com.tr/e-ticaret" target="_blank" rel="noopener">e-ticaret çözümleri</a> üzerine kapsamlı deneyim kazandım.',
        'about.p3': '<a href="https://www.webioo.com.tr/samsun-web-tasarim" target="_blank" rel="noopener">Samsun</a> merkezli çalışmalarımda kurumsal web projeleri, mobil uygulamalar ve dijital dönüşüm süreçlerinde aktif rol alıyorum.',
        'about.stat.projects': 'Proje',
        'about.stat.experience': 'Yıl Deneyim',
        'about.stat.technologies': 'Teknoloji',
        'about.stat.clients': 'Müşteri',

        // Projects
        'projects.label': '// Portfolio',
        'projects.title': 'Projelerim',
        'projects.subtitle': 'Geliştirdiğim projelerden bazıları.',
        'projects.filter.all': 'Tümü',
        'projects.filter.github': 'GitHub',
        'projects.filter.client': 'Müşteri',
        'projects.filter.school': 'Okul',
        'projects.viewCode': 'Kodu Gör',
        'projects.viewSite': 'Siteyi Gör',
        'projects.download': 'PDF İndir',
        'projects.ecommerce.note': 'Bu projede <a href="https://www.webioo.com.tr/e-ticaret" target="_blank" rel="noopener">e-ticaret çözümleri</a> kapsamında kapsamlı geliştirmeler yaptım.',

        // Skills
        'skills.label': '// Teknolojiler',
        'skills.title': 'Yeteneklerim',
        'skills.subtitle': 'Uzmanlaştığım teknolojiler ve araçlar.',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.app': 'Uygulama',
        'skills.webdesign': '<a href="https://www.webioo.com.tr/web-tasarim" target="_blank" rel="noopener">Web tasarım hizmetleri</a> kapsamında bu teknolojileri aktif olarak kullanıyorum.',

        // Blog
        'blog.label': '// Blog',
        'blog.title': 'Son Yazılar',
        'blog.subtitle': 'Teknoloji, geliştirme ve deneyimlerim hakkında yazıyorum.',
        'blog.viewAll': 'Tüm Yazıları Gör',
        'blog.article': 'Blog Yazısı',
        'blog.backToAll': '← Tüm Yazılar',
        'blog.readMore': 'Devamını Oku',
        'blog.allPosts': 'Tüm Blog Yazıları',

        // Contact
        'contact.label': '// İletişim',
        'contact.title': 'Birlikte Çalışalım',
        'contact.subtitle': 'Projeniz için benimle iletişime geçin.',
        'contact.info.title': 'İletişim Bilgileri',
        'contact.info.text': 'Yeni projeler, freelance çalışmalar veya iş birlikleri için her zaman açığım. Formu doldurun veya sosyal medya üzerinden ulaşın.',
        'contact.form.name': 'Adınız',
        'contact.form.email': 'E-posta',
        'contact.form.message': 'Mesajınız',
        'contact.form.send': 'Gönder',
        'contact.form.namePh': 'Adınızı yazın...',
        'contact.form.emailPh': 'ornek@email.com',
        'contact.form.messagePh': 'Projeniz hakkında bilgi verin...',

        // Footer
        'footer.description': '<a href="https://www.webioo.com.tr/" target="_blank" rel="noopener">Webioo Dijital Ajans</a> bünyesinde web geliştirici olarak çalışıyorum. Modern ve performanslı web çözümleri üretiyorum. <a href="https://www.webioo.com.tr/istanbul-web-tasarim" target="_blank" rel="noopener">İstanbul</a> ve Türkiye genelinde projeler geliştiriyorum.',
        'footer.navigation': 'Navigasyon',
        'footer.services': 'Hizmetler',
        'footer.webDesign': 'Web Tasarım',
        'footer.ecommerce': 'E-Ticaret Çözümleri',
        'footer.samsun': 'Samsun Web Tasarım',
        'footer.istanbul': 'İstanbul Web Tasarım',
        'footer.rights': 'Tüm hakları saklıdır.',
        'footer.builtWith': 'Geliştirildi:',

        // 404
        '404.title': 'Sayfa Bulunamadı',
        '404.message': 'Aradığınız sayfa taşınmış veya silinmiş olabilir. Ana sayfaya dönüp tekrar deneyebilirsiniz.',
        '404.home': 'Ana Sayfaya Dön',
      }
    },
    en: {
      translation: {
        // Navigation
        'nav.skip': 'Skip to Content',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',

        // Hero
        'hero.label': '// Hello, I\'m',
        'hero.title': 'Emre Öcel',
        'hero.subtitle': 'Computer Engineer & Web Developer',
        'hero.description': 'I design and develop modern, performant, and impressive web experiences.',
        'hero.cta.projects': 'View Projects',
        'hero.cta.contact': 'Get in Touch',
        'hero.scroll': 'Scroll',

        // About
        'about.label': '// About Me',
        'about.title': 'Discover Who I Am',
        'about.p1': 'I\'m a Computer Engineering graduate from Fırat University. I focus on creating performant and scalable solutions that prioritize user experience in software development.',
        'about.p2': 'Working at <a href="https://www.webioo.com.tr/" target="_blank" rel="noopener">Webioo Digital Agency</a>, I\'ve built projects ranging from <a href="https://www.webioo.com.tr/web-tasarim" target="_blank" rel="noopener">web design services</a> to <a href="https://www.webioo.com.tr/e-ticaret" target="_blank" rel="noopener">e-commerce solutions</a> for diverse clients.',
        'about.p3': 'Based in <a href="https://www.webioo.com.tr/samsun-web-tasarim" target="_blank" rel="noopener">Samsun</a>, I actively contribute to corporate web projects, mobile applications, and digital transformation processes across Turkey.',
        'about.stat.projects': 'Projects',
        'about.stat.experience': 'Years Exp.',
        'about.stat.technologies': 'Technologies',
        'about.stat.clients': 'Clients',

        // Projects
        'projects.label': '// Portfolio',
        'projects.title': 'My Projects',
        'projects.subtitle': 'Some of the projects I\'ve developed.',
        'projects.filter.all': 'All',
        'projects.filter.github': 'GitHub',
        'projects.filter.client': 'Client',
        'projects.filter.school': 'School',
        'projects.viewCode': 'View Code',
        'projects.viewSite': 'Visit Site',
        'projects.download': 'Download PDF',
        'projects.ecommerce.note': 'In this project, I implemented comprehensive <a href="https://www.webioo.com.tr/e-ticaret" target="_blank" rel="noopener">e-commerce solutions</a>.',

        // Skills
        'skills.label': '// Technologies',
        'skills.title': 'My Skills',
        'skills.subtitle': 'Technologies and tools I specialize in.',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.app': 'Application',
        'skills.webdesign': 'I actively use these technologies for <a href="https://www.webioo.com.tr/web-tasarim" target="_blank" rel="noopener">web design services</a>.',

        // Blog
        'blog.label': '// Blog',
        'blog.title': 'Latest Posts',
        'blog.subtitle': 'I write about technology, development, and my experiences.',
        'blog.viewAll': 'View All Posts',
        'blog.article': 'Blog Post',
        'blog.backToAll': '← All Posts',
        'blog.readMore': 'Read More',
        'blog.allPosts': 'All Blog Posts',

        // Contact
        'contact.label': '// Contact',
        'contact.title': 'Let\'s Work Together',
        'contact.subtitle': 'Get in touch for your next project.',
        'contact.info.title': 'Contact Info',
        'contact.info.text': 'I\'m always open to new projects, freelance work, or collaborations. Fill out the form or reach out via social media.',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Your Message',
        'contact.form.send': 'Send',
        'contact.form.namePh': 'Enter your name...',
        'contact.form.emailPh': 'example@email.com',
        'contact.form.messagePh': 'Tell me about your project...',

        // Footer
        'footer.description': 'I work as a web developer at <a href="https://www.webioo.com.tr/" target="_blank" rel="noopener">Webioo Digital Agency</a>. I create modern and performant web solutions. I develop projects across <a href="https://www.webioo.com.tr/istanbul-web-tasarim" target="_blank" rel="noopener">Istanbul</a> and Turkey.',
        'footer.navigation': 'Navigation',
        'footer.services': 'Services',
        'footer.webDesign': 'Web Design',
        'footer.ecommerce': 'E-Commerce Solutions',
        'footer.samsun': 'Samsun Web Design',
        'footer.istanbul': 'Istanbul Web Design',
        'footer.rights': 'All rights reserved.',
        'footer.builtWith': 'Built by:',

        // 404
        '404.title': 'Page Not Found',
        '404.message': 'The page you\'re looking for may have been moved or deleted. Try going back to the homepage.',
        '404.home': 'Go to Homepage',
      }
    }
  };

  // Detect saved language or default to TR
  var savedLang = localStorage.getItem('lang') || 'tr';

  // Initialize i18next
  function initI18n() {
    if (typeof i18next === 'undefined') {
      // Retry if i18next hasn't loaded yet
      setTimeout(initI18n, 100);
      return;
    }

    i18next.init({
      lng: savedLang,
      fallbackLng: 'tr',
      resources: translations,
      interpolation: {
        escapeValue: false
      }
    }, function (err) {
      if (err) console.warn('i18next init error:', err);
      updateContent();
      updateLangButton();
      updateHtmlLang();
    });
  }

  // Update all elements with data-i18n attribute
  function updateContent() {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var translated = i18next.t(key);
      if (translated && translated !== key) {
        // Check if translation contains HTML
        if (translated.indexOf('<') !== -1) {
          el.innerHTML = translated;
        } else {
          el.textContent = translated;
        }
      }
    });

    // Update placeholders
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var translated = i18next.t(key);
      if (translated && translated !== key) {
        el.placeholder = translated;
      }
    });
  }

  // Update language toggle button text
  function updateLangButton() {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = i18next.language === 'tr' ? 'EN' : 'TR';
    }
  }

  // Update HTML lang attribute
  function updateHtmlLang() {
    document.documentElement.lang = i18next.language;
  }

  // Toggle language
  function toggleLanguage() {
    var newLang = i18next.language === 'tr' ? 'en' : 'tr';
    i18next.changeLanguage(newLang, function () {
      localStorage.setItem('lang', newLang);
      updateContent();
      updateLangButton();
      updateHtmlLang();
    });
  }

  // Bind toggle button
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', toggleLanguage);
    }
  });

  // Make update function available globally for dynamic content
  window.updateI18nContent = updateContent;

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
