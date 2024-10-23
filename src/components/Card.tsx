import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex size-full cursor-pointer flex-col justify-end gap-3 rounded-lg p-3">
      {/* Gradient Border */}
      <div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 p-px"
      >
        <div className="size-full rounded-lg bg-black"></div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 bg-transparent">
        {children}
      </div>
    </div>
  );
};
