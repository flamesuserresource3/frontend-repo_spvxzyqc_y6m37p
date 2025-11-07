import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, BookOpen } from 'lucide-react';

export default function Hero() {
  const handleContact = () => {
    const subject = encodeURIComponent('Thesis Help Inquiry');
    const body = encodeURIComponent(
      'Hi, I would love to discuss guidance for my thesis.\n\nMy topic: \nTimeline: \nUniversity: \n\nThanks!'
    );
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for legibility without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pt-28 pb-20 text-center md:pt-36">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur">
          <BookOpen className="h-4 w-4" />
          Thesis Writing Portfolio
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Turn your research into a compelling thesis
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          From proposal to defense, I provide structured guidance, editing, and presentation support—so you submit with confidence.
        </p>

        <div className="mx-auto mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-gray-900 shadow/20 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Rocket className="h-5 w-5" />
            Explore Services
          </a>
          <button
            onClick={handleContact}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
