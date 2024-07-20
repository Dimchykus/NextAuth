This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project is a web application built with Next.js, implementing authentication with NextAuth.js, database management with Prisma, and client-side storage using Dexie.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Set up Prisma:
```bash
npx prisma generate
```
### Set up Prisma:
Create a .env file in the root of the project and add the following variables:

```bash
DATABASE_URL="mongodb://localhost:27017"
URL="http://localhost:3000"
AUTH_SECRET=secret
NEXTAUTH_URL=http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Prisma Configuration:
Update the `prisma/schema.prisma` file to reflect your database schema.


### NextAuth Configuration:
Configure NextAuth in `auth.ts`
