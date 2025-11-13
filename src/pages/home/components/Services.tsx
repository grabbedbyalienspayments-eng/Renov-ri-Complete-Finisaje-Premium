
export default function Services() {
  const services = [
    { icon: 'ri-home-gear-line', title: 'Renovări apartamente', description: 'Transformăm complet spațiul tău locativ' },
    { icon: 'ri-paint-brush-line', title: 'Finisaje premium', description: 'Detalii impecabile pentru rezultate de lux' },
    { icon: 'ri-brush-3-line', title: 'Glet & zugrăveli profesionale', description: 'Suprafețe perfect netede și uniforme' },
    { icon: 'ri-layout-grid-line', title: 'Rigips & tavane', description: 'Construcții uscate moderne și durabile' },
    { icon: 'ri-drop-line', title: 'Instalații sanitare', description: 'Sisteme complete de apă și canalizare' },
    { icon: 'ri-flashlight-line', title: 'Instalații electrice', description: 'Cablaje sigure conform normelor actuale' },
    { icon: 'ri-grid-line', title: 'Montaj gresie & faianță', description: 'Placare precisă cu finisaje perfecte' },
    { icon: 'ri-door-line', title: 'Parchet & uși', description: 'Montaj profesional pentru durabilitate maximă' },
  ];

  return (
    <section id="servicii" className="py-24 relative">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255, 138, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 230, 255, 0.3) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              Servicii Complete
            </span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Soluții profesionale pentru orice tip de lucrare
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-6 rounded-xl border border-[#FF8A00]/20 hover:border-[#FF8A00] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FF8A00]/20 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center mb-4 bg-gradient-to-br from-[#FF8A00]/20 to-[#00E6FF]/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-3xl text-[#FF8A00] group-hover:text-[#00E6FF] transition-colors duration-300`}></i>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-[#00E6FF]/10 rounded-full blur-2xl group-hover:bg-[#FF8A00]/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
