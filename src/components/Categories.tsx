import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/data/properties';
import { Reveal } from './Reveal';

export function Categories() {
  return (
    <section id="categories" className="py-24 sm:py-32 px-5 sm:px-8 bg-ink-50">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Browse by type</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
              Explore property categories
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-ink-500 leading-relaxed">
              Whether you're searching for a sprawling villa or a sleek city apartment,
              find exactly what you need across our curated categories.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#properties"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-80 overflow-hidden rounded-3xl"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white">{cat.name}</h3>
                    <p className="mt-1 text-sm text-ink-200">{cat.count} properties</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full glass text-white transition-all duration-300 group-hover:bg-gold-400 group-hover:text-ink-950">
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 ring-2 ring-transparent rounded-3xl transition-all duration-300 group-hover:ring-gold-400/50" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
