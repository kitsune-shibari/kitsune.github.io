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
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('galleryModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDesc = modal.querySelector('.modal-desc');
    const modalCounter = modal.querySelector('.modal-counter');
    
    let currentModalGallery = null;
    let currentModalSlide = 0;
    let modalSlides = [];
    
        function openModal(galleryItem, slideIndex = 0) {
        const slides = galleryItem.querySelectorAll('.slide');
        const titleElement = galleryItem.querySelector('.gallery-item-title');
        const descElement = galleryItem.querySelector('.gallery-item-desc');
        
        modalTitle.textContent = titleElement ? titleElement.textContent : '';
        modalDesc.textContent = descElement ? descElement.textContent : '';
        
        currentModalGallery = galleryItem;
        modalSlides = Array.from(slides);
        currentModalSlide = slideIndex;
        
        updateModalContent();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Función para actualizar la imagen del modal
    function updateModalContent() {
        if (modalSlides.length === 0) return;
        
        const activeSlide = modalSlides[currentModalSlide];
        
        // Manejar imagen o video
        const video = activeSlide.querySelector('video');
        if (video) {
            // Si es video, clonarlo al modal
            modalImage.innerHTML = '';
            modalImage.style.backgroundImage = '';
            const clonedVideo = video.cloneNode(true);
            clonedVideo.style.position = 'absolute';
            clonedVideo.style.inset = '0';
            clonedVideo.style.width = '100%';
            clonedVideo.style.height = '100%';
            clonedVideo.style.objectFit = 'contain';
            modalImage.appendChild(clonedVideo);
        } else {
            // Si es imagen
            modalImage.innerHTML = '';
            const bgImage = activeSlide.style.backgroundImage;
            modalImage.style.backgroundImage = bgImage;
        }
        
        if (modalCounter) {
            modalCounter.textContent = `${currentModalSlide + 1} / ${modalSlides.length}`;
        }
    }
    
    // Event listeners para cada galería
    document.querySelectorAll('.gallery-item').forEach(item => {
        const slider = item.querySelector('.gallery-slider');
        const title = item.querySelector('.gallery-item-title');
        const slides = item.querySelectorAll('.slide');
        
        // Click en el slider
        if (slider) {
            slider.addEventListener('click', function(e) {
                if (e.target.classList.contains('slider-arrow')) return;
                
                let activeIndex = 0;
                slides.forEach((slide, index) => {
                    if (slide.classList.contains('active')) {
                        activeIndex = index;
                    }
                });
                
                openModal(item, activeIndex);
            });
        }
        
        // Click en el título
        if (title) {
            title.addEventListener('click', function() {
                let activeIndex = 0;
                slides.forEach((slide, index) => {
                    if (slide.classList.contains('active')) {
                        activeIndex = index;
                    }
                });
                openModal(item, activeIndex);
            });
        }
    });
    
       function goPrev(e) {
        e.preventDefault();
        e.stopPropagation();
        if (modalSlides.length === 0) return;
        currentModalSlide = (currentModalSlide - 1 + modalSlides.length) % modalSlides.length;
        updateModalContent();
    }
    
    function goNext(e) {
        e.preventDefault();
        e.stopPropagation();
        if (modalSlides.length === 0) return;
        currentModalSlide = (currentModalSlide + 1) % modalSlides.length;
        updateModalContent();
    }
    
    const prevBtn = modal.querySelector('.modal-nav.prev');
    const nextBtn = modal.querySelector('.modal-nav.next');
    
    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('touchstart', goPrev, {passive: false});
    nextBtn.addEventListener('touchstart', goNext, {passive: false});
    
    // Cerrar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentModalGallery = null;
        modalSlides = [];
        modalImage.innerHTML = ''; // Limpiar video si hay
    }
    
    modal.querySelectorAll('[data-close-modal]').forEach(el => {
        el.addEventListener('click', closeModal);
    });
    
    // Teclado
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            modal.querySelector('.modal-nav.prev').click();
        } else if (e.key === 'ArrowRight') {
            modal.querySelector('.modal-nav.next').click();
        }
    });
});

// Hero Carousel
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
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
// ==========================================
// GALERÍA SLIDERS - Navegación táctil
// ==========================================
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
    
    function prevSlide(e) {
        e.preventDefault();
        e.stopPropagation();
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    function nextSlide(e) {
        e.preventDefault();
        e.stopPropagation();
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('touchstart', prevSlide, {passive: false});
    nextBtn.addEventListener('touchstart', nextSlide, {passive: false});
});