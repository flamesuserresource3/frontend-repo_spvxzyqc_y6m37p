import React from 'react';
import { User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">T</span>
          Thesis Writing PK
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#testimonials" className="hover:text-gray-900">Feedback</a>
          <a href="#blog" className="hover:text-gray-900">Blog</a>
          <a
            href="mailto:hello@yourdomain.com"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 font-medium text-white"
          >
            <User className="h-4 w-4" /> Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
