/**
 * Unique Car Rental - Main JavaScript
 * Smooth scrolling, animations, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Check on load
    
    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
    
    // ========================================
    // Scroll Reveal Animations
    // ========================================
    const revealElements = document.querySelectorAll(
        '.section-header, .section-title, .section-text, .fleet-card, .feature-card, ' +
        '.app-content, .app-mockups, .cta-box, .phone-mockup'
    );
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on element index within parent
                const parent = entry.target.parentElement;
                if (parent) {
                    const siblings = Array.from(parent.children);
                    const elementIndex = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${elementIndex * 0.1}s`;
                }
                
                entry.target.classList.add('revealed');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });
    
    // ========================================
    // Fleet Tabs Functionality
    // ========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category
            const category = this.dataset.category;
            
            // Animate fleet cards
            const fleetCards = document.querySelectorAll('.fleet-card');
            fleetCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, index * 50);
            });
            
            // In a real app, you would filter cards based on category
            console.log('Filter by:', category);
        });
    });
    
    // ========================================
    // Fleet Card Hover Effects
    // ========================================
    const fleetCards = document.querySelectorAll('.fleet-card');
    
    fleetCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // ========================================
    // Feature Card Animation
    // ========================================
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });
    
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                featureCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                featureObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const featuresGrid = document.querySelector('.features-grid');
    if (featuresGrid) {
        featureObserver.observe(featuresGrid);
    }
    
    // ========================================
    // Phone Mockup Parallax Effect
    // ========================================
    const appMockups = document.querySelector('.app-mockups');
    const phone1 = document.querySelector('.phone-1');
    const phone2 = document.querySelector('.phone-2');
    
    if (appMockups && phone1 && phone2) {
        appMockups.addEventListener('mousemove', (e) => {
            const rect = appMockups.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            phone1.style.transform = `rotate(-5deg) translateX(${-30 + x * 10}px) translateY(${y * 10}px)`;
            phone2.style.transform = `rotate(5deg) translateX(${30 + x * 15}px) translateY(${40 + y * 15}px)`;
        });
        
        appMockups.addEventListener('mouseleave', () => {
            phone1.style.transform = 'rotate(-5deg) translateX(-30px)';
            phone2.style.transform = 'rotate(5deg) translateX(30px) translateY(40px)';
        });
    }
    
    // ========================================
    // Brand Logo Hover Effect
    // ========================================
    const brandLogos = document.querySelectorAll('.brand-logo:not(.arrow)');
    
    brandLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            brandLogos.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // ========================================
    // Newsletter Form
    // ========================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Show success message
                const btn = this.querySelector('button');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="bi bi-check-lg"></i>';
                btn.style.background = '#28a745';
                btn.style.color = 'white';
                
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                    btn.style.color = '';
                    emailInput.value = '';
                }, 2000);
                
                console.log('Subscribed:', email);
            }
        });
    }
    
    // ========================================
    // CTA Button Click Handler
    // ========================================
    const ctaButtons = document.querySelectorAll('.btn-download-cta, .btn-download-lg, .btn-download');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#download' || this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Show coming soon notification
                showNotification('App coming soon! Stay tuned.');
            }
        });
    });
    
    // ========================================
    // Show All Link Handler
    // ========================================
    const showAllLink = document.querySelector('.show-all-link');
    
    if (showAllLink) {
        showAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Full fleet catalog coming soon!');
        });
    }
    
    // ========================================
    // Notification Helper
    // ========================================
    function showNotification(message) {
        // Remove existing notification
        const existingNotification = document.querySelector('.custom-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'custom-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="bi bi-info-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: var(--primary-dark);
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            font-size: 0.875rem;
            z-index: 9999;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(-50%) translateY(0)';
        });
        
        // Remove after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(-50%) translateY(100px)';
            setTimeout(() => notification.remove(), 400);
        }, 3000);
    }
    
    // ========================================
    // Hero Parallax Effect
    // ========================================
    const heroImage = document.querySelector('.hero-image');
    const geometricPattern = document.querySelector('.geometric-pattern');
    
    if (heroImage && geometricPattern) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroHeight = document.querySelector('.hero-section').offsetHeight;
            
            if (scrolled < heroHeight) {
                heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
                geometricPattern.style.transform = `translateY(${scrolled * 0.05}px) rotate(${scrolled * 0.02}deg)`;
            }
        });
    }
    
    // ========================================
    // Active Navigation Link on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ========================================
    // Preloader (optional)
    // ========================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
    
});

// ========================================
// CSS Animation Helper
// ========================================
const style = document.createElement('style');
style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    .btn-pulse {
        animation: pulse 2s infinite;
    }
`;
document.head.appendChild(style);
