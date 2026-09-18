# 🛒 MangaloreStore.Online

An authentic Mangalorean food and wellness e-commerce platform rebuilt with modern high-performance technologies for 0 hosting cost and maximum speed.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript (Strict)
- **Database & Auth**: Supabase (PostgreSQL + Supabase Auth + Storage)
- **State Management**: Zustand (Cart) + TanStack Query v5 (Server State)
- **Payments**: Razorpay Gateway (INR ₹)
- **Emails**: Resend + React Email
- **Hosting**: Vercel (Free Hobby Plan)

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- Node.js 18.17+ or 20.x installed
- Git installed
- Supabase CLI (`npm install -g supabase`)

### 2. Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd Mangalorestoreonline

# Install dependencies
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local` and add your keys:
```bash
cp .env.example .env.local
```

### 4. Database Setup (Supabase)
Run the initial SQL migration located in `supabase/migrations/001_initial_schema.sql` on your Supabase SQL Editor or use Supabase CLI:
```bash
supabase db push
```

To seed initial categories and sample products:
Run `supabase/seed.sql` in Supabase SQL editor.

### 5. Run Local Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the storefront.

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── (store)/           # Public storefront routes (Home, Products, Categories, Cart, Checkout)
│   │   ├── (auth)/            # Auth routes (Login, Register, Forgot Password)
│   │   ├── account/           # Protected customer dashboard
│   │   ├── admin/             # Protected admin backoffice
│   │   └── api/               # Serverless Next.js API endpoints
│   ├── components/            # Reusable UI & domain components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Supabase, Razorpay, Resend, utilities & validations
│   ├── store/                 # Zustand cart store
│   ├── types/                 # Database and domain TypeScript interfaces
│   └── emails/                # React Email transactional templates
├── supabase/
│   ├── migrations/            # PostgreSQL database schemas
│   └── seed.sql               # Seed sample data
└── scripts/                   # Data migration scripts for Zoho import
```

---

## 🔐 Deployment to Vercel

1. Push code to your GitHub repository.
2. Import the project into [Vercel](https://vercel.com).
3. Add the environment variables specified in `.env.example`.
4. Deploy and preview with the generated `.vercel.app` URL.
5. When ready for production, configure DNS records for `mangalorestore.online`.

---

© 2025 MangaloreStore.Online. Designed by Roncky Technologies.
