// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for navigation links
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

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe footer
    const footer = document.querySelector('.minimal-footer');
    if (footer) {
        observer.observe(footer);
    }

    // Team cards staggered animation
    const teamCards = document.querySelectorAll('.team-card');
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, observerOptions);

    teamCards.forEach(card => {
        teamObserver.observe(card);
    });

    // Parallax effect for hero section with limits
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateParallax() {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const scrolled = window.scrollY;
            const maxScroll = 350; // Maximum scroll distance for parallax effect
            const limitedScroll = Math.min(scrolled, maxScroll);
            
            const parallaxSpeed = 0.5;
            const translateY = limitedScroll * parallaxSpeed;
            // Faster fade out - complete by 500px
            const opacity = Math.max(0, 1 - (limitedScroll / 500));
            
            heroSection.style.transform = `translateY(${translateY}px)`;
            heroSection.style.opacity = opacity;
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Active nav link on scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--white)';
            }
        });
    });

    // Cursor effect (subtle)
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
        pointer-events: none;
        z-index: 10000;
        mix-blend-mode: difference;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.display = 'block';
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .portfolio-card, .team-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2.5)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });

    // Add fade-in class to elements that need staggered animations
    const fadeElements = document.querySelectorAll('.about-text, .origin-text, .contact-item');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Keep navigation always visible
    const nav = document.getElementById('main-nav');
    nav.style.transform = 'translateY(0)';
    nav.style.transition = 'none';

    // Scroll Following Objects with Natural Movement
    const scrollFollowers = [
        { 
            element: document.querySelector('.scroll-follower-1'),
            baseSize: 300,
            sizeVariation: 70,
            speed: 0.5,
            horizontalRange: { min: 60, max: 95 },
            verticalSpeed: 0.7,
            phaseOffset: 0,
            rotationSpeed: 0.3
        },
        { 
            element: document.querySelector('.scroll-follower-2'),
            baseSize: 180,
            sizeVariation: 40,
            speed: 0.9,
            horizontalRange: { min: 5, max: 40 },
            verticalSpeed: 1.1,
            phaseOffset: 1.2,
            rotationSpeed: -0.2
        },
        { 
            element: document.querySelector('.scroll-follower-3'),
            baseSize: 250,
            sizeVariation: 60,
            speed: 0.35,
            horizontalRange: { min: 30, max: 70 },
            verticalSpeed: 0.8,
            phaseOffset: 2.5,
            rotationSpeed: 0.15
        },
        { 
            element: document.querySelector('.scroll-follower-4'),
            baseSize: 140,
            sizeVariation: 35,
            speed: 1.3,
            horizontalRange: { min: 10, max: 90 },
            verticalSpeed: 1.4,
            phaseOffset: 0.8,
            rotationSpeed: -0.4
        }
    ];

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function updateScrollFollowers() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollProgress = Math.max(0, Math.min(1, scrollY / (documentHeight - windowHeight)));
        
        scrollFollowers.forEach((follower, index) => {
            if (!follower.element) return;
            
            // More natural size variation using combined sine waves
            const sizePhase1 = (scrollProgress * Math.PI * 2 * follower.speed) + follower.phaseOffset;
            const sizePhase2 = (scrollProgress * Math.PI * 1.3 * follower.speed) + follower.phaseOffset;
            const sizeFactor = (Math.sin(sizePhase1) * 0.6 + Math.sin(sizePhase2) * 0.4);
            const size = follower.baseSize + (sizeFactor * follower.sizeVariation);
            
            // Natural vertical movement using eased progress
            const verticalPhase = (scrollProgress * follower.verticalSpeed + (index * 0.15)) % 1;
            const easedVertical = easeInOutQuad(verticalPhase);
            const verticalPos = -10 + (easedVertical * 120); // -10vh to 110vh for smooth entrance/exit
            
            // Smooth horizontal oscillation with Lissajous-like curves
            const horizontalPhase1 = (scrollProgress * Math.PI * 2.5 * follower.speed) + follower.phaseOffset;
            const horizontalPhase2 = (scrollProgress * Math.PI * 1.7 * follower.speed) + (follower.phaseOffset * 0.7);
            const horizontalRange = follower.horizontalRange.max - follower.horizontalRange.min;
            const horizontalFactor = (Math.sin(horizontalPhase1) * 0.7 + Math.sin(horizontalPhase2) * 0.3) * 0.5 + 0.5;
            const horizontalPos = follower.horizontalRange.min + (horizontalFactor * horizontalRange);
            
            // Gentle rotation with organic feel
            const rotation = scrollProgress * 180 * follower.rotationSpeed + (Math.sin(scrollProgress * Math.PI * 4) * 15);
            
            // Apply styles with smooth transitions
            follower.element.style.width = `${size}px`;
            follower.element.style.height = `${size}px`;
            follower.element.style.top = `${verticalPos}vh`;
            follower.element.style.left = `${horizontalPos}%`;
            follower.element.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            
            // Vary opacity slightly for depth
            const opacityVariation = 0.8 + (Math.sin(scrollProgress * Math.PI * 3 + follower.phaseOffset) * 0.2);
            follower.element.style.opacity = opacityVariation;
        });
    }

    // Update on scroll with optimized performance
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                updateScrollFollowers();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });
    updateScrollFollowers(); // Initialize

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Next Section Buttons
    const nextSectionButtons = document.querySelectorAll('.next-section-btn');
    
    nextSectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Investor Form Handling with Formspree
    const investorForm = document.getElementById('investorForm');
    const formResponse = document.getElementById('formResponse');

    if (investorForm) {
        investorForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            formResponse.textContent = 'Submitting your inquiry...';
            formResponse.className = 'form-response visible';
            
            // Get form data
            const formData = new FormData(investorForm);
            
            try {
                // Submit to Formspree
                const response = await fetch(investorForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success message
                    formResponse.textContent = 'Thank you for your interest! We will contact you within 24-48 hours.';
                    formResponse.className = 'form-response visible success';
                    
                    // Reset form
                    investorForm.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formResponse.classList.remove('visible');
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error message
                formResponse.textContent = 'Sorry, there was an error submitting your inquiry. Please try again or email us directly at info@seedpulsefund.com';
                formResponse.className = 'form-response visible error';
                
                // Hide message after 8 seconds
                setTimeout(() => {
                    formResponse.classList.remove('visible');
                }, 8000);
            }
        });

        // Add focus animations to form inputs
        const formInputs = document.querySelectorAll('.form-input');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }

    console.log('Seed Pulse Fund - Website Loaded');
});

