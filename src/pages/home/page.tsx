
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Projects from './components/Projects';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import SpecialOffer from './components/SpecialOffer';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0D0D0D] text-white overflow-x-hidden">
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <Advantages />
      <Testimonials />
      <SpecialOffer />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
