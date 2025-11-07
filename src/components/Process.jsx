import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    desc: 'Discuss goals, requirements, and your timeline. Align on scope and deliverables.'
  },
  {
    title: 'Plan',
    desc: 'Outline chapters, research milestones, and checkpoints with a realistic schedule.'
  },
  {
    title: 'Create',
    desc: 'Iterative drafting, editing, and feedback cycles to keep momentum and quality high.'
  },
  {
    title: 'Defend',
    desc: 'Finalize formatting, rehearse the defense, and wrap with submission-ready files.'
  }
];

export default function Process() {
  return (
    <section id="process" className="relative bg-gradient-to-b from-white to-indigo-50/40 py-20 dark:from-black dark:to-indigo-950/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Process</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300/80">Clear milestones so you always know what’s next.</p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <li key={s.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
              <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white dark:bg-indigo-500">
                {idx + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300/80">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <CheckCircle2 className="h-5 w-5" />
                Milestone
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
