
import { useState, useEffect, useRef } from 'react';

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [delays, setDelays] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const projectInterval = setInterval(() => {
        setProjects(prev => {
          if (prev >= 200) {
            clearInterval(projectInterval);
            return 200;
          }
          return prev + 5;
        });
      }, 20);

      const clientInterval = setInterval(() => {
        setClients(prev => {
          if (prev >= 98) {
            clearInterval(clientInterval);
            return 98;
          }
          return prev + 2;
        });
      }, 20);

      const delayInterval = setInterval(() => {
        setDelays(prev => {
          if (prev >= 0) {
            clearInterval(delayInterval);
            return 0;
          }
          return prev + 1;
        });
      }, 50);

      return () => {
        clearInterval(projectInterval);
        clearInterval(clientInterval);
        clearInterval(delayInterval);
      };
    }
  }, [isVisible]);

  const features = [
    {
      icon: 'ri-award-line',
      title: 'Experiență 15 ani',
      description: 'Peste un deceniu și jumătate de experiență în domeniu',
      color: '#FF8A00'
    },
    {
      icon: 'ri-calculator-line',
      title: 'Calcul transparent',
      description: 'Oferte clare, fără costuri ascunse',
      color: '#00E6FF'
    },
    {
      icon: 'ri-time-line',
      title: 'Finalizare la timp',
      description: 'Respectăm termenele stabilite întotdeauna',
      color: '#FF8A00'
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF8A00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E6FF]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              De Ce Să Ne Alegi
            </span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Profesionalism și dedicare în fiecare proiect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border-2 group-hover:border-[#FF8A00] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF8A00]/30"
                style={{ borderColor: feature.color }}
              >
                <i className={`${feature.icon} text-5xl`} style={{ color: feature.color }}></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border border-[#FF8A00]/30 hover:border-[#FF8A00] transition-all duration-300 hover:shadow-xl hover:shadow-[#FF8A00]/20">
            <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-[#FF8A00] to-[#FF6600] bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {projects}+
            </div>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Proiecte finalizate
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border border-[#00E6FF]/30 hover:border-[#00E6FF] transition-all duration-300 hover:shadow-xl hover:shadow-[#00E6FF]/20">
            <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-[#00E6FF] to-[#00B8D4] bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {clients}%
            </div>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Clienți recurenți
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border border-[#FF8A00]/30 hover:border-[#FF8A00] transition-all duration-300 hover:shadow-xl hover:shadow-[#FF8A00]/20">
            <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {delays}
            </div>
            <p className="text-xl text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Întârzieri majore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
