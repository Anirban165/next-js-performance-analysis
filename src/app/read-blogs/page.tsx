import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import React from 'react';

async function page() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  });
  const postData: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[] = await data.json();

  return (
    <div className="my-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {postData &&
          postData.map((blog) => (
            <Link key={blog.id} href={`/read-blogs/${blog.id}`}>
              <BlogCard
                CreatedByName="John Doe"
                description={blog.body}
                title={blog.title}
                key={blog.id}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default page;
