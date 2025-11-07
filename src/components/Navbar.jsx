import React from 'react';
import { User } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3 font-semibold text-gray-900 dark:text-white">
          <Logo size={36} />
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 dark:text-white/80 md:flex">
          <a href="#services" className="hover:text-gray-900 dark:hover:text-white">Services</a>
          <a href="#process" className="hover:text-gray-900 dark:hover:text-white">Process</a>
          <a href="#testimonials" className="hover:text-gray-900 dark:hover:text-white">Feedback</a>
          <a href="#blog" className="hover:text-gray-900 dark:hover:text-white">Blog</a>
          <a
            href="mailto:thesiswritingpk@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-black/5 px-3 py-2 font-medium text-gray-900 hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            <User className="h-4 w-4" /> Hire Me
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
