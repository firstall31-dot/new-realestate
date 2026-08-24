import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/properties';
import { Reveal } from './Reveal';
import { Button } from '@/components/ui/button';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go]);

  const active = testimonials[index];

  return (
    <section id="reviews" className="py-24 sm:py-32 px-5 sm:px-8 bg-ink-950 overflow-hidden">
      <div className="mx-auto max-w-8xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">Client stories</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
            Loved by thousands of
            <br />
            happy homeowners
          </h2>
        </Reveal>

        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="relative min-h-[20rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <Quote className="mx-auto h-12 w-12 text-gold-400/40" fill="currentColor" />
                <div className="mt-6 flex items-center justify-center gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400" fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 font-serif text-2xl sm:text-3xl font-medium text-white leading-relaxed text-balance">
                  "{active.quote}"
                </p>
                <div className="mt-8">
                  <div className="font-semibold text-white">{active.name}</div>
                  <div className="text-sm text-ink-400">{active.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => go(-1)}
              className="glass-dark text-white hover:bg-gold-400 hover:text-ink-950"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => go(1)}
              className="glass-dark text-white hover:bg-gold-400 hover:text-ink-950"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
