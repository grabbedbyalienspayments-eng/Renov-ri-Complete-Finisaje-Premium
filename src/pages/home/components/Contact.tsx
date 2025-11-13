
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    workType: '',
    area: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        address: '',
        workType: '',
        area: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              Contactează-ne
            </span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Suntem aici să te ajutăm cu proiectul tău
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Nume complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#FF8A00]/30 rounded-lg text-white focus:outline-none focus:border-[#FF8A00] transition-colors duration-300"
                  placeholder="Ion Popescu"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#FF8A00]/30 rounded-lg text-white focus:outline-none focus:border-[#FF8A00] transition-colors duration-300"
                  placeholder="+40 7XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Adresă
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#FF8A00]/30 rounded-lg text-white focus:outline-none focus:border-[#FF8A00] transition-colors duration-300"
                  placeholder="București, Sector X"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Tip lucrare
                </label>
                <select
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-8 bg-[#1A1A1A] border border-[#FF8A00]/30 rounded-lg text-white focus:outline-none focus:border-[#FF8A00] transition-colors duration-300 cursor-pointer"
                >
                  <option value="">Selectează tipul lucrării</option>
                  <option value="renovare-completa">Renovare completă</option>
                  <option value="finisaje">Finisaje premium</option>
                  <option value="glet-zugraveli">Glet & zugrăveli</option>
                  <option value="rigips">Rigips & tavane</option>
                  <option value="instalatii-sanitare">Instalații sanitare</option>
                  <option value="instalatii-electrice">Instalații electrice</option>
                  <option value="gresie-faianta">Gresie & faianță</option>
                  <option value="parchet">Parchet & uși</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Suprafață estimativă (m²)
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#FF8A00]/30 rounded-lg text-white focus:outline-none focus:border-[#FF8A00] transition-colors duration-300"
                  placeholder="ex: 50 m²"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Mesaj
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#FF8A00]/30 rounded-lg text-white focus:outline-none focus:border-[#FF8A00] transition-colors duration-300 resize-none"
                  placeholder="Descrie pe scurt proiectul tău..."
                />
                <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {formData.message.length}/500 caractere
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#FF8A00] to-[#FF6600] rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-[#FF8A00]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite cererea'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                  Mesajul a fost trimis cu succes! Vă vom contacta în curând.
                </div>
              )}
            </form>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border border-[#00E6FF]/30">
              <div className="flex items-center space-x-3 text-[#00E6FF]">
                <i className="ri-time-line text-2xl"></i>
                <div>
                  <h4 className="font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Intervenții mici disponibile în 24h
                  </h4>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Pentru reparații urgente și lucrări minore
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-xl border border-[#FF8A00]/30">
              <h3 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Informații Contact
              </h3>
              
              <div className="space-y-6">
                <a href="tel:+40740000000" className="flex items-center space-x-4 text-gray-300 hover:text-[#FF8A00] transition-colors duration-300 cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FF8A00]/20 rounded-lg">
                    <i className="ri-phone-fill text-[#FF8A00] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Telefon</p>
                    <p className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>+40 740 000 000</p>
                  </div>
                </a>

                <a href="https://wa.me/40740000000" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-[#00E6FF] transition-colors duration-300 cursor-pointer">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#00E6FF]/20 rounded-lg">
                    <i className="ri-whatsapp-fill text-[#00E6FF] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>WhatsApp</p>
                    <p className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Mesaj direct</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FF8A00]/20 rounded-lg">
                    <i className="ri-map-pin-fill text-[#FF8A00] text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Zonă acoperită</p>
                    <p className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>București & Ilfov</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#FF8A00]/30 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182647.9353515625!2d25.93417!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hartă București"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/40740000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 cursor-pointer"
      >
        <i className="ri-whatsapp-fill text-white text-3xl"></i>
      </a>
    </section>
  );
}
