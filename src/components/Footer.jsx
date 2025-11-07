import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-600 md:flex-row">
        <p>© {new Date().getFullYear()} Thesis Writing PK. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#testimonials" className="hover:text-gray-900">Feedback</a>
          <a href="#blog" className="hover:text-gray-900">Blog</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
