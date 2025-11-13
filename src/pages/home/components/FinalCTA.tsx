
export default function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 138, 0, 0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF8A00] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E6FF] to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <i className="ri-tools-fill text-6xl text-[#FF8A00]"></i>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Ai nevoie de o renovare profesionistă?
        </h2>

        <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Contactează-ne astăzi și transformă-ți spațiul cu ajutorul echipei MasterConstruct
        </p>

        <button 
          onClick={scrollToContact}
          className="group relative px-12 py-6 bg-gradient-to-r from-[#FF8A00] to-[#FF6600] rounded-xl font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF8A00]/50 whitespace-nowrap cursor-pointer"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <span className="relative z-10 flex items-center space-x-3">
            <i className="ri-phone-fill text-2xl"></i>
            <span>Sună acum</span>
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <i className="ri-time-line text-[#00E6FF] text-xl"></i>
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Răspuns rapid</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-shield-check-line text-[#00E6FF] text-xl"></i>
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Garanție 12 luni</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-star-line text-[#00E6FF] text-xl"></i>
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Calitate premium</span>
          </div>
        </div>
      </div>
    </section>
  );
}
