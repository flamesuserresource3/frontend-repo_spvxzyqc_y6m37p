import React from 'react';
import AnimatedHero from './components/AnimatedHero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex flex-col">
        <AnimatedHero />
        <Services />
        <Process />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
