'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import homepageImage from '@/assets/homepage-image.png';
import StyledInput from '@/components/StyledInput';
import LoadingButton from '@/components/LoadingButton';
import { toast } from 'sonner';

const CreateBlogPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const titleInput = useRef<HTMLInputElement | null>(null);
  const contentInput = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = titleInput.current?.value;
    const content = contentInput.current?.value;
    if (!title || !content) {
      toast.error('Please fill in all the fields');
      return;
    }
    try {
      setLoading(true);
      const userId = localStorage.getItem('userId');
      const name = localStorage.getItem('userName');
      const response = await fetch('/api/blogs/createblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, name, userId }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Blog created successfully');
        titleInput.current!.value = '';
        contentInput.current!.value = '';
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 space-x-reverse">
      <div className="text-center mt-20 mb-10">
        <h1 className="text-5xl font-semibold">Blog it</h1>
        <Image
          className="hidden md:block mt-5"
          src={homepageImage}
          alt="Sample Image"
          width={600}
          height={600}
        />
      </div>
      <div className="md:mt-20 bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-center font-semibold text-5xl">
          Create a New Blog
        </h1>
        <form onSubmit={handleSubmit} className="">
          <StyledInput
            labelText="Title"
            id="title"
            placeholder="Enter the title of your blog"
            type="text"
            reference={titleInput}
          />

          <div className="flex flex-col my-5 md:my-10">
            <label
              htmlFor="content"
              className="text-gray-700 text-sm font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              className="border-b-2 border-gray-600 focus:ring-0 px-2 py-1 my-2"
              placeholder="Write your blog content here"
              rows={6}
              ref={contentInput}
            ></textarea>
          </div>

          <LoadingButton
            loading={loading}
            text="Create Blog"
            className="w-full border-2 border-gray-600 py-2 my-6 text-2xl"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
