<div className="app-container">
    <div id="header-placeholder"></div>
    <div id="footer-placeholder"></div>
</div>

// Function to load header
function loadHeader() {
    document.getElementById('header-placeholder').innerHTML = `
    <header>
        <div class="branding">
            <h1 data-translate="branding">DigiPaxi</h1>
        </div>
        <nav class="navbar">
            <ul>
                <li><a href="index.html" data-translate="home">Home</a></li>
                <li><a href="about.html" data-translate="about">About</a></li>
                <li><a href="services.html" data-translate="services">Services</a></li>
                <li><a href="contact.html" data-translate="contact">Contact</a></li>
            </ul>
        </nav>
        <div class="lang-toggle">
            <button onclick="languageManager.applyLanguage('en')">EN</button>
            <button onclick="languageManager.applyLanguage('fr')">FR</button>
        </div>
    </header>
    `;
}

// Function to load footer
function loadFooter() {
    document.getElementById('footer-placeholder').innerHTML = `
    <footer>
        <div class="footer-content">
            <div class="contact-info">
                <h3>Contact Us</h3>
                <p>Address: 49 Avenue de Boissy, 94380, France</p>
                <p>Email: tangongkp@yahoo.com</p>
                <p>Phone: +33 7 82 39 13 11</p>
            </div>
            <div class="social-media">
                <h3>Follow Us</h3>
                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i> Facebook</a> |
                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i> Twitter</a> |
                <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a> |
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i> Instagram</a> |
                <a href="https://tiktok.com" target="_blank"><i class="fab fa-tiktok"></i> TikTok</a> |
                <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i> YouTube</a> |
                <a href="https://pinterest.com" target="_blank"><i class="fab fa-pinterest"></i> Pinterest</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2025 DigiPaxi. All rights reserved.</p>
            <p>Disclaimer: The information provided on this website is for general informational purposes only.</p>
        </div>
    </footer>
    `;
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
