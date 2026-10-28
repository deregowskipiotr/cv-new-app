import React from 'react';
import {
  FileSpreadsheet,
  BookOpen,
  MapPinned,
  ArrowUpRight,
} from 'lucide-react';
import { contentEN } from '../data/en';
import { contentPL } from '../data/pl';
import type { ProjectVisualType, ProjectItem } from '../types/projects';

interface ProjectsProps {
  currentLang: 'EN' | 'PL';
}

export const Projects: React.FC<ProjectsProps> = ({ currentLang }) => {
  const t = currentLang === 'EN' ? contentEN.projects : contentPL.projects;

  const renderVisualTexture = (visual: ProjectVisualType) => {
    switch (visual) {
      case 'spreadsheet':
        return (
          <div
            className="relative w-full h-24 sm:h-28 overflow-hidden rounded-t-md border-b border-(--color-decor)/10 bg-linear-to-b from-(--color-decor)/3 to-transparent flex items-center justify-between px-5"
            aria-hidden="true"
          >
            {/* Fine spreadsheet cell grid */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="excelGrid"
                  width="36"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 36 0 L 0 0 0 20"
                    fill="none"
                    stroke="#C5A059"
                    strokeWidth="0.5"
                    strokeOpacity="0.22"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#excelGrid)" />
              {/* Highlighted active cell with soft champagne tone */}
              <rect
                x="36"
                y="20"
                width="36"
                height="20"
                fill="rgba(197,160,89,0.12)"
                stroke="#C5A059"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              <rect
                x="108"
                y="40"
                width="36"
                height="20"
                fill="rgba(197,160,89,0.06)"
              />
            </svg>

            {/* Subtle editorial indicator */}
            <span className="relative z-10 text-[10px] font-mono tracking-widest text-(--color-decor)/50 uppercase">
              fx = FORMULA
            </span>

            <FileSpreadsheet
              size={20}
              className="relative z-10 text-(--color-decor) opacity-80"
              strokeWidth={1.5}
            />
          </div>
        );

      case 'vocabulary':
        return (
          <div
            className="relative w-full h-24 sm:h-28 overflow-hidden rounded-t-md border-b border-(--color-decor)/10 bg-linear-to-b from-(--color-decor)/3 to-transparent flex items-center justify-between px-5"
            aria-hidden="true"
          >
            {/* Typographic dictionary-inspired texture */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="20"
                y1="24"
                x2="180"
                y2="24"
                stroke="#C5A059"
                strokeWidth="0.75"
                strokeDasharray="4 6"
              />
              <line
                x1="20"
                y1="48"
                x2="240"
                y2="48"
                stroke="#C5A059"
                strokeWidth="0.5"
                strokeOpacity="0.5"
              />
              <line
                x1="20"
                y1="72"
                x2="150"
                y2="72"
                stroke="#C5A059"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            </svg>

            <div className="relative z-10 flex flex-col">
              <span className="font-['Antic_Didone'] italic text-sm text-(--color-text)/70 tracking-wide">
                lexicon &middot; [b2 &ndash; c1]
              </span>
              <span className="text-[10px] font-light text-(--color-decor)/60 mt-0.5 tracking-wider">
                150+ COLLOCATIONS
              </span>
            </div>

            <BookOpen
              size={20}
              className="relative z-10 text-(--color-decor) opacity-80"
              strokeWidth={1.5}
            />
          </div>
        );

      case 'topographic':
        return (
          <div
            className="relative w-full h-24 sm:h-28 overflow-hidden rounded-t-md border-b border-(--color-decor)/10 bg-linear-to-b from-(--color-decor)/3 to-transparent flex items-center justify-between px-5"
            aria-hidden="true"
          >
            {/* Abstract topographic contour curves */}
            <svg
              className="absolute -right-4 -bottom-6 w-56 h-36 pointer-events-none opacity-35"
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 100 Q 50 40 100 70 T 190 30"
                stroke="#C5A059"
                strokeWidth="0.75"
                strokeOpacity="0.3"
              />
              <path
                d="M 20 110 Q 70 50 120 85 T 195 50"
                stroke="#C5A059"
                strokeWidth="0.75"
                strokeOpacity="0.45"
              />
              <path
                d="M 35 120 Q 90 65 140 95 T 200 70"
                stroke="#C5A059"
                strokeWidth="1"
                strokeOpacity="0.6"
              />
              <path
                d="M 60 120 Q 110 80 155 105 T 200 90"
                stroke="#C5A059"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            </svg>

            <span className="relative z-10 text-[10px] font-mono tracking-widest text-(--color-decor)/50 uppercase">
              3 AI ITINERARIES &middot; ELEVATION
            </span>

            <MapPinned
              size={20}
              className="relative z-10 text-(--color-decor) opacity-80"
              strokeWidth={1.5}
            />
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 border-t border-(--color-decor)/15 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 right-1/4 w-120 h-120 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-(--color-decor)/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.12em] text-(--color-decor) font-medium">
              {t.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.18] tracking-normal text-(--color-text)"
          >
            {t.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-(--color-text)/75 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>

        {/* PROJECTS GRID: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {t.items.map((project: ProjectItem, index: number) => {
            const isLastOdd = index === 2;

            return (
              <div
                key={project.id}
                className={`group relative flex flex-col justify-between rounded-md border border-(--color-decor)/15 bg-(--color-main)/60 backdrop-blur-md transition-colors duration-500 hover:border-(--color-decor)/35 hover:bg-(--color-decor)/2 ${
                  isLastOdd
                    ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full'
                    : ''
                }`}
              >
                {/* TOP HALF: Category index + Visual Texture + Content */}
                <div>
                  {/* Distinctive Visual Header */}
                  {renderVisualTexture(project.visual)}

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col">
                    {/* Index + Category Label */}
                    <div className="flex items-center gap-2 mb-3 h-5">
                      <span className="text-[11px] font-medium tracking-[0.12em] text-(--color-decor)/80 uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title - uniform height on desktop */}
                    <h3 className="text-xl sm:text-2xl font-normal leading-snug tracking-normal text-(--color-text) group-hover:text-white transition-colors duration-300 lg:h-16 flex items-start">
                      {project.title}
                    </h3>

                    {/* Project Description - uniform height on desktop */}
                    <p className="mt-3 text-sm sm:text-[15px] font-light leading-relaxed text-(--color-text)/70 group-hover:text-(--color-text)/85 transition-colors duration-300 lg:h-32">
                      {project.description}
                    </p>

                    {/* Typographic Metadata Tags - uniform height and alignment on desktop */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-light text-(--color-text)/55 lg:h-10">
                      {project.tags.map((tag, tagIndex) => (
                        <React.Fragment key={tag}>
                          {tagIndex > 0 && (
                            <span className="text-(--color-decor)/30 select-none" aria-hidden="true">
                              &middot;
                            </span>
                          )}
                          <span className="tracking-wide">{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM HALF: Separator & Action CTA */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-(--color-decor)/10">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-(--color-decor) hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--color-decor)"
                    >
                      <span>{t.openProject}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-xs font-light text-(--color-text)/50 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--color-decor)/40" aria-hidden="true" />
                      <span>{t.unavailableLink}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
