
export default function Process() {
  const steps = [
    { icon: 'ri-search-eye-line', title: 'Evaluare', description: 'Analizăm cerințele și spațiul' },
    { icon: 'ri-ruler-2-line', title: 'Măsurători', description: 'Măsurători precise și detaliate' },
    { icon: 'ri-file-list-3-line', title: 'Plan lucrări', description: 'Planificare completă și deviz' },
    { icon: 'ri-tools-line', title: 'Execuție', description: 'Realizare profesională a lucrărilor' },
    { icon: 'ri-checkbox-circle-line', title: 'Predare finală', description: 'Verificare și predare la cheie' },
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 230, 255, 0.3) 35px, rgba(0, 230, 255, 0.3) 36px)',
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              Procesul Nostru
            </span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            5 pași simpli către renovarea perfectă
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8A00] via-[#00E6FF] to-[#FF8A00] transform -translate-y-1/2 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-full border-4 border-[#00E6FF] group-hover:border-[#FF8A00] transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#FF8A00]/50">
                    <i className={`${step.icon} text-4xl text-[#00E6FF] group-hover:text-[#FF8A00] transition-colors duration-300`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#FF8A00] to-[#FF6600] rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
