# Open Publisher - Desktop Experience Landing Page

This repository contains the official download and some documentation landing page for **Open Publisher**. Designed to highlight the software's native desktop integration across Windows, macOS, and Linux, the page serves as a centralized hub for installers, portable versions, and an interactive user guide.

## ✨ Key Web Features

This landing page was built with a focus on modern UI/UX principles, performant animations, and cross-browser compatibility:

* **Dynamic SVG Typography:** The hero section features a custom-built, responsive SVG text arc (`<textPath>`) that perfectly frames the application showcase without relying on static images.
* **Algorithmic Paper Tear Effect:** A procedural "torn paper" transition between the operating system sections. Built with Vanilla JavaScript, it dynamically generates geometric DOM elements to create a seamless, jagged edge.
* **Tactile 3D Buttons:** Custom CSS-only download buttons featuring a 3D pill-shaped design, pronounced drop-shadows, and interactive physical "press" animations on click.
* **Interactive Grid UI:** The User Guide section utilizes CSS Grid with fixed-height cards. To maintain a clean layout regardless of content length, the cards feature custom-styled, theme-matched internal scrollbars (supporting both Webkit and Firefox).
* **Polished Animations:** Includes staggered `fadeUp` entrance animations on load, and a continuous floating radial-glow effect behind the hero showcase.

## 📂 File Structure

The codebase is modular and separated by concern for easy maintenance:

* `index.html` — The semantic HTML structure and content payload.
* `styles.css` — All styling, animations, CSS variables, and responsive media queries.
* `script.js` — The logic for generating the procedural paper-tear borders.

## 🚀 How to Use

This project is completely vanilla and requires no build tools, preprocessors, or dependencies. 

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. To edit styles or text, simply modify the respective `.css` or `.html` files and refresh the page.

## 🛠️ Technologies Used

* **HTML5** (Semantic structure, inline SVGs)
* **CSS3** (Flexbox, Grid, Keyframe Animations, Custom Scrollbars, CSS Variables)
* **Vanilla JavaScript** (DOM manipulation for visual effects)

---
*Created for the Open Publisher project.*
