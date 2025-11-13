
export default function Advantages() {
  const advantages = [
    {
      icon: 'ri-time-line',
      title: 'Ofertă în aceeași zi',
      description: 'Primești un deviz detaliat în maxim 24 de ore de la solicitare'
    },
    {
      icon: 'ri-team-line',
      title: 'Echipă completă',
      description: 'Fără subcontractori - lucrăm doar cu meșteri proprii verificați'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Garanție 12 luni',
      description: 'Toate lucrările beneficiază de garanție extinsă'
    },
    {
      icon: 'ri-star-line',
      title: 'Materiale premium',
      description: 'Colaborăm cu furnizori de top pentru calitate superioară'
    },
  ];

  return (
    <section id="avantaje" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255, 138, 0, 0.3) 20px, rgba(255, 138, 0, 0.3) 21px, transparent 21px, transparent 40px, rgba(0, 230, 255, 0.3) 40px, rgba(0, 230, 255, 0.3) 41px)',
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              Avantajele Noastre
            </span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ce ne diferențiază de competiție
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl border border-[#FF8A00]/20 hover:border-[#00E6FF] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00E6FF]/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF8A00]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 flex items-center justify-center mb-6 bg-gradient-to-br from-[#FF8A00]/20 to-[#00E6FF]/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <i className={`${advantage.icon} text-4xl text-[#FF8A00] group-hover:text-[#00E6FF] transition-colors duration-300`}></i>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {advantage.title}
                </h3>
                
                <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
