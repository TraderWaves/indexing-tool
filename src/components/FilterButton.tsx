'use client';

import React from 'react';

import { Button } from './ui/button'; // Assuming Button component is from shadcn

type FilterButtonProps = {
  label: string; // The text inside the button
  isSelected: boolean; // Whether the button is currently selected
  onClick: () => void; // Click handler function
};

export const FilterButton = ({ label, isSelected, onClick }: FilterButtonProps) => {
  return (
    <Button
      type="button"
      className={`
        h-[40px] w-full rounded-full text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gray-700 md:h-[50px]
        ${isSelected ? 'bg-gradient-to-r from-blue-700 to-indigo-500 text-white' : 'bg-gray-700 text-white'}
      `}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
