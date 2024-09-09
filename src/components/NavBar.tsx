'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoWithSideName from '@/assets/logo-with-side-name.png';
import { CgProfile } from 'react-icons/cg';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();
  const [userName, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    setUsername(storedUserName);
  }, []);

  const logout = () => {
    localStorage.clear();
    router.replace('/');
    setUsername(null);
  }

  return (
    <div className="flex justify-between items-center backdrop-blur-lg bg-white/20 mt-2 py-2 px-6 shadow-md rounded-lg z-50">
      <Link href={'/'}>
        <Image
          src={logoWithSideName}
          alt="quilog"
          width={150}
          height={150}
          className=""
        />
      </Link>
      <div>
        {userName ? (
          <div className='flex justify-center items-center gap-3'>
            <Link href="/create-blog">
              <button className="bg-white text-black border-2 border-gray-400 px-4 py-2 rounded-3xl">
                Create Blog
              </button>
            </Link>

            <button className="bg-white text-black border-2 border-gray-400 px-4 py-2 rounded-3xl" onClick={logout}>
                Logout
              </button>

            <div className="flex items-center gap-3">
              <h1 className="hidden sm:block text-2xl font-semibold">
                {userName ? `Welcome, ${userName}` : 'Login or SignUp'}
              </h1>
              <CgProfile className="h-10 w-10 mt-1" />
            </div>
          </div>
        ) : (
          <Link href="/login">
            <div className="flex items-center gap-3">
              <h1 className="hidden sm:block text-2xl font-semibold">
              Login or SignUp
              </h1>
              <CgProfile className="h-10 w-10 mt-1" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
