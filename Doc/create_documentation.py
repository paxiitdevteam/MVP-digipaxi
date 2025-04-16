import os

# Define the file path and content
file_path = os.path.join("Documents", "project-stage-documentation.md")
content = """# DigiPaxi Website - Current Stage Documentation

## **Project Overview**
The DigiPaxi website is a professional platform designed to showcase the services and mission of DigiPaxi. It includes a header, main content, and footer, with a focus on clean design and responsiveness.

---

## **Current Features**

### 1. **Header**
- Branding: Displays the DigiPaxi logo and name.
- Navigation: Links to `Home`, `About`, `Services`, and `Contact` pages.
- Language Selector: Dropdown for selecting the website's language.

### 2. **Main Content**
- The "About" page contains placeholder content: `This is the About page.`

### 3. **Footer**
- **Quick Links**: Links to `Privacy Policy`, `Terms and Conditions`, `Cookies Policy`, and `Sitemap`.
- **Contact Information**: Includes address, email, and phone number.
- **Social Media Links**: Links to Facebook, Twitter, LinkedIn, and Instagram with placeholder icons.
- **Footer Bottom**: Displays a copyright notice and disclaimer.

### 4. **Styling**
- The website uses inline CSS for styling.
- The footer and header are styled for a clean and professional look.
- Links have hover effects for better interactivity.

---

## **Next Steps**
1. **Content Enhancement**:
   - Add meaningful content to placeholder pages.
2. **Contact Form Implementation**:
   - Create a functional contact form on the `Contact` page.
3. **Design Improvements**:
   - Add a hero section or banner to the homepage.
   - Use CSS animations for hover effects.
4. **Responsiveness**:
   - Ensure the website is fully responsive on all devices.
5. **Deployment**:
   - Host the website on a platform like GitHub Pages or Netlify.

---

## **Current Files**
- `index.html`: Main HTML file with header, footer, and placeholder content.
- `css/digipaxi.css`: External CSS file for styling (currently unused, inline CSS is applied).

---

## **Git Repository**
- The project is version-controlled and pushed to GitHub.
- Repository URL: [https://github.com/paxiitdevteam/digipaxi](https://github.com/paxiitdevteam/digipaxi)

---

## **Validation Checklist**
- Ensure all links are functional.
- Verify that the footer and header are styled consistently.
- Test the website for basic responsiveness.

---

*Document created on April 15, 2025.*
"""

# Create the file and write the content
os.makedirs("Documents", exist_ok=True)  # Ensure the Documents folder exists
with open(file_path, "w", encoding="utf-8") as file:
    file.write(content)

print(f"Documentation file created at: {file_path}")