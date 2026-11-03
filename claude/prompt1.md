
# Claude Code — Implement the Skills & Beyond Section

## Role

Act as a **senior frontend engineer and UI/UX designer** working on my existing personal CV portfolio.

Your task is to implement a new **Skills & Beyond** section that integrates seamlessly with the sections already present in the project.

This is an implementation task, not a redesign of the entire website.

You have access to the project files. Before making changes, inspect the existing architecture, styling system, content structure, and previously implemented sections. Use them as the source of truth for design and technical decisions.

---

## 1. First: Inspect the Existing Project

Before coding:

1. Review the project structure and identify the current section architecture.
2. Inspect `index.css` and the existing global styles, theme variables, typography, colors, spacing, glass effects, and animation conventions.
3. Review the Hero, About, and Projects sections to understand their visual language, layout patterns, responsiveness, and component conventions.
4. Check the existing data files, especially:
   - `src/data/en.ts`
   - `src/data/pl.ts`
5. Review shared TypeScript interfaces and reusable components.
6. Identify the existing language-switching approach and ensure the new section follows it.
7. Check the installed dependencies and use the existing stack. Do not introduce new libraries unless genuinely necessary.

**Do not duplicate existing styles or create a competing design system.** Reuse established patterns where appropriate and extend them only when needed.

If the project already has a suitable section component, data structure, animation utility, or visual pattern, use it.

---

## 2. Section Purpose

Create a polished, editorial-style section titled:

**Skills & Beyond**

The section should communicate three dimensions of my professional profile:

- My practical commercial and interpersonal skills
- My interests and ongoing development beyond my core career
- My training and learning background

The visual result should feel **premium, confident, modern, human, and professional**.

Avoid a generic résumé template, dashboard layout, or collection of conventional skill cards.

The section should complement the existing portfolio and maintain its visual consistency.

---

## 3. Content Structure

Organize the section into three visually connected areas.

### A. Professional Skills

Present my skills in meaningful groups rather than as a long, undifferentiated list.

#### Commercial & Analytical
- Analiza danych sprzedażowych
- Analiza potrzeb klientów
- Analiza trendów rynkowych i działań konkurencji

#### Sales & Relationships
- Umiejętności negocjacyjne
- Rozwinięte zdolności komunikacyjne
- Budowanie i rozwijanie trwałych relacji biznesowych

#### Work Approach
- Samodzielna i zespołowa organizacja pracy
- Zarządzanie czasem i priorytetami
- Dobra organizacja pracy

Use professional English phrasing in the English version. Preserve the meaning of the original information and avoid exaggerating the level of expertise.

Do not invent additional skills, tools, qualifications, or achievements.

### B. Languages & Beyond

This area should add personality while remaining relevant to a professional portfolio.

#### Languages
- Polish — Native
- English — B1/B2, currently improving through ongoing learning

Keep the English level honest. Do not present it as fluent or advanced.

#### Interests & Continuous Learning
- Artificial Intelligence and its practical applications in everyday life and work
- Creating websites and applications using JavaScript
- Football, especially the Spanish league
- Cinema, with a particular interest in David Lynch, Jim Jarmusch, and Quentin Tarantino

Present these interests with restraint and editorial sophistication. They should make the section feel personal without overwhelming its professional purpose.

### C. Learning & Credentials

Present the following courses and training accurately:

#### Umiejętności Jutra AI
- Google & SGH
- Focus: AI and its practical applications

#### Kodilla Front-end Bootcamp
Topics covered:
- HTML
- CSS
- JavaScript
- Git
- ES6
- AJAX
- Redux
- React Router

#### Microsoft Excel — Intermediate / Advanced
- Expose
- Course focused on Microsoft Excel

#### Sales Team Management Training
- Training focused on sales team management

Important:
- Distinguish courses and training from formal certifications.
- Do not label every item as a certified qualification.
- Do not invent completion dates, certificate IDs, credential links, or additional course details.
- Use concise, professional English wording in the English version.
- Keep the Polish version natural and accurate.

---

## 4. Design Direction

The section must follow the portfolio’s established visual language.

My global design principles:

- **Mobile-first:** Always design and implement for mobile first, then enhance for larger screens.
- **Typography:** Use normal/default letter spacing. Avoid unnecessary tracking or wide uppercase labels.
- **Shape language:** Use `rounded-md` as the standard corner treatment.
- **Lines and borders:** Keep them thin and refined, generally `1px`.
- **Hover interactions:** Subtle color changes only—border, background, or text. Never use scaling or exaggerated movement.
- **Glass effect:** The portfolio’s glass aesthetic is an essential part of the design. Follow the existing implementation rather than introducing a visually different glass treatment.
- **Animation:** Smooth, understated transitions with a duration of at least `500ms`, consistent with the existing project.
- **Icons:** Do not use emoji. Use the icon library already installed in the project, such as Lucide React, only where icons add meaningful value.
- **Visual hierarchy:** Use spacing, typography, alignment, subtle lines, and restrained accents rather than excessive decoration.
- **Color palette:** Follow the existing charcoal/black, champagne-gold, and white/neutral palette defined in the project.
- **Responsive behavior:** Ensure the section feels intentionally designed at mobile, tablet, and desktop sizes—not merely compressed.

Use the existing CSS variables, utilities, and conventions wherever possible. Do not hardcode a new palette if the project already provides theme tokens.

---

## 5. Layout Guidance

Use an **editorial layout**, not a conventional grid of cards.

Explore a composition that visually connects the three areas while preserving clear hierarchy. For example:

- A strong section heading and short introductory line
- Professional Skills as the primary content area, with clearly separated skill groups
- Languages & Beyond as a more personal, lighter secondary area
- Learning & Credentials as a structured but visually restrained list

A thin gold-accented line or other subtle connective element may be used if it fits the existing design system.

Avoid:
- Skill percentage bars
- Circular proficiency indicators
- Rating stars
- Excessive badges or pills
- Large icon collections
- Heavy card backgrounds
- Repetitive boxed layouts
- Unnecessary decorative elements

The section should feel spacious, intentional, and easy to scan.

---

## 6. Technical Requirements

- Use the project’s existing React, TypeScript, Vite, and Tailwind CSS setup.
- Follow the existing component and file naming conventions.
- Keep the component modular and maintainable.
- Use the existing bilingual content architecture for English and Polish.
- Add or update TypeScript types only when necessary and keep them strongly typed.
- Avoid unnecessary dependencies.
- Avoid `any` unless there is a clear and justified reason.
- Use semantic HTML and accessible markup.
- Ensure headings follow a logical hierarchy.
- Ensure sufficient contrast and visible keyboard focus states.
- Use accessible labels for meaningful interactive elements.
- Respect the project’s existing animation and reduced-motion conventions, if present.
- Do not introduce functionality that the section does not need.

If the section is primarily informational, keep it informational. Do not add unnecessary interactions just to make it feel more dynamic.

---

## 7. Implementation Workflow

Follow this sequence:

1. Inspect the existing project and summarize the relevant conventions you found.
2. Identify the files that need to be created or modified.
3. Implement the section using the established design system.
4. Add the English and Polish content to the appropriate data files.
5. Integrate the section into the existing page and navigation only where appropriate.
6. Check mobile, tablet, and desktop layouts.
7. Run the available linting, TypeScript, and production build commands.
8. Fix any issues introduced by your changes.

Do not modify unrelated sections or refactor unrelated code.

If you discover a conflict between this prompt and the existing project architecture, prioritize the established architecture and explain the decision in your final summary.

---

## 8. Definition of Done

The task is complete when:

- The new **Skills & Beyond** section is implemented and integrated.
- It visually belongs to the existing portfolio.
- The content is accurate and professionally phrased in both English and Polish.
- The layout is mobile-first and responsive.
- The section follows all global styling rules.
- No skill bars, percentage ratings, emoji, or unnecessary card layouts have been introduced.
- Existing sections remain unaffected.
- TypeScript, linting, and production build checks pass, or any pre-existing failures are clearly identified.
- The implementation is clean, maintainable, and ready for review.

---

## 9. Final Response

After implementation, provide a concise summary containing:

1. What you implemented
2. Which files you created or modified
3. Any important design or architectural decisions
4. The validation commands you ran and their results
5. Any remaining issues or recommendations

Do not claim that a check passed unless you actually ran it.

**Begin by inspecting the existing project. Then implement the section.**
