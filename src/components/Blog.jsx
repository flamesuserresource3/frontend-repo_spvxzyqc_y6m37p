import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'How to craft a solid research question',
    excerpt: 'A clear research question anchors your thesis. Here’s a quick framework to evaluate clarity, scope, and feasibility.',
    date: 'Oct 2025',
  },
  {
    title: 'Citation styles demystified: APA vs MLA vs Chicago',
    excerpt: 'Different fields prefer different styles. Learn the key differences and when to use each.',
    date: 'Sep 2025',
  },
  {
    title: 'From proposal to defense: a realistic timeline',
    excerpt: 'Break your thesis into milestones to reduce overwhelm and improve quality.',
    date: 'Aug 2025',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative bg-gradient-to-b from-indigo-50/40 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Recent Work & Insights</h2>
          <p className="mt-3 text-gray-600">A peek into methods, formatting, and productivity tips.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar className="h-4 w-4" /> {p.date}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-indigo-600">
                Discuss this topic <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
