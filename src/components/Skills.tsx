import React from 'react';
import { contentEN } from '../data/en';
import { contentPL } from '../data/pl';

interface SkillsProps {
  currentLang: 'EN' | 'PL';
}

export const Skills: React.FC<SkillsProps> = ({ currentLang }) => {
  const t = currentLang === 'EN' ? contentEN.skills : contentPL.skills;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 border-t border-(--color-decor)/15 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-(--color-decor)/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.12em] text-(--color-decor) font-medium">
              {t.eyebrow}
            </span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.18] tracking-normal text-(--color-text)"
          >
            {t.headline}
          </h2>
          <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-(--color-text)/65">
            {t.intro}
          </p>
        </div>

        {/* MAIN CONTENT: editorial two-column on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT — Professional Skills + Languages */}
          <div className="lg:col-span-7 space-y-10">

            {/* Professional Skills */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.12em] text-(--color-decor)/70 font-medium mb-6">
                {t.skillsHeading}
              </h3>

              <div className="space-y-7">
                {t.skillGroups.map((group, gIdx) => (
                  <div key={group.id}>
                    {/* Group label + thin rule */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] sm:text-xs font-medium text-(--color-text)/50 tracking-normal shrink-0">
                        {group.label}
                      </span>
                      <span className="flex-1 h-px bg-(--color-decor)/12" aria-hidden="true" />
                    </div>

                    {/* Skill items */}
                    <ul className="space-y-2" aria-label={group.label}>
                      {group.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="flex items-start gap-2.5 text-sm sm:text-[15px] font-light leading-relaxed text-(--color-text)/75"
                        >
                          <span
                            className="mt-[0.45em] w-1 h-1 rounded-full bg-(--color-decor)/50 shrink-0"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Separator between groups, except last */}
                    {gIdx < t.skillGroups.length - 1 && (
                      <div
                        className="mt-7 h-px bg-linear-to-r from-(--color-decor)/25 via-(--color-decor)/8 to-transparent"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-8 border-t border-(--color-decor)/15">
              <h3 className="text-xs uppercase tracking-[0.12em] text-(--color-decor)/70 font-medium mb-5">
                {t.languagesHeading}
              </h3>
              <dl className="space-y-3">
                {t.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <dt className="text-sm sm:text-[15px] font-light text-(--color-text)/80">
                      {lang.name}
                    </dt>
                    <dd className="text-xs font-light text-(--color-decor)/75 shrink-0">
                      {lang.level}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* RIGHT — Interests + Credentials */}
          <div className="lg:col-span-5 space-y-10">

            {/* Interests */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.12em] text-(--color-decor)/70 font-medium mb-5">
                {t.interestsHeading}
              </h3>
              <ul className="space-y-3" aria-label={t.interestsHeading}>
                {t.interests.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm font-light leading-relaxed text-(--color-text)/70"
                  >
                    <span
                      className="inline-block w-1 h-1 rounded-full bg-(--color-decor)/40 mr-2.5 align-middle"
                      aria-hidden="true"
                    />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning & Credentials */}
            <div className="pt-8 border-t border-(--color-decor)/15">
              <h3 className="text-xs uppercase tracking-[0.12em] text-(--color-decor)/70 font-medium mb-6">
                {t.credentialsHeading}
              </h3>

              <div className="relative pl-5">
                {/* Vertical champagne axis */}
                <div
                  className="absolute left-0.5 top-1 bottom-1 w-px bg-linear-to-b from-(--color-decor)/70 via-(--color-decor)/30 to-(--color-decor)/5 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="space-y-6">
                  {t.credentials.map((cred, idx) => (
                    <article key={cred.id} className="relative">
                      {/* Axis node */}
                      <span
                        className="absolute -left-5 top-[0.35em] w-1.5 h-1.5 rounded-full border border-(--color-decor)/60 bg-(--color-main)"
                        aria-hidden="true"
                      />

                      <h4 className="text-sm sm:text-[15px] font-normal text-(--color-text)/90 leading-snug">
                        {cred.title}
                      </h4>
                      <p className="mt-0.5 text-xs font-light text-(--color-decor)/70">
                        {cred.provider}
                      </p>

                      {cred.note && (
                        <p className="mt-1 text-xs font-light text-(--color-text)/50">
                          {cred.note}
                        </p>
                      )}

                      {cred.topics && cred.topics.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-x-2 gap-y-1 text-[10px] font-light text-(--color-text)/45">
                          {cred.topics.map((topic, tIdx) => (
                            <React.Fragment key={topic}>
                              {tIdx > 0 && (
                                <span className="text-(--color-decor)/25 select-none" aria-hidden="true">
                                  ·
                                </span>
                              )}
                              <span>{topic}</span>
                            </React.Fragment>
                          ))}
                        </div>
                      )}

                      {/* Separator, except last */}
                      {idx < t.credentials.length - 1 && (
                        <div
                          className="mt-6 h-px bg-linear-to-r from-(--color-decor)/20 via-(--color-decor)/8 to-transparent"
                          aria-hidden="true"
                        />
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

