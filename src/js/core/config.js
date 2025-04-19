/**
 * DigiPaxi Configuration
 * This file loads environment variables and provides configuration for the application
 */

// Load environment variables from .env file
// Note: In a production environment, these would be loaded server-side
// This is a simplified version for development purposes

const config = {
    // Application Settings
    appName: 'DigiPaxi',
    appEnv: 'development',
    appDebug: true,
    appUrl: 'http://localhost:3000',

    // Contact Information
    contact: {
        email: 'tangongkp@yahoo.com',
        phone: '+33782391311',
        address: '49 Avenue Lucie Aubrac',
        city: 'Bonneuil Sur Marne',
        postal: '94380',
        country: 'France'
    },

    // Social Media Links
    social: {
        facebook: 'https://facebook.com/digipaxi',
        twitter: 'https://twitter.com/digipaxi',
        linkedin: 'https://linkedin.com/company/digipaxi',
        instagram: 'https://instagram.com/digipaxi',
        tiktok: 'https://tiktok.com/@digipaxi',
        youtube: 'https://youtube.com/c/digipaxi'
    },

    // API Keys
    api: {
        googleAnalytics: 'UA-XXXXXXXXX-X',
        recaptchaSiteKey: 'your_recaptcha_site_key',
        recaptchaSecretKey: 'your_recaptcha_secret_key'
    },

    // Newsletter Service
    newsletter: {
        apiKey: 'your_newsletter_api_key',
        listId: 'your_newsletter_list_id'
    },

    // Chat Agent Settings
    chatAgent: {
        name: 'Malory',
        title: 'Digital Assistant'
    },

    // Affiliate Links
    affiliate: {
        coolors: 'https://coolors.co/?ref=paxiit',
        envato: 'https://elements.envato.com/?ref=paxiit',
        canva: 'https://www.canva.com/?ref=paxiit'
    },

    // Security
    security: {
        jwtSecret: 'your_jwt_secret_key',
        sessionSecret: 'your_session_secret_key'
    }
};

// Export the configuration
export default config;

// For non-module environments
if (typeof window !== 'undefined') {
    window.DigiPaxiConfig = config;
} 