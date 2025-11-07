import { Mail, Phone, MessageCircle } from 'lucide-react';

const EMAIL = 'thesiswritingpk@gmail.com';
const WHATSAPP = '923001234567'; // WhatsApp number without +
const PHONE = '+923001234567';

export default function Contact() {
  const subject = encodeURIComponent('Thesis/Research Project Inquiry');
  const body = encodeURIComponent('Hi Thesis Writing PK,%0D%0A%0D%0AI need help with my thesis/research project. Please contact me with next steps.%0D%0A%0D%0AThanks');

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Contact</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">Fastest response within business hours.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              <Mail className="h-5 w-5" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{EMAIL}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Thesis Writing PK, I would like to discuss my thesis project.')}`}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
              target="_blank" rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              <div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">+{WHATSAPP}</div>
              </div>
            </a>

            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              <Phone className="h-5 w-5" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{PHONE}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
