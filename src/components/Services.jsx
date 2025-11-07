import React from 'react';
import { FileText, Layout, PenTool, Presentation } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Research Proposal',
    desc: 'Define a clear problem, scope, and methodology with a strong, defensible proposal.',
  },
  {
    icon: PenTool,
    title: 'Writing & Editing',
    desc: 'Structure chapters, refine arguments, and polish language to academic standards.',
  },
  {
    icon: Layout,
    title: 'Formatting & Citations',
    desc: 'Compliant with APA, MLA, Chicago, IEEE, and university-specific styles.',
  },
  {
    icon: Presentation,
    title: 'Defense Preparation',
    desc: 'Create concise slides and rehearse Q&A to deliver a confident defense.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">How I Help</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300/80">
          Practical, results-focused support tailored to your discipline and timeline.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:shadow-none"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300/80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
