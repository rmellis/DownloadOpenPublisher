# Open Publisher - Desktop Experience Landing Page

This repository contains the official download and documentation landing page for **Open Publisher**. Designed to highlight the software's native desktop integration across Windows, macOS, Linux, and FreeBSD, the page serves as a centralized hub for all 9 native release packages, portable versions, and an interactive user guide.

## ✨ Key Web Features

This landing page was built to professional standards with a clean, cohesive teal green and white design system:

* **Instant Segmented OS Switcher:** An Apple-style segmented control right in the hero section that instantly displays download options for Windows, macOS, Linux, or FreeBSD.
* **Smart Client-Side OS Detection:** Automatically detects the visitor's operating system and presents recommended packages with local package icons above the fold.
* **Ribbon & Workspace Showcase:** Interactive Apple-style product tour featuring Interface Overview and all 7 Ribbon tabs (Home, Insert, WordArt, Picture Tools, Page Design, Templates, File Safety).
* **Engineering Spotlights:** Deep architectural explanations of physical units (cm, mm, inches), 300 DPI zero-spillage printing, 4-step atomic save pipelines, and unified cross-platform clipboard parity.
* **72 Client Features Catalog:** Searchable, real-time filtered directory of all 72 technical client enhancements introduced in V5.
* **Knowledge Base Portal:** Direct integration with the official documentation hub at `kb.openpublisher.app`.
* **Keyboard Shortcuts Directory:** Live-filterable reference table for platform accelerators.

## 📂 File Structure

The codebase is modular, lightweight, and separated by concern for easy maintenance:

* `index.html`: The semantic HTML structure and content payload for Open Publisher V5.
* `images/`: Local image assets for ribbon tours, platform previews, and package icons. Swap screenshots and icons directly in this folder without an IDE.
* `style.css`: All styling, Apple-inspired layout, CSS design tokens, and responsive queries.
* `script.js`: Client-side logic for segmented OS switching, all-formats dialog, ribbon tour, and real-time filtering.
* `sitemap.xml`: Search engine sitemap.

## 🚀 How to Use

This project is completely vanilla and requires no build tools, preprocessors, or dependencies. 

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. To edit styles or text, modify the respective `.css`, `.html`, or `.js` files and refresh the page.

## 🛠️ Technologies Used

* **HTML5** (Semantic structure, inline SVGs)
* **CSS3** (Bento Grid, Flexbox, Custom Scrollbars, CSS Variables)
* **Vanilla JavaScript** (OS detection, segmented switching, real-time filtering)

---
*Created for the Open Publisher project.*
