import { Code2, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { profile } from '@/data/portfolio';

const sections = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: profile.github, external: true },
      { label: 'LinkedIn', href: profile.linkedin, external: true },
      { label: 'Email', href: `mailto:${profile.email}` },
      { label: 'Phone', href: `tel:${profile.phone}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white pt-20 pb-8 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400 text-ink-950">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl font-semibold">
                Mostafa<span className="text-gold-400">.dev</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-ink-300 leading-relaxed max-w-sm">
              {profile.title} specializing in high-performance microservices and modern web architectures.
              Building scalable solutions from concept to deployment.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-ink-300 transition-all hover:bg-gold-400 hover:text-ink-950" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-ink-300 transition-all hover:bg-gold-400 hover:text-ink-950" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-ink-300 transition-all hover:bg-gold-400 hover:text-ink-950" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-semibold text-white">{s.title}</h4>
              <ul className="mt-4 space-y-3">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-ink-300 transition-colors hover:text-gold-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-ink-300">
                <Phone className="h-3.5 w-3.5 text-gold-400" />
                {profile.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-ink-300">
                <MapPin className="h-3.5 w-3.5 text-gold-400" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-14 bg-ink-800" />
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-300">
            &copy; {new Date().getFullYear()} Mostafa Samir. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="flex gap-6 text-xs text-ink-300">
            <span>AZ-900 Certified</span>
            <span>B.Sc. Computer Science</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
