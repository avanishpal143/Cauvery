# Cauvery – The Art of Dosa & Idli 🪷

> Award-level (Awwwards / FWA quality) single-page web experience for **Cauvery**, a premium pure-veg South Indian cafe in Pimpri Chinchwad, Pune.

---

## 🌟 Live Demo & Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Production build
npm run build

# 4. Preview production build
npm run preview
```

The application will start on `http://localhost:5173/`.

---

## 🍽️ Key Features

1. **3D Interactive Platter (React Three Fiber)**:
   - Photoreal procedural golden paper roast dosa roll with ghee glaze.
   - Malli-poo steamed idlis with podi seasoning.
   - 3 stainless steel reflective katoris (coconut chutney, Mysore red chutney, hot drumstick sambar).
   - Dynamic steam particle simulation that intensifies on hovering over the dosa.
   - Floating 3D spices (curry leaves, red chillies, mustard seeds, coconut flakes).
   - Tap-to-ripple interactive feedback on katoris.

2. **Artisanal Design System**:
   - **Colors**: Forest (`#0F2E1D`), Leaf (`#2F6B3F`), Gold (`#E8B04B`), Copper (`#C98A2B`), Chilli (`#B8391F`), Cream (`#FBF5E8`), Sand (`#F2E8D3`), Espresso (`#1B120B`).
   - **Typography**: Fraunces (Variable Display Serif) + Manrope (Modern Body).
   - **Theme Engine**: Light (Cream & Forest) / Dark (Espresso & Gold) with auto-system detection and manual toggle.
   - **Organic Accents**: Subtle paper grain texture and banana-leaf vein dividers.

3. **Smooth Motion & Micro-Interactions**:
   - **Lenis Smooth Scroll**: Buttery 60fps scrolling experience.
   - **Preloader**: Leaf sprout SVG stroke draw + golden dosa roll wipe reveal.
   - **Scroll Velocity Marquee**: Infinite ticker that accelerates when scrolling fast.
   - **Leaf Stem Progress Bar**: Growing vine along the desktop side showing current section.
   - **Custom Gold Cursor**: Desktop trailing aura with blend-mode effects.

4. **Full Menu & WhatsApp Ordering**:
   - Searchable items with instant filter toggles (All, Bestsellers, Jain-friendly).
   - Dish detail popup with calories, preparation time, and ingredient stories.
   - Built-in slide-out cart calculating totals and formulating pre-filled WhatsApp orders for the kitchen.

5. **Local Business & SEO**:
   - Live **"Open Now / Closed"** indicator calculated in real-time according to IST (7:00 AM – 11:00 PM).
   - Embedded Google Map styled for Pimpri Chinchwad, Pune (Near IIBM College, Opp. Chikli Town Hall).
   - Instant WhatsApp table reservation form.
   - Schema.org JSON-LD `Restaurant` structured data for Google local search ranking.
   - PWA ready with `site.webmanifest` and high-res vector favicon.

---

## 🛠️ How to Customize Content

### 1. Edit Menu Items & Prices
Open `src/data/menu.json`:
- To change a price, update the `"price": 140` field.
- To mark an item as Jain-friendly, set `"isJain": true`.
- To tag an item as a bestseller, set `"bestseller": true`.
- To swap photo URLs, edit the `"image"` field with any high-resolution image link.

### 2. Update Offers & Promo Codes
In `src/data/menu.json`, look for the `"offers"` array:
```json
{
  "id": "student-offer",
  "title": "College Special (IIBM & PCMC)",
  "badge": "15% OFF",
  "code": "CAUVERYSTUDENT",
  "description": "Show your valid college student ID card..."
}
```

### 3. Update Phone Number & WhatsApp
- **WhatsApp orders**: Change the target number in `src/context/CartContext.tsx` (default: `+919876543210`).
- **Call buttons**: Update the `tel:+919876543210` in `src/components/layout/MobileActionBar.tsx`, `Navbar.tsx`, and `ContactSection.tsx`.

### 4. Update Operating Hours
Open `src/hooks/useOpenNow.ts`:
- Adjust `openMinute` (default `7 * 60` for 7 AM) and `closeMinute` (default `23 * 60` for 11 PM).

---

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npx vercel
```

### Option 2: Git Integration
1. Push this repository to GitHub / GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**.
3. Import the repository.
4. Framework Preset: **Vite**.
5. Click **"Deploy"**.

---

## 📜 Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React + Custom SVG Brand Suite
- **SEO & PWA**: JSON-LD Schema.org, site.webmanifest, Apple Touch Icons

---

*Made with love in Pune for Cauvery – The Art of Dosa & Idli.*
