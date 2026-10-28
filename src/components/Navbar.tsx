import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MetallicButton } from '../ui/MetallicButton';
import { NAVIGATION_LINKS } from '../config/navigation';
import { contentEN } from '../data/en';
import { contentPL } from '../data/pl';

interface NavbarProps {
  currentLang: 'EN' | 'PL';
  onToggleLang: () => void;
  onDownloadCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang, onDownloadCv }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = currentLang === 'EN' ? contentEN.nav : contentPL.nav;

  // Handle sticky navbar border/shadow and robust active section highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Top of the page: always highlight 'home'
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // Check all available sections currently rendered in the DOM
      const sections = NAVIGATION_LINKS
        .map((link) => {
          const el = document.querySelector(link.href) as HTMLElement | null;
          return el ? { id: link.id, top: el.offsetTop } : null;
        })
        .filter((s): s is { id: string; top: number } => s !== null);

      const navHeight = 96; // 80px navbar height + offset
      const currentScroll = window.scrollY + navHeight;

      let current = 'home';
      for (const section of sections) {
        if (currentScroll >= section.top - 20) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    setActiveSection(id);
    if (id === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState(null, '', '#home');
    } else {
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', href);
      }
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-(--color-main)/80 backdrop-blur-md border-b ${
          scrolled ? 'border-(--color-decor)/10 shadow-lg' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            className="text-xl font-thin italic tracking-normal hover:text-(--color-decor) transition-colors duration-500"
          >
            {t.logo}
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {NAVIGATION_LINKS.map((link) => {
              const label = t.labels[link.id as keyof typeof t.labels];
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative group py-2 text-sm font-['Raleway'] tracking-normal transition-colors duration-500 ${
                    isActive ? 'text-(--color-decor)' : 'text-(--color-text) hover:text-(--color-decor)'
                  }`}
                >
                  {label}
                  {/* Subtle bottom-line linear gradient animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-linear-to-r from-transparent via-(--color-decor) to-transparent transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center space-x-4">
            <MetallicButton onClick={onToggleLang} size='sm'>
              {currentLang}
            </MetallicButton>
            <MetallicButton onClick={onDownloadCv} size='sm'>
              {t.letsTalk}
            </MetallicButton>
          </div>

          {/* MOBILE HEADER ACTIONS */}
          <div className="flex md:hidden items-center space-x-3">
            <MetallicButton onClick={onToggleLang} size='sm'>
              {currentLang}
            </MetallicButton>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md border border-(--color-decor)/30 bg-(--color-main) text-(--color-text) hover:border-(--color-decor) hover:bg-(--color-decor)/10 transition-all duration-500"
              aria-label="Open navigation menu"
            >
              <Menu size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-50 w-full h-full bg-(--color-main)/95 backdrop-blur-xl flex flex-col justify-between px-6 py-6 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between w-full h-14 border-b border-(--color-decor)/20 pb-4">
          <a
            href="#home"
            onClick={(e) => {
              setIsOpen(false);
              handleNavClick(e, '#home', 'home');
            }}
            className="text-xl font-thin italic tracking-normal"
          >
            {t.logo}
          </a>
          <div className="flex items-center space-x-3">
            <MetallicButton onClick={onToggleLang} size='sm'>
              {currentLang}
            </MetallicButton>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md border border-(--color-decor)/30 bg-(--color-main) text-(--color-text) hover:border-(--color-decor) hover:bg-(--color-decor)/10 transition-all duration-500"
              aria-label="Close navigation menu"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col space-y-6 my-auto">
          {NAVIGATION_LINKS.map((link) => {
            const label = t.labels[link.id as keyof typeof t.labels];
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavClick(e, link.href, link.id);
                }}
                className={`text-2xl transition-colors duration-500 tracking-normal ${
                  isActive ? 'text-(--color-decor)' : 'text-(--color-text) hover:text-(--color-decor)'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Mobile Bottom Action */}
        <div className="w-full pt-4 border-t border-(--color-decor)/20">
          
            <MetallicButton className='w-full text-center' onClick={() => {
              setIsOpen(false);
              onDownloadCv();
            }}>
              {t.letsTalk}
            </MetallicButton>
          
        </div>
      </div>
    </>
  );
};