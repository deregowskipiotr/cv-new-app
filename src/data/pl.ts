import type { NavTranslations } from '@/types/navigation';
import type { AboutContent } from '@/types/about';
import type { ProjectsContent } from '@/types/projects';

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
      "Pracowałem w różnych kanałach sprzedaży: Traditional Trade, HoReCa, B2B i nowoczesnych sieciach handlowych, rozwijając współpracę zarówno z klientami detalicznymi, jak i dystrybutorami.",
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
        description: "Doświadczenie w Traditional Trade, HoReCa, B2B i nowoczesnych sieciach handlowych. Współpraca z lokalnymi dystrybutorami, detalistami, producentami oraz klientami gastronomicznymi."
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
};