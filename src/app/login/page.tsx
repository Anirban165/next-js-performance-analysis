'use client';
import Image from 'next/image';
import React from 'react';
import homepageImage from '@/assets/homepage-image.png';
import Link from 'next/link';
import { toast } from 'sonner';

function Page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.info("This feature is not available yet. Please try again later.");
  };
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 space-x-reverse">
      <div className="text-center mt-20 mb-10">
        <h1 className="text-5xl font-semibold">Let's Blog it</h1>
        <Image
          className="hidden md:block"
          src={homepageImage}
          alt="Sample Image"
        />
      </div>

      <div className="md:mt-20 bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-center font-semibold text-5xl">Login</h1>
        <form onSubmit={handleSubmit} className="">
          <div>
            <div className="flex flex-col my-5 md:my-10">
              <label htmlFor="email">Email</label>
              <input
                className="border-b-2 border-gray-600 focus:ring-0 px-2 py-1 my-2"
                type="email"
                id="email"
                name="email"
                placeholder="Enter yur email"
              />
            </div>
            <div className="flex flex-col max-w-3xl md:my-10">
              <label htmlFor="password">Password</label>
              <input
                className="border-b-2 border-gray-600 focus:ring-0 px-2 py-1 my-2"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            {/* Create a don't have an acount option and redirect to another page */}
            <p className="text-center my-5">
              Don't have an account?{' '}
              <Link className="text-blue-500" href="/signup">
                Sign up
              </Link>
            </p>
          </div>

          <button
            className="w-full border-2 border-gray-600 py-2 my-6 text-2xl"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
