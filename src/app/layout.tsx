import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import NavBar from '@/components/NavBar';
import { Toaster } from "sonner";

export const metadata: Metadata = {
 title: 'Quilog',
 description: 'A next js project to test it\'s performance.',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: ReactNode;
}>) {
 return (
  <html lang="en">
   <body
    className={`mx-auto max-w-2xl px-4 sm:px-6 md:max-w-7xl lg:max-w-[100rem] lg:px-8`}
   >
    <Toaster position="top-center" richColors theme='light' duration={3000} />
    <NavBar />
    {children}
   </body>
  </html>
 );
}
