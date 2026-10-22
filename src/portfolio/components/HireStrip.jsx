// @ts-nocheck
import React from 'react';

export default function HireStrip(){
  return (
    <div className="border-t-4 border-red-600 bg-[#14141a] px-5 py-5 text-white sm:px-6 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="text-sm font-semibold">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400"></span>
          Available for new projects
        </p>
      </div>
    </div>
  );
}
