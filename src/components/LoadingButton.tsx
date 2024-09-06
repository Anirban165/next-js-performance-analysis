'use client';
import React from 'react';

interface LoadingButtonProps {
  text: string;
  loading: boolean;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const LoadingButton = ({
  text,
  loading,
  type,
  className,
}: LoadingButtonProps) => {
  return (
    <>
      {loading ? (
        <button
          type="button"
          className={`flex justify-center items-center gap-3 ${className}`}
          disabled
        >
          <svg
            className="animate-spin h-5 w-5 text-black"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          Processing
        </button>
      ) : (
        <button className={`${className}`} type={type}>
          {text}
        </button>
      )}
    </>
  );
};

export default LoadingButton;
