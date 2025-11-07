import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import { User } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">T</span>
          Thesis Studio
        </a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
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

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-600 md:flex-row">
        <p>© {new Date().getFullYear()} Thesis Studio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
