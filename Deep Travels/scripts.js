document.addEventListener('DOMContentLoaded', function () {
    // --- Testimonial Slider Logic ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const testimonialContainer = document.querySelector('.testimonial-container');

    if (slides.length > 0) {
        // Function to move to a specific slide
        function goToSlide(slideIndex) {
            testimonialContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        // Show next slide
        function showNextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }

        // Show previous slide
        function showPrevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        }

        // Next button click event
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                showNextSlide();
                restartInterval();
            });
        }

        // Prev button click event
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                showPrevSlide();
                restartInterval();
            });
        }
        
        // Automatically advance the slides every 5 seconds
        let slideInterval = setInterval(showNextSlide, 5000);

        // Restart the interval after a manual slide change
        function restartInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(showNextSlide, 5000);
        }

        // Initialize slider
        goToSlide(0);
    }

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});
