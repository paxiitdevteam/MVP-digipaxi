// Cleanup script for DigiPaxi website
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is a legitimate placeholder
    function isLegitimatePlaceholder(element) {
        // Header and footer placeholders are legitimate
        if (element.id === 'header-placeholder' || element.id === 'footer-placeholder') {
            return true;
        }
        
        // Form input placeholders are legitimate
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            return true;
        }
        
        // Textarea placeholders are legitimate
        if (element.tagName === 'TEXTAREA' && element.hasAttribute('placeholder')) {
            return true;
        }
        
        return false;
    }

    // Function to clean up unnecessary placeholders
    function cleanupPlaceholders() {
        const elements = document.querySelectorAll('[id*="placeholder"], [class*="placeholder"]');
        elements.forEach(element => {
            if (!isLegitimatePlaceholder(element)) {
                // Just mark for review without visual changes
                element.dataset.needsReview = 'true';
            }
        });
    }

    // Function to check for missing images
    function checkMissingImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.src || 
                img.src.includes('placeholder') || 
                img.src.endsWith('undefined') || 
                img.src.endsWith('null') ||
                img.alt.toLowerCase().includes('placeholder')) {
                // Just mark for review without visual changes
                img.dataset.needsReview = 'true';
            }
        });
    }

    // Run cleanup quietly
    cleanupPlaceholders();
    checkMissingImages();
}); 