import { useState, useEffect } from 'react';
import { Menu, X, Rocket, User, FolderGit2, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClasses =
    'px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : ''
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-cyan-400 to-emerald-400 flex items-center justify-center shadow">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Dzacky Ilham</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            <a href="#about" className={linkClasses}><User className="inline h-4 w-4 mr-1"/>About</a>
            <a href="#projects" className={linkClasses}><FolderGit2 className="inline h-4 w-4 mr-1"/>Projects</a>
            <a href="#contact" className={linkClasses}><Mail className="inline h-4 w-4 mr-1"/>Contact</a>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-1">
            <a href="#about" className="block px-3 py-2 text-white/90 hover:text-white" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" className="block px-3 py-2 text-white/90 hover:text-white" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" className="block px-3 py-2 text-white/90 hover:text-white" onClick={() => setOpen(false)}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
