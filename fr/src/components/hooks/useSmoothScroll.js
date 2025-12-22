import { useState, useEffect, useCallback } from 'react';

const useSmoothScroll = (navItems) => {
  const [activeSection, setActiveSection] = useState('home');

  // Get navbar height dynamically
  const getNavbarHeight = useCallback(() => {
    const navbar = document.querySelector('nav');
    return navbar ? navbar.offsetHeight : 80;
  }, []);

  // Smooth scroll to section with easing
  const scrollToSection = useCallback((sectionId) => {
    // Add a small delay to allow mobile menu to close first
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = getNavbarHeight();
        const targetPosition = element.offsetTop - navbarHeight;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // ms
        let start = null;

        const animation = (currentTime) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
      }
    }, 100);
  }, [getNavbarHeight]);

  // Track active section using IntersectionObserver
  useEffect(() => {
    // Improved observer options
    const createObserver = () => {
      const observerOptions = {
        root: null,
        rootMargin: `-${getNavbarHeight()}px 0px -50% 0px`, // More balanced trigger point
        threshold: 0
      };

      let timeoutId = null;
      
      const observerCallback = (entries) => {
        // Clear previous timeout
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        
        // Find the section that is most visible in the viewport
        let mostVisibleEntry = null;
        let highestVisibilityRatio = 0;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Calculate visibility ratio (intersection ratio weighted by position)
            const visibilityRatio = entry.intersectionRatio;
            
            if (visibilityRatio > highestVisibilityRatio) {
              highestVisibilityRatio = visibilityRatio;
              mostVisibleEntry = entry;
            }
          }
        });

        if (mostVisibleEntry) {
          // Add slight delay to prevent flickering during scroll
          timeoutId = setTimeout(() => {
            setActiveSection(mostVisibleEntry.target.id);
          }, 50);
        }
      };

      return new IntersectionObserver(observerCallback, observerOptions);
    };

    const observer = createObserver();

    // Observe all sections
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle resize events
    const handleResize = () => {
      observer.disconnect();
      const newObserver = createObserver();
      
      navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          newObserver.observe(element);
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [navItems, getNavbarHeight]);

  return { activeSection, scrollToSection };
};

export default useSmoothScroll;