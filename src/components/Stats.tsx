import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Award, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const stats = [
  { icon: Home, value: 2500, suffix: '+', label: 'Properties Sold' },
  { icon: Users, value: 1800, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 32, suffix: '', label: 'Awards Won' },
  { icon: TrendingUp, value: 15, suffix: '+', label: 'Years Experience' },
];

function useCountUp(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return count;
}

function StatCard({ icon: Icon, value, suffix, label, start, delay }: {
  icon: typeof Home;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  delay: number;
}) {
  const count = useCountUp(value, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-gold-400 shrink-0">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="font-serif text-2xl sm:text-3xl font-semibold text-ink-950">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-xs font-medium uppercase tracking-wider text-ink-500">{label}</div>
      </div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative -mt-16 z-10 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl">
        <Card className="glass rounded-3xl shadow-2xl p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 border-0">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} start={inView} delay={i * 0.1} />
          ))}
        </Card>
      </div>
    </section>
  );
}
