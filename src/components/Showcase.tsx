import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { techStack } from '@/data/portfolio';
import { Reveal } from './Reveal';
import { Card } from '@/components/ui/card';

export function Showcase() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 bg-ink-50">
      <div className="mx-auto max-w-8xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Tech stack</span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
            Technologies I build with
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            A full-stack toolkit spanning backend, frontend, databases, and DevOps.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="group relative overflow-hidden p-6 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-gold-300">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-gold-400 transition-transform group-hover:scale-110">
                    <span className="font-serif text-sm font-bold">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-100 text-ink-400 opacity-0 transition-all group-hover:opacity-100 group-hover:bg-gold-400 group-hover:text-ink-950">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-ink-950 group-hover:text-gold-600 transition-colors">
                  {tech.name}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
