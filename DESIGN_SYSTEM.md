# Cauvery – Design System & Brand Identity

> **"The Art of Dosa & Idli"**  
> Pure-Vegetarian Artisanal South Indian Cafe • Pimpri Chinchwad, Pune

---

## 1. Brand Essence & Personality
- **Warm & Welcoming**: Evoking the warmth of South Indian hospitality, steaming sambar, and bubbling cow ghee.
- **Authentic & Heritage-Rooted**: Drawing inspiration from the fertile riverbanks of Cauvery, Kodagu, Mysore, and Thanjavur temple kitchens.
- **Modern-Premium & Crafted**: Elevated, editorial aesthetic with refined serif typography, tactile textures, and award-winning micro-interactions.
- **Mobile-First**: Optimized for 80%+ mobile traffic with quick thumb-reach actions (Call, WhatsApp, Directions, Cart).

---

## 2. Color Palette & Semantic Tokens

| Token Name | Hex Code | Semantic Role | Light Mode | Dark Mode |
|---|---|---|---|---|
| **Forest** | `#0F2E1D` | Primary deep green, heritage depth | Primary text / brand accents | Background accents |
| **Forest Dark** | `#091C12` | Dark tone for footer and deep contrast | Dark sections | Background layers |
| **Leaf** | `#2F6B3F` | Vibrant natural green | Secondary badges & active states | Highlight accents |
| **Gold** | `#E8B04B` | Warm golden brass & ghee caramelization | Hero accents & buttons | Glowing highlights |
| **Gold Light** | `#F7D488` | Luminous champagne glow | Subheadings | Badges & borders |
| **Copper** | `#C98A2B` | Traditional South Indian vessel warm metal | Prices & subtext | Secondary accents |
| **Chilli** | `#B8391F` | Fiery red chilli badge & alerts | CTA highlights / Bestseller tags | Accent badges |
| **Cream** | `#FBF5E8` | Slow-fermented rice batter softness | Primary background | Text color |
| **Sand** | `#F2E8D3` | Warm tactile card backgrounds | Elevated card surface | Subtle border tints |
| **Espresso** | `#1B120B` | Deep roasted chicory kaapi roast | High-contrast details | Primary dark background |

---

## 3. Typography Hierarchy

### Display Typeface: **Fraunces**
- **Characteristics**: Variable optical sizes, soft serifs, warm organic curves, culinary elegance.
- **Usage**:
  - `Hero Headline`: Fluid `clamp(2.5rem, 6vw, 4.5rem)`, 900 weight, tight line-height `1.08`.
  - `Section Titles`: `clamp(1.75rem, 3.5vw, 3rem)`, 900 weight.
  - `Dish Titles`: 1.25rem - 1.5rem, 800 weight.

### Body & UI Typeface: **Manrope**
- **Characteristics**: Clean, geometric sans-serif with high x-height for readability on mobile screens.
- **Usage**:
  - `Body Text`: 14px - 16px, 400 & 500 weight, line-height 1.6.
  - `Meta / Labels`: 10px - 12px, 600 & 700 weight, letter-spacing `0.15em` to `0.25em` uppercase.

---

## 4. UI Components & Micro-Interactions

### A. 3D Platter & Interactive Canvas
- **Engine**: Three.js + React Three Fiber (`@react-three/fiber`, `@react-three/drei`).
- **Elements**:
  - Procedural crisp golden-brown paper roast dosa roll with roasted caramelization rings and ghee sheen.
  - Malli-poo steamed idlis with porous dimpled urad dal texture and podi dusting.
  - Three reflective stainless steel katoris (white coconut chutney, red Mysore garlic-chilli chutney, amber shallot sambar).
  - Procedural curved banana leaf plate with central stem and lateral vein displacement.
  - Rising steam particle system that intensifies upon hovering over the hot dosa roll.
  - Floating 3D spices (curry leaves, whole dried red chillies, mustard seeds, roasted coconut flakes) that gently drift in depth of field.
  - Interactive click ripple effect upon tapping any chutney katori.

### B. Lenis Smooth Scrolling
- Custom 60fps wheel & touch lerp damping `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`.

### C. Leaf Stem Scroll Progress Bar
- An organic vertical leaf vine growing along the right viewport edge on desktop with interactive leaf node anchors.

### D. Velocity-Reactive Marquee
- Scroll velocity dynamically speeds up the infinite marquee strip during fast swipes and decelerates naturally when idle.

### E. WhatsApp Order Formulation
- Direct-to-kitchen integration that pre-fills formatted WhatsApp messages containing ordered items, quantities, subtotal, and customer table/delivery notes.

---

## 5. Accessibility & Performance Checklist
- **Contrast**: Compliant with WCAG AA ratios across both Light and Dark themes.
- **Reduced Motion**: Fallbacks and non-blocking smooth transitions.
- **PWA Ready**: Web App Manifest, maskable vector icon, theme-color metadata.
- **Structured Data**: Complete Schema.org `Restaurant` & `LocalBusiness` JSON-LD with geo-coordinates, operating hours, cuisine, and menu URLs.
