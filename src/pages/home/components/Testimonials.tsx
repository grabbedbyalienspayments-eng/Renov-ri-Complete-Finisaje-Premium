
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Andrei Popescu',
      role: 'Proprietar apartament 3 camere',
      text: 'Renovare impecabilă, atenție la detalii! Echipa MasterConstruct a transformat complet apartamentul nostru. Profesionalism de la început până la final.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20romanian%20man%20portrait%20headshot%20smiling%20confident%20business%20casual%20attire%20clean%20simple%20neutral%20background%20studio%20photography%20high%20quality&width=100&height=100&seq=avatar-1&orientation=squarish'
    },
    {
      name: 'Maria Ionescu',
      role: 'Proprietar casă',
      text: 'Au lucrat curat și rapid. Am fost impresionată de organizarea lor și de modul în care au respectat termenele. Recomand cu încredere!',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20romanian%20woman%20portrait%20headshot%20smiling%20friendly%20business%20casual%20attire%20clean%20simple%20neutral%20background%20studio%20photography%20high%20quality&width=100&height=100&seq=avatar-2&orientation=squarish'
    },
    {
      name: 'Cristian Dumitrescu',
      role: 'Proprietar birou',
      text: 'Preț corect, comunicare clară. Fără surprize neplăcute la final. Devizul a fost respectat întocmai și calitatea lucrărilor este excepțională.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20romanian%20businessman%20portrait%20headshot%20confident%20smiling%20formal%20attire%20clean%20simple%20neutral%20background%20studio%20photography%20high%20quality&width=100&height=100&seq=avatar-3&orientation=squarish'
    },
    {
      name: 'Elena Stanciu',
      role: 'Proprietar apartament 2 camere',
      text: 'Meșteri profesioniști și seriozi. Am renovat baia și bucătăria - rezultatul a depășit așteptările. Mulțumesc echipei MasterConstruct!',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20romanian%20woman%20portrait%20headshot%20smiling%20elegant%20business%20attire%20clean%20simple%20neutral%20background%20studio%20photography%20high%20quality&width=100&height=100&seq=avatar-4&orientation=squarish'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimoniale" className="py-24 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FF8A00]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#00E6FF]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              Ce Spun Clienții
            </span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Feedback real de la clienți mulțumiți
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl border border-[#FF8A00]/20 backdrop-blur-sm">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#FF8A00]"
                      />
                      <div className="ml-4">
                        <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-[#FF8A00] text-xl"></i>
                      ))}
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      "{testimonial.text}"
                    </p>

                    <div className="absolute top-8 right-8 text-6xl text-[#FF8A00]/10">
                      <i className="ri-double-quotes-r"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'bg-[#FF8A00] w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
