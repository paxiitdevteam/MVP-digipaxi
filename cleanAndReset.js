const fs = require('fs');
const path = require('path');

// Define file paths
const baseDir = path.join(__dirname);
const componentsDir = path.join(baseDir, 'components');
const jsDir = path.join(baseDir, 'js');
const cssDir = path.join(baseDir, 'css');
const indexFile = path.join(baseDir, 'index.html');
const componentsFile = path.join(jsDir, 'components.js');
const headerFile = path.join(componentsDir, 'header.html');
const footerFile = path.join(componentsDir, 'footer.html');

// Reset content for each file
const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DigiPaxi</title>
    <link rel="stylesheet" href="css/digipaxi.css">
    <script src="js/components.js" defer></script>
</head>
<body>
    <div id="header-placeholder"></div>
    <main>
        <h1>Welcome to DigiPaxi</h1>
        <p>This is the main page.</p>
    </main>
    <div id="footer-placeholder"></div>
</body>
</html>
`;

const componentsContent = `class ComponentLoader {
    static async init() {
        try {
            console.log('Initializing component loader...');
            await this.loadComponents();
            console.log('Components loaded successfully.');
        } catch (error) {
            console.error('Error during initialization:', error);
            document.body.innerHTML += \`
                <div style="padding: 20px; background: #fee; color: #933; text-align: center;">
                    Error loading components. Please refresh the page.
                </div>
            \`;
        }
    }

    static async loadComponents() {
        const components = {
            header: '/components/header.html',
            footer: '/components/footer.html'
        };

        for (const [id, path] of Object.entries(components)) {
            try {
                console.log(\`Loading component: \${path}\`);
                const element = document.getElementById(\`\${id}-placeholder\`);
                if (!element) {
                    console.error(\`Placeholder for \${id} not found\`);
                    continue;
                }
                const response = await fetch(path);
                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }
                const html = await response.text();
                element.innerHTML = html;
                console.log(\`Successfully loaded \${id}\`);
            } catch (error) {
                console.error(\`Failed to load \${id}: \`, error);
            }
        }
    }
}

ComponentLoader.init();
`;

const headerContent = `<header>
    <h1>DigiPaxi Header</h1>
</header>
`;

const footerContent = `<footer>
    <p>DigiPaxi Footer</p>
</footer>
`;

// Function to write files
function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Reset: ${filePath}`);
}

// Ensure directories exist
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });
if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });
if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir, { recursive: true });

// Write files
writeFile(indexFile, indexContent);
writeFile(componentsFile, componentsContent);
writeFile(headerFile, headerContent);
writeFile(footerFile, footerContent);

console.log('All files have been cleaned and reset successfully!');