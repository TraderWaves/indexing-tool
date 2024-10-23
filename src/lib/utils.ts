import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type DebouncedFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define a specific type for the function to be debounced

export const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number): DebouncedFunction<T> => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Utility function to map shorthand sizes to full formatted values
export const formatAccountSize = (size: string) => {
  const sizeMapping: { [key: string]: string } = {
    '5K': '$5,000',
    '10K': '$10,000',
    '25K': '$25,000',
    '50K': '$50,000',
    '100K': '$100,000',
    '200K': '$200,000',
    '300K': '$300,000',
    '400K': '$400,000',
    '500K': '$500,000',
  };

  return sizeMapping[size] || size; // If size is not found, return the original value
};
