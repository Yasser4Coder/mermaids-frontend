# Mermaids Web

React + Vite front end for **Mermaids Beauty Salon & Boutique** (Chlef, Algeria).

## Stack

- React 19
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router
- Swiper (promo carousel)

## Getting started

```bash
cd mermaids-web
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start dev server with HMR |
| `npm run build`| Production build to `dist/` |
| `npm run preview` | Preview production build |

After editing JSX, you can normalize accidental `motion` tags:

```bash
python scripts/fix-motion-tags.py
```

## Routes

| Path | Page |
| ---- | ---- |
| `/` | Home |
| `/services` | Full services menu |
| `/book` | Booking wizard |
| `/shop` | Boutique |
| `/shop/:slug` | Product detail |
| `/checkout` | Cart |
| `/account` | Demo sign-in |

Static assets live in `public/images/`.
