import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { interiors } from '@/data/properties';
import { Reveal } from './Reveal';
import { Card } from '@/components/ui/card';

export function Showcase() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Interior gallery</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
            Step inside stunning homes
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            A glimpse into the carefully designed interiors of our most sought-after properties.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {interiors.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 ? 'col-span-2 lg:row-span-2 lg:col-span-2' : ''
              }`}
            >
              <Card className={`relative overflow-hidden rounded-3xl border-0 ${i === 0 ? 'h-full min-h-[24rem]' : 'h-56 sm:h-64'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <h3 className={`font-serif font-semibold text-white ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full glass-dark text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-gold-400 group-hover:text-ink-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
