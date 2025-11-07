import React from 'react';
import { User } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3 font-semibold text-white">
          <Logo size={36} />
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#testimonials" className="hover:text-white">Feedback</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a
            href="mailto:hello@yourdomain.com"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 font-medium text-white hover:bg-white/20"
          >
            <User className="h-4 w-4" /> Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
