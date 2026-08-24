import { Building2, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const sections = [
  {
    title: 'Company',
    links: ['About Us', 'Our Agents', 'Careers', 'Contact'],
  },
  {
    title: 'Properties',
    links: ['For Sale', 'For Rent', 'New Listings', 'Featured'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Guides', 'FAQ', 'Support'],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white pt-20 pb-8 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400 text-ink-950">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl font-semibold">
                Leon<span className="text-gold-400">Home</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-ink-400 leading-relaxed max-w-sm">
              Your trusted partner in finding premium real estate. We combine
              expertise with elegance to help you discover the perfect home.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 text-ink-300 transition-all hover:bg-gold-400 hover:text-ink-950"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-semibold text-white">{s.title}</h4>
              <ul className="mt-4 space-y-3">
                {s.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink-400 transition-colors hover:text-gold-400">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-ink-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} LeonHome. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-ink-500">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
