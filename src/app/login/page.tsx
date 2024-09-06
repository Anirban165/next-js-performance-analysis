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
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;
    if (!email || !password) {
      toast.error('Please fill in all the fields');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data: UserResponseInterface = await response.json();
      if (data.data) {
        toast.success('Login successful');
        localStorage.setItem('userId', data.data._id);
        localStorage.setItem('userName', data.data.name);
        router.replace('/read-blogs');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Error during login');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
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

      <div className=" md:mt-20 bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-center font-semibold text-5xl">Login</h1>
        <form onSubmit={handleSubmit} className="h-auto">
          <div>
            <StyledInput
              id="email"
              labelText="Email"
              type="email"
              placeholder="Enter your email"
              reference={emailInput}
            />

            <StyledInput
              id="password"
              labelText="Password"
              type="password"
              placeholder="Enter your password"
              reference={passwordInput}
            />
          </div>

          <div>
            <p className="text-center my-5">
              Do not have an account?
              <Link className="text-blue-500" href="/signup">
                Sign up
              </Link>
            </p>
          </div>
          <LoadingButton
            className="w-full border-2 border-gray-600 py-2 my-6 text-2xl"
            loading={loading}
            text="Login"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Page;
