# Environment Variables for DigiPaxi

This document explains how to use environment variables in the DigiPaxi project.

## Overview

Environment variables are used to store configuration settings, API keys, and other sensitive information that should not be hardcoded in your application. This helps with:

- Security: Keeping sensitive information out of your codebase
- Configuration: Easily changing settings between different environments (development, staging, production)
- Deployment: Simplifying deployment across different environments

## Files

The project includes the following files for managing environment variables:

- `.env`: Contains the actual environment variables (not committed to version control)
- `js/config.js`: JavaScript configuration file that provides access to environment variables
- `js/env-loader.js`: Utility for loading and accessing environment variables

## Setting Up Environment Variables

1. Copy the `.env` file to your local environment
2. Update the values in the `.env` file with your actual configuration
3. Make sure the `.env` file is included in your `.gitignore` to prevent it from being committed

## Using Environment Variables in JavaScript

### Basic Usage

```javascript
// Import the environment loader
import envLoader from './js/env-loader.js';

// Load environment variables
envLoader.load();

// Get an environment variable
const apiKey = envLoader.get('API_GOOGLEANALYTICS');
console.log(apiKey); // UA-XXXXXXXXX-X

// Check if an environment variable exists
if (envLoader.has('API_RECAPTCHA_SITE_KEY')) {
    // Do something with the reCAPTCHA site key
}

// Get an environment variable with a default value
const debugMode = envLoader.get('APP_DEBUG', false);
```

### Using the Config Object

```javascript
// Import the config object
import config from './js/config.js';

// Access configuration values
console.log(config.appName); // DigiPaxi
console.log(config.contact.email); // tangongkp@yahoo.com
console.log(config.social.facebook); // https://facebook.com/digipaxi
```

## Security Considerations

- Never commit the `.env` file to version control
- Use environment-specific `.env` files (e.g., `.env.development`, `.env.production`)
- Consider using a secrets management service for production environments
- Be cautious about exposing environment variables in client-side code

## Adding New Environment Variables

1. Add the new variable to the `.env` file
2. Update the `config.js` file to include the new variable
3. Document the new variable in this README

## Best Practices

- Use descriptive names for environment variables
- Group related variables together
- Include comments to explain the purpose of each variable
- Use consistent naming conventions (e.g., all uppercase with underscores)
- Provide default values where appropriate

## Troubleshooting

If environment variables are not loading correctly:

1. Check that the `.env` file exists and is properly formatted
2. Verify that the variable names match between `.env` and `config.js`
3. Ensure that the environment loader is initialized before accessing variables
4. Check for typos in variable names 