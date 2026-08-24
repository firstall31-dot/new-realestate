import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'Categories', href: '#categories' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-8xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-gold-400 transition-transform group-hover:scale-105">
            <Building2 className="h-5 w-5" />
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight text-ink-950">
            Leon<span className="text-gold-500">Home</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-950 group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gold-400 transition-all duration-300 group-hover:w-6" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-semibold text-ink-700 hover:text-ink-950 transition-colors">
            Sign in
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ink-800 hover:shadow-lg hover:shadow-ink-950/20 hover:-translate-y-0.5"
          >
            Book a visit
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass mx-5 mt-3 rounded-2xl"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-ink-950 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Book a visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
