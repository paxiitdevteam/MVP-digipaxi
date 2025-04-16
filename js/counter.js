/**
 * Counter.js
 * Animates the counter numbers in the client counter section
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get all counter elements
    const counters = document.querySelectorAll('.counter-number');
    
    // Function to animate counter
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // Animation duration in milliseconds
        const step = target / (duration / 16); // Update every 16ms (60fps)
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to handle scroll event
    function handleScroll() {
        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('counted')) {
                animateCounter(counter);
                counter.classList.add('counted');
            }
        });
    }
    
    // Initial check for elements in viewport
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
}); 