import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} Thesis Writing PK. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#testimonials" className="hover:text-white">Feedback</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
