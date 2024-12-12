 // JavaScript for toggling mobile menu
document.querySelector('.hamburger').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');

    // Toggle aria-expanded for accessibility
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
});



        // Text Animation on Load
        window.addEventListener('load', () => {
            const text = document.getElementById('animated-text');
            const subtext = document.getElementById('animated-subtext');
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
            subtext.style.opacity = '1';
            subtext.style.transform = 'translateY(0)';
        });

        // Image Hover Effect in Gallery
        const galleryImages = document.querySelectorAll('.gallery .image-container img');
        galleryImages.forEach(img => {
            img.addEventListener('mouseover', () => {
                img.style.transform = 'scale(1.05)';
            });
            img.addEventListener('mouseout', () => {
                img.style.transform = 'scale(1)';
            });
        });

        // Contact Link Hover Effect
        const contactLinks = document.querySelectorAll('.contact-links a img');
        contactLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.transform = 'scale(1.2)';
                link.style.transition = 'transform 0.3s';
            });
            link.addEventListener('mouseout', () => {
                link.style.transform = 'scale(1)';
            });
        });
 


        // Smooth Scrolling when clicking navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                // Smooth scroll to target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close menu if in mobile view
                const menu = document.querySelector('.menu');
                if (menu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
        document.addEventListener("DOMContentLoaded", function() {
            // Select all anchor links within the navigation
            const navLinks = document.querySelectorAll("nav .menu a");
        
            navLinks.forEach(link => {
                link.addEventListener("click", function(event) {
                    // Check if link is pointing to a section on the current page
                    if (this.getAttribute("href").startsWith("#")) {
                        event.preventDefault(); // Prevent default jump
        
                        const targetId = this.getAttribute("href").substring(1);
                        const targetSection = document.getElementById(targetId);
        
                        if (targetSection) {
                            // Scroll smoothly to the target section
                            window.scrollTo({
                                top: targetSection.offsetTop,
                                behavior: "smooth"
                            });
                        }
                    }
                    // If the link is not a section (e.g., "portfolio.html"), let it work as a normal link
                });
            });
        });
        
