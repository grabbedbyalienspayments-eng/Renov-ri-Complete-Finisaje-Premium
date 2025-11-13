
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-[#1A1A1A] z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#FF8A00] to-[#00E6FF] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollProgress />
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
