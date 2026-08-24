import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Marquee } from '@/components/Marquee';
import { Properties } from '@/components/Properties';
import { Categories } from '@/components/Categories';
import { About } from '@/components/About';
import { Showcase } from '@/components/Showcase';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Properties />
        <Categories />
        <About />
        <Showcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
