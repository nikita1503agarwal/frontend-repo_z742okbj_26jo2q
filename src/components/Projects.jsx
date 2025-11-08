import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    title: 'Narrative Commerce',
    description: 'E-commerce storytelling experience integrating 3D scenes and micro-interactions to guide users through products.',
    tags: ['Next.js', 'Stripe', 'Three.js'],
    links: { live: '#', repo: '#' },
    gradient: 'from-indigo-500/20 to-cyan-500/20',
  },
  {
    title: 'Realtime Collab Canvas',
    description: 'A multiplayer whiteboard with presence avatars, optimistic updates, and buttery-smooth drawing.',
    tags: ['React', 'WebSocket', 'Redis'],
    links: { live: '#', repo: '#' },
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Story Engine',
    description: 'Framework for choreographing UI motion and audio cues to tell product stories that resonate.',
    tags: ['Framer Motion', 'Vite', 'GSAP'],
    links: { live: '#', repo: '#' },
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-zinc-950 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(600px 200px at 10% 10%, rgba(99,102,241,0.15), transparent), radial-gradient(600px 200px at 90% 30%, rgba(16,185,129,0.15), transparent)' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Projects</h2>
          <p className="text-white/70 mt-2">A small collection that blends engineering precision with playful interaction.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative rounded-xl border border-white/10 bg-gradient-to-br ${p.gradient} p-5 overflow-hidden`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-black/30 border border-white/10 px-2.5 py-1 text-xs">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.links.live} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
                  <Play className="h-4 w-4" /> Live
                </a>
                <a href={p.links.repo} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.links.live} className="ml-auto inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
