# DigiPaxi Development Site

A modern, professional website for DigiPaxi showcasing services, certifications, and expertise in digital solutions.

## 🎯 Project Overview

DigiPaxi's development site is built with:
- Modern HTML5, CSS3, and JavaScript
- Responsive design principles
- Modular component architecture
- Internationalization support (English/French)

## 📁 Project Structure

```
PAXIITDEVSITE/
├── assets/            # Static assets (images, icons, etc.)
│   ├── certifications/
│   ├── images/
│   └── logos/
├── components/        # Reusable UI components
├── css/              # Stylesheets
├── js/               # JavaScript files
├── services/         # Service pages
└── certifications_showcase/  # Certification display
```

## ✅ PROJECT RULES (STRICT COMPLIANCE)

To maintain consistency, avoid mix-ups, and ensure clean implementation throughout the project, the following rules **must be strictly followed**:

- 🚫 No experimentation  
- 🚫 No trial and error  
- ✅ Follow the **exact approved plan**  
- ✏️ Make **precise changes only**  
- ❌ Do **not create duplicate files**  
- 🔁 Focus on **one task at a time**  
- 🧩 Use the **validated template structure** for all pages and save changes  
- 💾 **Back up the current stable version** before applying new changes  
- 📁 **Use consistent naming conventions** for all files and folders  
- 📝 **Log all changes** (with timestamp and purpose) in a changelog or commit message  
- 🧪 **Test after each change** before proceeding to the next step  
- 📐 Never update multiple components in one change — isolate each task  
- 📂 **Only work within the defined folder structure** — no exceptions  
- 📦 Use **only verified assets** (CSS, JS, images) from the core library  
- 🔧 Do **not edit minified or auto-generated files manually** — edit the source  
- ✅ Always confirm **success criteria** before marking a task as complete

## 🎨 Design System

### Colors
```css
--primary-color: #14281d;    /* Main brand color */
--primary-dark: #0d1a13;     /* Darker shade */
--primary-light: #355834;    /* Lighter shade */
--accent-1: #6e633d;        /* Primary accent */
--accent-2: #c2a878;        /* Secondary accent */
--accent-3: #f1f5f2;        /* Light accent */
```

### Typography
- Primary Font: 'Inter', sans-serif
- Headings: 700 weight
- Body: 400 weight
- Sizes: Follow the defined CSS variables (--font-size-*)

## 🔧 Development Guidelines

### Component Creation
1. Create component in `/components` directory
2. Follow the template structure
3. Use CSS variables for consistency
4. Test across all breakpoints

### Style Updates
1. Use the existing CSS variables
2. Follow BEM naming convention
3. Add responsive styles using defined breakpoints
4. Test changes in all supported browsers

### JavaScript Implementation
1. Use ES6+ features
2. Follow modular pattern
3. Implement error handling
4. Add appropriate comments
5. Test functionality thoroughly

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 1024px) { }
```

## 🔄 Version Control

- Create meaningful commit messages
- Follow the branching strategy
- Document all changes in CHANGELOG.md
- Create backups before major changes

## 📋 Testing Checklist

Before deploying any changes:
1. Cross-browser testing
2. Responsive design verification
3. Performance check
4. Accessibility compliance
5. Content accuracy
6. Link validation
7. Form functionality
8. Image optimization

## 📚 Documentation

All new features, components, or significant changes must be documented:
1. Update README.md when needed
2. Document component usage
3. Add JSDoc comments for JavaScript
4. Update CHANGELOG.md

## 🚀 Deployment

1. Backup current version
2. Run all tests
3. Optimize assets
4. Update version number
5. Deploy to staging
6. Verify functionality
7. Deploy to production

## 📞 Support

For technical support or questions:
- Email: support@digipaxi.com
- Documentation: [Internal Wiki]
- Issue Tracking: [Project Management Tool]

## DigiPaxi Development Setup

### Environment Configuration

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your actual configuration values:
   - API keys
   - Database credentials
   - Service configurations
   - Security secrets

3. Never commit the `.env` file to version control
   - The `.env` file is already in `.gitignore`
   - Only commit `.env.example` as a template

4. For production:
   - Use different environment variables
   - Keep production credentials secure
   - Use environment-specific files (e.g., `.env.production`)

### Security Notes

- Keep your `.env` file secure and never share it
- Rotate secrets regularly
- Use different credentials for development and production
- Consider using a secrets management service for production

---

© 2024 DigiPaxi. All rights reserved. 