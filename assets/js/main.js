/**
 * PREMIUM SIXCYBER JAVASCRIPT
 * $50K Agency-Quality Interactions & Animations
 */

(function() {
  "use strict";

  /**
   * Apply scrolled class to header on scroll
   */
  function toggleHeaderScroll() {
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('scrolled');
        } else {
          selectHeader.classList.remove('scrolled');
        }
      });
    }
  }

  /**
   * Mobile nav toggle
   */
  function initMobileNav() {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.navmenu');

    if (mobileNavToggleBtn && navMenu) {
      mobileNavToggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.toggle('navmenu-active');
        mobileNavToggleBtn.classList.toggle('mobile-nav-active');
        
        // Animate hamburger icon
        if (navMenu.classList.contains('navmenu-active')) {
          mobileNavToggleBtn.innerHTML = '<i class="bi bi-x"></i>';
        } else {
          mobileNavToggleBtn.innerHTML = '<i class="bi bi-list"></i>';
        }
      });

      // Close mobile nav when clicking a link
      const navLinks = document.querySelectorAll('.navmenu a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navMenu.classList.contains('navmenu-active')) {
            navMenu.classList.remove('navmenu-active');
            mobileNavToggleBtn.classList.remove('mobile-nav-active');
            mobileNavToggleBtn.innerHTML = '<i class="bi bi-list"></i>';
          }
        });
      });

      // Close mobile nav when clicking outside
      document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileNavToggleBtn.contains(e.target)) {
          if (navMenu.classList.contains('navmenu-active')) {
            navMenu.classList.remove('navmenu-active');
            mobileNavToggleBtn.classList.remove('mobile-nav-active');
            mobileNavToggleBtn.innerHTML = '<i class="bi bi-list"></i>';
          }
        }
      });
    }
  }

  /**
   * Dropdown toggles
   */
  function initDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown .toggle-dropdown');
    
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const dropdown = this.closest('.dropdown');
        const dropdownMenu = dropdown.querySelector('ul');
        
        // Close other dropdowns
        dropdownToggles.forEach(otherToggle => {
          if (otherToggle !== this) {
            const otherDropdown = otherToggle.closest('.dropdown');
            const otherMenu = otherDropdown.querySelector('ul');
            if (otherMenu) {
              otherMenu.style.display = 'none';
              otherToggle.classList.remove('dropdown-active');
            }
          }
        });
        
        // Toggle current dropdown
        if (dropdownMenu) {
          if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
            this.classList.remove('dropdown-active');
          } else {
            dropdownMenu.style.display = 'block';
            this.classList.add('dropdown-active');
          }
        }
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      dropdownToggles.forEach(toggle => {
        const dropdown = toggle.closest('.dropdown');
        const dropdownMenu = dropdown.querySelector('ul');
        if (dropdownMenu) {
          dropdownMenu.style.display = 'none';
          toggle.classList.remove('dropdown-active');
        }
      });
    });
  }

  /**
   * Scroll top button
   */
  function initScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    
    if (scrollTop) {
      function toggleScrollTop() {
        if (window.scrollY > 100) {
          scrollTop.classList.add('active');
        } else {
          scrollTop.classList.remove('active');
        }
      }
      
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      window.addEventListener('load', toggleScrollTop);
      window.addEventListener('scroll', toggleScrollTop);
    }
  }

  /**
   * FAQ accordion
   */
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item h3');
    
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const faqItem = item.closest('.faq-item');
        const isActive = faqItem.classList.contains('faq-active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          otherItem.classList.remove('faq-active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          faqItem.classList.add('faq-active');
        }
      });
    });
  }

  /**
   * Smooth scrolling for anchor links
   */
  function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const headerOffset = document.querySelector('#header')?.offsetHeight || 0;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Active navigation highlighting
   */
  function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navmenu a[href^="#"]');
    
    function highlightActiveNav() {
      const scrollPos = window.scrollY + 200;
      
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
    
    window.addEventListener('scroll', highlightActiveNav);
  }

  /**
   * Preloader
   */
  function initPreloader() {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 300);
      });
    }
  }

  /**
   * Animation on scroll initialization
   */
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 50
      });
    }
  }

  /**
   * Premium button animations
   */
  function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  /**
   * Parallax effect for hero background
   */
  function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
      });
    }
  }

  /**
   * Scroll indicator
   */
  function initScrollIndicator() {
    // Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);
    
    function updateScrollIndicator() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      scrollIndicator.style.setProperty('--scroll-width', scrollPercentage + '%');
    }
    
    window.addEventListener('scroll', updateScrollIndicator);
  }

  /**
   * Service card hover enhancements
   */
  function initServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-item');
    
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        this.style.setProperty('--mouse-x', x + '%');
        this.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  /**
   * Counter animation
   */
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
      const increment = target / speed;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = counter.textContent.replace(/\d+/, target);
          clearInterval(timer);
        } else {
          counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
        }
      }, 1);
    };
    
    // Intersection Observer for counters
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  /**
   * Form enhancement
   */
  function initFormEnhancements() {
    const forms = document.querySelectorAll('.php-email-form');
    
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      
      inputs.forEach(input => {
        // Add focus/blur classes for styling
        input.addEventListener('focus', () => {
          input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
          if (!input.value) {
            input.parentElement.classList.remove('focused');
          }
        });
        
        // Auto-resize textarea
        if (input.tagName === 'TEXTAREA') {
          input.addEventListener('input', () => {
            input.style.height = 'auto';
            input.style.height = input.scrollHeight + 'px';
          });
        }
      });
      
      // Form submission with loading state
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
        const loading = this.querySelector('.loading');
        
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
        }
        
        if (loading) {
          loading.style.display = 'block';
        }
        
        // Simulate form submission
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
          }
          
          if (loading) {
            loading.style.display = 'none';
          }
          
          const sentMessage = this.querySelector('.sent-message');
          if (sentMessage) {
            sentMessage.style.display = 'block';
            setTimeout(() => {
              sentMessage.style.display = 'none';
            }, 5000);
          }
        }, 2000);
      });
    });
  }

  /**
   * Intersection Observer for animations
   */
  function initIntersectionObserver() {
    const animatedElements = document.querySelectorAll('.service-item, .additional-service-card, .info-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease-out';
      observer.observe(element);
    });
  }

  /**
   * Custom cursor effect (premium touch)
   */
  function initCustomCursor() {
    if (window.innerWidth > 1024) { // Only on desktop
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.innerHTML = '<div class="cursor-dot"></div>';
      document.body.appendChild(cursor);
      
      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;
      
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
      
      function updateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(updateCursor);
      }
      
      updateCursor();
      
      // Add hover effects
      const hoverElements = document.querySelectorAll('a, button, .btn, .service-item');
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-hover');
        });
      });
    }
  }

  /**
   * Initialize all functions when DOM is loaded
   */
  document.addEventListener('DOMContentLoaded', function() {
    toggleHeaderScroll();
    initMobileNav();
    initDropdowns();
    initScrollTop();
    initFAQ();
    initSmoothScrolling();
    initActiveNavigation();
    initPreloader();
    initButtonAnimations();
    initScrollIndicator();
    initServiceCardEffects();
    initCounterAnimation();
    initFormEnhancements();
    initIntersectionObserver();
    // initCustomCursor(); // Uncomment if you want custom cursor
    
    // Initialize AOS after other animations
    setTimeout(initAOS, 100);
  });

  /**
   * Window load event for performance-sensitive features
   */
  window.addEventListener('load', function() {
    // initParallax(); // Uncomment if you want parallax effect
  });

  /**
   * Add CSS for ripple effect and custom cursor
   */
  const style = document.createElement('style');
  style.textContent = `
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .custom-cursor {
      position: fixed;
      width: 20px;
      height: 20px;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
    }
    
    .cursor-dot {
      width: 100%;
      height: 100%;
      background: var(--primary);
      border-radius: 50%;
      transition: transform 0.2s ease;
    }
    
    .custom-cursor.cursor-hover .cursor-dot {
      transform: scale(2);
      background: var(--accent);
    }
    
    .focused {
      position: relative;
    }
    
    .focused::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--primary);
      transform: scaleX(0);
      transform-origin: center;
      animation: focusLine 0.3s ease forwards;
    }
    
    @keyframes focusLine {
      to {
        transform: scaleX(1);
      }
    }
  `;
  document.head.appendChild(style);

})();