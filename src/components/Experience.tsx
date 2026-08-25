import { motion } from 'framer-motion';
import { Check, ArrowRight, Briefcase, GraduationCap, Award, Globe } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences, profile } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left - timeline */}
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Career path</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
              Professional experience
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-8 border-l-2 border-ink-100"
              >
                {exp.current && (
                  <div className="absolute -left-[9px] top-0 flex h-4 w-4 rounded-full bg-gold-400 ring-4 ring-gold-100" />
                )}
                {!exp.current && (
                  <div className="absolute -left-[7px] top-1 flex h-3 w-3 rounded-full bg-ink-300 ring-4 ring-ink-50" />
                )}
                <Card className="p-6 transition-all hover:shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-gold-500" />
                        <h3 className="font-serif text-lg font-semibold text-ink-950">{exp.role}</h3>
                      </div>
                      <p className="mt-1 text-sm font-medium text-ink-600">{exp.company} · {exp.location}</p>
                    </div>
                    {exp.current && <Badge variant="gold">Current</Badge>}
                  </div>
                  <p className="mt-1 text-xs text-ink-400">{exp.period}</p>
                  <ul className="mt-4 space-y-2.5">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-ink-600 leading-relaxed">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage-100 text-sage-600 shrink-0 mt-0.5">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right - education, certs, languages */}
        <div>
          <Reveal delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Background</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
              Education & credentials
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            <Reveal delay={0.15}>
              <Card className="p-6 transition-all hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-gold-400 shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink-950">{profile.education.degree}</h3>
                    <p className="text-sm text-ink-500">{profile.education.institution}</p>
                    <p className="text-xs text-ink-400 mt-0.5">Class of {profile.education.year}</p>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="p-6 transition-all hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-600 shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink-950">Certifications</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {profile.certifications.map((c) => (
                        <Badge key={c} variant="outline" className="bg-white">{c}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.25}>
              <Card className="p-6 transition-all hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600 shrink-0">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink-950">Languages</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {profile.languages.map((l) => (
                        <Badge key={l} variant="outline" className="bg-white">{l}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8">
                <Button asChild variant="default" size="lg">
                  <a href="#contact">
                    Let's work together
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
