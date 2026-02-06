/**
 * CRC Chambers of Law - Main JavaScript
 * Handles navigation, modals, scroll effects, and interactive features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initStickyHeader();
    initDisclaimerModal();
    initCookieNotice();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or a modal trigger
            if (href === '#' || href.startsWith('#privacy') || href.startsWith('#terms')) {
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        // Scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
    const header = document.getElementById('header');

    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow when scrolled
            if (currentScroll > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }

            lastScroll = currentScroll;
        });
    }
}

/**
 * Disclaimer Modal
 */
function initDisclaimerModal() {
    const modal = document.getElementById('disclaimer-modal');
    const acceptBtn = document.getElementById('accept-disclaimer');
    const closeBtn = document.querySelector('.close');

    // Check if modal should be shown
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted');

    if (modal && !hasAcceptedDisclaimer) {
        // Show modal after a short delay
        setTimeout(function() {
            modal.classList.add('show');
        }, 1000);
    }

    // Accept button handler
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('disclaimerAccepted', 'true');
            modal.classList.remove('show');
        });
    }

    // Close button handler
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            localStorage.setItem('disclaimerAccepted', 'true');
            modal.classList.remove('show');
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                localStorage.setItem('disclaimerAccepted', 'true');
                modal.classList.remove('show');
            }
        });
    }
}

/**
 * Cookie Notice
 */
function initCookieNotice() {
    const cookieNotice = document.getElementById('cookie-notice');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    // Check if cookies have been accepted
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (cookieNotice && !hasAcceptedCookies) {
        // Show cookie notice after a short delay
        setTimeout(function() {
            cookieNotice.classList.add('show');
        }, 2000);
    }

    // Accept cookies button handler
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieNotice.classList.remove('show');
        });
    }
}

/**
 * Active Navigation Link Highlighting
 */
function highlightActiveNav() {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Remove active class from all links
        link.classList.remove('active');

        // Add active class to current page link
        if (linkPath === currentLocation ||
            (currentLocation === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Call on page load
highlightActiveNav();

/**
 * Lazy Loading Images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images with data-src exist
if (document.querySelectorAll('img[data-src]').length > 0) {
    initLazyLoading();
}

/**
 * Animation on Scroll
 */
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });

        animateElements.forEach(el => observer.observe(el));
    }
}

initScrollAnimations();

/**
 * Print Page Function
 */
function printPage() {
    window.print();
}

/**
 * Share Page Function
 */
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Check out CRC Chambers of Law',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(err => {
            console.log('Error sharing:', err);
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

/**
 * Handle External Links
 */
function initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(link => {
        // Skip links to the same domain
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

initExternalLinks();

/**
 * Keyboard Navigation Support
 */
document.addEventListener('keydown', function(e) {
    // ESC key closes modals
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal.show');
        if (modal) {
            modal.classList.remove('show');
        }

        const mobileMenu = document.querySelector('.nav-menu.active');
        const hamburger = document.getElementById('hamburger');
        if (mobileMenu && hamburger) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }

    // Ctrl/Cmd + H to go home
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        window.location.href = 'index.html';
    }
});

/**
 * Prevent Form Resubmission on Page Refresh
 */
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

/**
 * Console Message
 */
console.log('%cCRC Chambers of Law', 'color: #cd2653; font-size: 20px; font-weight: bold;');
console.log('%cExcellence in Legal Practice', 'color: #6d6d6d; font-size: 14px;');
console.log('%cWebsite built with HTML, CSS, and JavaScript', 'color: #000; font-size: 12px;');
