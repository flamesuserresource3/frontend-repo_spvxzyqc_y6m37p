import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnimatedHero() {
  const handleContact = () => {
    const subject = encodeURIComponent('Thesis Help Inquiry');
    const body = encodeURIComponent(
      'Hi, I would love to discuss guidance for my thesis.\n\nMy topic: \nTimeline: \nUniversity: \n\nThanks!'
    );
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pt-28 pb-24 text-center md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur"
        >
          <BookOpen className="h-4 w-4" />
          Thesis Writing PK
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl"
        >
          Elite thesis support with a modern, interactive touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg"
        >
          From research proposals to defense rehearsal, we help you submit on time — and with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
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
            Contact Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
