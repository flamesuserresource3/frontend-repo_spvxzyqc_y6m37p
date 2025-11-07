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
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic gradient and vignette overlays (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(99,102,241,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pt-28 pb-24 text-center md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm backdrop-blur"
        >
          <BookOpen className="h-4 w-4" />
          Thesis Writing PK
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          Futuristic thesis guidance for ambitious scholars
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg"
        >
          From proposal to defense, get expert support with modern workflows, clear milestones, and polished delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
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
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Contact Now
          </button>
        </motion.div>
      </div>

      {/* Floating accent orbs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="pointer-events-none absolute left-10 top-24 hidden h-24 w-24 rounded-full bg-indigo-500/30 blur-2xl md:block"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="pointer-events-none absolute bottom-10 right-10 hidden h-24 w-24 rounded-full bg-cyan-400/30 blur-2xl md:block"
      />
    </section>
  );
}
