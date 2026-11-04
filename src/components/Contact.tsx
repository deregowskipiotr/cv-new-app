import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import { MetallicButton } from '../ui/MetallicButton';
import { contentEN } from '../data/en';
import { contentPL } from '../data/pl';

interface ContactProps {
  currentLang: 'EN' | 'PL';
}

const CARD_ICONS: Record<string, LucideIcon> = {
  location: MapPin,
  hours: Clock,
  communication: Phone,
};

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
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

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = currentLang === 'EN' ? contentEN.contact : contentPL.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError(t.form.errorMessage);
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    // Simulated graceful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 border-t border-(--color-decor)/15 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
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

        {/* 1. SECTION HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-(--color-decor)/60" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.12em] text-(--color-decor) font-medium">
              {t.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-[2.65rem] font-normal leading-[1.18] tracking-normal text-(--color-text)"
          >
            {t.headline}
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base font-light leading-relaxed text-(--color-text)/75">
            {t.subtitle}
          </p>
        </div>

        {/* 2. MIDDLE ROW: "GET IN TOUCH" + 3 INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Block: Call to Action title */}
          <div className="lg:col-span-3 space-y-6 flex flex-col justify-center p-6 rounded-md border border-(--color-decor)/15 bg-(--color-main)/40 backdrop-blur-md">
            <span className="text-xs font-mono tracking-wide text-(--color-decor)/80 uppercase mb-2">
              {t.cardsEyebrow}
            </span>
            <h3 className="flex flex-row text-2xl sm:text-3xl font-normal leading-tight text-(--color-text)">
              {t.cardsHeading}{' '}
              <span className="text-(--color-decor) block pl-2">
                {t.cardsHeadingAccent}
              </span>
            </h3>
            <p className="mt-3 text-xs sm:text-sm font-light text-(--color-text)/65 leading-relaxed">
              {currentLang === 'EN'
                ? 'Direct contact channels for strategic discussions and commercial inquiries.'
                : 'Bezpośrednie kanały kontaktu dla rozmów biznesowych i propozycji współpracy.'}
            </p>
          </div>

          {/* 3 Info Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {t.cards.map((card) => {
              const IconComponent = CARD_ICONS[card.iconKey] || MapPin;

              return (
                <div
                  key={card.id}
                  className="group rounded-md border border-(--color-decor)/15 bg-(--color-main)/60 backdrop-blur-md p-6 flex flex-col justify-between transition-colors duration-500 hover:border-(--color-decor)/40 hover:bg-(--color-decor)/2"
                >
                  <div>
                    {/* Icon container */}
                    <div
                      className="w-10 h-10 rounded-full border border-(--color-decor)/30 bg-(--color-decor)/5 flex items-center justify-center text-(--color-decor) transition-colors duration-500 group-hover:border-(--color-decor)/60"
                      aria-hidden="true"
                    >
                      <IconComponent size={18} strokeWidth={1.5} />
                    </div>

                    {/* Card Title */}
                    <h4 className="text-sm sm:text-base font-medium text-(--color-text) mt-4 group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h4>

                    {/* Primary Text */}
                    <div className="text-sm font-light text-(--color-decor)/90 mt-1.5 tracking-tight">
                      {card.primaryText}
                    </div>

                    {/* Secondary Text */}
                    <p className="text-xs font-light text-(--color-text)/60 mt-1 leading-relaxed">
                      {card.secondaryText}
                    </p>
                  </div>

                  {/* Action Link / Note */}
                  <div className="pt-4 mt-4 border-t border-(--color-decor)/10">
                    {card.actionHref ? (
                      <a
                        href={card.actionHref}
                        target={card.actionHref.startsWith('http') ? '_blank' : undefined}
                        rel={card.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-(--color-decor)/80 hover:text-(--color-decor) transition-colors duration-300"
                      >
                        <span>{card.actionText}</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-light text-(--color-decor)/70">
                        <span>{card.actionText}</span>
                        <ArrowRight size={13} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 3. FEATURED CONTACT FORM CONTAINER (Screenshot Centerpiece) */}
        <div className="relative rounded-md border border-(--color-decor)/20 bg-(--color-main)/85 backdrop-blur-md overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-6 sm:p-8 lg:p-12">
          
          {/* Subtle interior ambient glow */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Form (span 7 on desktop) */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div
                  role="status"
                  className="p-8 rounded-md border border-(--color-decor)/35 bg-(--color-decor)/5 backdrop-blur-md text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full border border-(--color-decor) bg-(--color-decor)/10 flex items-center justify-center text-(--color-decor) mx-auto">
                    <CheckCircle2 size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-normal text-(--color-text)">
                    {currentLang === 'EN' ? 'Message Received' : 'Wiadomość wysłana'}
                  </h4>
                  <p className="text-sm font-light text-(--color-text)/80 leading-relaxed max-w-md mx-auto">
                    {t.form.successMessage}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs uppercase tracking-wide text-(--color-decor)/70 hover:text-(--color-decor) transition-colors duration-300 underline decoration-(--color-decor)/50 underline-offset-4 cursor-pointer"
                    >
                      {currentLang === 'EN' ? 'Send another message' : 'Napisz kolejną wiadomość'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider text-(--color-text)/70 font-medium mb-1.5"
                    >
                      {t.form.name.label}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.form.name.placeholder}
                      required
                      className="w-full rounded-md border border-(--color-decor)/15 bg-(--color-main)/90 px-4 py-3 text-sm text-(--color-text) placeholder:text-(--color-text)/35 focus:border-(--color-decor)/60 focus:bg-(--color-main) focus:outline-none transition-colors duration-500"
                    />
                  </div>

                  {/* Email & Subject grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs uppercase tracking-wider text-(--color-text)/70 font-medium mb-1.5"
                      >
                        {t.form.email.label}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.form.email.placeholder}
                        required
                        className="w-full rounded-md border border-(--color-decor)/15 bg-(--color-main)/90 px-4 py-3 text-sm text-(--color-text) placeholder:text-(--color-text)/35 focus:border-(--color-decor)/60 focus:bg-(--color-main) focus:outline-none transition-colors duration-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs uppercase tracking-wider text-(--color-text)/70 font-medium mb-1.5"
                      >
                        {t.form.subject.label}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t.form.subject.placeholder}
                        className="w-full rounded-md border border-(--color-decor)/15 bg-(--color-main)/90 px-4 py-3 text-sm text-(--color-text) placeholder:text-(--color-text)/35 focus:border-(--color-decor)/60 focus:bg-(--color-main) focus:outline-none transition-colors duration-500"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-wider text-(--color-text)/70 font-medium mb-1.5"
                    >
                      {t.form.message.label}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.form.message.placeholder}
                      required
                      className="w-full rounded-md border border-(--color-decor)/15 bg-(--color-main)/90 px-4 py-3 text-sm text-(--color-text) placeholder:text-(--color-text)/35 focus:border-(--color-decor)/60 focus:bg-(--color-main) focus:outline-none transition-colors duration-500 resize-none"
                    />
                  </div>

                  {/* Error display */}
                  {formError && (
                    <p className="text-xs text-amber-400 font-light" role="alert">
                      {formError}
                    </p>
                  )}

                  {/* Submit Button: Full width on both Mobile and Desktop as requested */}
                  <div className="pt-2">
                    <MetallicButton
                      type="submit"
                      size="lg"
                      className="w-full text-center text-(--color-text) font-light tracking-normal"
                      isLoading={isSubmitting}
                      rightIcon={<Send size={15} className="text-(--color-decor)" />}
                    >
                      {isSubmitting ? t.form.submittingButton : t.form.submitButton}
                    </MetallicButton>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Narrative Sidebar (span 5 on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 lg:pt-2">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--color-decor)/60 animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-mono font-medium tracking-widest text-(--color-decor) uppercase">
                    {t.sidebar.eyebrow}
                  </span>
                </div>

                {/* Main Yellow / Gold Heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-(--color-decor) tracking-normal font-['Antic_Didone'] leading-tight">
                  {t.sidebar.title}
                </h3>

                {/* Polite, Human, Professional Descriptive Text Lines */}
                <div className="mt-5 space-y-4 text-sm sm:text-[15px] font-light leading-relaxed text-(--color-text)/75">
                  {t.sidebar.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Decorative detail */}
              <div className="mt-8 pt-6 border-t border-(--color-decor)/15 flex items-center justify-between text-xs font-light text-(--color-text)/55">
                <span>{currentLang === 'EN' ? 'Typical response time: within 24 hours' : 'Średni czas odpowiedzi: do 24 godzin'}</span>
                <span className="text-(--color-decor)/70 font-mono">PD</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4. BOTTOM "LET'S TALK" FOOTER BANNER (Screenshot Bottom Area) */}
        <div className="pt-10 border-t border-(--color-decor)/15">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-8 items-center">
            
            {/* Left: Expressive Headline & Social Icons */}
            <div className="min-w-0 space-y-5 mb-4 md:mb-0">
              <h3 className="text-3xl text-center md:text-left sm:text-4xl lg:text-5xl font-normal text-(--color-text) tracking-normal">
                {t.footer.tagline}
              </h3>

              {/* Social Channels */}
              <div className="flex items-center gap-8 md:gap-5 md:justify-self-start justify-self-center">
                <a
                  href={t.footer.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-(--color-decor)/25 bg-(--color-decor)/5 flex items-center justify-center text-(--color-decor) hover:border-(--color-decor) hover:bg-(--color-decor)/15 hover:text-white transition-all duration-500"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>

                <a
                  href={`mailto:${t.footer.email}`}
                  className="w-10 h-10 rounded-full border border-(--color-decor)/25 bg-(--color-decor)/5 flex items-center justify-center text-(--color-decor) hover:border-(--color-decor) hover:bg-(--color-decor)/15 hover:text-white transition-all duration-500"
                  aria-label="Send Email"
                >
                  <Mail size={16} />
                </a>

                <a
                  href={`tel:${t.footer.phone.replace(/\s+/g, '')}`}
                  className="w-10 h-10 rounded-full border border-(--color-decor)/25 bg-(--color-decor)/5 flex items-center justify-center text-(--color-decor) hover:border-(--color-decor) hover:bg-(--color-decor)/15 hover:text-white transition-all duration-500"
                  aria-label="Call Direct"
                >
                  <Phone size={16} />
                </a>
              </div>
            </div>

            {/* ROTATING LUXURY MONOGRAM EMBLEM / STAMP (Top Right - as in template) */}
            <div aria-hidden="true" className="hidden lg:flex relative items-center justify-center w-28 h-28 pointer-events-none select-none">
              <svg className="w-full h-full animate-[spin_40s_linear_infinite] motion-reduce:animate-none" viewBox="0 0 120 120">
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

            {/* Right: Contact Details Summary */}
            <div className="min-w-0 flex flex-col lg:items-end space-y-2.5 text-xs sm:text-sm font-light text-(--color-text)/70">
              <p className="flex items-center lg:justify-end gap-2">
                <MapPin size={14} className="text-(--color-decor) shrink-0" aria-hidden="true" />
                <span>{t.footer.location}</span>
              </p>
              <p className="flex items-center lg:justify-end gap-2">
                <Mail size={14} className="text-(--color-decor) shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${t.footer.email}`}
                  className="hover:text-(--color-decor) transition-colors duration-300"
                >
                  {t.footer.email}
                </a>
              </p>
              <p className="flex items-center lg:justify-end gap-2">
                <Phone size={14} className="text-(--color-decor) shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${t.footer.phone.replace(/\s+/g, '')}`}
                  className="hover:text-(--color-decor) transition-colors duration-300"
                >
                  {t.footer.phone}
                </a>
              </p>
            </div>

          </div>

          {/* Bottom Copyright & Fine Print */}
          <div className="mt-12 pt-6 border-t border-(--color-decor)/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light text-(--color-text)/45">
            <p>{t.footer.copyright}</p>
            <p className="font-mono text-(--color-decor)/40">
              PIOTR DERĘGOWSKI &middot; DIGITAL PORTFOLIO
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

