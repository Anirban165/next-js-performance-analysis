import BlogCard from '@/components/BlogCard';
import React from 'react';

async function fetchPost(postId: string) {
  const base_url = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(
    `${base_url}/posts/${postId}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
}

export default async function PostDetails({
  params,
}: {
  params: { id: string };
}) {
  const post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  } = await fetchPost(params.id);

  return (
    <div className='w-full h-[90vh] flex justify-center items-center'>
      <BlogCard
        CreatedByName="John Doe"
        description={post.body}
        title={post.title}
        key={post.id}
      />
    </div>
  );
}
