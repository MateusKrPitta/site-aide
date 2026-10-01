import { SolutionArea } from '../types';

export const SOLUTIONS_DATA: SolutionArea[] = [
  {
    id: 'marketing',
    pillarNumber: 'Área 01',
    title: 'Marketing Digital',
    subtitle: 'Posicionamento magnético, autoridade digital e engajamento qualificado para sua marca.',
    description: 'Não realizamos apenas postagens em redes sociais: construímos ativos de autoridade, estruturando estratégias completas de aquisição de clientes e retenção para empresas e negócios rurais que desejam ser referência.',
    icon: 'campaign',
    deliverables: [
      'Planejamento e direcionamento de mídias sociais',
      'Construção de Marca – Branding executivo',
      'Criação de Identidade Visual completa',
      'Treinamento de comunicação & Curso de Oratória',
      'Design para Social Media & Edição de Reels'
    ],
    ctaText: 'Contratar Agora & Orçar',
    whatsappMessage: 'Olá! Gostaria de contratar soluções em Marketing Digital e Branding para a minha empresa.',
    deliverableCards: [
      { icon: 'explore', title: 'Planejamento Estratégico', description: 'Direcionamento de público, canais e metas assertivas.' },
      { icon: 'forum', title: 'Gestão de Mídias Sociais', description: 'Calendário editorial ativo e engajamento qualificado.' },
      { icon: 'palette', title: 'Identidade Visual & Logos', description: 'Branding refinado com manual de identidade visual exclusivo.' },
      { icon: 'videocam', title: 'Vídeos Institucionais', description: 'Produções dinâmicas e reels de alta conversão mercadológica.' },
      { icon: 'contact_page', title: 'Cartão Digital Interativo', description: 'Links diretos para WhatsApp, geolocalização e portfólio num clique.' }
    ],
    metrics: [
      { value: '+1.2M', label: 'Visualizações Geradas' },
      { value: '85%', label: 'Taxa de Retenção' },
      { value: '4.9/5', label: 'Índice de Satisfação' }
    ]
  },
  {
    id: 'dho',
    pillarNumber: 'Pilar Fundamental',
    title: 'DHO - Gestão de Pessoas',
    subtitle: 'Estruturação de talentos, cultura forte e liderança de alta performance.',
    description: 'Alinhamento integral entre o capital humano e as metas estratégicas da organização, transformando o clima corporativo e desenvolvendo líderes preparados para tomar decisões.',
    icon: 'groups',
    isFeatured: true,
    deliverables: [
      'Recrutamento e Seleção Estratégica com Grafologia',
      'Palestras de Integração de Colaboradores',
      'Mentorias de Liderança Executiva',
      'Curso de Gestão de Longa Duração',
      'Plano de Cargos, Salários e Avaliação 360°'
    ],
    ctaText: 'Contratar DHO & Liderança',
    whatsappMessage: 'Olá! Gostaria de contratar a consultoria em DHO e Gestão de Pessoas da Aidê.',
    deliverableCards: [
      { icon: 'psychology', title: 'Grafologia & Seleção', description: 'Análise comportamental profunda para contratações cirúrgicas.' },
      { icon: 'co_present', title: 'Integração de Equipes', description: 'Alinhamento de cultura e pertencimento desde o 1º dia.' },
      { icon: 'military_tech', title: 'Mentoria de Liderança', description: 'Capacitação prática para gestores, diretores e sucessores.' },
      { icon: 'account_tree', title: 'Plano de Cargos & Salários', description: 'Estrutura de remuneração meritocrática e retenção de talentos.' }
    ],
    metrics: [
      { value: '-65%', label: 'Turnover em 6 Meses' },
      { value: '+92%', label: 'Engajamento Interno' },
      { value: '100%', label: 'Segurança em Decisões' }
    ]
  },
  {
    id: 'vendas',
    pillarNumber: 'Área 03',
    title: 'Vendas & Comercial',
    subtitle: 'Capacitação intensiva de times comerciais e processos de conversão acelerada.',
    description: 'Reestruturação completa da esteira de vendas, processos de abordagem, follow-up, quebra de objeções e acompanhamento de metas com CRM e rituais de gestão.',
    icon: 'trending_up',
    deliverables: [
      'Treinamento Básico para Vendedores',
      'Treinamento de Técnicas Avançadas de Fechamento',
      'Estruturação do Processo Comercial e CRM',
      'Roteiros e Scripting de Prospecção Ativa',
      'Gestão e Acompanhamento de Metas de Venda'
    ],
    ctaText: 'Contratar Consultoria de Vendas',
    whatsappMessage: 'Olá! Gostaria de acelerar o time de Vendas e os resultados comerciais da minha empresa.',
    deliverableCards: [
      { icon: 'record_voice_over', title: 'Scripts & Abordagens', description: 'Metodologia de negociação para contornar objeções clássicas.' },
      { icon: 'monitoring', title: 'Funil e CRM Estruturado', description: 'Acompanhamento de oportunidades e taxas de conversão por etapa.' },
      { icon: 'target', title: 'Metas & Comissionamento', description: 'Estrutura clara de incentivo alinhada à lucratividade real.' }
    ],
    metrics: [
      { value: '+38%', label: 'Ticket Médio de Vendas' },
      { value: '3.2x', label: 'Velocidade de Fechamento' },
      { value: '+150%', label: 'Volume de Propostas' }
    ]
  },
  {
    id: 'financas',
    pillarNumber: 'Área 04',
    title: 'Finanças & Controladoria',
    subtitle: 'Clareza no fluxo de caixa, precificação lúcida e blindagem patrimonial.',
    description: 'Implementação de rotinas financeiras precisas, DRE gerencial, controle diário de caixa, diagnóstico de margem de contribuição e separação total de finanças pessoais e empresariais.',
    icon: 'account_balance',
    deliverables: [
      'Controle Financeiro de Pequenos e Médios Negócios',
      'Manutenção Semanal de Indicadores Financeiros',
      'Gestão rigorosa de Fluxo de Caixa',
      'Separação de Confusão Patrimonial PF x PJ',
      'Previsibilidade orçamentária para expansão'
    ],
    ctaText: 'Contratar Gestão Financeira',
    whatsappMessage: 'Olá! Preciso organizar o setor financeiro e fluxo de caixa da minha empresa com a Aidê.',
    deliverableCards: [
      { icon: 'insights', title: 'DRE & Margem Real', description: 'Visibilidade exata de lucro líquido por produto/serviço.' },
      { icon: 'savings', title: 'Controle de Caixa Semanal', description: 'Rigor nas previsões de entradas e saídas sem surpresas.' },
      { icon: 'shield', title: 'Separação PF x PJ', description: 'Blindagem financeira com pro-labore estruturado.' }
    ],
    metrics: [
      { value: '100%', label: 'Controle Financeiro' },
      { value: '-22%', label: 'Redução de Custos Ociosos' },
      { value: '12 Meses', label: 'Previsibilidade Orçada' }
    ]
  },
  {
    id: 'sites',
    pillarNumber: 'Área 05',
    title: 'Desenvolvimento Web',
    subtitle: 'Portais institucionais velozes, e-commerces e páginas prontas para converter.',
    description: 'Desenvolvimento de sites corporativos modernos, lojas virtuais WooCommerce e landing pages otimizadas para carregamento ultra-rápido, SEO e captação de leads qualificados.',
    icon: 'devices',
    deliverables: [
      'Lojas Virtuais WooCommerce completas',
      'Sites Institucionais modernos e responsivos',
      'Landing Pages de Alta Conversão',
      'Formulários inteligentes e integração com CRM',
      'Otimização SEO e Produção de Conteúdo Corporativo'
    ],
    ctaText: 'Solicitar Orçamento de Site',
    whatsappMessage: 'Olá! Quero criar um site/landing page de alta conversão para o meu negócio.',
    deliverableCards: [
      { icon: 'laptop_mac', title: 'Sites Institucionais', description: 'Design executivo com autoridade e alta credibilidade institucional.' },
      { icon: 'shopping_bag', title: 'Lojas Virtuais', description: 'E-commerce seguro integrado a meios de pagamento e frete.' },
      { icon: 'rocket_launch', title: 'Landing Pages', description: 'Páginas de captura focadas 100% em conversão e anúncios.' }
    ],
    metrics: [
      { value: '< 1.2s', label: 'Tempo de Carregamento' },
      { value: '100%', label: 'Mobile Responsivo' },
      { value: 'SEO Top', label: 'Indexação no Google' }
    ]
  },
  {
    id: 'trafego',
    pillarNumber: 'Área 06',
    title: 'Tráfego Pago & Performance',
    subtitle: 'Atração de clientes qualificados todos os dias nas maiores plataformas de anúncio.',
    description: 'Gestão orientada a retorno financeiro (ROAS e CAC). Criação, segmentação e otimização contínua de campanhas no Meta Ads, Google Ads e LinkedIn Ads.',
    icon: 'ads_click',
    deliverables: [
      'Meta Business (Anúncios no Facebook e Instagram)',
      'Google Ads (Campanhas de Rede de Pesquisa e Performance Max)',
      'LinkedIn Ads para prospecção B2B executiva',
      'YouTube Ads e Remarketing segmentado',
      'Dashboards de ROI e Custo por Lead em tempo real'
    ],
    ctaText: 'Contratar Gestão de Tráfego',
    whatsappMessage: 'Olá! Desejo alavancar as vendas com Tráfego Pago e Anúncios da Aidê.',
    deliverableCards: [
      { icon: 'public', title: 'Meta Ads (Insta & Face)', description: 'Campanhas de atração em massa e captação direta de WhatsApp.' },
      { icon: 'search', title: 'Google Search & PMax', description: 'Captura de clientes com intenção imediata de compra.' },
      { icon: 'leaderboard', title: 'Relatórios de ROI', description: 'Transparência total em custo por lead e retorno sobre investimento.' }
    ],
    metrics: [
      { value: '4.8x', label: 'ROAS Médio Alcançado' },
      { value: '-40%', label: 'Custo por Lead (CPL)' },
      { value: '24/7', label: 'Aquisição Ativa' }
    ]
  }
];
