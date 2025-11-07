import React, { useState } from 'react';
import { Send, Mail, User, FileSignature } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    const subject = encodeURIComponent(`Thesis Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
    setStatus('Opening your email client...');
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Let’s work on your thesis</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300/80">Tell me about your topic and timeline. I’ll get back shortly.</p>
      </div>

      <form onSubmit={onSubmit} className="mt-10 space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/5">
            <User className="h-5 w-5 text-gray-400 dark:text-gray-300/70" />
            <input required name="name" placeholder="Full name" className="w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-400 dark:text-white" />
          </label>
          <label className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/5">
            <Mail className="h-5 w-5 text-gray-400 dark:text-gray-300/70" />
            <input required type="email" name="email" placeholder="Email" className="w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-400 dark:text-white" />
          </label>
        </div>
        <label className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-white/5">
          <FileSignature className="mt-2 h-5 w-5 text-gray-400 dark:text-gray-300/70" />
          <textarea required name="message" rows="5" placeholder="Briefly describe your thesis: topic, degree level, deadline, and what you need help with." className="w-full resize-none bg-transparent text-gray-900 outline-none placeholder:text-gray-400 dark:text-white" />
        </label>
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow/20 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl">
          <Send className="h-5 w-5" />
          Send message
        </button>
        {status && <p className="text-sm text-gray-500 dark:text-gray-400">{status}</p>}
      </form>
    </section>
  );
}
