// ========== CHAMPION DATA ==========
const champions = [
    { name: 'Ahri', img: 'images/champions_bg.jpg' },
    { name: 'Yasuo', img: 'images/hero_bg.jpg' },
    { name: 'Lux', img: 'images/leveling_bg.jpg' },
    { name: 'Jinx', img: 'images/gamemodes_bg.jpg' },
    { name: 'Thresh', img: 'images/fundamentals_bg.jpg' },
    { name: 'Lee Sin', img: 'images/champions_bg.jpg' },
    { name: 'Akali', img: 'images/hero_bg.jpg' },
    { name: 'Ezreal', img: 'images/leveling_bg.jpg' },
    { name: 'Sona', img: 'images/gamemodes_bg.jpg' },
    { name: 'Darius', img: 'images/fundamentals_bg.jpg' },
    { name: 'Syndra', img: 'images/champions_bg.jpg' },
    { name: 'Zed', img: 'images/hero_bg.jpg' },
];

const skins = [
    { img: 'images/hero_bg.jpg' },
    { img: 'images/fundamentals_bg.jpg' },
    { img: 'images/champions_bg.jpg' },
    { img: 'images/leveling_bg.jpg' },
    { img: 'images/gamemodes_bg.jpg' },
    { img: 'images/hero_bg.jpg' },
];

// ========== RENDER CHAMPIONS ==========
function renderChampions() {
    const grid = document.getElementById('championGrid');
    grid.innerHTML = champions.map((champ, i) => `
                <div class="champion-thumb" data-name="${champ.name}" data-img="${champ.img}" onclick="selectChampion(this)">
                    <img src="${champ.img}" alt="${champ.name}">
                </div>
            `).join('');
}

function renderSkins() {
    const carousel = document.getElementById('skinCarousel');
    carousel.innerHTML = skins.map(skin => `
                <div class="skin-item">
                    <img src="${skin.img}" alt="Skin">
                </div>
            `).join('');
}

function selectChampion(el) {
    const name = el.dataset.name;
    const img = el.dataset.img;
    document.getElementById('selectedChampionName').textContent = name;
    document.getElementById('selectedChampionImg').src = img;

    // Remove active from all
    document.querySelectorAll('.champion-thumb').forEach(t => t.style.borderColor = 'transparent');
    el.style.borderColor = 'var(--accent-gold)';
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale').forEach(el => {
        observer.observe(el);
    });
}

// ========== NAVBAR SCROLL ==========
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== PARALLAX EFFECT ==========
function initParallax() {
    const sections = document.querySelectorAll('.section-full');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const bg = section.querySelector('.section-bg');
            if (bg) {
                const rect = section.getBoundingClientRect();
                const speed = 0.3;
                const yPos = -(rect.top * speed);
                bg.style.transform = `translateY(${yPos}px) scale(1.05)`;
            }
        });
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    renderChampions();
    renderSkins();
    initScrollAnimations();
    initNavbar();
    initParallax();

    // Trigger hero animations immediately
    setTimeout(() => {
        document.querySelectorAll('#hero .fade-in, #hero .fade-in-left, #hero .fade-in-right').forEach(el => {
            el.classList.add('visible');
        });
    }, 200);
});