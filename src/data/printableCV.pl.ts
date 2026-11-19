import type { PrintableCVData } from '../types/printableCV';

export const printableCVDataPL: PrintableCVData = {
  personal: {
    fullName: "Piotr Deręgowski",
    title: "FMCG | Kluczowi Klienci | Przywództwo Handlowe",
    location: "Warszawa, Polska",
    phonePlaceholder: "+48 500 000 000",
    emailPlaceholder: "piotr.deregowski@email.com",
    linkedIn: "linkedin.com/in/piotr-deregowski",
    photoUrl: "/images/cv-image.png",
  },
  summary: {
    title: "Podsumowanie Zawodowe",
    paragraphs: [
      "Posiadam ponad 18 lat doświadczenia w sprzedaży i rozwoju biznesu w branży FMCG. Przeszedłem pełną ścieżkę zawodową — od przedstawiciela handlowego w terenie, przez zarządzanie 12-osobowym regionalnym zespołem sprzedaży, po strategiczne relacje z kluczowymi klientami sieciowymi.",
      "Działałem w kluczowych kanałach dystrybucji: Rynku Tradycyjnym, HoReCa, B2B oraz nowoczesnych sieciach handlowych, budując trwałe relacje partnerskie zarówno z klientami detalicznymi, jak i dystrybutorami.",
      "Łączę zaawansowane negocjacje handlowe i budowanie relacji z rzetelną analizą wskaźników sprzedaży, zarządzaniem budżetami marketingowymi oraz realizacją ambitnych planów przychodowych.",
      "Stawiam na samodzielność, kulturę partnerstwa i ciągły rozwój. Doświadczenie handlowe uzupełniam praktyczną wiedzą o AI i nowoczesnych technologiach cyfrowych, usprawniających codzienne procesy biznesowe."
    ],
  },
  experience: {
    title: "Doświadczenie Zawodowe",
    subtitle: "Układ chronologiczny · Tylko lata",
    items: [
      {
        id: "exp-05",
        role: "Junior Key Account Manager",
        company: "North Coast S.A.",
        period: "2023–2024",
        location: "Warszawa, Polska",
        scope: "Nowoczesne sieci handlowe: Auchan, Duka, Carrefour, Selgros | Alkohole mocne, wina, napoje bezalkoholowe",
        highlights: [
          "Zarządzanie relacjami handlowymi i prowadzenie rocznych negocjacji z sieciami detalicznymi w kategoriach alkoholi, win i napojów bezalkoholowych.",
          "Nawiązanie i skuteczne wdrożenie bezpośredniej współpracy z siecią Carrefour w segmencie napojów bezalkoholowych.",
          "Dwukrotne zwiększenie liczby indeksów (SKU) win w sieci Auchan w ciągu dwóch lat dzięki optymalizacji asortymentu i category managementowi.",
          "Współtworzenie i realizacja rocznych planów sprzedaży (JBP), akcji promocyjnych oraz obecności na targach i festiwalach wina.",
          "Ścisła współpraca z działami Trade Marketingu, Finansów i Logistyki w celu ochrony marż i terminowości łańcucha dostaw.",
        ],
      },
      {
        id: "exp-04",
        role: "Key Account Manager, B2B",
        company: "CEDC International",
        period: "2017–2020",
        location: "Warszawa, Polska",
        scope: "Portfel klientów B2B, sieci handlowe i dystrybutorzy regionalni",
        highlights: [
          "Realizacja planów przychodowych i marżowych we współpracy z klientami B2B, sieciami handlowymi oraz hurtowniami regionalnymi.",
          "Nadzorowanie i optymalizacja budżetów promocyjnych, kalendarzy handlowych oraz dyscypliny warunków umownych.",
          "Rozwijanie sieci klientów i koordynacja egzekucji handlowej w bezpośredniej współpracy z zespołami sił sprzedaży w terenie.",
        ],
      },
      {
        id: "exp-03",
        role: "Regionalny Kierownik Sprzedaży",
        company: "Eurocash S.A. – Premium Distributors",
        period: "2015–2017",
        location: "Warszawa, Polska",
        scope: "Regionalny obszar sprzedaży | Bezpośrednie kierowanie 12-osobowym zespołem handlowym",
        highlights: [
          "Bezpośrednie zarządzanie, coaching i rozwój 12-osobowego regionalnego zespołu sprzedaży; rekrutacja i wdrażanie handlowców.",
          "Planowanie regionalnych działań handlowych, wyznaczanie i kontrola realizacji planów sprzedażowych, marż oraz wskaźników jakościowych (KPI).",
          "Budowanie relacji z producentami i lokalnymi dystrybutorami, zarządzanie regionalnym budżetem promocyjnym i logistyką.",
        ],
      },
      {
        id: "exp-02",
        role: "Przedstawiciel Handlowy, HoReCa",
        company: "Carey Agri / CEDC / Eurocash S.A.",
        period: "2006–2015",
        location: "Warszawa, Polska",
        scope: "Sektor gastronomiczny: hotele, restauracje, kluby, catering",
        highlights: [
          "Negocjowanie umów handlowych, cenników i warunków płatności w szerokim portfelu prestiżowych klientów kanału HoReCa.",
          "Wprowadzanie marek premium do wiodących lokali gastronomicznych, budowanie dystrybucji numerycznej i ważonej.",
          "Bieżące monitorowanie stanów magazynowych u klientów, koordynacja zamówień i budowanie długofalowej lojalności.",
        ],
      },
      {
        id: "exp-01",
        role: "Przedstawiciel Handlowy",
        company: "Verte sp. z o.o.",
        period: "2004–2006",
        location: "Warszawa, Polska",
        scope: "Klienci detaliczni i ogólnopolskie sieci salonów prasowych (Empik)",
        highlights: [
          "Obsługa bezpośrednich klientów detalicznych oraz kluczowych sieci sprzedaży prasy i książek, w tym salonów Empik.",
          "Wprowadzanie nowych linii produktowych, dbałość o standardy ekspozycji (merchandising), negocjacje handlowe i kontrola spływu należności.",
        ],
      },
    ],
  },
  education: {
    title: "Wykształcenie",
    items: [
      {
        id: "edu-01",
        institution: "Random School",
      },
    ],
  },
  training: {
    title: "Szkolenia i Rozwój Zawodowy",
    items: [
      {
        id: "tr-01",
        title: "Umiejętności Jutra AI",
        provider: "Google & SGH (Szkoła Główna Handlowa w Warszawie)",
        details: "Praktyczne zastosowanie sztucznej inteligencji, inżynieria promptów i automatyzacja procesów biznesowych.",
      },
      {
        id: "tr-02",
        title: "Bootcamp Front-end Developer",
        provider: "Kodilla",
        details: "Nowoczesne technologie webowe: HTML, CSS, JavaScript, ES6, React, Git oraz fundamenty tworzenia aplikacji.",
      },
      {
        id: "tr-03",
        title: "Microsoft Excel — poziom średniozaawansowany i zaawansowany",
        provider: "Expose",
        details: "Zaawansowana analityka handlowa, funkcje wyszukiwania, tabele przestawne i modele raportowania sprzedaży.",
      },
      {
        id: "tr-04",
        title: "Szkolenie z Zarządzania Zespołem Sprzedaży",
        provider: "Eurocash (Program Rozwoju Liderów)",
        details: "Przywództwo w sprzedaży, rekrutacja i wdrażanie handlowców, wyznaczanie celów, coaching i zarządzanie efektywnością.",
      },
    ],
  },
  skills: {
    title: "Umiejętności Zawodowe",
    subtitle: "Główne kompetencje strategiczne i funkcjonalne",
    categories: [
      {
        title: "Kluczowi Klienci i Negocjacje Handlowe",
        skills: [
          "Key Account Management (KAM)",
          "Roczne negocjacje warunków handlowych",
          "Wspólne plany biznesowe z klientami (JBP)",
          "Zarządzanie marżą, rentownością i przychodami",
          "Formułowanie umów handlowych i kontraktów B2B",
        ],
      },
      {
        title: "Strategia Dystrybucji i Znajomość Kanałów",
        skills: [
          "Nowoczesne sieci handlowe (Carrefour, Auchan, Selgros)",
          "Rynek Tradycyjny i handel niezależny",
          "Obsługa i egzekucja w kanale HoReCa",
          "Współpraca z hurtowniami i dystrybutorami regionalnymi",
          "Rozwój portfolio marek i zarządzanie kategorią",
        ],
      },
      {
        title: "Przywództwo i Zarządzanie Zespołem",
        skills: [
          "Kierowanie 12-osobowym regionalnym zespołem sprzedaży",
          "Rekrutacja i wdrażanie przedstawicieli handlowych",
          "Wyznaczanie celów i planowanie pracy w regionie",
          "Coaching, motywowanie i ocena wyników (KPI)",
          "Współpraca międzywydziałowa (Trade Marketing, Finanse, Logistyka)",
        ],
      },
      {
        title: "Analiza Handlowa i Planowanie",
        skills: [
          "Analiza danych wolumenowych, cenowych i marżowych",
          "Planowanie i rozliczanie budżetów trade marketingowych",
          "Analiza trendów rynkowych i działań konkurencji",
          "Prognozowanie popytu i zarządzanie dostępnością towaru",
        ],
      },
      {
        title: "Narzędzia Cyfrowe i Zastosowanie AI",
        skills: [
          "Praktyczne zastosowania AI w biznesie (Google & SGH)",
          "Zaawansowany Microsoft Excel (modele handlowe i raporty)",
          "Nowoczesne technologie webowe (JavaScript, React, Git)",
          "Systemy CRM i ERP w środowisku sprzedaży",
        ],
      },
    ],
  },
  languages: {
    title: "Języki Obce",
    items: [
      { language: "Polski", level: "Język ojczysty" },
      { language: "Angielski", level: "B1/B2 (w trakcie nauki)" },
    ],
  },
  achievements: {
    title: "Wybrane Osiągnięcia",
    items: [
      {
        client: "Auchan",
        description: "Dwukrotne zwiększenie liczby indeksów (SKU) w kategorii win w ciągu 2 lat dzięki optymalizacji oferty i category managementowi.",
      },
      {
        client: "Carrefour",
        description: "Nawiązanie bezpośredniej współpracy w kategorii napojów bezalkoholowych, budujące fundament pod długofalowy wzrost.",
      },
      {
        client: "In&Out",
        description: "Wprowadzenie kategorii alkoholi mocnych, win oraz napojów bezalkoholowych, poszerzające ofertę i wartość koszyka.",
      },
      {
        client: "Zarządzanie Zespołem",
        description: "Skuteczne kierowanie 12-osobowym zespołem handlowym, systematycznie realizującym regionalne plany sprzedaży i marży.",
      },
    ],
  },
  interests: {
    title: "Zainteresowania i Rozwój",
    items: [
      "Sztuczna inteligencja i praktyczna automatyzacja procesów biznesowych",
      "Tworzenie nowoczesnych aplikacji internetowych (JavaScript, React)",
      "Kino autorskie — twórczość Davida Lyncha, Jima Jarmuscha i Quentina Tarantino",
      "Europejska piłka nożna — hiszpańska La Liga",
    ],
  },
  gdprClause: "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)).",
  ui: {
    backToPortfolio: "Wróć do portfolio",
    printOrSavePdf: "Drukuj / Zapisz jako PDF",
    printHint: "W oknie drukowania: wybierz \"Zapisz jako PDF\" i zaznacz \"Grafika tła\"",
    previewBadge: "CV do druku (A4 · 2 strony)",
    pageLabel: "Strona",
    ofLabel: "z",
    credentialsHeaderRight: "Wykształcenie, Kompetencje i Certyfikaty",
  },
};

export const printableCVData = printableCVDataPL;
