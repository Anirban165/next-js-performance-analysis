# Next.js Project Demonstrating CSR, SSG, ISR, SSR

I have created a Next.js project that demonstrates different data-fetching strategies using the App Router. Below are the routes and their corresponding rendering methods:

- `/` -> **SSG** (Static Site Generation)
- `/login`, `/signup`, `/create-blog` -> **CSR** (Client-Side Rendering)
- `/read-blogs` -> **ISR** (Incremental Static Regeneration)
- `/read-blogs/[id]` -> **SSR** (Server-Side Rendering)

# Running the Project

To get started with the project, follow these steps:

## 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## 2. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

## 3. Set Up Environment Variables

In the root directory of the project, there is an `.env.sample` file. This file contains the structure of the environment variables required to run the project.

### Steps:

1. Create a `.env.local` file in the root directory:

   ```bash
   touch .env.local
   ```

2. Copy the contents of the `.env.sample` file into the newly created `.env.local` file:

   ```bash
   cp .env.sample .env.local
   ```

3. Fill in the values for the environment variables in `.env.local` based on your local configuration.

## 4. Run the Development Server

After setting up the environment variables, run the development server:

```bash
npm run dev
# or
yarn dev
```

Your project should now be running at [http://localhost:3000](http://localhost:3000).

## 5. Build and Start the Project (Optional)

To build and start the project in production mode:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

This will build the project and start it on `http://localhost:3000`.

## Understanding CSR, ISR, SSR and SSG in Next.js App Router

### CSR (Client-Side Rendering)

In Client-Side Rendering (CSR), the content is rendered on the client side using JavaScript. Here's an example:

```tsx
'use client'; // This makes the page render on the client side

import React from 'react';

export default function CreateBlogPage() {
  return <div>Create your blog here!</div>;
}
```

The `use client` directive ensures that this page is rendered entirely on the client.

### ISR (Incremental Static Regeneration)

ISR is a hybrid approach that allows you to update static content after it's been built. It revalidates the page at a specified interval:

```tsx
import React from 'react';

export default async function BlogList() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }, // Revalidates every 60 seconds
  });
  const posts = await response.json();

  return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}
```

This page is pre-rendered at build time and updates every 60 seconds.


### SSR (Server-Side Rendering)

In Server-Side Rendering (SSR), the content is rendered on the server for every request. For example:

```tsx
import React from 'react';

export default async function PostDetails({ params }: { params: { id: string } }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await response.json();

  return <div>{post.title}</div>;
}
```

This page fetches data on the server and sends the fully rendered HTML to the client.

### SSG (Static Site Generation)

Static Site Generation (SSG) generates the HTML at build time. The content is static and doesn't change on each request. Here's a basic example:

```tsx
import React from 'react';

export default function Home() {
  return <div>Welcome to the Home Page!</div>;
}
```

Since there's no data fetching or `use client` directive, this page is pre-rendered at build time and served as static HTML.


## API Routes in Next.js

In the Next.js App Router, CSR can seamlessly use Next.js API routes. However, for SSR, SSG, and ISR, you typically interact with external APIs or server-side functions instead of directly using Next.js API routes.

## Postman Collection

If you want to test the Next.js API routes, I have attached a Postman collection named: `quilog.postman_collection.json`. Feel free to explore and test the API routes with this collection.
