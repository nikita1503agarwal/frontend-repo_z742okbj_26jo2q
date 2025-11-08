import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-zinc-950 to-black text-white">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Let’s build something memorable
        </motion.h2>
        <p className="mt-3 text-white/75 max-w-2xl mx-auto">
          Available for freelance and collaborations. Share a brief about your idea and I’ll reach out.
        </p>
        <div className="mt-8">
          <a
            href="mailto:dzacky.ilham.dev@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition"
          >
            <Mail className="h-5 w-5" />
            Email Dzacky
          </a>
        </div>
      </div>
    </section>
  );
}
