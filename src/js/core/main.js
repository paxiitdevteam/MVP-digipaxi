// Main JavaScript file for DigiPaxi website
document.addEventListener('DOMContentLoaded', function() {
    // Ensure components are loaded
    if (typeof ComponentLoader !== 'undefined') {
        ComponentLoader.init();
    } else {
        console.error('ComponentLoader not found! Check if components.js is loaded correctly.');
        
        // Fallback: Load components directly
        loadComponentsDirectly();
    }
    
    // Initialize counter animation
    const counters = document.querySelectorAll('.counter-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
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
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
});

// Fallback function to load components directly
async function loadComponentsDirectly() {
    try {
        // Load header
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            const headerResponse = await fetch('components/header.html');
            if (headerResponse.ok) {
                const headerHtml = await headerResponse.text();
                headerPlaceholder.innerHTML = headerHtml;
            }
        }
        
        // Load footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            const footerResponse = await fetch('components/footer.html');
            if (footerResponse.ok) {
                const footerHtml = await footerResponse.text();
                footerPlaceholder.innerHTML = footerHtml;
            }
        }
    } catch (error) {
        console.error('Error loading components directly:', error);
    }
} 