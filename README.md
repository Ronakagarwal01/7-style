# 7 Styles Unisex Salon — Luxury Website & Concierge Experience

> Benchmark luxury unisex salon & matrimonial bridal couture sanctuary in Arera Colony, Bhopal. Established 2016.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Ready-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

---

## ✨ Features & Architecture

- **High-Fashion Editorial Aesthetic**: Warm Espresso (`#0A0807`), Warm Ivory (`#FBF8F3`), and Champagne Gold (`#C59D5F`).
- **Interactive 3D Brand Element**: WebGL Three.js sculptural metallic gold "7" with studio lighting and fluid motion.
- **Cinematic Pacing**: Framer Motion orchestration and luxury initial sequence.
- **Dedicated Multi-Page Routing**: 8 comprehensive routes (`/`, `/about`, `/services`, `/bridal`, `/gallery`, `/pricing`, `/reviews`, `/contact`).
- **Mobile First Optimization**:
  - Sticky bottom mobile action bar with direct Phone Call (`+91 89594 45944`), WhatsApp chat, and Appointment Booking.
  - Native horizontal swipeable category filter carousels.
  - Touch-optimized Before/After transformation studio with smooth dragging.
  - Fullscreen clip-path mobile navigation drawer.
  - iOS auto-zoom prevention on form controls.
- **Verified Official Salon Data**:
  - Address: 60, E-2, Arera Colony, Bhopal, MP 462016 (Near 7 No. Stop).
  - 4.7★ based on 697+ Google reviews.
  - Complete 77 verified service rate cards.
  - Verified senior stylist & bridal master team profiles.

---

## 🚀 Cloudflare Pages Deployment Guide

This project is pre-configured for one-click deployment on **Cloudflare Pages**.

### Cloudflare Pages Build Settings:
- **Framework Preset**: `Vite` (or `None`)
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Root Directory**: `/` (default)
- **Node.js Version**: `20` (pre-configured via `.node-version`)

### Pre-configured Cloudflare Files:
- `public/_redirects`: Guarantees Single-Page-App (SPA) routing (`/* /index.html 200`) so deep routes (`/services`, `/pricing`, `/bridal`, etc.) resolve on page refresh without 404 errors.
- `public/_headers`: Security headers (`X-Frame-Options`, `X-Content-Type-Options`) and immutable caching for Vite assets.
- `.node-version`: Tells Cloudflare Pages to use Node 20 LTS.

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

© 2026 7 Styles Unisex Salon, Bhopal.
