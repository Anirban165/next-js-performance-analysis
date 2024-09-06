import React from 'react';

export interface IconButtonProps {
 readonly icon: React.ReactNode;
 readonly text: string;
}

export default function IconButtonComponent({ icon, text }: IconButtonProps) {
 return (
  <div>
   <button
    className={
     'flex items-center justify-center gap-7 w-72 bg-white shadow-xl px-7 py-5 rounded-full hover:bg-gray-200'
    }
   >
    {icon}
    <span className={'text-3xl'}>{text}</span>
   </button>
  </div>
 );
}
