'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/30 shadow-md backdrop-blur-md backdrop-saturate-150'
          : 'bg-gray-900/60'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/assets/images/test1.svg" height={80} width={80} alt="Propwaves Logo" className="mt-2" />
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                  Prop
                </span>
                <span className="text-white">Waves</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/pricing"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Pricing
              </Link>
              {/* Add more navigation links here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
