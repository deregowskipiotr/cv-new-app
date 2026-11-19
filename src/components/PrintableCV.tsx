import React from 'react';
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  //FileText,
  Languages,
} from 'lucide-react';
import { printableCVDataEN } from '../data/printableCV.en';
import { printableCVDataPL } from '../data/printableCV.pl';
import { MetallicButton } from '@/ui/MetallicButton';

interface PrintableCVProps {
  currentLang?: 'EN' | 'PL';
  onToggleLang?: () => void;
  onBack?: () => void;
}

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 11, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const PrintableCV: React.FC<PrintableCVProps> = ({
  currentLang = 'EN',
  onToggleLang,
  onBack,
}) => {
  const data = currentLang === 'PL' ? printableCVDataPL : printableCVDataEN;
  const isPolish = currentLang === 'PL';

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="printable-root-container min-h-screen bg-neutral-900 text-zinc-100 py-6 sm:py-10 px-2 sm:px-4 flex flex-col items-center select-text antialiased">
      {/* 1. SCREEN-ONLY TOP TOOLBAR (EXCLUDED IN PRINT) */}
      <header className="no-print w-full max-w-[210mm] mb-2 flex flex-col sm:flex-row items-center justify-between p-4 rounded-md border border-zinc-700 bg-neutral-800/90 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-10.5">
          <MetallicButton
            type="button"
            onClick={handleBack}
            className="w-full sm:w-56"
            aria-label={data.ui.backToPortfolio}
          >
             <span className="flex items-center justify-center space-x-3">
              <ArrowLeft size={14} />
              <span>{data.ui.backToPortfolio}</span>
            </span>
          </MetallicButton>
        

      
          {/* Language Toggle in Toolbar */}
          {onToggleLang && (
            <MetallicButton
              type="button"
              onClick={onToggleLang}
              className="w-full sm:w-56"
              aria-label="Toggle language"  
            >
              <span className="flex items-center justify-center space-x-3">
                <Languages size={13} />
                <span>{isPolish ? 'EN (English)' : 'PL (Polski)'}</span>
              </span>
            </MetallicButton>
          )}


          <MetallicButton
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-56"
            aria-label={data.ui.printOrSavePdf}
          >
            <span className="flex items-center justify-center space-x-3">
            <Printer size={15} />
            <span>{data.ui.printOrSavePdf}</span>
            </span>
          </MetallicButton>
        </div>
      </header>

      {/* 2. PRINTABLE DOCUMENT WRAPPER (TWO SEPARATE A4 SHEETS) */}
      <main className="printable-document flex flex-col items-center gap-8 sm:gap-12 w-full max-w-[210mm]">
        
        {/* ========================================================================= */}
        {/* PAGE 1: PROFESSIONAL PROFILE & EXPERIENCE                                */}
        {/* ========================================================================= */}
        <article className="printable-sheet bg-white text-zinc-900 shadow-2xl rounded-xs w-[210mm] h-[296.5mm] p-[12mm_15mm] flex flex-col justify-between box-border overflow-hidden">
          
          <div>
            {/* DISTINCTIVE EDITORIAL HEADER: NAME BESIDE & PARTIALLY OVERLAPPING LARGE PORTRAIT */}
            <header className="relative flex items-end justify-between min-h-48.75 pb-1">
              
              {/* LEFT COLUMN: OVERSIZED TYPOGRAPHY, SURNAME OVERLAP & TITLE */}
              <div className="relative z-20 flex-1 pr-0 pb-1 max-w-[calc(100%-165px)]">
                <div className="space-y-0 select-text">
                  <span className="block text-[34px] sm:text-[38px] tracking-tight text-zinc-900 leading-[0.92]">
                    Piotr
                  </span>
                  <span className="block text-[40px] sm:text-[46px] font-semibold tracking-tight text-zinc-950 leading-[0.92] -mr-8 sm:-mr-14 relative z-30 drop-shadow-[0_1px_3px_rgba(255,255,255,0.98)]">
                    Deręgowski
                  </span>
                </div>

                <div className="mt-3 pt-2 border-t border-[#C5A059]/40 inline-block">
                  <p className="text-[11px] font-semibold text-[#A67C2E] uppercase tracking-wider">
                    {data.personal.title}
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: OVERSIZED EDITORIAL PORTRAIT */}
              <div className="relative z-10 shrink-0 w-43.75 sm:w-46.25 h-51.25 sm:h-53.75 -mb-1 overflow-hidden select-none">
                <img
                  src={data.personal.photoUrl}
                  alt={data.personal.fullName}
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04]"
                />
                {/* Subtle soft dissolve on left border ensuring 100% crisp typography legibility */}
                <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white via-white/50 to-transparent pointer-events-none" />
                {/* Subtle bottom edge blend */}
                <div className="absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-white to-transparent pointer-events-none" />
              </div>

            </header>

            {/* CONTACT INFORMATION BAR (MOVED BELOW MAIN NAME & PHOTO COMPOSITION) */}
            <div className="mt-2.5 pt-2 pb-2 border-y border-[#C5A059]/30 flex flex-wrap items-center justify-between gap-y-1 gap-x-4 text-[10px] text-zinc-800">
              <div className="flex items-center gap-1.5">
                <MapPin size={11} className="text-[#A67C2E] shrink-0" aria-hidden="true" />
                <span className="font-medium">{data.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone size={11} className="text-[#A67C2E] shrink-0" aria-hidden="true" />
                <span className="font-mono text-[9.5px] font-medium">{data.personal.phonePlaceholder}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={11} className="text-[#A67C2E] shrink-0" aria-hidden="true" />
                <span className="font-mono text-[9.5px] font-medium">{data.personal.emailPlaceholder}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LinkedinIcon size={11} className="text-[#A67C2E] shrink-0" />
                <span className="font-mono text-[9.5px] font-medium">{data.personal.linkedIn}</span>
              </div>
            </div>

            {/* PROFESSIONAL PROFILE / PROFIL ZAWODOWY (DISCREET HEADING, NO DECORATIVE SUBTITLE) */}
            <section className="mt-3" aria-labelledby="summary-heading">
              <h2
                id="summary-heading"
                className="text-[11px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-0.5 mb-1.5"
              >
                <span>{isPolish ? 'PROFIL ZAWODOWY' : 'PROFESSIONAL PROFILE'}</span>
              </h2>
              <div className="space-y-1 text-[10px] leading-[1.38] text-zinc-800 text-justify">
                {data.summary.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* PROFESSIONAL EXPERIENCE (5 ROLES CHRONOLOGICALLY, RECENT FIRST, YEARS ONLY) */}
            <section className="mt-3" aria-labelledby="experience-heading">
              <h2
                id="experience-heading"
                className="text-[11px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-0.5 mb-2"
              >
                <span className="font-sans">{isPolish ? 'DOŚWIADCZENIE ZAWODOWE' : 'PROFESSIONAL EXPERIENCE'}</span>
              </h2>

              <div className="space-y-2">
                {data.experience.items.map((job) => (
                  <article key={job.id} className="relative pl-3 border-l-2 border-[#C5A059]/40">
                    {/* Header: Role, Company, Period */}
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-[11.5px] font-bold text-zinc-900 leading-tight">
                          {job.role}
                        </h3>
                        <p className="text-[10px] font-semibold text-[#A67C2E]">
                          {job.company} &middot; <span className="font-normal text-zinc-600">{job.location}</span>
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-zinc-900 shrink-0 font-mono">
                        {job.period}
                      </span>
                    </div>

                    {/* Scope line */}
                    {job.scope && (
                      <p className="text-[9px] font-medium text-zinc-700 italic mt-0.5">
                        {job.scope}
                      </p>
                    )}

                    {/* Highlights list */}
                    <ul className="mt-0.5 space-y-0.5 text-[9.5px] leading-[1.34] text-zinc-800 list-disc list-inside">
                      {job.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-justify">
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* PAGE 1 FOOTER BAR */}
          <footer className="pt-2 border-t border-zinc-200 text-[9px] text-zinc-600 flex items-center justify-between">
            <span>Piotr Deręgowski &middot; Curriculum Vitae</span>
            <span className="font-semibold text-zinc-700">
              {data.ui.pageLabel} 1 {data.ui.ofLabel} 2
            </span>
          </footer>
        </article>

        {/* ========================================================================= */}
        {/* PAGE 2: PROFESSIONAL BACKGROUND, SKILLS & CREDENTIALS                    */}
        {/* ========================================================================= */}
        <article className="printable-sheet bg-white text-zinc-900 shadow-2xl rounded-xs w-[210mm] h-[296.5mm] p-[12mm_15mm] flex flex-col justify-between box-border overflow-hidden">
          
          <div>
            {/* PAGE 2 HEADER STRIP */}
            <header className="flex items-center justify-between pb-2 border-b border-[#C5A059]/40">
              <span className="text-[12px] font-bold text-zinc-900 font-['Antic_Didone',serif]">
                Piotr Deręgowski
              </span>
              <span className="text-[10px] font-semibold text-[#A67C2E] uppercase tracking-wider">
                {data.ui.credentialsHeaderRight}
              </span>
            </header>

            {/* SECTION A: EDUCATION (INDEPENDENT SECTION WITH RANDOM SCHOOL PLACEHOLDER) */}
            <section className="mt-10" aria-labelledby="education-heading">
              <h2
                id="education-heading"
                className="text-[11.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-0.5 mb-1.5"
              >
                <span>{data.education.title}</span>
              </h2>

              <div className="space-y-1">
                {data.education.items.map((item) => (
                  <div key={item.id} className="text-[10.5px] leading-tight">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-bold text-zinc-900">{item.institution}</span>
                      {item.period && (
                        <span className="font-semibold text-zinc-600 shrink-0 text-[9.5px] font-mono">{item.period}</span>
                      )}
                    </div>
                    {item.details && (
                      <p className="text-[9.5px] text-zinc-700 mt-0.5 leading-snug">
                        {item.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION B: PROFESSIONAL TRAINING (SEPARATE SECTION WITH THE 4 KEY CREDENTIALS) */}
            <section className="mt-12" aria-labelledby="training-heading">
              <h2
                id="training-heading"
                className="text-[11.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-0.5 mb-2"
              >
                <span>{data.training.title}</span>
              </h2>

              <div className="space-y-2">
                {data.training.items.map((item) => (
                  <div key={item.id} className="text-[10px] leading-tight">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-bold text-zinc-900">{item.title}</span>
                      <span className="font-semibold text-[#A67C2E] shrink-0 text-[9.5px]">{item.provider}</span>
                    </div>
                    {item.details && (
                      <p className="text-[9px] text-zinc-700 mt-0.5 leading-snug">
                        {item.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION C: PROFESSIONAL SKILLS (CATEGORIZED, TEXT ONLY, NO PROGRESS BARS OR SCALES) */}
            <section className="mt-12" aria-labelledby="skills-heading">
              <h2
                id="skills-heading"
                className="text-[11.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-0.5 mb-2.5 flex items-center justify-between"
              >
                <span>{data.skills.title}</span>
                <span className="text-[8.5px] font-normal text-zinc-600 tracking-normal">
                  {data.skills.subtitle || (isPolish ? 'Główne kompetencje strategiczne i funkcjonalne' : 'Core Functional & Strategic Competencies')}
                </span>
              </h2>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                {data.skills.categories.map((cat, idx) => (
                  <div key={idx} className="text-[9.5px]">
                    <h3 className="font-bold text-[#A67C2E] text-[10px] mb-0.5">
                      {cat.title}
                    </h3>
                    <ul className="space-y-0.5 text-zinc-800">
                      {cat.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1">
                          <span className="text-[#A67C2E] font-bold">&rsaquo;</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION D: LANGUAGES & INTERESTS IN TWO BALANCED COLUMNS */}
            
              {/* Languages */}
              <section className='mt-12' aria-labelledby="languages-heading">
                <h2
                  id="languages-heading"
                  className="text-[11.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-0.5 mb-2.5 flex items-center justify-between"
                >
                  <span>{data.languages.title}</span>
                </h2>
                <div className="space-y-1.5 text-[9.5px]">
                  {data.languages.items.map((lang, idx) => (
                    <div key={idx} className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-zinc-900 shrink-0">{lang.language}</span>
                      <span>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interests & Continuous Learning */}
              <section className='mt-12' aria-labelledby="interests-heading">
                <h2
                  id="interests-heading"
                  className="text-[11.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-0.5 mb-2"
                >
                  <span>{data.interests.title}</span>
                </h2>
                <ul className="text-[9.5px] text-zinc-800 space-y-0.5">
                  {data.interests.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-[#A67C2E] font-bold">&rsaquo;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>      
          </div>

          {/* PAGE 2 FOOTER: GDPR CLAUSE & PAGE INDICATOR */}
          <footer className="pt-3 border-t border-zinc-200">
            <p className="text-[8px] leading-[1.32] text-zinc-600 italic text-justify">
              {data.gdprClause}
            </p>
            <div className="flex items-center justify-between text-[9px] text-zinc-600 mt-2">
              <span>Piotr Deręgowski &middot; Curriculum Vitae</span>
              <span className="font-semibold text-zinc-700">
                {data.ui.pageLabel} 2 {data.ui.ofLabel} 2
              </span>
            </div>
          </footer>
        </article>

      </main>

      {/* 3. ROBUST PRINT-SPECIFIC CSS RULES ENFORCING EXACT 2-PAGE A4 FORMAT WITHOUT BLANK PAGES */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #18181b !important;
            width: 210mm !important;
            height: auto !important;
            min-height: auto !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          #root, .printable-root-container {
            margin: 0 !important;
            padding: 0 !important;
            width: 210mm !important;
            height: auto !important;
            min-height: auto !important;
            background: transparent !important;
            display: block !important;
          }

          .no-print {
            display: none !important;
          }

          .printable-document {
            display: block !important;
            width: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            gap: 0 !important;
          }

          .printable-sheet {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            width: 210mm !important;
            height: 296.5mm !important;
            min-height: 296.5mm !important;
            max-height: 296.5mm !important;
            padding: 12mm 15mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-after: always !important;
            break-after: page !important;
          }

          .printable-sheet:last-of-type {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintableCV;
