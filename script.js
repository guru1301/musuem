document.addEventListener('DOMContentLoaded', () => {
    // Slideshow logic
    let currentIndex = 0;
    const slides = document.querySelectorAll('.st');
    const dots = document.querySelectorAll('.nav-auto div');
    const slideContainer = document.querySelector('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function showSlide(index) {
        const offset = -index * 100;
        slideContainer.style.marginLeft = offset + '%';
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Initialize
    showSlide(currentIndex);

    // Event Listeners for Navigation Buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Optional: Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });
});
