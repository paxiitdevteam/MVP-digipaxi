<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DigiPaxi</title>
    <link rel="stylesheet" href="css/digipaxi.css">
    <script src="js/components.js" defer></script>
    <script>
        class ComponentLoader {
            static async loadComponents() {
                const components = {
                    header: '/components/header.html',
                    footer: '/components/footer.html'
                };

                for (const [id, path] of Object.entries(components)) {
                    try {
                        console.log(`Loading component: ${path}`);
                        const element = document.getElementById(`${id}-placeholder`);
                        if (!element) {
                            console.error(`Placeholder for ${id} not found`);
                            continue;
                        }
                        const response = await fetch(path);
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const html = await response.text();
                        element.innerHTML = html;
                        console.log(`Successfully loaded ${id}`);
                        console.log(`Injected content for ${id}:`, html); // Debugging log
                    } catch (error) {
                        console.error(`Failed to load ${id}:`, error);
                    }
                }
            }
        }

        ComponentLoader.loadComponents();
    </script>
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
