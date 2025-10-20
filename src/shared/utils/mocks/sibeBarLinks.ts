export type BaseSidebarLink = {
  title: string;
  slug?: string;
  isRequestable?: boolean;
  isExpanded?: boolean;
  icon?: string;
};

export type SidebarLink =
  | (BaseSidebarLink & {
      isExpandable: true;
      children: [SidebarLink, ...SidebarLink[]];
    })
  | (BaseSidebarLink & { isExpandable?: false; children?: undefined });

export const sidebarLinks: SidebarLink[] = [
  {
    title: 'Devocionário',
    isExpandable: true,
    icon: 'book-open-blank-variant-outline',
    isExpanded: false,
    children: [
      { title: 'Via Sacra', isRequestable: true, slug: 'via-sacra' },
      {
        title: 'Orações Diárias',
        isExpandable: true,
        isExpanded: false,
        children: [
          {
            title: 'Oração da manhã (Breve)',
            isRequestable: true,
            slug: 'oracao-da-manha-breve',
          },
          {
            title: 'Oração da manhã (Completa)',
            isRequestable: true,
            slug: 'oracao-da-manha-completa',
          },
          {
            title: 'Oração da noite (Breve)',
            isRequestable: true,
            slug: 'oracao-da-noite-breve',
          },
          {
            title: 'Oração da noite (Completa)',
            isRequestable: true,
            slug: 'oracao-da-noite-completa',
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
            slug: 'mediator-dei',
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
      { title: 'Batismo', isRequestable: true, slug: 'batismo' },
      { title: 'Confirmação', isRequestable: true, slug: 'confirmacao' },
      { title: 'Matrimônio', isRequestable: true, slug: 'matrimonio' },
      { title: 'Viático', isRequestable: true, slug: 'viatico' },
      { title: 'Extrema Unção', isRequestable: true, slug: 'extrema-uncao' },
    ],
  },
];
