import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Cpu } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const filters = ['All', 'Backend', 'Full Stack', 'Frontend', 'Enterprise', 'DevOps'] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Selected Work</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
              Projects that scale
              <br />
              from idea to enterprise
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Tabs defaultValue="All">
              <TabsList>
                {filters.map((f) => (
                  <TabsTrigger key={f} value={f}>{f}</TabsTrigger>
                ))}
              </TabsList>
              {filters.map((f) => (
                <TabsContent key={f} value={f} className="mt-12">
                  <ProjectGrid filter={f} />
                </TabsContent>
              ))}
            </Tabs>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Button asChild variant="default" size="xl">
            <a href="https://github.com/Mostafa-SAID7" target="_blank" rel="noopener noreferrer">
              View all on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectGrid({ filter }: { filter: Filter }) {
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {filtered.map((p) => (
          <StaggerItem key={p.id}>
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Card className="group h-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden rounded-3xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                  <Badge
                    variant={p.featured ? 'gold' : 'sage'}
                    className="absolute top-4 left-4 backdrop-blur-md"
                  >
                    {p.category}
                  </Badge>
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full glass opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 rotate-45">
                    <ArrowUpRight className="h-4 w-4 text-ink-950" />
                  </div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-semibold text-white">
                    <Cpu className="h-3.5 w-3.5 text-gold-400" />
                    {p.metric}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-sm text-ink-500">
                    <MapPin className="h-4 w-4 text-gold-500" />
                    {p.tags.join(' · ')}
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-ink-950 group-hover:text-gold-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs font-medium">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.article>
          </StaggerItem>
        ))}
      </AnimatePresence>
    </StaggerContainer>
  );
}
