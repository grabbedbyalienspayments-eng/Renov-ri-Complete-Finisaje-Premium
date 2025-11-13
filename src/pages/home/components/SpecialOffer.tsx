
export default function SpecialOffer() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00] via-[#FF6600] to-[#00E6FF]"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 2px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/50 animate-pulse">
            <span className="text-white font-bold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              OFERTĂ SPECIALĂ
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Reducere 10% pentru proiecte peste 40m²
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Profită acum de oferta noastră specială și economisește la renovarea ta
          </p>

          <button 
            onClick={scrollToContact}
            className="group relative px-10 py-5 bg-white text-[#FF8A00] rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl whitespace-nowrap cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Cere ofertă acum</span>
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00]/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>

          <div className="mt-8 flex items-center justify-center space-x-2 text-white/80">
            <i className="ri-time-line text-xl"></i>
            <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ofertă valabilă timp limitat
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-2 bg-white/30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
}
