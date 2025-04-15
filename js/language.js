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
        // Add language toggle button if it doesn't exist
        if (!document.querySelector('.lang-toggle')) {
            const nav = document.querySelector('.main-nav');
            if (nav) {
                const langToggle = document.createElement('button');
                langToggle.className = 'lang-toggle';
                langToggle.innerHTML = `<span class="lang-text">${this.currentLang.toUpperCase()}</span>`;
                nav.prepend(langToggle);
                
                langToggle.addEventListener('click', () => this.toggleLanguage());
            }
        }

        // Apply initial language
        this.applyLanguage(this.currentLang);
    }

    toggleLanguage() {
        console.log('Toggling language...');
        this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
        localStorage.setItem('preferredLanguage', this.currentLang);
        this.applyLanguage(this.currentLang);
    }

    applyLanguage(lang) {
        console.log(`Applying language: ${lang}`);
        const langButton = document.querySelector('.lang-toggle .lang-text');
        if (langButton) {
            langButton.textContent = lang.toUpperCase();
        }

        document.querySelectorAll('[data-fr]').forEach(element => {
            if (lang === 'fr') {
                element.dataset.original = element.textContent.trim();
                element.textContent = element.dataset.fr;
            } else {
                element.textContent = element.dataset.original || element.textContent;
            }
        });

        document.documentElement.lang = lang;
    }
}

// Initialize language manager
const languageManager = new LanguageManager();

{/* Filepath: c:\Users\PC-PAXIIT\Documents\paxiitdevsite\components\header.html */}
<div>
    <header>
        <h1>DigiPaxi Header</h1>
    </header>

    {/* Filepath: c:\Users\PC-PAXIIT\Documents\paxiitdevsite\components\footer.html */}
    <footer>
        <p>DigiPaxi Footer</p>
    </footer>
</div>