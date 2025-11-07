import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ayesha K.',
    role: 'M.Phil Candidate, Sociology',
    quote:
      'From structuring my chapters to polishing citations, Thesis Writing PK made the entire process smooth. I defended with confidence.',
  },
  {
    name: 'Hassan R.',
    role: 'MS Student, Computer Science',
    quote:
      'Clear milestones and quick feedback cycles kept me on track. Their formatting expertise saved me days.',
  },
  {
    name: 'Sana I.',
    role: 'PhD Scholar, Education',
    quote:
      'They transformed my draft into a well-argued thesis. The defense rehearsal tips were spot on.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What clients say</h2>
          <p className="mt-3 text-gray-600">Real feedback from students who completed on time.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-indigo-200" />
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-gray-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-gray-500">
                <span className="font-medium text-gray-900">{t.name}</span> · {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
