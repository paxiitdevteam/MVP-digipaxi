/**
 * Environment Variable Loader
 * This utility helps load environment variables in a secure way
 */

class EnvLoader {
    constructor() {
        this.env = {};
        this.loaded = false;
    }

    /**
     * Load environment variables from .env file
     * In a real application, this would be done server-side
     * This is a simplified version for development purposes
     */
    load() {
        if (this.loaded) return this.env;

        // In a real application, this would fetch from a server endpoint
        // For now, we'll use the config.js file
        if (window.DigiPaxiConfig) {
            this.env = this._flattenConfig(window.DigiPaxiConfig);
        }

        this.loaded = true;
        return this.env;
    }

    /**
     * Get an environment variable
     * @param {string} key - The environment variable key
     * @param {any} defaultValue - Default value if key doesn't exist
     * @returns {any} The environment variable value
     */
    get(key, defaultValue = null) {
        if (!this.loaded) this.load();
        return this.env[key] !== undefined ? this.env[key] : defaultValue;
    }

    /**
     * Check if an environment variable exists
     * @param {string} key - The environment variable key
     * @returns {boolean} Whether the key exists
     */
    has(key) {
        if (!this.loaded) this.load();
        return this.env[key] !== undefined;
    }

    /**
     * Flatten nested config object into dot notation keys
     * @param {Object} obj - The config object
     * @param {string} prefix - The prefix for nested keys
     * @returns {Object} Flattened object with dot notation keys
     */
    _flattenConfig(obj, prefix = '') {
        return Object.keys(obj).reduce((acc, key) => {
            const prefixedKey = prefix ? `${prefix}_${key.toUpperCase()}` : key.toUpperCase();
            
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                Object.assign(acc, this._flattenConfig(obj[key], prefixedKey));
            } else {
                acc[prefixedKey] = obj[key];
            }
            
            return acc;
        }, {});
    }
}

// Create a singleton instance
const envLoader = new EnvLoader();

// Export the singleton instance
export default envLoader;

// For non-module environments
if (typeof window !== 'undefined') {
    window.EnvLoader = envLoader;
} 