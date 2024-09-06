import React from 'react';

function BlogCard({
  title,
  description,
  CreatedByName,
}: {
  readonly title: string;
  readonly description: string;
  readonly CreatedByName: string;
}) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-black">{title}</h1>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-600 italic">Created By: {CreatedByName}</p>
      </div>
    </div>
  );
}

export default BlogCard;
