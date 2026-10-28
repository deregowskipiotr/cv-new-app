import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'PL' | 'EN'>('EN');

  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'PL' ? 'EN' : 'PL'));
  };

  const handleDownloadCv = () => {
    // Replace with the actual relative path to your PDF file in public/ folder
    const cvUrl = '/CV_Piotr_Deregowski.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Piotr_Deregowski_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

        {/* Projects Section */}
        <Projects currentLang={currentLang} />
      </main>
    </div>
  );
};

export default App;