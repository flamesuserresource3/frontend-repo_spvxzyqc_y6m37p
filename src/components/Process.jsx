import { motion } from 'framer-motion';
import { Search, Goal, Brain, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Search, title: '1. Discovery', desc: 'We align on goals, scope, and timelines.' },
  { icon: Goal, title: '2. Outline', desc: 'You approve a clear structure and milestones.' },
  { icon: Brain, title: '3. Draft & Analyze', desc: 'Iterative writing with data analysis and feedback.' },
  { icon: CheckCircle2, title: '4. Finalize', desc: 'Editing, formatting, and viva preparation.' }
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Process</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">A transparent, milestone-driven approach.</p>

        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900"
            >
              <div className="h-10 w-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
