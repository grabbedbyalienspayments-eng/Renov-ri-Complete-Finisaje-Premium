
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-lg shadow-lg shadow-[#FF8A00]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <i className="ri-hammer-fill text-3xl text-[#FF8A00]"></i>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              MasterConstruct
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 whitespace-nowrap">Acasă</button>
            <button onClick={() => scrollToSection('servicii')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 whitespace-nowrap">Servicii</button>
            <button onClick={() => scrollToSection('proiecte')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 whitespace-nowrap">Proiecte</button>
            <button onClick={() => scrollToSection('avantaje')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 whitespace-nowrap">Avantaje</button>
            <button onClick={() => scrollToSection('testimoniale')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 whitespace-nowrap">Testimoniale</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 whitespace-nowrap">Contact</button>
          </nav>

          <a 
            href="tel:+40740000000" 
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-[#FF8A00] to-[#FF6600] px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#FF8A00]/50 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-fill text-xl"></i>
            <span>Sună acum</span>
          </a>

          <button 
            className="lg:hidden text-white text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D]/98 backdrop-blur-lg border-t border-[#FF8A00]/20">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 text-left whitespace-nowrap">Acasă</button>
            <button onClick={() => scrollToSection('servicii')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 text-left whitespace-nowrap">Servicii</button>
            <button onClick={() => scrollToSection('proiecte')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 text-left whitespace-nowrap">Proiecte</button>
            <button onClick={() => scrollToSection('avantaje')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 text-left whitespace-nowrap">Avantaje</button>
            <button onClick={() => scrollToSection('testimoniale')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 text-left whitespace-nowrap">Testimoniale</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#FF8A00] transition-colors duration-300 text-left whitespace-nowrap">Contact</button>
            <a 
              href="tel:+40740000000" 
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FF8A00] to-[#FF6600] px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#FF8A00]/50 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill text-xl"></i>
              <span>Sună acum</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
