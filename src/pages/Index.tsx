import FloatingHeader from '@/components/FloatingHeader';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingHeader />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Index;
