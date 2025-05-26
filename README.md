# Analytics Dashboard

A modern analytics dashboard built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), and a Node.js/Express/MongoDB backend.  
This project demonstrates a responsive, themeable dashboard UI with data tables, cards, user authentication (JWT), and a full-stack architecture.

---

## Live Demo

[Analytics Dashboard](https://analytics-dashboard-nine-liard.vercel.app/)

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

3. **Authentication**
   - JWT-based authentication (signup, login, protected routes)
   - MongoDB for persistent user storage

4. **Performance Requirements**
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
- 🔒 **JWT Authentication** (signup, login, protected API routes)
- 🗄️ **MongoDB** for persistent user storage
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
├── client/                  # Next.js frontend
│   ├── src/
│   │   ├── app/             # App directory (routes, pages, layouts)
│   │   │   ├── page.tsx     # Signup page as home
│   │   │   ├── login/       # Login page
│   │   │   └── ...          # Other app routes and features
│   ├── components/          # Reusable UI components (Navbar, Sidebar, etc.)
│   ├── lib/                 # Utility functions
│   ├── hooks/               # Custom React hooks
│   └── styles/              # Global styles (Tailwind)
│   ├── public/              # Static assets (favicon, images)
│   ├── next.config.ts       # Next.js configuration
│   ├── components.json      # shadcn/ui configuration
│   └── package.json         # Client project metadata and scripts
│
├── server/                  # Express backend
│   ├── src/
│   │   ├── controllers/     # Auth controller (signup, login)
│   │   ├── middleware/      # JWT middleware
│   │   ├── models/          # Mongoose models (User)
│   │   ├── routes/          # Auth routes
│   │   ├── types/           # Custom TypeScript types
│   │   ├── lib/             # DB connection helper
│   │   └── index.ts         # Server entrypoint
│   ├── package.json         # Server project metadata and scripts
│   └── tsconfig.json        # Server TypeScript config
│
└── README.md                # Project documentation
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

### Server (Express backend)

- `npm run dev` — Start Express server with ts-node (development)
- `npm run build` — Compile TypeScript to JavaScript
- `npm start` — Start compiled Express server (production)
- `npm run lint` — Run ESLint
- `npm run lint --fix` — Auto-fix lint errors

### Client (Next.js frontend)

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm lint` — Run ESLint
- `pnpm lint --fix` — Auto-fix lint errors

---

## Credits

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [TanStack Table](https://tanstack.com/table/v8)
