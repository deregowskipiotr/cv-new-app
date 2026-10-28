import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { MetallicButton } from '../ui/MetallicButton';
import { contentEN } from '../data/en';
import { contentPL } from '../data/pl';

interface HeroProps {
  currentLang: 'EN' | 'PL';
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onDownloadCv }) => {
  const t = currentLang === 'EN' ? contentEN.hero : contentPL.hero;
  
  // State for the looping active stat index
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % t.stats.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [t.stats.length]);

  return (
    <div className="relative w-full py-6 md:py-10 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Deep ambient background illumination */}
      <div className="absolute top-1/3 right-1/4 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.07)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        
        {/* LEFT COLUMN: Text, Eyebrow & Actions */}
        <div className="lg:col-span-7 space-y-7 z-10">
          
          

          {/* Headline and Description */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-normal text-(--color-text)">
              {t.titlePrimary}{' '}
              <span className="text-(--color-decor) font-light block sm:inline">
                {t.titleSecondary}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-(--color-text)/75 max-w-2xl leading-relaxed tracking-normal font-light">
              {t.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div onClick={onDownloadCv} className="inline-block">
              <MetallicButton className="w-full sm:w-56">
                <span className="flex items-center justify-center space-x-3">
                  <Download size={18} className="text-(--color-decor)" />
                  <span className="font-medium">{t.downloadCv}</span>
                </span>
              </MetallicButton>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Focus (Seamless Portrait + Orbital Curves + Shining Drops) */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-4 sm:py-8">
          
          {/* Ambient Warm Golden Backlight behind Portrait */}
          <div className="absolute w-80 h-80 sm:w-105 sm:h-105 md:w-125 md:h-125 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.22)_0%,rgba(197,160,89,0.06)_45%,transparent_70%)] blur-3xl pointer-events-none -z-10" />
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[radial-gradient(circle,rgba(230,202,133,0.28)_0%,rgba(197,160,89,0.1)_50%,transparent_75%)] blur-2xl pointer-events-none -z-10" />

          {/* Main Visual Composition Container */}
          <div className="relative w-72 h-84 sm:w-80 sm:h-92 md:w-97.5 md:h-115 lg:w-105 lg:h-120 flex items-center justify-center">
            
            {/* SVG IRREGULAR CURVE LINES & SHINING DECOR DROPS */}
            <svg
              className="absolute -inset-12 sm:-inset-16 md:-inset-20 w-[calc(100%+6rem)] sm:w-[calc(100%+8rem)] md:w-[calc(100%+10rem)] h-[calc(100%+6rem)] sm:h-[calc(100%+8rem)] md:h-[calc(100%+10rem)] pointer-events-none z-0 overflow-visible"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gold gradient for main orbital arc */}
                <linearGradient id="goldOrbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C5A059" stopOpacity="0.08" />
                  <stop offset="35%" stopColor="#E6CA85" stopOpacity="0.85" />
                  <stop offset="65%" stopColor="#C5A059" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#7D612E" stopOpacity="0.1" />
                </linearGradient>

                {/* Gold gradient for intersecting eccentric arc */}
                <linearGradient id="goldOrbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C5A059" stopOpacity="0.05" />
                  <stop offset="30%" stopColor="#C5A059" stopOpacity="0.5" />
                  <stop offset="78%" stopColor="#E6CA85" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C5A059" stopOpacity="0.1" />
                </linearGradient>

                {/* Radial glow for the main shining drop */}
                <radialGradient id="dropGlowRadial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFDF5" stopOpacity="1" />
                  <stop offset="25%" stopColor="#E6CA85" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#C5A059" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
                </radialGradient>

                {/* Bloom drop-shadow filter */}
                <filter id="goldBloom" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Outer Calibration / Astrolabe Dash Ring */}
              <circle
                cx="300"
                cy="285"
                r="268"
                stroke="url(#goldOrbitGrad1)"
                strokeWidth="0.5"
                strokeDasharray="3 8"
                opacity="0.3"
              />

              {/* 2. Primary Sweeping Orbital Curve (framing head and curving down right shoulder) */}
              <ellipse
                cx="300"
                cy="285"
                rx="235"
                ry="210"
                transform="rotate(-18 300 285)"
                stroke="url(#goldOrbitGrad1)"
                strokeWidth="1.2"
                strokeDasharray="260 20 15 20 110 15 8 15"
                opacity="0.85"
              />

              {/* 3. Secondary Eccentric Intersecting Arc (tilted opposing angle) */}
              <ellipse
                cx="295"
                cy="295"
                rx="205"
                ry="230"
                transform="rotate(25 295 295)"
                stroke="url(#goldOrbitGrad2)"
                strokeWidth="0.8"
                strokeDasharray="170 30 40 30"
                opacity="0.6"
              />

              {/* 4. Inner Halo Arc behind head */}
              <circle
                cx="300"
                cy="265"
                r="160"
                stroke="#C5A059"
                strokeWidth="0.6"
                strokeDasharray="70 190"
                opacity="0.45"
              />

              {/* 5. Delicate Astrolabe Crosshair / Ticks */}
              <line x1="290" y1="18" x2="310" y2="18" stroke="#C5A059" strokeWidth="0.75" opacity="0.35" />
              <line x1="300" y1="8" x2="300" y2="28" stroke="#C5A059" strokeWidth="0.75" opacity="0.35" />

              {/* 6. PRIMARY SHINING DECOR DROP (Upper Right Orbit - matched to reference template) */}
              <g className="animate-[pulse_3.5s_ease-in-out_infinite]" style={{ transformOrigin: '495px 235px' }}>
                {/* Large diffused glow */}
                <circle cx="495" cy="235" r="24" fill="url(#dropGlowRadial)" opacity="0.5" />
                {/* Medium core bloom */}
                <circle cx="495" cy="235" r="8" fill="#C5A059" opacity="0.65" filter="url(#goldBloom)" />
                {/* 4-point Diamond Starlight Flare */}
                <path
                  d="M495 210 Q495 235 474 235 Q495 235 495 260 Q495 235 516 235 Q495 235 495 210 Z"
                  fill="#FFFDF0"
                  opacity="0.95"
                  filter="url(#goldBloom)"
                />
                {/* Intense white center node */}
                <circle cx="495" cy="235" r="3.2" fill="#FFFFFF" />
                <circle cx="495" cy="235" r="1.5" fill="#FFF7DE" />
              </g>

              {/* 7. SECONDARY SHINING DECOR DROP (Left Curve, approx x=115, y=210) */}
              <g className="animate-[pulse_4s_ease-in-out_infinite_1.2s]" style={{ transformOrigin: '115px 210px' }}>
                <circle cx="115" cy="210" r="16" fill="url(#dropGlowRadial)" opacity="0.4" />
                <circle cx="115" cy="210" r="5" fill="#C5A059" opacity="0.65" filter="url(#goldBloom)" />
                {/* Mini starlight cross */}
                <path
                  d="M115 197 Q115 210 105 210 Q115 210 115 223 Q115 210 125 210 Q115 210 115 197 Z"
                  fill="#FFFDF0"
                  opacity="0.85"
                />
                <circle cx="115" cy="210" r="2.2" fill="#FFFFFF" />
              </g>

              {/* 8. TERTIARY DECOR DROP (Lower Right Arc Accent, approx x=475, y=415) */}
              <g className="animate-[pulse_3s_ease-in-out_infinite_2.2s]">
                <circle cx="475" cy="415" r="8" fill="url(#dropGlowRadial)" opacity="0.35" />
                <circle cx="475" cy="415" r="2.5" fill="#C5A059" opacity="0.8" />
                <circle cx="475" cy="415" r="1.2" fill="#FFFFFF" />
              </g>

              {/* 9. TINY CELESTIAL DEWDROPS along the curves */}
              <circle cx="210" cy="95" r="1.8" fill="#E6CA85" opacity="0.8" />
              <circle cx="210" cy="95" r="0.9" fill="#FFFFFF" />
              <circle cx="395" cy="120" r="1.5" fill="#C5A059" opacity="0.6" />
            </svg>

            {/* ROTATING LUXURY MONOGRAM EMBLEM / STAMP (Top Right - as in template) */}
            <div className="absolute -top-3 -right-2 sm:-right-6 md:-right-8 w-24 h-24 sm:w-28 sm:h-28 z-20 pointer-events-none select-none">
              <svg className="w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 120 120">
                <defs>
                  <path
                    id="monogramTextPath"
                    d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    fill="none"
                  />
                </defs>
                {/* Outer delicate rim */}
                <circle cx="60" cy="60" r="52" fill="none" stroke="var(--color-decor)" strokeWidth="0.5" opacity="0.25" strokeDasharray="3 3" />
                {/* Curved circular lettering */}
                <text className="text-[7.5px] uppercase font-['Raleway'] tracking-[0.26em] fill-(--color-decor) opacity-70">
                  <textPath href="#monogramTextPath" startOffset="0%">
                    • COMMERCIAL LEADERSHIP • SALES FOCUS • DIGITAL CV •
                  </textPath>
                </text>
              </svg>
              {/* Center Monogram Initial */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-light italic text-(--color-decor)/80">
                  PD
                </span>
              </div>
            </div>

            {/* SEAMLESS PORTRAIT CONTAINER (NO RECTANGULAR EDGES, MULTI-TIER MASK & GRADIENT DISSOLVE) */}
            <div className="relative w-full h-full z-10 flex items-end justify-center">
              
              {/* Cutout Photo with Inset Radial & Linear Vignette Alpha Mask */}
              <img
                src="/images/cv-image.png" 
                alt="Piotr Deręgowski"
                className="w-full h-full object-contain sm:object-cover object-top filter brightness-[0.98] contrast-[1.04] transition-all duration-700"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 72% at 50% 32%, black 38%, rgba(0, 0, 0, 0.75) 55%, transparent 84%), linear-gradient(to bottom, black 40%, transparent 84%)',
                  maskImage: 'radial-gradient(ellipse 75% 72% at 50% 32%, black 38%, rgba(0, 0, 0, 0.75) 55%, transparent 84%), linear-gradient(to bottom, black 40%, transparent 84%)',
                  WebkitMaskComposite: 'source-in',
                  maskComposite: 'intersect',
                }}
              />

              {/* Deep Bottom Dissolve Overlay (Completely dissolves the lower chest & shirt into dark background) */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-(--color-main) via-(--color-main)/90 via-45% to-transparent pointer-events-none z-10" />

              {/* Feathered Lateral Edge Overlays (Guarantees no sharp horizontal shoulder bounds) */}
              <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-(--color-main)/90 via-(--color-main)/50 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-(--color-main)/90 via-(--color-main)/50 to-transparent pointer-events-none z-10" />

              {/* ELEGANT SIGNATURE ACCENT (Bottom Right of Portrait - as in template) */}
              <div className="absolute -bottom-2 right-2 sm:right-6 z-20 pointer-events-none select-none text-right">
                <div className="font-['MonteCarlo'] italic text-xl sm:text-3xl text-(--color-decor)/70 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Piotr Deręgowski
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* STATS / PROOF STRIP (Bottom Loop Effect) */}
      <div className="w-full mt-10 md:mt-14 pt-8 border-t border-(--color-decor)/20 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {t.stats.map((stat, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`p-4 sm:p-5 rounded-md border transition-all duration-700 bg-(--color-main)/60 backdrop-blur-md ${
                  isActive
                    ? 'border-(--color-decor)/40 shadow-lg shadow-(--color-decor)/5'
                    : 'border-(--color-decor)/15 opacity-70 hover:opacity-100 hover:border-(--color-decor)/30'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-bold text-(--color-decor) tracking-normal">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-['Raleway'] text-(--color-text)/80 mt-1 tracking-normal font-light">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};