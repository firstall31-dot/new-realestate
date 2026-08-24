import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'Categories', href: '#categories' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
          <span className={`font-serif text-xl font-semibold tracking-tight transition-colors ${scrolled ? 'text-ink-950' : 'text-white'}`}>
            Leon<span className="text-gold-400">Home</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors group ${scrolled ? 'text-ink-700 hover:text-ink-950' : 'text-white/85 hover:text-white'}`}
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gold-400 transition-all duration-300 group-hover:w-6" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className={`text-sm font-semibold transition-colors ${scrolled ? 'text-ink-700 hover:text-ink-950' : 'text-white/90 hover:text-white'}`}>
            Sign in
          </a>
          <Button asChild variant="default" size="default">
            <a href="#contact">Book a visit</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-white"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col p-6 pt-16 gap-1">
              {links.map((l) => (
                <SheetClose asChild key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-ink-100 transition-colors"
                  >
                    {l.label}
                  </a>
                </SheetClose>
              ))}
              <Separator className="my-3" />
              <SheetClose asChild>
                <Button asChild variant="default" className="w-full">
                  <a href="#contact">Book a visit</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
