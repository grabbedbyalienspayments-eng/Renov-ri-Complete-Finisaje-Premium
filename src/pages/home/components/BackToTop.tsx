
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-14 h-14 bg-gradient-to-br from-[#FF8A00] to-[#FF6600] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 cursor-pointer group"
        >
          <i className="ri-arrow-up-line text-white text-2xl group-hover:-translate-y-1 transition-transform duration-300"></i>
        </button>
      )}
    </>
  );
}
