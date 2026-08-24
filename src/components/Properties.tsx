import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from 'lucide-react';
import { properties } from '@/data/properties';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';

const filters = ['All', 'For Sale', 'New', 'Featured'];

export function Properties() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? properties : properties.filter((p) => p.tag === active);

  return (
    <section id="properties" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Featured Listings</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
              Discover exceptional
              <br />
              properties for sale
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    active === f
                      ? 'bg-ink-950 text-white shadow-lg shadow-ink-950/20'
                      : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <StaggerContainer className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <StaggerItem key={p.id}>
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-ink-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                    <span
                      className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold backdrop-blur-md ${
                        p.tag === 'New'
                          ? 'bg-gold-400 text-ink-950'
                          : p.tag === 'Featured'
                          ? 'bg-white/90 text-ink-950'
                          : 'bg-sage-500 text-white'
                      }`}
                    >
                      {p.tag}
                    </span>
                    <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full glass opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 rotate-45">
                      <ArrowUpRight className="h-4 w-4 text-ink-950" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-sm text-ink-500">
                      <MapPin className="h-4 w-4 text-gold-500" />
                      {p.location}
                    </div>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-ink-950 group-hover:text-gold-600 transition-colors">
                      {p.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-5 text-sm text-ink-600">
                      <span className="flex items-center gap-1.5">
                        <Bed className="h-4 w-4 text-ink-500" /> {p.beds} Beds
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bath className="h-4 w-4 text-ink-500" /> {p.baths} Baths
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Maximize className="h-4 w-4 text-ink-500" /> {p.area}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                      <div>
                        <span className="text-xs font-medium text-ink-500">Price</span>
                        <div className="font-serif text-xl font-semibold text-ink-950">{p.price}</div>
                      </div>
                      <button className="rounded-full bg-ink-100 px-5 py-2.5 text-sm font-semibold text-ink-700 transition-all hover:bg-ink-950 hover:text-white">
                        View details
                      </button>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </AnimatePresence>
        </StaggerContainer>

        <Reveal delay={0.2} className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-950/20 hover:-translate-y-0.5">
            View all properties
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
