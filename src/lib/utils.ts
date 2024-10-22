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
