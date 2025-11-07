import { useEffect, useState } from 'react';
import { Mail, Phone, Sun, Moon } from 'lucide-react';

const EMAIL = 'thesiswritingpk@gmail.com';
const PHONE = '+923001234567'; // Update anytime

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-lg">Thesis Writing PK</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <a href="#services" className="hover:text-zinc-900 dark:hover:text-white transition">Services</a>
          <a href="#process" className="hover:text-zinc-900 dark:hover:text-white transition">Process</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('Project Inquiry - Thesis Writing PK')}&body=${encodeURIComponent('Hello Thesis Writing PK team,%0D%0A%0D%0AI would like to discuss my thesis/project. Please get back to me with available slots and pricing.%0D%0A%0D%0AThanks!')}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition"
          >
            <Mail className="h-4 w-4" /> Hire Me
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
