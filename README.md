# Ashabul Yeamin Musfir - Personal Portfolio Website (musfir-portfolio)

A sleek, ultra-responsive, high-performance personal developer portfolio website inspired by modern Bento and Neo-glassmorphism dark UI designs.

![Portfolio Preview](./assets/images/profile.png)

---

## 🌟 Key Features

- **Pixel-Perfect Aesthetic**: Styled with Obsidian dark background, subtle card borders, and warm golden amber accents (`#f5b742`).
- **Responsive Dual-Column Layout**:
  - **Desktop (≥ 1024px)**: Sticky profile card on the left with contact details & socials, alongside a scrollable content stream on the right.
  - **Tablet & Mobile (< 1024px)**: Smooth stacked reflow, touch-friendly cards, and adaptive typography.
- **Light & Dark Theme**: Built-in instant theme switcher with `localStorage` persistence and automatic icon changes (Moon / Sun).
- **CV / Resume Viewer**: Instant printable resume preview modal with one-click "Print / Save PDF" feature.
- **Centralized Data Store (`data.js`)**: All personal information, skills, education, awards, and certifications live in a single, well-structured file for effortless updating.
- **Zero Build Dependencies**: Runs out of the box in any web browser without needing Node.js, Webpack, or npm installations.

---

## 📁 Project Structure

```
musfir-portfolio/
├── index.html                   # Semantic HTML5 entrypoint with SEO & OpenGraph tags
├── README.md                    # Project documentation & deployment guide
└── assets/
    ├── css/
    │   └── styles.css           # Design tokens, glassmorphism, responsive styles
    ├── js/
    │   ├── data.js              # Centralized data store (all portfolio content)
    │   └── app.js               # Dynamic renderer, theme toggle, modals & scrollspy
    └── images/
        └── profile.png          # High-resolution profile portrait
```

---

## 🚀 Quick Start (Run Locally)

### Option 1: Direct Double-Click
Simply double-click `index.html` in your file explorer to open it directly in Chrome, Edge, Safari, or Firefox.

### Option 2: Local Python Server
From this project directory, run:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Free Deployment Guide (Get Your Shareable Link)

### Method 1: GitHub Pages (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial musfir-portfolio release"
   ```
2. Create a new public repository on GitHub (e.g., `musfir-portfolio` or `<your-username>.github.io`).
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/musfir-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to **Repository Settings** > **Pages** > Under **Branch**, select `main` and `/ (root)` > Click **Save**.
5. Your website will be live at: `https://<your-username>.github.io/musfir-portfolio/`

### Method 2: Vercel (Instant Deploy)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** > **Project** > Import your GitHub repository.
3. Click **Deploy**. Vercel gives you an instant SSL live URL (e.g., `https://musfir-portfolio.vercel.app`).

### Method 3: Netlify (Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `musfir-portfolio` folder directly into the browser window.
3. Instant live link generated immediately!

---

## ✏️ How to Customize Your Details

Edit `assets/js/data.js` to modify:
- **Personal Info**: Change email, phone number, location, or social handles.
- **Hero Title & Bio**: Update your personal introduction.
- **Skills**: Add or remove technologies from categorized grids.
- **Education & Awards**: Update dates, CGPA, courses, and honors.

---

© 2026 Ashabul Yeamin Musfir. Crafted for speed, responsiveness, and elegance.