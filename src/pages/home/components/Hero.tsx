
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('proiecte');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={heroRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=professional%20construction%20worker%20using%20laser%20level%20tool%20measuring%20wall%20renovation%20site%20with%20modern%20equipment%20tools%20scattered%20around%20industrial%20workspace%20dark%20moody%20lighting%20cinematic%20photography%20high%20detail%20sharp%20focus%20professional%20grade%20image%20construction%20industry%20theme%20dark%20background%20orange%20and%20cyan%20accent%20lights&width=1920&height=1080&seq=hero-construction-1&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/70 to-[#0D0D0D]"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(255, 138, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 230, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#FF8A00]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#00E6FF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="block text-white">Renovări complete.</span>
            <span className="block bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              Calitate care rezistă.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Echipă de meșteri profesioniști, rezultate garantate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#FF8A00] to-[#FF6600] rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF8A00]/50 whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10">Cere ofertă</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 border-2 border-[#00E6FF] text-[#00E6FF] rounded-lg font-semibold text-lg hover:bg-[#00E6FF]/10 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Vezi lucrările
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-4xl text-[#FF8A00]"></i>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
    </section>
  );
}
