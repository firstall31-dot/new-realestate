import { motion } from 'framer-motion';
import { Search, MapPin, Home, DollarSign, Star, ArrowRight, Play } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink-950 pt-28 pb-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Luxury home"
          className="h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-7rem)]">
        {/* Left content */}
        <div className="lg:col-span-7 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold tracking-wide text-gold-200"
          >
            <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            #1 PREMIUM REAL ESTATE AGENCY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-balance"
          >
            Find the place
            <br />
            you'll love to
            <span className="text-gold-400"> call home.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg text-ink-200 leading-relaxed"
          >
            Explore a curated collection of luxury villas, modern apartments, and
            family residences — handpicked by our experts across the country's
            finest neighborhoods.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl"
          >
            <div className="flex items-center gap-2 flex-1 px-3 py-2.5">
              <MapPin className="h-5 w-5 text-ink-500 shrink-0" />
              <input
                type="text"
                placeholder="Location e.g. Beverly Hills"
                className="w-full bg-transparent text-sm font-medium text-ink-800 placeholder:text-ink-500 outline-none"
              />
            </div>
            <div className="hidden sm:block w-px bg-ink-200" />
            <div className="flex items-center gap-2 flex-1 px-3 py-2.5">
              <Home className="h-5 w-5 text-ink-500 shrink-0" />
              <select className="w-full bg-transparent text-sm font-medium text-ink-800 outline-none cursor-pointer">
                <option>Any type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Family Home</option>
              </select>
            </div>
            <div className="hidden sm:block w-px bg-ink-200" />
            <div className="flex items-center gap-2 flex-1 px-3 py-2.5">
              <DollarSign className="h-5 w-5 text-ink-500 shrink-0" />
              <select className="w-full bg-transparent text-sm font-medium text-ink-800 outline-none cursor-pointer">
                <option>Any price</option>
                <option>$1M - $2M</option>
                <option>$2M - $4M</option>
                <option>$4M+</option>
              </select>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/30">
              <Search className="h-4 w-4" />
              Search
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            {[
              { value: '2.5K+', label: 'Properties Sold' },
              { value: '1.8K+', label: 'Happy Clients' },
              { value: '15+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-semibold text-white">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-300">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right floating card */}
        <div className="lg:col-span-5 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative ml-auto max-w-sm"
          >
            <div className="animate-float">
              <div className="glass rounded-3xl p-5 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Featured property"
                    className="h-56 w-full object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-ink-950">
                    Featured
                  </div>
                  <button className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full glass text-ink-950 transition-transform hover:scale-110">
                    <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                  </button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-1 text-gold-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-ink-950">Contemporary Luxury Home</h3>
                  <p className="text-sm text-ink-500">Beverly Hills, CA</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-serif text-xl font-semibold text-ink-950">$4,250,000</span>
                    <span className="text-xs font-semibold text-sage-600 bg-sage-100 px-3 py-1 rounded-full">For Sale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -left-8 top-1/3 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink-950">+24% this year</div>
                  <div className="text-[10px] text-ink-500">Property value growth</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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
