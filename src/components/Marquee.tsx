import { motion } from 'framer-motion';
import { techStack } from '@/data/portfolio';

export function Marquee() {
  return (
    <section className="py-12 border-y border-ink-100 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...techStack, ...techStack].map((t, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2.5 text-ink-600"
              whileHover={{ scale: 1.05, color: '#43495d' }}
            >
              <span className="flex h-2 w-2 rounded-full bg-gold-400" />
              <span className="font-serif text-lg font-medium">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
