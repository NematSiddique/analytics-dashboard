# Analytics Dashboard

A modern analytics dashboard built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).  
This project demonstrates a responsive, themeable dashboard UI with data tables, cards, and user menus.

---

## Project Overview

Build a modern, professional analytics dashboard that displays data insights through various metrics and visualizations.

### Requirements

- **Data Source:** Your choice (weather, stock prices, social media analytics, e-commerce metrics, etc.)
- **UI/UX Focus:** Modern, clean, professional design that prioritizes simplicity and user experience
- **Responsive Design:** Must work seamlessly on desktop devices at different screen resolutions.

### Core Features

1. **Metric Cards/Boxes**
   - Display key metrics in visually appealing cards
   - Clicking on cards reveals detailed information (modal, expanded view, or navigation)
   - Include relevant icons and visual indicators

2. **Interactive Charts/Graphs**
   - At least 2-3 different chart types (line, bar, pie, etc.)
   - Date range picker to filter data dynamically
   - Smooth animations and transitions

3. **Performance Requirements**
   - Fast loading times
   - Smooth interactions and animations
   - Optimized for performance (consider lazy loading, memoization)

---

## Features

- ⚡ **Next.js 15** with App Router and Server Components
- 🎨 **Tailwind CSS** for utility-first styling
- 🧩 **shadcn/ui** for beautiful, accessible UI components
- 📊 **Data Table** with sorting, pagination, and selection (powered by [@tanstack/react-table](https://tanstack.com/table/v8))
- 🌗 **Dark/Light Theme** toggle
- 👤 **User Menu** with avatar and dropdown
- 📱 **Responsive** layout
- 🔗 **Remote image support** (Pinterest, Unsplash, etc.)
- 🧪 **TypeScript** for type safety
- 🧹 **ESLint** and **Prettier** for code quality and formatting
- 🧰 **Reusable components** for rapid development

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/NematSiddique/analytics-dashboard.git
cd analytics-dashboard
```

### 2. Install dependencies

```sh
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the development server

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Directory Structure

```
analytics-dashboard/
│
├── src/                    # Application source code
│   ├── app/                # Next.js app directory (routes, pages, layouts)
│   │   ├── payments/       # Payments data table and related pages
│   │   └── ...             # Other app routes and features
│   ├── components/         # Reusable UI components (Navbar, Sidebar, etc.)
│   ├── lib/                # Utility functions
│   ├── hooks/              # Custom React hooks
│   └── styles/             # Global styles (Tailwind)
│
├── public/                 # Static assets (favicon, images)
│
├── next.config.ts          # Next.js configuration (remote image domains)
├── components.json         # shadcn/ui configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

---

## Configuration

### shadcn/ui

Component settings are managed in `components.json`.  
See [shadcn/ui docs](https://ui.shadcn.com/docs/installation/configuration) for more.

---

## Deployment

This project is easily deployable on [Vercel](https://vercel.com/) (recommended for Next.js), Netlify, or any platform that supports Node.js.

- **Production build:**  
  ```sh
  pnpm build
  pnpm start
  ```
- **Vercel:**  
  Just connect your GitHub repo and deploy.  
  [Live Demo](https://analytics-dashboard-nine-liard.vercel.app/)

---

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm lint` — Run ESLint
- `pnpm lint --fix` — Auto-fix lint errors

---

## Contribution

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## Credits

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [TanStack Table](https://tanstack.com/table/v8)
