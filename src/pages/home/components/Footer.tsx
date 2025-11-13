
export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#FF8A00]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="ri-hammer-fill text-2xl text-[#FF8A00]"></i>
              <span className="text-xl font-bold bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                MasterConstruct
              </span>
            </div>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Renovări profesionale în București și Ilfov. Calitate garantată și finisaje premium.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Link-uri Utile
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF8A00] transition-colors duration-300 text-sm cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Termeni și Condiții
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF8A00] transition-colors duration-300 text-sm cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Politica de Confidențialitate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF8A00] transition-colors duration-300 text-sm cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Politica GDPR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF8A00] transition-colors duration-300 text-sm cursor-pointer" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Politica de Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Urmărește-ne
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FF8A00] transition-colors duration-300 cursor-pointer">
                <i className="ri-facebook-fill text-white text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#FF8A00] transition-colors duration-300 cursor-pointer">
                <i className="ri-instagram-fill text-white text-xl"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-lg hover:bg-[#00E6FF] transition-colors duration-300 cursor-pointer">
                <i className="ri-linkedin-fill text-white text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FF8A00]/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 MasterConstruct București — Renovări Profesionale. Toate drepturile rezervate.
          </p>
          <a 
            href="https://websiteon.ro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FF8A00] transition-colors duration-300 text-sm cursor-pointer"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Made by WebsiteON.ro
          </a>
        </div>
      </div>
    </footer>
  );
}
