// ==========================================
// MAIN.JS - Funcionalidades generales
// ==========================================

// MENÚ HAMBURGER
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

if (menuBtn && drawer && overlay) {
    function openMenu() {
        menuBtn.classList.add('active');
        drawer.classList.add('active');
        overlay.classList.add('active');
        menuBtn.setAttribute('aria-expanded', 'true');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuBtn.classList.remove('active');
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function toggleMenu(e) {
        if (e) e.stopPropagation();
        const isOpen = drawer.classList.contains('active');
        isOpen ? closeMenu() : openMenu();
    }

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Cerrar al clickear links del menú
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (drawer.classList.contains('active')) closeMenu();
        });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ==========================================
// CARRUSEL DEL HERO
// ==========================================
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        header.style.background = window.pageYOffset > 100 
            ? 'rgba(18, 10, 10, 0.95)' 
            : 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)';
    });
}

// ==========================================
// AGENDA TOGGLE
// ==========================================
const toggleBtns = document.querySelectorAll('.toggle-btn');
const agendaLists = document.querySelectorAll('.agenda-list');

if (toggleBtns.length > 0 && agendaLists.length > 0) {
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos los botones
            toggleBtns.forEach(b => b.classList.remove('active'));
            // Agregar active al clickeado
            btn.classList.add('active');
            
            // Ocultar todas las listas
            agendaLists.forEach(list => list.classList.remove('active'));
            // Mostrar la correspondiente
            const tabId = btn.getAttribute('data-tab');
            const targetList = document.getElementById(tabId);
            if (targetList) targetList.classList.add('active');
        });
    });
}

// ==========================================
// GALERÍA SLIDER + MODAL
// ==========================================

// Slider individual por cada galería-item
document.querySelectorAll('.gallery-item').forEach(item => {
    const slides = item.querySelectorAll('.slide');
    const prevBtn = item.querySelector('.slider-arrow.prev');
    const nextBtn = item.querySelector('.slider-arrow.next');
    const counter = item.querySelector('.slide-counter');
    
    if (slides.length === 0 || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        if (counter) counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
    
    // Click en título abre modal
    const title = item.querySelector('.gallery-item-title');
    const modal = document.getElementById('galleryModal');
    
    if (title && modal) {
        title.addEventListener('click', () => {
            const activeSlide = slides[currentSlide];
            const bgImage = activeSlide ? activeSlide.style.backgroundImage : '';
            const titleText = title.textContent;
            const descText = item.querySelector('.gallery-item-desc')?.textContent || '';
            
            const modalImage = modal.querySelector('.modal-image');
            const modalTitle = modal.querySelector('.modal-title');
            const modalDesc = modal.querySelector('.modal-desc');
            
            if (modalImage) modalImage.style.backgroundImage = bgImage;
            if (modalTitle) modalTitle.textContent = titleText;
            if (modalDesc) modalDesc.textContent = descText;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
});

// Modal funcionalidad
const modal = document.getElementById('galleryModal');
if (modal) {
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    modal.querySelectorAll('[data-close-modal]').forEach(el => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
// Hero Carousel
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const intervalTime = 5000; // Cambia cada 5 segundos
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }
    
    // Cambio automático
    setInterval(nextSlide, intervalTime);
});
}
