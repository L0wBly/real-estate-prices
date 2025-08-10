# 🏠 Real Estate Prices — Next.js + Prismic Landing Page

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Prismic](https://img.shields.io/badge/Prismic-CMS-blueviolet?logo=prismic)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)

## 🔗 Live Demo
[**View the website**](https://your-vercel-url.vercel.app) — hosted on Vercel.

## 📸 Screenshot
![Real Estate Landing Page Screenshot](public/screenshot.png)

---

## 📌 Project Overview
This project is a **real estate landing page** built with **Next.js (App Router)**, **Prismic CMS**, and **Slice Machine**.  
It is designed to be **SEO-friendly**, easily customizable, and fully managed through Prismic without touching the code for content updates.

The website dynamically renders pages based on **UIDs** from Prismic documents, allowing the creation of multiple location-specific landing pages such as property prices per district.

The layout and content are split into reusable **Slices**, enabling flexible content management and rapid deployment of new pages.

---

## ✨ Key Features
- **Next.js App Router** with Server-Side Rendering (SSR) and Static Site Generation (SSG)
- **Prismic + Slice Machine** for headless content management
- **Reusable Slices**:
  - `TitleSection` — Hero title and intro text
  - `PriceBlock` — Display apartment and house prices
  - `VariationBlock` — Price variation chart over 12 months
  - `NeighborhoodsList` — Styled list of neighborhoods
  - `Faq` — Frequently Asked Questions
  - `CtaBlock` — Call-to-action button with external link
- **Dynamic Routing**: `src/app/[uid]/page.tsx`
- **Tailwind CSS** for modern, responsive styling
- **SEO Optimizations**: Meta tags, Open Graph, and clean URLs
- **Vercel Deployment** with automatic builds from GitHub

---

## 🛠️ Tech Stack & Tools

**Framework & Languages**
- [Next.js 14+](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [React 18+](https://react.dev/)

**CMS & Content**
- [Prismic](https://prismic.io/) — Headless CMS
- [Slice Machine](https://prismic.io/slice-machine) — Visual slice builder

**Styling**
- [Tailwind CSS](https://tailwindcss.com/)
- PostCSS & Autoprefixer

**Development Tools**
- ESLint (Code linting)
- Prettier (Code formatting)
- Git & GitHub (Version control)
- Vercel (Hosting & CI/CD)

**Visualization**
- Chart library for displaying variation trends (e.g. [Recharts](https://recharts.org/) if installed)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/L0wBly/real-estate-prices.git
cd real-estate-prices
```

### 2️⃣ Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Configure environment variables
Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
PRISMIC_REPOSITORY_NAME=your-repo-name
PRISMIC_ACCESS_TOKEN=your-access-token-if-private
PRISMIC_PREVIEW_SECRET=random-preview-secret
```

### 4️⃣ Run Slice Machine (for slice development)
```bash
npm run slicemachine
# open http://localhost:9999
```

### 5️⃣ Start the development server
```bash
npm run dev
# open http://localhost:3000
```

---

## 📂 Project Structure
```
.
├─ src/
│  ├─ app/
│  │  ├─ [uid]/page.tsx      # Dynamic page fetching Prismic content
│  │  └─ layout.tsx          # Global layout
│  ├─ slices/                # Slice components
│  │  ├─ TitleSection/
│  │  ├─ PriceBlock/
│  │  ├─ VariationBlock/
│  │  ├─ NeighborhoodsList/
│  │  ├─ Faq/
│  │  └─ CtaBlock/
│  ├─ styles/                # Tailwind global styles
│  └─ lib/                   # Prismic client and helpers
├─ prismicio-types.d.ts      # Generated types from Prismic
├─ prismicio.ts               # Prismic client setup
├─ tailwind.config.js         # Tailwind config
├─ slicemachine.config.json   # Slice Machine config
└─ package.json
```

---

## 🖌️ Content Workflow
1. **Edit slices** in Slice Machine
2. **Push slices to Prismic**
3. Create or edit documents in Prismic
4. Preview changes locally or deploy automatically to Vercel

---

## ☁️ Deployment
The site is designed for deployment on **Vercel**:
1. Push changes to GitHub
2. Vercel will automatically build and deploy
3. Make sure environment variables are configured in Vercel dashboard

---

## 🤝 Contributing
1. Fork the project
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License
This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.
