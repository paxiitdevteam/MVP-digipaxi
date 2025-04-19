const { translations } = require("./language");

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.init();
    }

    init() {
        // Wait for DOM content to be loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupLanguage());
        } else {
            this.setupLanguage();
        }
    }

    setupLanguage() {
        // Apply the initial language
        this.applyLanguage(this.currentLang);

        // Add event listeners to language toggle buttons
        const langButtons = document.querySelectorAll('.lang-toggle button');
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.textContent.toLowerCase();
                this.currentLang = lang;
                localStorage.setItem('preferredLanguage', lang);
                this.applyLanguage(lang);
            });
        });
    }

    applyLanguage(lang) {
        console.log(`Applying language: ${lang}`);
        console.log('Translations:', translations[lang]);

        // Load translations for the selected language
        const translation = translations[lang];
        if (!translation) {
            console.error(`No translations found for language: ${lang}`);
            return;
        }

        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translation[key]) {
                element.textContent = translation[key];
            } else {
                console.warn(`Missing translation for key: ${key}`);
            }
        });

        // Update the document language attribute
        document.documentElement.lang = lang;
    }
}

// Initialize the language manager
const languageManager = new LanguageManager();
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
        <script src="js/language.js"></script>
    </div>
</header>

export const translations = {
    en: {
        branding: "DigiPaxi",
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        feedback: "Thank you! Your message has been sent successfully.",
        footer: "DigiPaxi Footer",
        welcome: "Your trusted partner for digital solutions."
    },
    fr: {
        branding: "DigiPaxi",
        home: "Accueil",
        about: "À propos",
        services: "Services",
        contact: "Contact",
        feedback: "Merci ! Votre message a été envoyé avec succès.",
        footer: "DigiPaxi Footer",
        welcome: "Votre partenaire de confiance pour des solutions numériques."
    }
};
