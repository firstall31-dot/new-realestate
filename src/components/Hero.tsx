import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { profile } from '@/data/portfolio';

const heroImage =
  'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink-950 pt-28 pb-20">
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Code on screen"
          className="h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-7rem)]">
        <div className="lg:col-span-7 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold tracking-wide text-gold-200"
          >
            <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            AVAILABLE FOR NEW PROJECTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-balance"
          >
            {profile.name}
            <br />
            <span className="text-gold-400">{profile.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg text-ink-200 leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="gold" size="lg">
              <a href="#projects">
                View my work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="default" size="lg" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact me
              </a>
            </Button>
            <div className="flex gap-2 ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white transition-all hover:bg-gold-400 hover:text-ink-950"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white transition-all hover:bg-gold-400 hover:text-ink-950"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '300%', label: 'Performance Gain' },
              { value: '20+', label: 'Technologies' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-semibold text-white">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-300">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative ml-auto max-w-sm"
          >
            <div className="animate-float">
              <Card className="glass rounded-3xl p-5 shadow-2xl border-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-gold-400">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-serif text-sm font-semibold text-ink-950">Core Stack</div>
                    <div className="text-xs text-ink-500">.NET 8 · Angular · React</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['.NET 8', 'C#', 'Microservices', 'Angular', 'React', 'Next.js', 'Docker', 'Azure DevOps', 'PostgreSQL', 'Redis'].map((t) => (
                    <Badge key={t} variant="outline" className="bg-white/60">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 border-t border-ink-200 pt-4">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-gold-500" fill="currentColor" />
                    <span className="text-xs font-semibold text-ink-700">Optimized system throughput by 300%</span>
                  </div>
                </div>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -left-8 top-1/3 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink-950">Clean Architecture</div>
                  <div className="text-[10px] text-ink-500">DDD · Microservices</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <div className="flex h-9 w-5 justify-center rounded-full border border-white/30 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
