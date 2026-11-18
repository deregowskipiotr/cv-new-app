import React from 'react';
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  FileText,
} from 'lucide-react';
import { printableCVData } from '../data/printableCV';

interface PrintableCVProps {
  onBack?: () => void;
}

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 12, className = '' }) => (
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

export const PrintableCV: React.FC<PrintableCVProps> = ({ onBack }) => {
  const data = printableCVData;

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
    <div className="min-h-screen bg-neutral-900 text-zinc-100 py-6 sm:py-10 px-2 sm:px-4 flex flex-col items-center select-text font-sans antialiased">
      {/* 1. SCREEN-ONLY TOP TOOLBAR (EXCLUDED IN PRINT) */}
      <header className="no-print w-full max-w-[210mm] mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-md border border-zinc-700 bg-neutral-800/90 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-300 hover:text-white bg-zinc-700/50 hover:bg-zinc-700 border border-zinc-600 transition-colors duration-200 cursor-pointer"
            aria-label="Back to Digital Portfolio"
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </button>
          <div className="h-4 w-px bg-zinc-700 hidden sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <FileText size={14} className="text-[#C5A059]" />
            <span className="font-medium text-zinc-200">Printable CV (A4 &middot; 2 Pages)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-zinc-400 hidden md:inline">
            Print dialog: Select &ldquo;Save as PDF&rdquo; &amp; enable &ldquo;Background graphics&rdquo;
          </span>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-zinc-950 bg-[#C5A059] hover:bg-[#d6b26b] shadow-md transition-colors duration-200 cursor-pointer"
            aria-label="Print or Save as PDF"
          >
            <Printer size={15} />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </header>

      {/* 2. PRINTABLE DOCUMENT WRAPPER (TWO SEPARATE A4 SHEETS) */}
      <main className="printable-document flex flex-col items-center gap-8 sm:gap-12 w-full max-w-[210mm]">
        
        {/* ========================================================================= */}
        {/* PAGE 1: PROFESSIONAL PROFILE & EXPERIENCE                                */}
        {/* ========================================================================= */}
        <article className="printable-sheet bg-white text-zinc-900 shadow-2xl rounded-xs w-[210mm] h-[297mm] p-[12mm_15mm] flex flex-col justify-between box-border overflow-hidden">
          
          <div>
            {/* HEADER: NAME, TITLE, CONTACT & PROFILE PHOTO */}
            <header className="flex items-start justify-between gap-6 pb-3 border-b border-[#C5A059]/40">
              <div className="flex-1">
                <h1 className="text-[27px] font-bold text-zinc-900 leading-none tracking-tight font-['Antic_Didone',serif]">
                  {data.personal.fullName}
                </h1>
                <p className="text-[12.5px] font-semibold text-[#A67C2E] uppercase tracking-wider mt-1.5 font-sans">
                  {data.personal.title}
                </p>

                {/* Contact metadata grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 text-[10px] text-zinc-700">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-[#A67C2E] shrink-0" aria-hidden="true" />
                    <span>{data.personal.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail size={11} className="text-[#A67C2E] shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[9.5px]">{data.personal.emailPlaceholder}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone size={11} className="text-[#A67C2E] shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[9.5px]">{data.personal.phonePlaceholder}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <LinkedinIcon size={11} className="text-[#A67C2E] shrink-0" />
                    <span className="font-mono text-[9.5px]">{data.personal.linkedIn}</span>
                  </div>
                </div>
              </div>

              {/* Profile Photo */}
              <div className="shrink-0">
                <img
                  src={data.personal.photoUrl}
                  alt={data.personal.fullName}
                  className="w-19.5 h-24.5 rounded-xs object-cover object-top border border-zinc-300 shadow-xs"
                />
              </div>
            </header>

            {/* PROFESSIONAL SUMMARY */}
            <section className="mt-3.5" aria-labelledby="summary-heading">
              <h2
                id="summary-heading"
                className="text-[10.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-1.5 flex items-center justify-between"
              >
                <span>{data.summary.title}</span>
                <span className="text-[8.5px] font-medium text-[#A67C2E] tracking-normal font-sans">FMCG &middot; KEY ACCOUNTS &middot; COMMERCIAL LEADERSHIP</span>
              </h2>
              <div className="space-y-1.5 text-[9.5px] leading-[1.45] text-zinc-700 text-justify">
                {data.summary.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* PROFESSIONAL EXPERIENCE (5 ROLES CHRONOLOGICALLY, RECENT FIRST, YEARS ONLY) */}
            <section className="mt-3.5" aria-labelledby="experience-heading">
              <h2
                id="experience-heading"
                className="text-[10.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2.5 flex items-center justify-between"
              >
                <span>{data.experience.title}</span>
                <span className="text-[8.5px] font-normal text-zinc-500 tracking-normal font-sans">Chronological Order &middot; Years Only</span>
              </h2>

              <div className="space-y-2.5">
                {data.experience.items.map((job) => (
                  <article key={job.id} className="relative pl-3 border-l-2 border-[#C5A059]/40">
                    {/* Header: Role, Company, Period */}
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-[11px] font-bold text-zinc-900 leading-tight">
                          {job.role}
                        </h3>
                        <p className="text-[10px] font-medium text-[#A67C2E]">
                          {job.company} &middot; <span className="font-normal text-zinc-500">{job.location}</span>
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-zinc-900 shrink-0 font-mono">
                        {job.period}
                      </span>
                    </div>

                    {/* Scope line */}
                    {job.scope && (
                      <p className="text-[8.5px] font-medium text-zinc-600 italic mt-0.5">
                        {job.scope}
                      </p>
                    )}

                    {/* Highlights list */}
                    <ul className="mt-1 space-y-0.5 text-[9px] leading-[1.38] text-zinc-700 list-disc list-inside">
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
          <footer className="pt-2 border-t border-zinc-200 text-[8.5px] text-zinc-400 flex items-center justify-between">
            <span>Piotr Deręgowski &middot; Curriculum Vitae</span>
            <span className="font-medium text-zinc-500">Page 1 of 2</span>
          </footer>
        </article>

        {/* ========================================================================= */}
        {/* PAGE 2: PROFESSIONAL BACKGROUND, SKILLS & CREDENTIALS                    */}
        {/* ========================================================================= */}
        <article className="printable-sheet bg-white text-zinc-900 shadow-2xl rounded-xs w-[210mm] h-[297mm] p-[12mm_15mm] flex flex-col justify-between box-border overflow-hidden">
          
          <div>
            {/* PAGE 2 HEADER STRIP */}
            <header className="flex items-center justify-between pb-2 border-b border-[#C5A059]/40">
              <span className="text-[11px] font-bold text-zinc-900 font-['Antic_Didone',serif]">
                Piotr Deręgowski
              </span>
              <span className="text-[9.5px] font-semibold text-[#A67C2E] uppercase tracking-wider">
                Education, Skills &amp; Credentials
              </span>
            </header>

            {/* EDUCATION & PROFESSIONAL TRAINING */}
            <section className="mt-3" aria-labelledby="education-heading">
              <h2
                id="education-heading"
                className="text-[10.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2"
              >
                {data.education.title}
              </h2>

              <div className="space-y-1.5">
                {data.education.items.map((item) => (
                  <div key={item.id} className="text-[9.5px] leading-tight">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-bold text-zinc-900">{item.degreeOrCertificate}</span>
                      <span className="font-semibold text-[#A67C2E] shrink-0 text-[9px]">{item.institution}</span>
                    </div>
                    {item.details && (
                      <p className="text-[8.5px] text-zinc-600 mt-0.5 leading-snug">
                        {item.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* PROFESSIONAL SKILLS (CATEGORIZED, TEXT ONLY, NO PROGRESS BARS OR SCALES) */}
            <section className="mt-3.5" aria-labelledby="skills-heading">
              <h2
                id="skills-heading"
                className="text-[10.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2 flex items-center justify-between"
              >
                <span>{data.skills.title}</span>
                <span className="text-[8px] font-normal text-zinc-500 tracking-normal font-sans">Core Functional &amp; Strategic Competencies</span>
              </h2>

              <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                {data.skills.categories.map((cat, idx) => (
                  <div key={idx} className="text-[9px]">
                    <h3 className="font-bold text-zinc-900 text-[9.5px] mb-0.5">
                      {cat.title}
                    </h3>
                    <ul className="space-y-0.5 text-zinc-700">
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

            {/* SELECTED COMMERCIAL IMPACT */}
            <section className="mt-3.5" aria-labelledby="achievements-heading">
              <h2
                id="achievements-heading"
                className="text-[10.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-2"
              >
                {data.achievements.title}
              </h2>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[9px]">
                {data.achievements.items.map((item, idx) => (
                  <div key={idx} className="p-1.5 rounded-xs bg-zinc-50 border border-zinc-200">
                    <span className="font-bold text-zinc-900 block">{item.client}</span>
                    <p className="text-zinc-700 mt-0.5 leading-snug">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* LANGUAGES & INTERESTS IN TWO BALANCED COLUMNS */}
            <div className="grid grid-cols-2 gap-x-5 mt-3.5 pt-1">
              
              {/* Languages */}
              <section aria-labelledby="languages-heading">
                <h2
                  id="languages-heading"
                  className="text-[10.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-1.5"
                >
                  {data.languages.title}
                </h2>
                <div className="space-y-1 text-[9px]">
                  {data.languages.items.map((lang, idx) => (
                    <div key={idx} className="flex items-baseline justify-between">
                      <span className="font-semibold text-zinc-900">{lang.language}</span>
                      <span className="text-zinc-600 text-[8.5px]">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interests & Continuous Learning */}
              <section aria-labelledby="interests-heading">
                <h2
                  id="interests-heading"
                  className="text-[10.5px] font-bold tracking-wider text-zinc-900 uppercase border-b border-zinc-200 pb-1 mb-1.5"
                >
                  {data.interests.title}
                </h2>
                <ul className="text-[8.5px] leading-tight text-zinc-700 space-y-0.5">
                  {data.interests.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-[#A67C2E]">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* PAGE 2 FOOTER: GDPR CLAUSE & PAGE INDICATOR */}
          <footer className="pt-2 border-t border-zinc-200">
            <p className="text-[7.5px] leading-[1.3] text-zinc-500 italic text-justify">
              {data.gdprClause}
            </p>
            <div className="flex items-center justify-between text-[8px] text-zinc-400 mt-1.5">
              <span>Piotr Deręgowski &middot; Curriculum Vitae</span>
              <span className="font-medium text-zinc-500">Page 2 of 2</span>
            </div>
          </footer>
        </article>

      </main>

      {/* 3. PRINT-SPECIFIC CSS RULES ENFORCING EXACT 2-PAGE A4 FORMAT */}
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
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .printable-document {
            gap: 0 !important;
            max-width: none !important;
            width: 210mm !important;
          }
          .printable-sheet {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            padding: 12mm 15mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
            page-break-after: always !important;
            break-after: page !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
          }
          .printable-sheet:last-child {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintableCV;
