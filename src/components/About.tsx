import React from 'react';
import {
  TrendingUp,
  Handshake,
  ChartNoAxesCombined,
  Network,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';
import { contentEN } from '../data/en';
import { contentPL } from '../data/pl';
import type { AboutIconKey } from '../types/about';

const ICON_MAP: Record<AboutIconKey, LucideIcon> = {
  'sales-development': TrendingUp,
  'key-accounts': Handshake,
  'commercial-performance': ChartNoAxesCombined,
  'channels-distribution': Network,
  'leadership-mindset': BrainCircuit,
};

interface AboutProps {
  currentLang: 'EN' | 'PL';
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = currentLang === 'EN' ? contentEN.about : contentPL.about;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 border-t border-(--color-decor)/15 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Ambient warm champagne backlight */}
      <div
        className="absolute top-1/4 -left-24 w-110 h-110 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Two-Column Editorial Grid: ~42% Left / ~58% Right on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Professional Identity & Editorial Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Refined Eyebrow */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-(--color-decor)/60" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.12em] text-(--color-decor) font-medium">
                  {t.eyebrow}
                </span>
              </div>

              {/* Expressive Editorial Headline */}
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.18] tracking-normal text-(--color-text)"
              >
                {t.headline}
              </h2>

              {/* Narrative Paragraphs */}
              <div className="mt-6 space-y-4 text-sm sm:text-base font-light leading-relaxed text-(--color-text)/75">
                {t.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Compact Editorial Data Strip (Typographic facts separated by thin 1px rules, not cards) */}
            {t.stats && t.stats.length > 0 && (
              <div className="mt-10 pt-8 border-t border-(--color-decor)/15">
                <div className="grid grid-cols-3 divide-x divide-(--color-decor)/15 rounded-md border border-(--color-decor)/15 bg-(--color-main)/40 backdrop-blur-xs py-4 px-2 sm:px-4">
                  {t.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="px-2 sm:px-4 text-left first:pl-1 sm:first:pl-2 last:pr-1 sm:last:pr-2"
                    >
                      <div className="text-2xl sm:text-3xl font-light text-(--color-decor) tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-(--color-text)/65 font-['Raleway'] mt-1 tracking-normal font-light leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Five Core Competencies along a continuous Champagne Axis */}
          <div className="lg:col-span-7 relative pl-7 sm:pl-9 lg:pl-11 pt-2 lg:pt-0">
            {/* Continuous Vertical Champagne Gold Axis */}
            <div
              className="absolute left-2.5 sm:left-1 top-4 bottom-1 w-px bg-linear-to-b from-(--color-decor)/90 via-(--color-decor)/40 to-(--color-decor)/10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="space-y-6 sm:space-y-7">
              {t.competencies.map((comp) => {
                const IconComponent = ICON_MAP[comp.iconKey];

                return (
                  <article
                    key={comp.id}
                    className="relative group transition-colors duration-500 rounded-md p-3 sm:p-2 -ml-3 sm:-ml-4 hover:bg-(--color-decor)/3"
                  >
                    {/* Discrete Axis Node Marker */}
                    <span
                      className="absolute -left-5.5 sm:-left-7 top-5 sm:top-6 w-2 h-2 rounded-full border border-(--color-decor)/70 bg-(--color-main) transition-all duration-500 group-hover:border-(--color-decor) group-hover:bg-(--color-decor) group-hover:shadow-[0_0_8px_rgba(197,160,89,0.5)]"
                      aria-hidden="true"
                    />

                    {/* Competency Header: Number + Icon + Title */}
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      {/* Monospace 2-digit Sequence Number */}
                      <span className="text-xs sm:text-sm font-semibold tracking-widest text-(--color-decor)/80 uppercase shrink-0">
                        {comp.number}
                      </span>

                      {/* Icon */}
                      <span
                        className="inline-flex items-center justify-center text-(--color-decor) shrink-0 transition-opacity duration-300 group-hover:opacity-100 opacity-85"
                        aria-hidden="true"
                      >
                        <IconComponent size={18} strokeWidth={1.75} />
                      </span>

                      {/* Competency Heading */}
                      <h3 className="text-base sm:text-lg lg:text-xl font-medium tracking-normal text-(--color-text) group-hover:text-white transition-colors duration-300">
                        {comp.title}
                      </h3>
                    </div>

                    {/* Competency Evidence Description */}
                    <p className="mt-2.5 pl-7 sm:pl-8 text-sm sm:text-[15px] font-light leading-relaxed text-(--color-text)/70 group-hover:text-(--color-text)/90 transition-colors duration-300">
                      {comp.description}
                    </p>

                    {/* Delicate 1px Horizontal Rule between items */}
                    {/* Symmetrical champagne gradient separator */}
                    <div
                      className="mt-6 sm:mt-7 h-px bg-linear-to-r from-(--color-decor)/10 via-(--color-decor)/40 to-(--color-decor)/90 group-last:hidden"
                      aria-hidden="true"
                    />
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
