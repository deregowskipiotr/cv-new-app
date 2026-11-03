import React from 'react';
import {
  //TrendingUp,
  Users,
  BriefcaseBusiness,
 // Layers,
  User,
  Wine,
  Star,
  Check,
  Store,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react';
import { contentEN } from '../data/en';
import { contentPL } from '../data/pl';

interface ExperienceProps {
  currentLang: 'EN' | 'PL';
}

{/*const STAT_ICONS: Record<string, LucideIcon> = {
  experience: TrendingUp,
  team: Users,
  milestones: BriefcaseBusiness,
  channels: Layers,
};*/}

const MILESTONE_ICONS: Record<string, LucideIcon> = {
  'sales-rep': User,
  'horeca-rep': Wine,
  'regional-manager': Users,
  'kam-b2b': BriefcaseBusiness,
  'junior-kam': Star,
};

const IMPACT_ICONS: Record<string, LucideIcon> = {
  store: Store,
  cart: ShoppingCart,
  bottle: Wine,
  team: Users,
};

export const Experience: React.FC<ExperienceProps> = ({ currentLang }) => {
  const t = currentLang === 'EN' ? contentEN.experience : contentPL.experience;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 border-t border-(--color-decor)/15 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 -right-24 w-120 h-120 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -left-28 w-110 h-110 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">

        {/* 1. TOP SECTION: Headline, Narrative & 2x2 Proof Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading and Editorial Introduction */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-(--color-decor)/60" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.12em] text-(--color-decor) font-medium">
                {t.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2
              id="experience-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.18] tracking-normal text-(--color-text)"
              >
                {t.headline}
              </h2>

            {/* Introduction */}
            <p className="mt-5 text-sm sm:text-base font-light leading-relaxed text-(--color-text)/75 max-w-2xl">
              {t.intro}
            </p>
          </div>

          {/* Right Column: 2x2 Metric Quadrant Grid */}
         {/* <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px rounded-md border border-(--color-decor)/15 bg-(--color-decor)/10 backdrop-blur-md overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              {t.stats.map((stat, idx) => {
                const IconComponent = stat.iconKey ? STAT_ICONS[stat.iconKey] : TrendingUp;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 bg-(--color-main)/85 hover:bg-(--color-main)/75 transition-colors duration-500 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-(--color-decor) opacity-85">
                        <IconComponent size={20} strokeWidth={1.5} />
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="text-2xl sm:text-3xl font-light text-(--color-decor) tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.12em] text-(--color-text)/60 mt-1 font-['Raleway'] leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>

        {/* 2. CAREER PROGRESSION TIMELINE */}
        <div>
          {/* Subtle timeline category indicator */}
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-[0.14em] text-(--color-decor)/70 font-medium">
              {t.timelineHeading}
            </span>
            <span className="flex-1 h-px bg-(--color-decor)/15" aria-hidden="true" />
          </div>

          {/* DESKTOP TIMELINE (Horizontal layout: 5 stages) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-4 relative">
              {/* Continuous horizontal baseline across all nodes */}
              <div
                className="absolute left-6 right-6 top-29 h-px bg-linear-to-r from-(--color-decor)/20 via-(--color-decor)/50 to-(--color-decor)/80 pointer-events-none z-0"
                aria-hidden="true"
              />

              {t.milestones.map((milestone) => {
                const IconComponent = MILESTONE_ICONS[milestone.id] || BriefcaseBusiness;
                const isFeatured = milestone.isFeatured;
                //const isHighlight = milestone.highlight;

                return (
                  <div
                    key={milestone.id}
                    className="flex flex-col items-center text-center group relative px-2"
                  >
                    {/* Top Section: Title and optional highlight */}
                    <div className="h-24 flex flex-col justify-end items-center pb-4 w-full">
                      <h3
                        className={`text-sm font-medium tracking-normal leading-snug line-clamp-2 transition-colors duration-300 ${
                          isFeatured
                            ? 'text-(--color-decor)'
                            : 'text-(--color-text) group-hover:text-white'
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-xs font-light text-(--color-text)/50 mt-0.5">{milestone.company}</p>
                      {/* {isHighlight && (
                        <span className="inline-block mt-1 text-[10px] font-light text-(--color-decor)/85 tracking-tight px-1.5 py-0.5 rounded-sm border border-(--color-decor)/25 bg-(--color-decor)/5">
                          12-person team
                        </span>
                      )} */}
                    </div>

                    {/* Node on the line: completely opaque solid background, line is fully hidden behind, hover only alters border and icon */}
                    <div className="relative z-20 my-1">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center bg-(--color-main) transition-all duration-500 overflow-hidden ${
                          isFeatured
                            ? 'border-2 border-(--color-decor) text-(--color-decor) shadow-[0_0_16px_rgba(197,160,89,0.45)]'
                            : 'border border-(--color-decor)/40 text-(--color-decor)/85 group-hover:border-(--color-decor) group-hover:text-white group-hover:shadow-[0_0_14px_rgba(197,160,89,0.25)]'
                        }`}
                      >
                        <IconComponent size={18} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Dotted drop connector line */}
                    <div
                      className="w-px h-6 border-l border-dotted border-(--color-decor)/35 mt-2 mb-1 relative z-10"
                      aria-hidden="true"
                    />

                    {/* Bottom Section: Period & Summary */}
                    <div className="mt-1 flex flex-col items-center">
                      <span
                        className={`text-xs font-medium tracking-wide ${
                          isFeatured ? 'text-(--color-decor)' : 'text-(--color-decor)/80'
                        }`}
                      >
                        {milestone.period}
                      </span>
                      <p className="mt-2 text-xs font-light text-(--color-text)/65 leading-relaxed">
                        {milestone.summary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE & TABLET TIMELINE (Vertical layout) */}
          <div className="block lg:hidden relative pl-6 sm:pl-8">
            {/* Continuous vertical axis line */}
            <div
              className="absolute left-2.5 sm:left-3 top-2 bottom-2 w-px bg-linear-to-b from-(--color-decor)/80 via-(--color-decor)/40 to-(--color-decor)/10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-10">
              {t.milestones.map((milestone) => {
                const IconComponent = MILESTONE_ICONS[milestone.id] || BriefcaseBusiness;
                const isFeatured = milestone.isFeatured;
                // const isHighlight = milestone.highlight;

                return (
                  <article key={milestone.id} className="relative group">
                    {/* Node marker on the vertical line */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full flex items-center justify-center bg-(--color-main) transition-all duration-300 ${
                        isFeatured
                          ? 'border border-(--color-decor) text-(--color-decor) shadow-[0_0_10px_rgba(197,160,89,0.4)]'
                          : 'border border-(--color-decor)/50 text-(--color-decor)/80'
                      }`}
                    >
                      <IconComponent size={12} strokeWidth={1.75} />
                    </div>

                    {/* Content */}
                    <div className="pl-3">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[11px] font-mono tracking-widest text-(--color-decor)/70 uppercase">
                          {milestone.number}
                        </span>
                        <span className="text-xs font-medium text-(--color-decor)">
                          {milestone.period}
                        </span>
                        {/* {isHighlight && (
                          <span className="text-[10px] font-light text-(--color-decor)/90 px-1.5 py-0.2 rounded-sm border border-(--color-decor)/25 bg-(--color-decor)/5">
                            12-person team
                          </span>
                        )} */}
                      </div>

                      <h3
                        className={`text-base sm:text-lg font-medium tracking-normal mt-1 ${
                          isFeatured ? 'text-(--color-decor)' : 'text-(--color-text)'
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-xs font-light text-(--color-text)/50 mt-0.5">
                        {milestone.company}
                      </p>
                      <p className="text-xs sm:text-sm font-light text-(--color-text)/70 leading-relaxed mt-2">
                        {milestone.summary}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. FEATURED EXPERIENCE: Latest Position & Strategic Chessboard Visual */}
        <div className="relative rounded-md border border-(--color-decor)/20 bg-(--color-main)/80 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          {/* Subtle interior gold glow */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Role Details and Verified Key Responsibilities */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between z-10">
              <div>
                {/* Period tag with vertical gold accent */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--color-decor)" aria-hidden="true" />
                  <span className="text-xs font-mono font-medium tracking-widest text-(--color-decor) uppercase">
                    {t.featured.period}
                  </span>
                </div>

                {/* Job Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-(--color-text) leading-tight tracking-normal">
                  {t.featured.title}
                </h3>

                {/* Company Name */}
                <p className="mt-1.5 text-base sm:text-lg font-light text-(--color-decor)/90">
                  {t.featured.company}
                </p>

                {/* Role Narrative */}
                <p className="mt-5 text-sm sm:text-[15px] font-light leading-relaxed text-(--color-text)/75 max-w-xl">
                  {t.featured.description}
                </p>

                {/* Core Responsibilities Checklist */}
                <ul className="mt-8 space-y-3.5 max-w-xl" aria-label="Key Responsibilities">
                  {t.featured.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm font-light text-(--color-text)/80 leading-relaxed">
                      <span
                        className="w-4 h-4 rounded-full border border-(--color-decor)/50 bg-(--color-decor)/5 flex items-center justify-center text-(--color-decor) shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <Check size={10} strokeWidth={2.5} />
                      </span>
                      <span>{resp.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Chessboard Strategic Art with Subtle, Elegant Ripples */}
            <div className="lg:col-span-5 relative min-h-75 sm:min-h-95 lg:min-h-full flex items-center justify-center overflow-hidden bg-(--color-main)">
              
              {/* Chessboard Image */}
              <img
                src="/images/chess3.avif"
                alt="Strategic decision-making"
                className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
              />

              {/* Seamless Vignette and Gradient Dissolve */}
              <div
                className="absolute inset-0 bg-linear-to-r from-(--color-main) via-(--color-main)/80 via-20% to-transparent lg:block hidden pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-(--color-main) via-(--color-main)/80 via-25% to-transparent lg:hidden block pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-(--color-main) via-(--color-main)/60 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(12,12,14,0.85)_100%)] pointer-events-none"
                aria-hidden="true"
              />

              {/* Ambient Warm Golden Backlight behind King piece */}
              <div
                className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.14)_0%,rgba(197,160,89,0.03)_50%,transparent_75%)] blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Refined, Editorial Strategic Concentric Rings */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                viewBox="0 0 450 350"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Radial glow for subtle center illumination */}
                  <radialGradient id="kingCenterGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.22" />
                    <stop offset="55%" stopColor="#C5A059" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
                  </radialGradient>

                  {/* Gradient mask to softly fade rings into darkness & board reflections */}
                  <mask id="kingRipplesMask">
                    <radialGradient id="kingMaskGrad" cx="64%" cy="42%" r="68%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                      <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.8" />
                      <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>
                    <rect width="100%" height="100%" fill="url(#kingMaskGrad)" />
                  </mask>

                 {/* <filter id="soft-blur">
                    <feGaussianBlur stdDeviation="2" />
                  </filter>

                   <filter id="golden-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.5" />
                  </filter> */}
                </defs>

                {/* Soft center glow behind upper portion of king piece */}
                <circle cx="288" cy="148" r="110" fill="url(#kingCenterGlow)" />

                {/* Masked elegant concentric arcs */}
                <g mask="url(#kingRipplesMask)">
                  {/* Arc 1: Innermost whisper ring */}
                  <circle
                    cx="288"
                    cy="148"
                    r="52"
                    stroke="#C5A059"
                    strokeWidth="0.65"
                    strokeOpacity="0.12"
                  />

                  {/* Arc 2: Second ripple */}
                  <circle
                    cx="288"
                    cy="148"
                    r="78"
                    stroke="#C5A059"
                    strokeWidth="0.65"
                    strokeOpacity="0.20"
                    filter="url(#soft-blur)"
                  />

                  {/* Arc 3: Mid strategic radius */}
                  <circle
                    cx="288"
                    cy="148"
                    r="132"
                    stroke="#C5A059"
                    strokeWidth="0.65"
                    strokeOpacity="0.36"
                    filter="url(#golden-glow)"
                  />

                  {/* Arc 4: Outer atmospheric wave */}
                  <circle
                    cx="288"
                    cy="148"
                    r="152"
                    stroke="#C5A059"
                    strokeWidth="0.5"
                    strokeOpacity="0.21"
                    filter="url(#soft-blur)"
                  />

                  {/* Arc 5: Far ambient halo */}
                  <circle
                    cx="288"
                    cy="148"
                    r="238"
                    stroke="#C5A059"
                    strokeWidth="0.5"
                    strokeOpacity="0.06"
                  />

                  {/* Discrete tactical coordinate micro-ticks (architectural precision) */}
                  <line x1="288" y1="56" x2="288" y2="64" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.35" />
                  <line x1="288" y1="232" x2="288" y2="240" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.22" />
                  <line x1="196" y1="148" x2="204" y2="148" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.25" />
                  <line x1="372" y1="148" x2="380" y2="148" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.35" />
                </g>
              </svg>
            </div>

          </div>
        </div>

        {/* 4. SELECTED IMPACT: Commercial Achievements & Verified Outcomes */}
        <div>
          {/* Eyebrow / Section Title */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-4 h-px bg-(--color-decor)/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.14em] text-(--color-decor) font-medium">
              {t.impactHeading}
            </span>
          </div>

          {/* 4-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {t.impactItems.map((item) => {
              const IconComponent = item.iconKey ? IMPACT_ICONS[item.iconKey] : Store;

              return (
                <div
                  key={item.id}
                  className="group rounded-md border border-(--color-decor)/15 bg-(--color-main)/60 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-500 hover:border-(--color-decor)/35 hover:bg-(--color-decor)/2"
                >
                  <div>
                    {/* Icon + Title Header */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div
                        className="w-10 h-10 rounded-full border border-(--color-decor)/30 bg-(--color-decor)/5 flex items-center justify-center text-(--color-decor) shrink-0 group-hover:border-(--color-decor)/60 transition-colors duration-500"
                        aria-hidden="true"
                      >
                        <IconComponent size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-normal text-(--color-text) group-hover:text-white transition-colors duration-300">
                          {item.client}
                        </h4>
                        <div className="text-[10px] font-medium text-(--color-decor)/80 uppercase">
                          {item.category}
                        </div>
                      </div>
                    </div>

                    {/* Result Description */}
                    <p className="text-xs sm:text-[13px] font-light text-(--color-text)/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
