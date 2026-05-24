# Komal Gajjar — Python Developer Portfolio

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?logo=vercel)](https://komalportfolio.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)

A premium, modern personal portfolio website built for Komal Gajjar — an MCA student and aspiring Python Developer. Designed with a recruiter-first approach, featuring a clean neon-lime aesthetic, smooth animations, and fully responsive layout.

---

## Features

- **Hero Section** — Professional introduction with profile image, availability badge, and CTA buttons
- **About Section** — Career objective, bio summary, language proficiency, and core development pillars
- **Skills Showcase** — Filterable skill cards with proficiency indicators
- **Project Portfolio** — Detailed project cards with expandable case study modals
- **Education Timeline** — Elegant chronological academic background display
- **Contact Form** — Formspree-powered contact form with instant submission feedback
- **Resume Download** — One-click PDF resume download from any section
- **Responsive Design** — Optimized for 320px mobile to 1920px ultrawide screens
- **Animations** — Smooth Framer Motion transitions and scroll-reveal effects
- **SEO Optimized** — Open Graph and Twitter Card meta tags for social sharing

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (Motion library) |
| Icons | Lucide React |
| Contact | Formspree |
| Deployment | Vercel |
| Version Control | Git + GitHub |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/taxilj/komalportfolio.git
cd komalportfolio
npm install
npm run dev
```

The development server will start at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
komalportfolio/
├── public/                  # Static assets
│   ├── komal-profile.jpg    # Profile image
│   └── komal-gajjar-resume.pdf
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx   # About section
│   │   ├── Skills.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── Experience.tsx   # Education timeline
│   │   └── Footer.tsx       # Contact section
│   ├── data.ts              # All portfolio content data
│   ├── types.ts             # TypeScript interfaces
│   ├── index.css            # Tailwind + custom styles
│   ├── App.tsx              # Root layout
│   └── main.tsx             # Entry point
├── vercel.json              # Vercel deployment config
├── vite.config.ts
└── package.json
```

---

## Deployment

The site is deployed on Vercel. Every push to the `main` branch triggers an automatic redeployment.

### Deploy Yourself

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

---

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To connect it to your email:

1. Create a free Formspree account
2. Create a new form and copy your form ID
3. Open `src/components/Footer.tsx`
4. Replace `YOUR_FORM_ID` in `FORMSPREE_URL` with your actual form ID

---

## Screenshots

<!-- Add screenshots here -->

| Desktop | Mobile |
|---------|--------|
| ![Desktop](./screenshots/desktop.png) | ![Mobile](./screenshots/mobile.png) |

---

## Contact

- **Name:** Komal Gajjar
- **Email:** komalgajjarj86@gmail.com
- **Phone:** +91 7265 057137
- **LinkedIn:** [linkedin.com/in/komalgajjar](https://linkedin.com/in/komalgajjar)
- **GitHub:** [github.com/komalgajjar](https://github.com/komalgajjar)
- **Portfolio:** [komalportfolio.vercel.app](https://komalportfolio.vercel.app)

---

## License

This project is for educational and portfolio purposes.
