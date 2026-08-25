import { motion } from 'framer-motion';
import { ArrowUpRight, Server, Layout, Database } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const icons = [Server, Layout, Database];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-5 sm:px-8 bg-ink-50">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Core competencies</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
              Technical expertise
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-ink-500 leading-relaxed">
              From backend architecture to frontend development and DevOps — a comprehensive toolkit
              for building end-to-end enterprise solutions.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="group h-full p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-gold-400 transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-100 text-ink-500 transition-all group-hover:bg-gold-400 group-hover:text-ink-950">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-ink-950">{cat.name}</h3>
                  <p className="mt-1 text-sm text-ink-500">{cat.count} technologies</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <Badge key={item} variant="outline" className="bg-white">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
