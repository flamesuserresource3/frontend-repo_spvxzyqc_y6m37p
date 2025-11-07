import Navbar from './components/Navbar';
import AnimatedHero from './components/AnimatedHero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Thesis Writing PK. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-200">Services</a>
          <a href="#process" className="hover:text-zinc-900 dark:hover:text-zinc-200">Process</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <Navbar />
      <AnimatedHero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
