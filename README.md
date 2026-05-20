# 🧁 Nami's Pastry — Website

Official website for **Nami's Pastry**, an artisanal pastry shop based in Cotonou, Bénin. Built to showcase the bakery's custom cakes, mini entremets, pastries, and chocolates — and to let customers order directly via WhatsApp.

**Live:** _coming soon_

---

## ✨ Features

- **Animated hero section** — logo, tagline, photo collage of real creations, and a direct order CTA
- **About section** — bakery story and core values (Creativity, Quality, Passion, Custom Orders)
- **Specialties section** — 4 product category cards with hover effects and a WhatsApp CTA banner
- **Gallery** — 18 real product photos with category filters (Anniversaire, Mini Entremets, Pâtisseries, Chocolats, Événements) and a lightbox viewer
- **Order section** — step-by-step guide + a smart form that pre-fills and sends a structured order message via WhatsApp
- **Footer** — brand identity, navigation links, contact info, hours, and social links
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **WhatsApp & Instagram integration** — direct links to the bakery's real accounts

---

## 🛠️ How It Was Built

This project was built from scratch using **React + Vite** without any UI framework, keeping the bundle lean and the design fully custom.

### Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | Component-based UI |
| **Vite 5** | Fast dev server and build tool |
| **Plain CSS Modules** | Per-component scoped styles, no Tailwind or styled-components |
| **Google Fonts** | Playfair Display (headings) + Poppins (body) |
| **WhatsApp API** | `wa.me` deep links for direct chat and catalog |
| **IntersectionObserver API** | Scroll-triggered entrance animations on every section |

### Architecture

```
src/
├── components/
│   ├── Navigation.jsx   # Fixed nav with scroll detection, mobile burger menu
│   ├── Hero.jsx         # Animated hero with photo collage and stats strip
│   ├── About.jsx        # Bakery story with stacked image layout
│   ├── Specialties.jsx  # Product category cards + WhatsApp CTA banner
│   ├── Gallery.jsx      # Filterable photo grid with lightbox viewer
│   ├── Order.jsx        # 3-step guide + WhatsApp order form + contact card
│   └── Footer.jsx       # 4-column footer with brand, links, and contact
├── App.jsx              # Root layout
└── index.css            # Global design tokens (colors, fonts, animations)
public/
├── logo.png             # Nami's Pastry official logo (background removed)
└── images/              # 18 real product photos
```

### Design System

All colors and typography are defined as CSS custom properties in `index.css`:

```css
--pink: #e91e8c        /* brand pink */
--gold: #c9a84c        /* accent gold */
--pink-pale: #fce4ec   /* soft tint for cards/badges */
--font-display: 'Playfair Display'
--font-body: 'Poppins'
```

### Order Form Flow

The contact form collects: name, WhatsApp number, event type, date, and custom message. On submit, it constructs a pre-formatted message and opens it directly in WhatsApp via `wa.me/22966166244?text=...` — no backend needed.

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/Yerima18/namis-pastry.git
cd namis-pastry

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

---

## 📸 Credits

All product photography by **Nami's Pastry**
Instagram: [@namis_pastry](https://www.instagram.com/namis_pastry/)
WhatsApp: [+229 66 16 62 44](https://wa.me/c/22966166244)

---

## 📄 License

This project is private and built exclusively for Nami's Pastry.
