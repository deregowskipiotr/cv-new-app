import type { NavTranslations } from '@/types/navigation';
import type { AboutContent } from '@/types/about';
import type { ProjectsContent } from '@/types/projects';
import type { SkillsContent } from '@/types/skills';
import type { ExperienceContent } from '@/types/experience';
import type { ContactContent } from '@/types/contact';

export const contentPL = {
  nav: {
    logo: "PD",
    labels: {
      home: "Start",
      about: "O mnie",
      experience: "Doświadczenie",
      skills: "Umiejętności",
      projects: "Projekty",
      contact: "Kontakt",
    },
    letsTalk: "Porozmawiajmy",
    downloadCv: "Pobierz CV",
  } as NavTranslations,
  hero: {
    badge: "Key Account Manager | Sales Leader",
    titlePrimary: "Skuteczna Sprzedaż i Rozwój B2B",
    titleSecondary: "Nowoczesne spojrzenie na biznes",
    description: "Łączę praktyczne doświadczenie w sprzedaży, zarządzaniu kluczowymi klientami i rozwoju dystrybucji z zainteresowaniem sztuczną inteligencją i nowoczesnymi rozwiązaniami cyfrowymi. Stawiam na trwałe relacje biznesowe, rozumienie potrzeb klientów i praktyczne podejście do usprawniania procesów.",
    downloadCv: "Pobierz CV",
    letsTalk: "Porozmawiajmy",
    stats: [
      { value: "18+", label: "Lat w Sprzedaży FMCG" },
      { value: "12", label: "Kierowanie Zespołem Sprzedaży (RSM)" },
      { value: "2+", label: "Lata Programowania Frontend" },
      { value: "100%", label: "Orientacja na Cel i Proces" },
    ],
  },
  about: {
    eyebrow: "Profil zawodowy",
    headline: "Doświadczenie, relacje, rozwój.",
    paragraphs: [
      "Mam ponad 18 lat doświadczenia w sprzedaży i rozwoju biznesu w branży FMCG. Przeszedłem pełną ścieżkę zawodową — od przedstawiciela handlowego, przez zarządzanie 12-osobowym zespołem sprzedaży, po współpracę z kluczowymi klientami.",
      "Pracowałem w różnych kanałach sprzedaży: Rynek Tradycyjny, HoReCa, B2B i nowoczesnych sieciach handlowych, rozwijając współpracę zarówno z klientami detalicznymi, jak i dystrybutorami.",
      "Łączę umiejętności negocjacyjne i budowanie długofalowych relacji z analizą wyników, zarządzaniem budżetami oraz realizacją celów sprzedażowych.",
      "Stawiam na samodzielność, partnerskie podejście i ciągły rozwój. Doświadczenie handlowe uzupełniam wiedzą o AI i nowoczesnych narzędziach, szukając praktycznych sposobów na usprawnianie procesów biznesowych."
    ],
    stats: [
      { value: "18+", label: "Lat w branży FMCG" },
      { value: "12", label: "Osób w zespole sprzedaży" },
      { value: "5", label: "Kluczowych filarów" }
    ],
    competencies: [
      {
        id: "sales-development",
        number: "1",
        iconKey: "sales-development",
        title: "Rozwój sprzedaży i biznesu",
        description: "Realizacja planów sprzedażowych, rozwój dystrybucji i pozyskiwanie nowych klientów. Przykład: nawiązanie współpracy z Carrefour w kategorii napojów bezalkoholowych."
      },
      {
        id: "key-accounts",
        number: "2",
        iconKey: "key-accounts",
        title: "Kluczowi klienci i negocjacje",
        description: "Budowanie relacji handlowych, negocjowanie warunków współpracy i rozwój portfolio produktów. Przykład: dwukrotne zwiększenie liczby SKU w kategorii win w sieci Auchan."
      },
      {
        id: "commercial-performance",
        number: "3",
        iconKey: "commercial-performance",
        title: "Wyniki i efektywność handlowa",
        description: "Analiza sprzedaży i marż, planowanie działań oraz kontrola budżetów marketingowych. Łączenie celów handlowych z rentownością i skuteczną realizacją ustaleń."
      },
      {
        id: "channels-distribution",
        number: "4",
        iconKey: "channels-distribution",
        title: "Znajomość kanałów i dystrybucji",
        description: "Doświadczenie w obsłudze kanałów: Rynek Tradycyjny, HoReCa, B2B i nowoczesnych sieciach handlowych. Współpraca z lokalnymi dystrybutorami, detalistami, producentami oraz klientami gastronomicznymi."
      },
      {
        id: "leadership-mindset",
        number: "5",
        iconKey: "leadership-mindset",
        title: "Przywództwo i nowoczesne podejście",
        description: "Doświadczenie w zarządzaniu 12-osobowym zespołem oraz współpracy między działami. Rozwijanie kompetencji w obszarze AI i technologii, w tym ukończenie programu Umiejętności Jutra AI (Google & SGH)."
      }
    ]
  } as AboutContent,
  projects: {
    eyebrow: "WYBRANE PROJEKTY",
    title: "Projekty",
    subtitle: "Eksperymentuję z AI i nowymi technologiami, tworząc praktyczne projekty — od narzędzi wspierających codzienną naukę po rozwiązania ułatwiające planowanie.",
    openProject: "Zobacz projekt",
    unavailableLink: "Link w przygotowaniu",
    items: [
      {
        id: "excel-function-guide",
        number: "01",
        category: "PRODUKTYWNOŚĆ",
        title: "Przewodnik po funkcjach Excela",
        description: "Praktyczny przewodnik po sześciu popularnych funkcjach Excela, wyjaśniający ich działanie i zastosowanie w codziennej pracy.",
        tags: ["Excel", "Nauka", "Praktyczny przewodnik"],
        url: "https://excell-rules-app.netlify.app/",
        visual: "spreadsheet",
      },
      {
        id: "vocabulary-reminder",
        number: "02",
        category: "NAUKA JĘZYKÓW",
        title: "Vocabulary Reminder",
        description: "Osobisty słownik do nauki angielskiego, obejmujący około 150 słów na poziomie B2–C1, wraz z definicjami, przykładami użycia, typowymi połączeniami wyrazowymi i synonimami.",
        tags: ["Angielski B2–C1", "Słownictwo", "Samodzielna nauka"],
        url: "https://vocabulary-reminder-app.netlify.app/",
        visual: "vocabulary",
      },
      {
        id: "skalne-miasto-ai",
        number: "03",
        category: "EKSPERYMENT Z AI",
        title: "Skalne Miasto — przewodnik turystyczny AI",
        description: "Plan zwiedzania Skalnego Miasta w Czechach, oparty na analizie i porównaniu tras przygotowanych przez trzy różne modele AI.",
        tags: ["Planowanie podróży", "Porównanie AI", "Analiza"],
        url: "https://skalne-miasto-trip.netlify.app/",
        visual: "topographic",
      },
    ],
  } as ProjectsContent,
  skills: {
    eyebrow: "Umiejętności i nie tylko",
    headline: "Umiejętności i nie tylko",
    intro: "Kompetencje handlowe, ciągły rozwój i ciekawość, która to napędza.",
    skillsHeading: "Umiejętności zawodowe",
    languagesHeading: "Języki",
    interestsHeading: "Zainteresowania i rozwój",
    credentialsHeading: "Kursy i szkolenia",
    skillGroups: [
      {
        id: "commercial-analytical",
        label: "Handlowe i analityczne",
        items: [
          "Analiza danych sprzedażowych",
          "Analiza potrzeb klientów",
          "Analiza trendów rynkowych i działań konkurencji",
        ],
      },
      {
        id: "sales-relationships",
        label: "Sprzedaż i relacje",
        items: [
          "Umiejętności negocjacyjne",
          "Rozwinięte zdolności komunikacyjne",
          "Budowanie i rozwijanie trwałych relacji biznesowych",
        ],
      },
      {
        id: "work-approach",
        label: "Organizacja pracy",
        items: [
          "Samodzielna i zespołowa organizacja pracy",
          "Zarządzanie czasem i priorytetami",
          "Dobra organizacja pracy",
        ],
      },
    ],
    languages: [
      { name: "Polski", level: "Język ojczysty" },
      { name: "Angielski", level: "B1/B2 — stale rozwijany" },
    ],
    interests: [
      { text: "Sztuczna inteligencja i jej praktyczne zastosowania w życiu codziennym i pracy" },
      { text: "Tworzenie stron i aplikacji internetowych z użyciem JavaScript" },
      { text: "Piłka nożna — szczególnie liga hiszpańska" },
      { text: "Kino — David Lynch, Jim Jarmusch, Quentin Tarantino" },
    ],
    credentials: [
      {
        id: "umiejetnosci-jutra",
        title: "Umiejętności Jutra AI",
        provider: "Google & SGH",
        note: "AI i praktyczne zastosowania w biznesie",
      },
      {
        id: "kodilla-bootcamp",
        title: "Bootcamp Front-end",
        provider: "Kodilla",
        topics: ["HTML", "CSS", "JavaScript", "Git", "ES6", "AJAX", "Redux", "React Router"],
      },
      {
        id: "excel-course",
        title: "Microsoft Excel — poziom średniozaawansowany / zaawansowany",
        provider: "Expose",
      },
      {
        id: "sales-management",
        title: "Szkolenie z zarządzania zespołem sprzedaży",
        provider: "Szkolenie wewnętrzne",
      },
    ],
  } as SkillsContent,
  experience: {
    eyebrow: "Doświadczenie",
    headline: "Od pracy w terenie po strategiczny rozwój",
    intro: "Ponad 18 lat doświadczenia handlowego w branży FMCG, HoReCa, B2B i zarządzaniu kluczowymi klientami. Ścieżka zawodowa oparta na relacjach z klientami, realizacji planów sprzedażowych, kierowaniu zespołem i rozwoju biznesu.",
    stats: [
      { value: "18+", label: "Lat w branży FMCG", iconKey: "experience" },
      { value: "12", label: "Osób w zespole sprzedaży", iconKey: "team" },
      { value: "5", label: "Etapów kariery", iconKey: "milestones" },
      { value: "4", label: "Główne kanały sprzedaży", iconKey: "channels" },
    ],
    timelineHeading: "Ścieżka zawodowa",
    milestones: [
      {
        id: "sales-rep",
        number: "01",
        title: "Przedstawiciel Handlowy",
        company: "Verte sp. z o.o.",
        period: "2004–2006",
        summary: "Budowanie fundamentów relacji handlowych i bezpośrednia realizacja celów sprzedażowych.",
      },
      {
        id: "horeca-rep",
        number: "02",
        title: "Przedstawiciel Handlowy, HoReCa",
        company: "Carey Agri / CEDC / Eurocash S.A.",
        period: "2006–2015",
        summary: "Rozwój relacji z klientami, dystrybucji i egzekucji handlowej w kanale gastronomicznym.",
      },
      {
        id: "regional-manager",
        number: "03",
        title: "Regionalny Kierownik Sprzedaży",
        company: "Eurocash S.A. – Premium Distributors",
        period: "2015–2017",
        summary: "Przejście od sprzedaży indywidualnej do zarządzania 12-osobowym zespołem i odpowiedzialności regionalnej.",
        highlight: true,
      },
      {
        id: "kam-b2b",
        number: "04",
        title: "Key Account Manager, B2B",
        company: "CEDC International",
        period: "2017–2020",
        summary: "Rozwijanie relacji B2B i zarządzanie współpracą handlową w wielu kanałach sprzedaży.",
      },
      {
        id: "junior-kam",
        number: "05",
        title: "Junior Key Account Manager",
        company: "North Coast S.A.",
        period: "2023–2025",
        summary: "Rozwój relacji z kluczowymi klientami sieciowymi, negocjacje warunków handlowych i rozwój kategorii.",
        isFeatured: true,
      },
    ],
    featured: {
      period: "2023–2025",
      title: "Junior Key Account Manager",
      company: "North Coast S.A.",
      description: "Bezpośrednia współpraca z kluczowymi klientami w kategoriach alkoholi, win i napojów bezalkoholowych. Rozwijanie nowych relacji handlowych i współtworzenie strategii rozwoju kategorii.",
      responsibilitiesLabel: "Główne obowiązki",
      responsibilities: [
        { text: "Nawiązanie i rozwój współpracy z nowymi klientami — m.in. Carrefour w kategorii napojów bezalkoholowych" },
        { text: "Prowadzenie negocjacji handlowych oraz przygotowywanie i realizacja planów sprzedaży" },
        { text: "Współtworzenie i wdrażanie strategii biznesowych u klientów sieciowych (Auchan, Duka, Carrefour)" },
        { text: "Ścisła współpraca z działami Trade Marketingu, Finansów i Logistyki" },
        { text: "Realizacja dodatkowych działań wspierających sprzedaż, w tym targów branżowych i festiwali wina" },
      ],
    },
    impactHeading: "Wybrane osiągnięcia",
    impactItems: [
      {
        id: "auchan",
        client: "Auchan",
        category: "Rozwój portfolio win",
        description: "Dwukrotne zwiększenie liczby SKU w kategorii win dzięki optymalizacji oferty i partnerstwu z dostawcami.",
        iconKey: "store",
      },
      {
        id: "carrefour",
        client: "Carrefour",
        category: "Nowa współpraca handlowa",
        description: "Otwarcie współpracy w kategorii napojów bezalkoholowych i zbudowanie solidnych fundamentów pod dalszy wzrost.",
        iconKey: "cart",
      },
      {
        id: "inout",
        client: "In&Out",
        category: "Rozwój kategorii",
        description: "Wprowadzenie kategorii alkoholi mocnych, win oraz napojów bezalkoholowych, poszerzające ofertę i wartość koszyka.",
        iconKey: "bottle",
      },
      {
        id: "leadership",
        client: "Regionalne przywództwo",
        category: "Zarządzanie zespołem",
        description: "Kierowanie 12-osobowym zespołem sprzedaży, planowanie działań w regionie, kontrola wyników i budżetów marketingowych.",
        iconKey: "team",
      },
    ],
  } as ExperienceContent,
  contact: {
    eyebrow: "Kontakt",
    headline: "Porozmawiajmy o współpracy",
    subtitle: "Jestem otwarty na rozmowy o partnerstwach handlowych, zarządzaniu kluczowymi klientami oraz nowoczesnych projektach cyfrowych.",
    cardsEyebrow: "Kontakt",
    cardsHeading: "Nawiążmy",
    cardsHeadingAccent: "kontakt",
    cards: [
      {
        id: "location",
        iconKey: "location",
        title: "Lokalizacja",
        primaryText: "Warszawa, Polska",
        secondaryText: "Gotowość do współpracy stacjonarnej i hybrydowej w całej Polsce",
        actionText: "Aglomeracja warszawska",
        actionHref: "https://maps.google.com/?q=Warszawa,Polska",
      },
      {
        id: "hours",
        iconKey: "hours",
        title: "Dostępność",
        primaryText: "Pon – Pt: 08:00 – 18:00",
        secondaryText: "Elastyczność w przypadku zaplanowanych spotkań biznesowych",
        actionText: "Otwarty na nowe wyzwania",
      },
      {
        id: "communication",
        iconKey: "communication",
        title: "Kontakt bezpośredni",
        primaryText: "+48 500 000 000",
        secondaryText: "piotr.deregowski@email.com",
        actionText: "Napisz wiadomość",
        actionHref: "mailto:piotr.deregowski@email.com",
      },
    ],
    form: {
      name: {
        label: "Twoje imię i nazwisko",
        placeholder: "Jak się nazywasz?",
      },
      email: {
        label: "Twój adres e-mail",
        placeholder: "Twój adres e-mail",
      },
      subject: {
        label: "Temat",
        placeholder: "Współpraca handlowa, Key Account, rekrutacja...",
      },
      message: {
        label: "Wiadomość",
        placeholder: "Opisz krótko potrzeby biznesowe, projekt lub propozycję roli...",
      },
      submitButton: "Wyślij wiadomość",
      submittingButton: "Wysyłanie wiadomości...",
      successMessage: "Dziękuję za kontakt. Wiadomość została wysłana — odpowiem najszybciej jak to możliwe.",
      errorMessage: "Proszę wypełnić wszystkie wymagane pola przed wysłaniem.",
    },
    sidebar: {
      eyebrow: "Masz pytanie lub propozycję?",
      title: "Skontaktuj się ze mną",
      paragraphs: [
        "Niezależnie od tego, czy chcesz porozmawiać o strategii zarządzania kluczowymi klientami, rozwoju dystrybucji w FMCG, czy integracji nowoczesnych narzędzi cyfrowych — chętnie nawiążę dialog.",
        "Napisz bezpośrednio przez formularz lub skontaktuj się ze mną na LinkedIn. Cenię konkretne rozmowy i partnerskie podejście do biznesu.",
      ],
    },
    footer: {
      tagline: "Porozmawiajmy",
      location: "Warszawa, Mazowsze, Polska",
      email: "piotr.deregowski@email.com",
      phone: "+48 500 000 000",
      linkedInUrl: "https://www.linkedin.com/in/piotr-der%C4%99gowski-61b86927a/",
      copyright: "© 2026 Piotr Deręgowski. Wszelkie prawa zastrzeżone.",
    },
  } as ContactContent,
};
