type BaseSidebarLink = {
  title: string;
  isRequestable?: boolean;
  isExpanded?: boolean;
  icon?: string;
};

type SidebarLink =
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
      {
        title: 'Via Sacra',
        isRequestable: true,
      },
      {
        title: 'Orações Diárias',
        isExpandable: true,
        isExpanded: false,

        children: [
          {
            title: 'Oração da manhã (Breve)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração da manhã (Completa)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração da noite (Breve)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração da noite (Completa)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Para rezar ao longo do dia',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Anjo do Senhor (Angelus)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Rainha do Céu (Regina Coeli)',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para antes do estudo',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para depois do estudo',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para antes do trabalho',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para antes da refeição',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Oração para depois da refeição',
            isExpandable: false,
            isRequestable: true,
          },
        ],
      },
      {
        title: 'Santo terço',
        isExpandable: true,
        isExpanded: false,

        children: [
          { title: 'Oferecimento', isExpandable: false, isRequestable: true },
          {
            title: 'Mistério Gososo',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Mistério Doloroso',
            isExpandable: false,
            isRequestable: true,
          },
          {
            title: 'Mistério Glorioso',
            isExpandable: false,
            isRequestable: true,
          },
        ],
      },
      {
        title: 'Ladainhas',
        isExpandable: true,
        isExpanded: false,

        children: [
          {
            title: 'A Nosso Senhor',
            isExpandable: true,
            isExpanded: false,

            children: [
              {
                title: 'Preciossimo Sangue',
                isExpandable: false,
                isRequestable: true,
              },
            ],
          },
          {
            title: 'A Nossa Senhora',
            isExpandable: true,
            isExpanded: false,

            children: [
              {
                title: 'Ladainha de Nossa Senhora',
                isExpandable: false,
                isRequestable: true,
              },
              {
                title: 'Ladainha de Nossa Senhora do Carmo',
                isExpandable: false,
                isRequestable: true,
              },
            ],
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
        title: 'Sacros',
        isExpandable: true,
        isExpanded: false,
        children: [
          { title: 'Adóro te devóte', isRequestable: true },
          { title: 'Ave maris stella', isRequestable: true },
          { title: 'Ave verum', isRequestable: true },
          { title: 'Benedícite', isRequestable: true },
          { title: 'Benedíctus', isRequestable: true },
          { title: 'Ecce panis angelorum', isRequestable: true },
          { title: 'Jam lucis', isRequestable: true },
          { title: 'Magnificat', isRequestable: true },
          { title: 'Memento rerum conditor', isRequestable: true },
          { title: 'Nunc Dimíttis', isRequestable: true },
          { title: 'O gloriosa virginum', isRequestable: true },
          { title: 'Pange, lingua, gloriósi', isRequestable: true },
          { title: 'Parce domine', isRequestable: true },
          { title: 'Quem terra', isRequestable: true },
          { title: 'Salutaris', isRequestable: true },
          { title: 'Tantum ergo', isRequestable: true },
          { title: 'Te Deum', isRequestable: true },
          { title: 'Te lucis', isRequestable: true },
          { title: 'Vexílla Regis', isRequestable: true },
        ],
      },
      {
        title: 'Populares',
        isExpandable: true,
        isExpanded: false,
        children: [
          { title: 'Ó anjos cantai comigo', isRequestable: true },
          { title: 'Bendizemos o Teu Nome', isRequestable: true },
          { title: 'Senhor meu Bom Jesus Crucificado', isRequestable: true },
          { title: 'Sobre os braços da azinheira', isRequestable: true },
          { title: 'Com minha Mãe estarei', isRequestable: true },
          {
            title: 'Coração Santo aqui nos tens prostrados',
            isRequestable: true,
          },
          { title: 'Coração Santo, Tu reinarás', isRequestable: true },
          { title: 'Eu caminharei', isRequestable: true },
          { title: 'Cantemos a Jesus Sacramentado', isRequestable: true },
          { title: 'Lenta e calma sobre a terra', isRequestable: true },
          { title: 'Queremos Deus', isRequestable: true },
          { title: 'Que tenho eu, meu Deus', isRequestable: true },
          { title: 'Salve, nobre Padroeira', isRequestable: true },
          { title: 'Nossa Senhora do Carmo', isRequestable: true },
          { title: 'Senhora, nós Vos louvamos', isRequestable: true },
          { title: 'A treze de Maio', isRequestable: true },
          { title: 'Senhora, um dia descestes', isRequestable: true },
          { title: 'Virgem Pura', isRequestable: true },
        ],
      },
    ],
  },
];
