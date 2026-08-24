import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const bgImage =
  'https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-8xl">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img src={bgImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink-950/85" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-8 sm:p-14 lg:p-20">
            <div className="text-white">
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">Get in touch</span>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
                  Let's find your
                  <br />
                  dream home together
                </h2>
                <p className="mt-5 text-ink-200 leading-relaxed max-w-md">
                  Reach out to our team for a personalized consultation. We'll guide
                  you through every step of buying or selling your property.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10 space-y-5">
                  {[
                    { icon: Phone, label: 'Call us', value: '+1 (555) 234-7890' },
                    { icon: Mail, label: 'Email us', value: 'hello@leonhome.com' },
                    { icon: MapPin, label: 'Visit us', value: '901 Wilshire Blvd, Beverly Hills, CA' },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl glass-dark text-gold-400 shrink-0">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-ink-200">{c.label}</div>
                        <div className="font-semibold text-white">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <motion.form onSubmit={(e) => e.preventDefault()}>
                <Card className="glass rounded-3xl p-6 sm:p-8 border-0">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField label="Full name" placeholder="Jane Doe" />
                    <FormField label="Email" placeholder="jane@email.com" type="email" />
                  </div>
                  <div className="mt-4">
                    <FormField label="Phone" placeholder="+1 (555) 000-0000" type="tel" />
                  </div>
                  <div className="mt-4">
                    <Label>Message</Label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us what you're looking for..."
                      className="mt-2"
                    />
                  </div>
                  <Button type="submit" variant="default" size="lg" className="mt-6 w-full rounded-2xl">
                    Send message
                    <Send className="h-4 w-4" />
                  </Button>
                </Card>
              </motion.form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2 w-full rounded-2xl border border-ink-200 bg-white/80 px-4 py-3 transition-all focus-within:border-gold-400 focus-within:ring-2 focus-within:ring-gold-400/20">
        <Input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}
