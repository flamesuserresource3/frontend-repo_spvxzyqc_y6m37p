import { motion } from 'framer-motion';
import { BookOpen, FileText, BarChart2, PenTool } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Topic & Proposal',
    desc: 'Shortlist research topics and craft a compelling proposal with clear objectives and methodology.'
  },
  {
    icon: FileText,
    title: 'Literature Review',
    desc: 'Comprehensive, up-to-date review mapped to your research questions and framework.'
  },
  {
    icon: BarChart2,
    title: 'Data Analysis',
    desc: 'Quantitative (SPSS, SmartPLS, AMOS) and qualitative (NVivo) analysis with clear interpretation.'
  },
  {
    icon: PenTool,
    title: 'Editing & Formatting',
    desc: 'Polishing, citation management, and formatting per your university’s style guide.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Services</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">Everything you need from start to submission.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/70 dark:bg-zinc-900/70 backdrop-blur hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-zinc-900/90 dark:bg-zinc-100/90 flex items-center justify-center text-white dark:text-zinc-900">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
