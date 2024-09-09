'use client';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import homepageImage from '@/assets/homepage-image.png';
import Link from 'next/link';
import { toast } from 'sonner';
import StyledInput from '@/components/StyledInput';
import { useRouter } from 'next/navigation';
import LoadingButton from '@/components/LoadingButton';
import { UserResponseInterface } from '@/models/interfaces/user-interface';

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const nameInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameInput.current?.value;
    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;
    if (!name || !email || !password) {
      toast.error('Please fill in all the fields');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data: UserResponseInterface = await response.json();
      if (data.data) {
        toast.success('Signup successful');
        localStorage.setItem('userId', data.data._id);
        localStorage.setItem('userName', data.data.name);
        router.refresh();
        router.replace('/read-blogs');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Error during signup');
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
        <h1 className="text-center font-semibold text-5xl">Sign Up</h1>
        <form onSubmit={handleSubmit} className="">
          <div>
            <StyledInput
              labelText="Name"
              id="name"
              placeholder="Enter your name"
              type="text"
              reference={nameInput}
            />

            <StyledInput
              labelText="Email"
              id="email"
              placeholder="Enter your email"
              type="email"
              reference={emailInput}
            />

            <StyledInput
              labelText="Password"
              id="password"
              placeholder="Enter your password"
              type="password"
              reference={passwordInput}
            />
          </div>

          <div>
            {/* Create a don't have an acount option and redirect to another page */}
            <p className="text-center my-5">
              Have an account?{' '}
              <Link className="text-blue-500" href="/login">
                Log in
              </Link>
            </p>
          </div>

          <LoadingButton
            className="w-full border-2 border-gray-600 py-2 my-6 text-2xl"
            loading={loading}
            text="Sign Up"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Page;
