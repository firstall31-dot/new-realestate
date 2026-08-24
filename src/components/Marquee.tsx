import { motion } from 'framer-motion';
import { Star, Award, ShieldCheck, Gem, Crown, Sparkles } from 'lucide-react';

const partners = [
  { icon: Star, name: 'Forbes' },
  { icon: Award, name: 'Architectural Digest' },
  { icon: ShieldCheck, name: 'Realtor.com' },
  { icon: Gem, name: 'Luxury Portfolio' },
  { icon: Crown, name: "Christie's" },
  { icon: Sparkles, name: "Sotheby's" },
];

export function Marquee() {
  return (
    <section className="py-12 border-y border-ink-100 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2.5 text-ink-600"
              whileHover={{ scale: 1.05, color: '#43495d' }}
            >
              <p.icon className="h-5 w-5" />
              <span className="font-serif text-lg font-medium">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
