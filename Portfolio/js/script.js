document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax scrolling effect (if needed, handled by CSS)

    // Fade-in effect on scroll
    const fadeInElements = document.querySelectorAll('.fade-in');

    const checkPosition = () => {
        fadeInElements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Initial check

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
});
