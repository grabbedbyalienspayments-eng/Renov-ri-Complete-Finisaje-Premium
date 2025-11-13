import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ title: string; image: string } | null>(null);

  const projects = [
    {
      title: 'Living modern renovat complet',
      image: 'https://readdy.ai/api/search-image?query=modern%20renovated%20living%20room%20with%20hidden%20LED%20strip%20lighting%20under%20ceiling%20contemporary%20furniture%20minimalist%20design%20clean%20white%20walls%20wooden%20flooring%20ambient%20lighting%20professional%20interior%20photography%20high%20resolution%20luxury%20apartment%20renovation%20simple%20neutral%20background&width=600&height=800&seq=project-1&orientation=portrait'
    },
    {
      title: 'Bucătărie albă cu faianță metro',
      image: 'https://readdy.ai/api/search-image?query=white%20modern%20kitchen%20with%20metro%20subway%20tiles%20backsplash%20wooden%20countertop%20contemporary%20cabinets%20clean%20design%20professional%20interior%20photography%20bright%20lighting%20minimalist%20style%20renovation%20project%20simple%20background&width=600&height=400&seq=project-2&orientation=landscape'
    },
    {
      title: 'Baie premium cu marmură',
      image: 'https://readdy.ai/api/search-image?query=premium%20luxury%20bathroom%20with%20beige%20marble%20tiles%20walk%20in%20glass%20shower%20cabin%20modern%20fixtures%20elegant%20design%20professional%20interior%20photography%20high%20end%20renovation%20clean%20minimalist%20style%20simple%20background&width=600&height=800&seq=project-3&orientation=portrait'
    },
    {
      title: 'Hol renovat cu ușă filomuro',
      image: 'https://readdy.ai/api/search-image?query=renovated%20modern%20hallway%20corridor%20with%20flush%20hidden%20door%20filomuro%20style%20clean%20white%20walls%20contemporary%20design%20minimalist%20interior%20professional%20photography%20elegant%20simple%20renovation%20project%20neutral%20background&width=600&height=400&seq=project-4&orientation=landscape'
    },
    {
      title: 'Tavan rigips 3 nivele',
      image: 'https://readdy.ai/api/search-image?query=three%20level%20drywall%20gypsum%20ceiling%20with%20recessed%20spotlights%20modern%20interior%20design%20professional%20construction%20work%20clean%20finish%20contemporary%20style%20renovation%20project%20white%20ceiling%20simple%20background&width=600&height=400&seq=project-5&orientation=landscape'
    },
    {
      title: 'Placare gresie 60x60',
      image: 'https://readdy.ai/api/search-image?query=large%20format%2060x60%20matte%20grey%20porcelain%20floor%20tiles%20installation%20professional%20tiling%20work%20clean%20grout%20lines%20modern%20flooring%20renovation%20project%20construction%20detail%20simple%20background&width=600&height=800&seq=project-6&orientation=portrait'
    },
    {
      title: 'Dormitor simplu vopsea premium',
      image: 'https://readdy.ai/api/search-image?query=simple%20modern%20bedroom%20with%20premium%20washable%20paint%20finish%20clean%20walls%20minimalist%20design%20contemporary%20furniture%20professional%20interior%20photography%20neutral%20colors%20renovation%20project%20simple%20background&width=600&height=400&seq=project-7&orientation=landscape'
    },
    {
      title: 'Instalație electrică refăcută',
      image: 'https://readdy.ai/api/search-image?query=completely%20renovated%20electrical%20installation%20wiring%20system%20modern%20electrical%20panel%20professional%20work%20clean%20cable%20management%20construction%20detail%20technical%20photography%20safety%20standards%20simple%20background&width=600&height=800&seq=project-8&orientation=portrait'
    },
    {
      title: 'Parchet SPC montat profesional',
      image: 'https://readdy.ai/api/search-image?query=professionally%20installed%20SPC%20vinyl%20plank%20flooring%20wood%20look%20modern%20interior%20clean%20installation%20contemporary%20design%20renovation%20project%20detailed%20photography%20quality%20workmanship%20simple%20background&width=600&height=400&seq=project-9&orientation=landscape'
    },
  ];

  const openLightbox = (project: { title: string; image: string }) => {
    setLightboxImage(project);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="proiecte" className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] bg-clip-text text-transparent">
              Proiecte Realizate
            </span>
          </h2>
          <p className="text-xl text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            Portofoliu de lucrări finalizate cu succes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
              onClick={() => openLightbox(project)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent transition-opacity duration-300 ${
                selectedProject === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {project.title}
                  </h3>
                  <button className="flex items-center space-x-2 text-[#FF8A00] hover:text-[#00E6FF] transition-colors duration-300 whitespace-nowrap">
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>Vezi detalii</span>
                    <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-[#FF8A00]/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-eye-line text-white text-xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-[#FF8A00] hover:bg-[#00E6FF] rounded-full transition-colors duration-300 cursor-pointer z-10"
            aria-label="Închide"
          >
            <i className="ri-close-line text-white text-2xl"></i>
          </button>

          <div 
            className="max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <h3 className="text-2xl font-bold text-white mt-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {lightboxImage.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
