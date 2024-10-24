'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const offset = 80;

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setIsMenuOpen(false);
  };

  const navLinks = [
    {
      label: 'Props Table',
      href: 'props-table',
    },
    {
      label: 'Compare',
      href: 'compare',
    },
    {
      label: 'Features',
      href: 'features',
    },
    // {
    //   label: 'Contact',
    //   href: 'contact',
    // },
  ];

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
          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={e => handleSmoothScroll(e, link.href)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="block md:hidden">
            <Button
              className="text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="bg-gray-900/90 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={e => handleSmoothScroll(e, link.href)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
