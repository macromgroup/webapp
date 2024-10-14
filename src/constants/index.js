import { alt, finan, real, tech } from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    company_name:
      "Invest and consult on all real estate assets classes such as residential, commercial, and corporate as well as seeking development opportunities that are feasible and fit our requirements.",
    icon: real,
    iconBg: "#383E56",
    date: "Real Estate",
    points: [
      "Real Estate Investment",
      "Real Estate Development",
      "Real Estate Consultancy",
    ],
  },
  {
    company_name:
      "We offer financial and business advice to individuals, private and public sector organisations.  We carefully select the best investment products that are suitable for various risk profiles. The Group looks to continuously expand and collaborate with other corporations to form partnerships to grow our expertise and venture opportunities.",
    icon: finan,
    iconBg: "#E6DEDD",
    date: "Finance",
    points: [
      "Financial and Business Consulting",
      "Investment products",
      "Corporate partnerships",
    ],
  },
  {
    company_name:
      "Our team seek investment opportunities for tech solutions and innovations as well as taking initiative on our own in-house projects that improve and empower tech-enabled services. Our third pillar looks to digitally integrate operating businesses that lack transparency and visibility.",
    icon: tech,
    iconBg: "#383E56",
    date: "Technology",
    points: ["Tech Start ups", "Tech Innovation", "Digital transformation"],
  },
  {
    company_name: "Other areas of interest:",
    icon: alt,
    iconBg: "#E6DEDD",
    date: "Alternatives",
    points: [
      "Construction",
      "Natural Resources",
      "Energy and Water",
      "Agriculture and Food",
      "Tourism",
      "Health and wellness",
    ],
  },
];

const experiencesPt = [
  {
    company_name:
      "Investimos e consultamos em todas as classes de ativos imobiliários, como residencial, comercial ou corporativo, além de buscar oportunidades de desenvolvimento que sejam viáveis e atendam aos nossos requisitos.",
    icon: real,
    iconBg: "#383E56",
    date: "Imobiliário",
    points: [
      "Investimento Imobiliário",
      "Desenvolvimento Imobiliário",
      "Consultoria Imobiliária",
    ],
  },
  {
    company_name:
      "Oferecemos consultoria financeira e empresarial a indivíduos, empresas e entidades do setor público. Selecionamos cuidadosamente os melhores produtos de investimento que são adequados para vários perfis de risco. O Grupo busca expandir continuamente e colaborar com outras empresas para formar parcerias e crescer nossas oportunidades de empreendimento.",
    icon: finan,
    iconBg: "#E6DEDD",
    date: "Finanças",
    points: [
      "Consultoria Financeira e Empresarial",
      "Produtos de Investimento",
      "Parcerias Corporativas",
    ],
  },

  {
    company_name:
      "Nossa equipe busca oportunidades de investimento em soluções e inovações tecnológicas, além de tomar a iniciativa em nossos próprios projetos internos que melhoram e capacitam serviços habilitados por tecnologia. Nosso terceiro pilar busca integrar digitalmente empresas operacionais que carecem de transparência e visibilidade.",
    icon: tech,
    iconBg: "#383E56",
    date: "Tecnologia",
    points: [
      "Startups de Tecnologia",
      "Inovação Tecnológica",
      "Transformação Digital",
    ],
  },
  {
    company_name: "Outras áreas de interesse:",
    icon: alt,
    iconBg: "#E6DEDD",
    date: "Outras áreas de interesse",
    points: [
      "Construção",
      "Recursos naturais",
      "Energia e Água",
      "Agricultura e Alimentação",
      "Turismo",
      "Saúde e bem-estar",
    ],
  },
];

const team = [
  {
    name: "Marcello Morais",
    loc: "Group Founder and Managing Partner",
    bio: "Marcello is a Master in Real Estate Finance and a graduate in Business Management, where he studied at City University of London, a UK top ranked business school. He has held various real estate roles including valuations, investment and development, as well as purchase and disposal of residential units in London. He later went to work in the City of London offering financial advice to a book of clients in excess 100M USD, advising on their financial portfolios' asset allocation and wealth management. Some of the companies he has worked for include; BNP Paribas Real Estate, Akelius Residential Property and St. James's Place Wealth Management.",
    img: real,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Gabriel Diogo",
    loc: "Tech Partner",
    bio: "Gabriel is a proven Senior Data Engineer, currently under Foster + Partners with over half a decade worth of experience in data and information technology. His experience spans across multiple industries including but, not limited to property, architecture, automotive, software, insurance and consulting. His experience in leading projects and teams across a number of fields, coupled with a background in Computer Science from the University of London, allows him to not only excel in problem solving from first principles; but also produce technical strategies and robust solutions to maximise the value that organisations can source from their data, technical infrastructure and Human Resources alike.",
    img: real,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Ibiyemi Shittu",
    loc: "Real Estate Partner",
    bio: "Ibiyemi is a real estate professional, specialising in Investment Management. She has experience investing across all real estate sectors, as well as managing multi-million pound portfolios. She holds a Masters in Real Estate from one of the UK’s top business schools and an Economics undergraduate degree from the University of Nottingham. Based in London, her current role is as an Investment Manager in the Private Markets department of a global investment management firm. She also provides consultancy services to boutique investors and developers.",
    img: real,
    link: "https://www.linkedin.com/",
  },
];

const teamPt = [
  {
    name: "Marcello Morais",
    loc: "Fundador do Grupo e Sócio Gerente",
    img: real,
    bio: "Marcello é mestre em Finanças Imobiliárias e graduado em Gestão de Negócios, onde estudou na City University of London, uma escola de negócios de primeira linha no Reino Unido. Ele ocupou vários cargos no setor imobiliário, incluindo avaliações, investimentos e desenvolvimento, bem como compra e alienação de unidades residenciais em Londres. Mais tarde, ele foi trabalhar na cidade de Londres, oferecendo consultoria financeira a uma carteira de clientes com valor superior a 100 milhões de dólares, aconselhando sobre a alocação de ativos e gestão de patrimônio de suas carteiras financeiras. Algumas das empresas para as quais trabalhou incluem; BNP Paribas Real Estate, Akelius Residential Property e St. James's Place Wealth Management.",
    link: "https://www.linkedin.com/",
  },
  {
    name: "Gabriel Diogo",
    loc: "Parceiro de Tecnologia",
    bio: "Gabriel é um engenheiro de dados sênior comprovado, atualmente na Foster + Partners, com mais de meia década de experiência em dados e tecnologia da informação. Sua experiência abrange vários setores, incluindo, entre outros, propriedade, arquitetura, automotivo, software, seguros e consultoria. Sua experiência na liderança de projetos e equipes em diversas áreas, aliada à formação em Ciência da Computação pela Universidade de Londres, permite-lhe não apenas se destacar na resolução de problemas a partir dos primeiros princípios; mas também produzir estratégias técnicas e soluções robustas para maximizar o valor que as organizações podem obter dos seus dados, infraestrutura técnica e recursos humanos.",
    img: real,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Ibiyemi Shittu",
    loc: "Parceiro Imobiliário",
    bio: "Ibiyemi é profissional do setor imobiliário, especializado em gestão de investimentos. Ela tem experiência em investimentos em todos os setores imobiliários, bem como na gestão de carteiras multimilionárias. Ela possui mestrado em Imobiliário por uma das principais escolas de negócios do Reino Unido e graduação em Economia pela Universidade de Nottingham. Baseada em Londres, a sua função atual é como Gestora de Investimentos no departamento de Mercados Privados de uma empresa global de gestão de investimentos. Ela também fornece serviços de consultoria para investidores e desenvolvedores boutique.",
    img: real,
    link: "https://www.linkedin.com/",
  },
];

export { experiences, navLinks, team, experiencesPt, teamPt };
