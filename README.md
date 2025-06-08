This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
# 1. Clone the repository
git clone https://github.com/LinusRamok/product-catalog.git
cd product-catalog

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# The app will be running at http://localhost:3000
```

## Approach & Design Choices



-   The app is built using **Next.js App Router** with **TypeScript** and **Tailwind CSS**.
        
-   **Server-side rendering (SSR)** is used for product detail pages by calling the fetch logic directly in the server component (`page.tsx`), enabling dynamic rendering without pre-generating static paths.
    
-   The `ProductDetail` component is a client component that receives its data from the server.
    
-   Global state is handled using `Context API` using `localStorage` to persist cart items across sessions.
    
-   Error boundaries are handled with a global `error.tsx` and custom logic for 404 via `not-found.tsx`.
    
-   A reusable `ProductCard` component is used to display products cleanly.
    
-   API fetching logic is separated into a `lib` folder for better maintainability.
    
-   A `loading.tsx` file is added to show a fallback UI while product pages are loading.
