import Spline from '@splinetool/react-spline';
import { ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const EMAIL = 'thesiswritingpk@gmail.com';

export default function AnimatedHero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6f7JxB2O3vV2o7wB/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-zinc-900/70 dark:via-zinc-900/30 dark:to-zinc-900/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col items-start justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
        >
          Premium Thesis & Research Writing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300"
        >
          From topic selection to final defense, get end-to-end support: proposal, literature review, data analysis, proofreading, and formatting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 flex items-center gap-3"
        >
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('Thesis Project - Let’s Start')}&body=${encodeURIComponent('Hi Thesis Writing PK,%0D%0A%0D%0AMy name is ______. I need help with ______. Timeline is ______. Please advise next steps.%0D%0A%0D%0AThanks!')}`}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-5 py-3 text-sm md:text-base hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition"
          >
            <MessageSquare className="h-5 w-5" /> Contact Now
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            Explore Services <ChevronRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex items-center gap-4 text-zinc-700 dark:text-zinc-300"
        >
          <div className="inline-flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-500" />
            <span>Plagiarism-free • On-time delivery • Confidential</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
