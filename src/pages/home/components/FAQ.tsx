
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Cât durează o renovare completă?',
      answer: 'Durata depinde de suprafața și complexitatea lucrărilor. Un apartament de 2-3 camere necesită în medie 3-6 săptămâni. Vă oferim un calendar detaliat după evaluarea inițială.'
    },
    {
      question: 'Oferiți garanție pentru lucrări?',
      answer: 'Da, toate lucrările noastre beneficiază de garanție de 12 luni. Garanția acoperă atât manopera, cât și materialele utilizate, în condițiile unei utilizări normale.'
    },
    {
      question: 'Ce materiale folosiți?',
      answer: 'Lucrăm cu materiale premium de la furnizori verificați: Knauf, Ceresit, Caparol, Dulux și alții. Puteți alege și materiale proprii sau de la alți furnizori.'
    },
    {
      question: 'Cum se calculează prețul?',
      answer: 'Prețul se calculează în funcție de suprafața de lucru, tipul finisajelor și materialele alese. Oferim deviz detaliat gratuit după evaluarea la fața locului.'
    },
    {
      question: 'Cine se ocupă de evacuarea molozului?',
      answer: 'Noi ne ocupăm de evacuarea molozului și de curățenia finală. Costul este inclus în devizul inițial, fără taxe suplimentare.'
    },
    {
      question: 'Care este programul de lucru?',
      answer: 'Lucrăm de luni până vineri între orele 8:00-18:00. Pentru proiecte urgente, putem stabili un program flexibil, inclusiv weekend, cu acordul vecinilor.'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              Întrebări Frecvente
            </span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Răspunsuri la cele mai comune întrebări
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border border-[#FF8A00]/20 overflow-hidden transition-all duration-300 hover:border-[#FF8A00]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-[#FF8A00]/5 transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-white pr-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {faq.question}
                </span>
                <i className={`ri-arrow-down-s-line text-2xl text-[#FF8A00] transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}></i>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
