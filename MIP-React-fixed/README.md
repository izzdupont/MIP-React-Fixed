# Midwest IT Provider — React (Vite + Tailwind)

A lightweight single‑page React site based on your current www.midwestitprovider.com layout and content structure.

## ✨ Features
- Vite + React 18
- Tailwind CSS
- Responsive, accessible components
- Sections: Hero, Services, About, Partners, Contact, Footer
- Simple contact form (Formspree placeholder)

## 🚀 Getting Started

```bash
# install deps
npm install

# start dev server
npm run dev

# production build
npm run build

# preview build locally
npm run preview
```

## 📦 Deploy to GitHub Pages (optional)
1. Create a GitHub repo and push this project.
2. In `package.json`, the `deploy` script uses `gh-pages`. Install deps and run:
   ```bash
   npm run build
   npm run deploy
   ```
3. In your repo settings, enable GitHub Pages to serve from the `gh-pages` branch.

> For custom domains or more advanced hosting, Netlify or Vercel are great options.

## 🖼️ Images & Logos
Place your images in `/public/images/`. This template includes placeholder SVGs:
- `logo.svg`
- `hero-illustration.svg`
- `about-illustration.svg`
- `partner-*.svg`

Replace them with your real assets whenever you’re ready.

## 📝 Contact Form
The form uses a Formspree placeholder endpoint. Replace `https://formspree.io/f/your-id` in `src/components/Contact.jsx` with your real endpoint or wire it to your backend.

## ⚙️ Customization
- Update the color theme in `tailwind.config.js`.
- Edit copy in the components inside `src/components/`.
- Add more pages/routes using `react-router-dom` if needed.

---

© Midwest IT Provider
