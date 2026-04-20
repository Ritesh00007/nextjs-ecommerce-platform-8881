# 🛍️ Next.js E-Commerce Platform

> A modern, full-featured e-commerce platform built with Next.js and TypeScript, ready for production deployment on Vercel.

---

## ✨ Features

- 🛒 **Shopping Cart** — Add, remove, and manage cart items seamlessly
- 🔍 **Product Browsing** — Browse and search through product listings with ease
- 📦 **Product Detail Pages** — Rich product pages with images, descriptions, and pricing
- 💳 **Checkout Flow** — Streamlined and intuitive checkout experience
- 📱 **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized** — Built on Next.js with SSR/SSG for blazing-fast load times
- 🔒 **Type-Safe Codebase** — End-to-end TypeScript for reliability and maintainability
- 🚀 **Vercel Deployment** — Production-ready deployment with CI/CD integration

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router / Pages Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | CSS Modules / Tailwind CSS |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Package Manager** | npm |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js** `v18.x` or higher — [Download](https://nodejs.org/)
- **npm** `v9.x` or higher (bundled with Node.js)
- **Git** — [Download](https://git-scm.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ritesh00007/nextjs-ecommerce-platform.git
   cd nextjs-ecommerce-platform
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Fill in the required values in `.env.local` (see [Environment Variables](#-environment-variables) below).

### Running Locally

**Development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

**Production build:**

```bash
npm run build
npm run start
```

**Lint the codebase:**

```bash
npm run lint
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory and configure the following variables:

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_API_URL` | Base URL for the backend/API | ✅ | `https://api.example.com` |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the deployed site | ✅ | `https://your-app.vercel.app` |
| `DATABASE_URL` | Database connection string | ✅ | `postgresql://user:pass@host/db` |
| `NEXTAUTH_SECRET` | Secret key for authentication | ✅ | `your-secret-key` |
| `NEXTAUTH_URL` | Canonical URL for NextAuth | ✅ | `http://localhost:3000` |
| `STRIPE_SECRET_KEY` | Stripe secret key for payments | ⚠️ Optional | `sk_test_...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | ⚠️ Optional | `pk_test_...` |

> ⚠️ **Never commit `.env.local` to version control.** It is already included in `.gitignore`.

---

## 🤝 Contributing

Contributions are welcome and appreciated! To get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m "feat: add your feature"`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request against the `main` branch

Please ensure your code passes linting (`npm run lint`) and follows the existing code style before submitting a PR.

---

## 📄 License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.