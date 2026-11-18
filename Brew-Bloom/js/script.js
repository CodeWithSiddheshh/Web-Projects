/* ============================================================
   BREW & BLOOM — JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('hide'), 600);
    });
    // Fallback
    setTimeout(() => preloader.classList.add('hide'), 3000);
  }

  /* ---------- Scroll Progress Bar ---------- */
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = percent + '%';
    });
  }

  /* ---------- Sticky Navbar ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  /* ---------- Mobile Navigation ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Active Navigation Link ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a:not(.btn)').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Scroll Reveal ---------- */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ---------- Animated Counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let current = 0;
          const increment = Math.max(1, Math.ceil(target / 60));
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = current.toLocaleString() + suffix;
          }, 25);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  /* ---------- Menu Filtering ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  if (filterBtns.length && menuCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        menuCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp .4s ease forwards';
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ---------- Gallery Lightbox ---------- */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');

  if (galleryItems.length && lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    let currentIndex = 0;
    const images = Array.from(galleryItems);

    function openLightbox(index) {
      currentIndex = index;
      const img = images[index].querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => openLightbox(index));
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev?.click();
      if (e.key === 'ArrowRight') lightboxNext?.click();
    });
  }

  /* ---------- Form Validation ---------- */
  function validateForm(form, fields) {
    let isValid = true;

    fields.forEach(field => {
      const input = form.querySelector(`[name="${field.name}"]`);
      const errorEl = form.querySelector(`[data-error="${field.name}"]`);
      if (!input || !errorEl) return;

      let value = input.value.trim();
      let valid = true;
      let message = '';

      if (field.required && !value) {
        valid = false;
        message = field.requiredMsg || 'This field is required';
      } else if (value && field.pattern && !field.pattern.test(value)) {
        valid = false;
        message = field.patternMsg || 'Invalid format';
      } else if (value && field.minLength && value.length < field.minLength) {
        valid = false;
        message = field.minLengthMsg || `Minimum ${field.minLength} characters`;
      }

      if (!valid) {
        isValid = false;
        input.classList.add('error');
        errorEl.textContent = message;
        errorEl.classList.add('show');
      } else {
        input.classList.remove('error');
        errorEl.textContent = '';
        errorEl.classList.remove('show');
      }
    });

    return isValid;
  }

  /* Reservation Form */
  const resForm = document.getElementById('reservation-form');
  if (resForm) {
    const resFields = [
      { name: 'name', required: true, requiredMsg: 'Please enter your full name', minLength: 2, minLengthMsg: 'Name must be at least 2 characters' },
      { name: 'email', required: true, requiredMsg: 'Please enter your email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, patternMsg: 'Please enter a valid email address' },
      { name: 'phone', required: true, requiredMsg: 'Please enter your phone number', pattern: /^[\d\s\-+()]{7,15}$/, patternMsg: 'Please enter a valid phone number' },
      { name: 'date', required: true, requiredMsg: 'Please select a date' },
      { name: 'time', required: true, requiredMsg: 'Please select a time' },
      { name: 'guests', required: true, requiredMsg: 'Please select number of guests' },
      { name: 'seating', required: true, requiredMsg: 'Please choose a seating preference' }
    ];

    // Set min date to today
    const dateInput = resForm.querySelector('[name="date"]');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(resForm, resFields)) {
        showModal();
        resForm.reset();
      }
    });
  }

  /* Contact Form */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const contactFields = [
      { name: 'name', required: true, requiredMsg: 'Please enter your name', minLength: 2 },
      { name: 'email', required: true, requiredMsg: 'Please enter your email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, patternMsg: 'Please enter a valid email address' },
      { name: 'subject', required: true, requiredMsg: 'Please enter a subject' },
      { name: 'message', required: true, requiredMsg: 'Please enter your message', minLength: 10, minLengthMsg: 'Message must be at least 10 characters' }
    ];

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(contactForm, contactFields)) {
        showToast('Your message has been sent successfully!');
        contactForm.reset();
      }
    });
  }

  /* Newsletter Form */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        showToast('Thank you for subscribing to our newsletter!');
        input.value = '';
      } else {
        showToast('Please enter a valid email address.');
      }
    });
  });

  /* ---------- Toast Notification ---------- */
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span class="toast-message">${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  /* ---------- Success Modal ---------- */
  function showModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
      overlay.classList.add('active');
    }
  }

  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  /* ---------- Back to Top ---------- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- Offer CTA Buttons ---------- */
  document.querySelectorAll('.offer-card .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Offer details have been noted. Visit us to redeem!');
    });
  });

  /* ---------- Menu Order Buttons ---------- */
  document.querySelectorAll('.menu-card-order').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Item noted! Visit us to place your order.');
    });
  });

});

/* ---------- CSS Animation Keyframe for filter ---------- */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(15px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
