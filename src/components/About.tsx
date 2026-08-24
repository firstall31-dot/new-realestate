import { motion } from 'framer-motion';
import { Check, ArrowRight, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  'Personalized property matching',
  'Exclusive off-market listings',
  'Dedicated buying & selling support',
  'Transparent, no-pressure process',
];

const agentImage =
  'https://images.pexels.com/photos/8292786/pexels-photo-8292786.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image side */}
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={agentImage}
                alt="Real estate agent"
                className="h-[34rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 glass rounded-3xl p-6 shadow-xl max-w-[14rem]"
            >
              <div className="font-serif text-4xl font-semibold text-ink-950">15+</div>
              <div className="mt-1 text-sm text-ink-600">Years of experience in premium real estate</div>
            </motion.div>

            {/* Quote bubble */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -left-4 sm:-left-8 glass rounded-2xl p-4 shadow-xl"
            >
              <Quote className="h-6 w-6 text-gold-400" fill="currentColor" />
            </motion.div>
          </div>
        </Reveal>

        {/* Content side */}
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">Why choose us</span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-ink-950 text-balance">
              We turn house-hunting into a luxury experience
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              For over a decade, LeonHome has helped families and investors find
              properties that match their lifestyle and goals. Our blend of
              market expertise and white-glove service sets us apart.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage-100 text-sage-600 shrink-0">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-ink-700">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-ink-800 hover:shadow-xl hover:shadow-ink-950/20 hover:-translate-y-0.5"
              >
                Schedule a consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#properties"
                className="text-sm font-semibold text-ink-700 hover:text-gold-600 transition-colors"
              >
                Browse listings
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
