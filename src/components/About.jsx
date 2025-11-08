import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.2), transparent 40%), radial-gradient(circle at 80% 30%, rgba(16,185,129,0.2), transparent 40%)' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Crafting narratives with code</h2>
            <p className="text-white/80 leading-relaxed">
              I’m Dzacky Ilham, a full‑stack developer who blends engineering with storytelling. I build fast, accessible web apps with a focus on delightful interactions and purposeful motion. My work spans product engineering, creative coding, and immersive web experiences.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'TypeScript', 'Node.js', 'FastAPI', 'MongoDB', 'Tailwind', 'Framer Motion'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">{tag}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years of Experience', value: '5+' },
                { label: 'Projects Shipped', value: '30+' },
                { label: 'Avg. Lighthouse', value: '95+' },
                { label: 'Favorite Stack', value: 'React + FastAPI' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-black/30 border border-white/10 p-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
