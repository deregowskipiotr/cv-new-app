import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { PrintableCV } from './components/PrintableCV';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'PL' | 'EN'>('EN');
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'PL' ? 'EN' : 'PL'));
  };

  const handleDownloadCv = () => {
    navigateTo('/printable-cv');
  };

  // Dedicated independent printable CV view
  if (currentPath === '/printable-cv') {
    return <PrintableCV onBack={() => navigateTo('/')} />;
  }

  return (
    <div className="min-h-screen relative selection:bg-(--color-decor)/30 selection:text-(--color-text)">
      {/* Sticky Blurred Header / Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onDownloadCv={handleDownloadCv}
      />

      {/* Main Content Area */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="scroll-mt-20 min-h-[calc(100vh-5rem)] flex flex-col justify-start md:justify-center items-center">
          <Hero currentLang={currentLang} onDownloadCv={handleDownloadCv} />
        </section>

        {/* About Section */}
        <About currentLang={currentLang} />

        {/* Experience Section */}
        <Experience currentLang={currentLang} />

        {/* Skills & Beyond Section */}
        <Skills currentLang={currentLang} />

        {/* Projects Section */}
        <Projects currentLang={currentLang} />

        {/* Contact Section */}
        <Contact currentLang={currentLang} />
      </main>
    </div>
  );
};

export default App;
