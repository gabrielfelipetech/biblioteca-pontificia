export type BaseSidebarLink = {
  title: string;
  slug?: string;
  isRequestable?: boolean;
  isExpanded?: boolean;
  icon?: string;
  section?: string;
};

export type SidebarLink =
  | (BaseSidebarLink & {
      isExpandable: true;
      children: [SidebarLink, ...SidebarLink[]];
    })
  | (BaseSidebarLink & { isExpandable?: false; children?: undefined });

export const sidebarLinks: SidebarLink[] = [
  {
    title: 'Calendário',
    icon: 'calendar-multiselect-outline',
    isExpanded: false,
    isRequestable: true,
    section: 'calendario',
  },

  {
    title: 'Devocionário',
    isExpandable: true,
    icon: 'book-open-blank-variant-outline',
    isExpanded: false,
    children: [
      {
        title: 'Via Sacra',
        isRequestable: true,
        slug: 'via-sacra',
        section: 'devocionario',
      },
      {
        title: 'Orações Diárias',
        isExpandable: true,
        isExpanded: false,
        children: [
          {
            title: 'Oração da manhã (Breve)',
            isRequestable: true,
            slug: 'oracao-da-manha-breve',
            section: 'devocionario',
          },
          {
            title: 'Oração da manhã (Completa)',
            isRequestable: true,
            slug: 'oracao-da-manha-completa',
            section: 'devocionario',
          },
          {
            title: 'Oração da noite (Breve)',
            isRequestable: true,
            slug: 'oracao-da-noite-breve',
            section: 'devocionario',
          },
          {
            title: 'Oração da noite (Completa)',
            isRequestable: true,
            slug: 'oracao-da-noite-completa',
            section: 'devocionario',
          },
        ],
      },
    ],
  },

  {
    title: 'Cânticos',
    isExpandable: true,
    icon: 'music-clef-treble',
    isExpanded: false,
    children: [
      {
        title: 'Adóro te devóte',
        isRequestable: true,
        slug: 'adoro-te-devote',
        section: 'canticos',
      },
    ],
  },

  {
    title: 'Documentos Papais',
    isExpandable: true,
    icon: 'book-cross',
    isExpanded: false,
    children: [
      {
        title: 'Papa Pio XII',
        isExpandable: true,
        isExpanded: false,
        children: [
          {
            title: 'Mediator Dei',
            isRequestable: true,
            slug: 'mediator-dei',
            section: 'documentos-papais/papa-pio-xii',
          },
        ],
      },
      {
        title: 'Papa Pio XI',
        isExpandable: true,
        isExpanded: false,
        children: [
          {
            title: 'Mediator Dei',
            isRequestable: true,
            slug: 'mediator-dei',
            section: 'documentos-papais/papa-pio-xi',
          },
        ],
      },
      {
        title: 'Papa Bento XV',
        isExpandable: true,
        isExpanded: false,
        children: [
          {
            title: 'Mediator Dei',
            isRequestable: true,
            slug: 'mediator-dei',
            section: 'documentos-papais/papa-bento-xv',
          },
        ],
      },
      {
        title: 'Papa São Pio X',
        isExpandable: true,
        isExpanded: false,
        children: [
          {
            title: 'Pascendi',
            isRequestable: true,
            slug: 'pascendi',
            section: 'documentos-papais/papa-sao-pio-x',
          },
        ],
      },
    ],
  },

  {
    title: 'Ritual',
    isExpandable: true,
    icon: 'cross-bolnisi',
    isExpanded: false,
    children: [
      {
        title: 'Batismo',
        isRequestable: true,
        slug: 'batismo',
        section: 'ritual',
      },
      {
        title: 'Confirmação',
        isRequestable: true,
        slug: 'confirmacao',
        section: 'ritual',
      },
      {
        title: 'Matrimônio',
        isRequestable: true,
        slug: 'matrimonio',
        section: 'ritual',
      },
      {
        title: 'Viático',
        isRequestable: true,
        slug: 'viatico',
        section: 'ritual',
      },
      {
        title: 'Extrema Unção',
        isRequestable: true,
        slug: 'extrema-uncao',
        section: 'ritual',
      },
    ],
  },
];
