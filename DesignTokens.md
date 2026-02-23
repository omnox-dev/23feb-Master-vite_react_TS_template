# 💎 STARtTalking: Liquid Glass Design Tokens

This is the **Master Style Guide** for the Liquid Glass UI. All modules must adhere to these tokens to ensure the application feels like a single, premium product.

## 🎨 Color Palette
The app uses a dark-mode-first approach with high-translucency overlays.

| Token | CSS / Tailwind | Usage |
| :--- | :--- | :--- |
| **Primary BG** | `linear-gradient(135deg, #1e293b, #0f172a)` | Page background |
| **Glass White** | `rgba(255, 255, 255, 0.7)` | Standard module background |
| **Glass Border** | `rgba(255, 255, 255, 0.2)` | Border for cards and panels |
| **Active Accent** | `text-blue-400` / `bg-blue-500/20` | Highlights, active navigation |
| **Muted Text** | `text-white/60` | Captions, labels, secondary info |
| **Highlight Text** | `text-white/90` | Titles, primary body text |

---

## ✨ Glass & Liquid Effects
The core "iPhone" feel comes from depth and blur.

- **Standard Blur:** `backdrop-blur-xl` (20px).
- **Navbar Blur:** `backdrop-blur-md` (12px).
- **Box Shadow:** `0 8px 32px 0 rgba(0, 0, 0, 0.37)`.
- **Transitions:** Always use `transition-all duration-300 ease-in-out` for hover states.

---

## 📐 Shape & Spacing
We use "Squircle" corners to match the iOS native aesthetics.

- **Main Panel Radius:** `rounded-[2.5rem]` or `3rem`.
- **Component Radius:** `rounded-2xl` (for buttons, inputs).
- **Pill Radius:** `rounded-full` (for tags and chips).
- **Core Padding:** Use `p-6` for small cards, `p-12` for large module containers.

---

## 🖋️ Typography (Apple Native Feel)
- **Primary Font:** `Inter` (Fallback: `-apple-system, BlinkMacSystemFont`).
- **Headings:** `font-bold tracking-tight`.
- **Body:** `font-light` or `font-normal`.
- **Subtext:** `italic font-light text-sm text-white/40`.

---

## 🛠️ Global Class Reference
Use these classes instead of writing custom CSS.

| Class | Description |
| :--- | :--- |
| `.glass-panel` | The main card wrapper. Includes blur, border, and radius. |
| `.btn-glass` | Premium button with subtle hover animation. |
| `.nav-glass` | Specialized dark-frosted glass for navigation bars. |

---

## 📱 Mobile-First Checklist
- [ ] Are my padding values appropriate for a 390px wide screen?
- [ ] Is my touch target (buttons) at least `44px` in height?
- [ ] Does my `glass-panel` have enough contrast against the gradient background?

---
**Architect Note:** "Consistency is the difference between an app and an experience. Stay within these tokens."
