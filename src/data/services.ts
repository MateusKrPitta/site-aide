import { SolutionArea } from '../types';

export const SOLUTIONS_DATA: SolutionArea[] = [
  {
    id: 'marketing-digital',
    pillarNumber: 'Serviço 01',
    title: 'Marketing Digital',
    subtitle: 'Planejamento estratégico, identidade visual e presença ativa nas redes sociais.',
    description: 'Desenvolvemos estratégias integradas para posicionar sua empresa e atrair clientes qualificados, fortalecendo sua marca nos canais digitais com autoridade e conversão consistente.',
    icon: 'campaign',
    category: 'Presença & Marca',
    imageUrl: 'https://aidesolucoes.com.br/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-19-at-18.13.21-768x768.jpeg',
    deliverables: [
      'Planejamento e direcionamento estratégico',
      'Gestão de Mídias Sociais ativa',
      'Desenvolvimento de sites corporativos',
      'Desenvolvimento de logos e marcas',
      'Identidade Visual completa & Manual da Marca',
      'Cartão Digital Interativo com links dinâmicos',
      'Criação de Vídeos Institucionais e Comerciais'
    ],
    ctaText: 'Contratar Marketing Digital',
    whatsappMessage: 'Olá! Gostaria de contratar soluções em Marketing Digital e Gestão de Mídias Sociais com a Aidê Soluções.',
    deliverableCards: [
      { icon: 'explore', title: 'Planejamento & Direcionamento', description: 'Metas claras, estudo de público-alvo e canais de maior retorno.' },
      { icon: 'forum', title: 'Gestão de Redes Sociais', description: 'Publicações com posicionamento magnético e engajamento qualificado.' },
      { icon: 'palette', title: 'Identidade Visual & Logos', description: 'Branding profissional com criação de logotipos e paletas exclusivas.' },
      { icon: 'videocam', title: 'Vídeos Institucionais & Comerciais', description: 'Produção em vídeo que gera credibilidade e desejo imediato.' },
      { icon: 'contact_page', title: 'Cartão Digital Interativo', description: 'Acesso a WhatsApp, redes e catálogo em um único toque.' }
    ],
    metrics: [
      { value: '+1.5M', label: 'Visualizações Geradas' },
      { value: '88%', label: 'Taxa de Retenção' },
      { value: '4.9/5', label: 'Avaliação de Clientes' }
    ]
  },
  {
    id: 'saude-clinicas-hospitais',
    pillarNumber: 'Área Especializada',
    title: 'DHO & Treinamentos para Saúde, Clínicas e Hospitais',
    subtitle: 'Atendimento humanizado, empatia, fidelização e mentoria para equipes e gestores da saúde.',
    description: 'Capacitações comportamentais e educação continuada focadas na realidade de clínicas, laboratórios, farmácias e hospitais. Unimos acolhimento humanizado, segurança do paciente, recepção eficiente e liderança médica/gestora de alta performance.',
    icon: 'medical_services',
    category: 'Saúde & Clínicas',
    isFeatured: true,
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
    deliverables: [
      'Treinamentos, educação continuada e capacitações comportamentais para a área da saúde',
      'Atendimento humanizado e empatia em ambientes de saúde',
      'Comunicação Assertiva, Segurança do paciente e fidelização',
      'Gerenciamento de conflitos e situações críticas',
      'Venda consultiva e ética na saúde',
      'Captação, recepção e agendamento eficiente com foco em relacionamento com os pacientes',
      'Fidelização e relacionamento pós-consulta',
      'Mentoria para equipes e gestores de clínicas, laboratórios, farmácias e hospitais',
      'Mentoria de liderança para diretores, médicos e coordenadores'
    ],
    ctaText: 'Contratar Soluções para Saúde & Clínicas',
    whatsappMessage: 'Olá! Gostaria de agendar uma reunião sobre treinamentos em Atendimento Humanizado e Gestão para Clínicas/Hospitais com a Aidê Soluções.',
    deliverableCards: [
      { icon: 'favorite', title: 'Atendimento Humanizado & Empatia', description: 'Acolhimento de excelência e sensibilidade em ambientes de saúde.' },
      { icon: 'verified_user', title: 'Comunicação Assertiva & Segurança', description: 'Prevenção de ruídos, segurança clínica do paciente e fidelização mútua.' },
      { icon: 'crisis_alert', title: 'Gestão de Conflitos & Crises', description: 'Mediação emocional e postura ética em situações de alta pressão.' },
      { icon: 'calendar_month', title: 'Recepção & Agendamento Eficiente', description: 'Otimização de fluxos, redução de faltas (no-show) e encantamento pós-consulta.' },
      { icon: 'local_hospital', title: 'Mentoria para Gestores de Saúde', description: 'Capacitação executiva para líderes de clínicas, laboratórios, farmácias e hospitais.' }
    ],
    metrics: [
      { value: '+98%', label: 'Satisfação de Pacientes (NPS)' },
      { value: '-45%', label: 'Redução de Faltas/No-Show' },
      { value: '100%', label: 'Atendimento Humanizado' }
    ]
  },
  {
    id: 'palestras-e-cursos',
    pillarNumber: 'Serviço 02',
    title: 'Palestras e Cursos',
    subtitle: 'Capacitação prática para líderes, gestores e equipes com habilidades estratégicas.',
    description: 'Nosso curso de longa duração para líderes é desenvolvido para capacitar os profissionais que ocupam cargos de liderança, com habilidades estratégicas e de gestão. Com uma abordagem prática e dinâmica, o curso ajuda a aprimorar a liderança, a tomada de decisão e a resolução de problemas, capacitando os líderes a enfrentar os desafios de forma mais eficaz.',
    icon: 'co_present',
    category: 'Desenvolvimento Humano',
    imageUrl: 'https://aidesolucoes.com.br/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-19-at-18.13.23-1024x1024.jpeg',
    deliverables: [
      'Curso de longa duração para líderes e gestores',
      'Palestras magnéticas de motivação e alta performance',
      'Desenvolvimento de habilidades estratégicas e de gestão',
      'Aprimoramento da liderança e tomada de decisão',
      'Treinamento prático de resolução rápida de problemas',
      'Workshops in-company customizados para a sua empresa',
      'Formações para sucessores e diretores'
    ],
    ctaText: 'Contratar Palestras e Cursos',
    whatsappMessage: 'Olá! Gostaria de mais informações e proposta para Palestras e Cursos de Liderança da Aidê Soluções.',
    deliverableCards: [
      { icon: 'school', title: 'Curso de Líderes', description: 'Capacitação de longa duração focada em tomada de decisão e gestão sólida.' },
      { icon: 'mic', title: 'Palestras Impactantes', description: 'Encontros motivadores que elevam o engajamento e a postura do time.' },
      { icon: 'psychology_alt', title: 'Resolução de Problemas', description: 'Metodologias práticas para enfrentar desafios diários com eficácia.' },
      { icon: 'groups_2', title: 'Workshops Corporativos', description: 'Dinâmicas aplicadas diretamente à realidade da sua empresa.' }
    ],
    metrics: [
      { value: '+5.000', label: 'Líderes Impactados' },
      { value: '98%', label: 'Aprovação de Alunos' },
      { value: '10+ Anos', label: 'Experiência em Palco' }
    ]
  },
  {
    id: 'sites-e-lojas',
    pillarNumber: 'Serviço 03',
    title: 'Desenvolvimento de Sites & Lojas',
    subtitle: 'Criação de sites e lojas virtuais totalmente personalizados, modernos e velozes.',
    description: 'Construímos plataformas digitais completas que valorizam a identidade da sua marca, conectam-se às suas redes e facilitam o contato imediato de clientes em computadores e celulares.',
    icon: 'devices',
    category: 'Tecnologia & Web',
    imageUrl: 'https://aidesolucoes.com.br/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-19-at-18.13.24-768x768.jpeg',
    deliverables: [
      'Criação de Sites Institucionais modernos',
      'Lojas Profissionais & E-commerces completos',
      'Formulários de Contato e captação integrada',
      'Design totalmente personalizado para a sua marca',
      'Imagens e Vídeos Ilimitados em alta definição',
      'Conexão direta com Redes Sociais e WhatsApp',
      'Portfólios interativos para apresentação de serviços'
    ],
    ctaText: 'Contratar Criação de Sites',
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para Criação de Site / Loja Virtual com a Aidê Soluções.',
    deliverableCards: [
      { icon: 'web', title: 'Criação de Sites', description: 'Páginas rápidas, com excelente experiência do usuário e design limpo.' },
      { icon: 'storefront', title: 'Lojas Profissionais', description: 'E-commerce estruturado para vender seus produtos 24 horas por dia.' },
      { icon: 'mail', title: 'Formulários Inteligentes', description: 'Receba leads e pedidos diretamente no seu e-mail e WhatsApp.' },
      { icon: 'perm_media', title: 'Portfólios & Catálogos', description: 'Apresentação refinada de seus projetos, obras e serviços executados.' }
    ],
    metrics: [
      { value: '< 1.2s', label: 'Carregamento Rápido' },
      { value: '100%', label: 'Mobile Responsivo' },
      { value: 'Top SEO', label: 'Indexação no Google' }
    ]
  },
  {
    id: 'mentorias',
    pillarNumber: 'Serviço 04',
    title: 'Mentorias Individuais & Negócios',
    subtitle: 'Orientação personalizada com profissionais experientes para acelerar sua carreira e empresa.',
    description: 'Nossas mentorias são desenvolvidas por profissionais experientes, que trabalham em conjunto com você para identificar suas necessidades individuais e ajudá-lo a alcançar seus objetivos de carreira e liderança. Com uma abordagem personalizada, oferecemos orientação individualizada e suporte contínuo para que você possa crescer e evoluir em sua trajetória, não só profissional, mas pessoal.',
    icon: 'psychology',
    category: 'Desenvolvimento Humano',
    imageUrl: 'https://aidesolucoes.com.br/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-19-at-18.13.24-1-1024x1024.jpeg',
    deliverables: [
      'Orientação individualizada e suporte contínuo',
      'Diagnóstico personalizado de necessidades e metas',
      'Aceleração de carreira e liderança executiva',
      'Mentorias para mulheres em posições de destaque',
      'Direcionamento para empreendedores iniciantes e expansão',
      'Evolução integrada: profissional e pessoal',
      'Plano de ação prático com métricas de acompanhamento'
    ],
    ctaText: 'Contratar Mentoria Executiva',
    whatsappMessage: 'Olá! Gostaria de agendar uma sessão de Mentoria Individual ou Empresarial com a Aidê Soluções.',
    deliverableCards: [
      { icon: 'person_pin', title: 'Abordagem Personalizada', description: 'Mapeamento das suas fortalezas e pontos de melhoria com suporte constante.' },
      { icon: 'auto_graph', title: 'Carreira & Liderança', description: 'Estratégias de posicionamento de alto valor no mercado corporativo.' },
      { icon: 'woman', title: 'Mentoria para Mulheres', description: 'Programa focado em liderança feminina, autonomia e gestão de negócios.' },
      { icon: 'emoji_objects', title: 'Novos Empreendedores', description: 'Validação de ideias, processos e estruturação inicial sem desperdício.' }
    ],
    metrics: [
      { value: '+94%', label: 'Evolução de Metas' },
      { value: '100%', label: 'Confidencialidade' },
      { value: '1:1', label: 'Atendimento Direto' }
    ]
  },
  {
    id: 'qualificacao-de-lideres',
    pillarNumber: 'Serviço 05',
    title: 'Qualificação de Líderes e Equipes',
    subtitle: 'Treinamento focado em Soft Skills, comunicação eficaz, coesão e resolução de conflitos.',
    description: 'Acreditamos que equipes fortes e coesas são essenciais para o sucesso das empresas. Por isso, nossa qualificação de equipes é focada no desenvolvimento de habilidades comportamentais, como comunicação eficaz, liderança, trabalho em equipe e resolução de conflitos. Com treinamentos práticos e dinâmicos, ajudamos a transformar a dinâmica de sua equipe, proporcionando maior produtividade e satisfação.',
    icon: 'groups',
    category: 'Desenvolvimento Humano',
    imageUrl: 'https://aidesolucoes.com.br/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-19-at-18.13.25-768x768.jpeg',
    deliverables: [
      'Desenvolvimento intensivo de Soft Skills (comportamentais)',
      'Treinamento de comunicação assertiva e não violenta',
      'Fortalecimento do trabalho em equipe e sinergia',
      'Técnicas de mediação e resolução de conflitos',
      'Aumento expressivo de produtividade e clima organizacional',
      'Integração de novos colaboradores e cultura de pertencimento',
      'Análise comportamental e grafologia aplicada'
    ],
    ctaText: 'Contratar Qualificação de Equipes',
    whatsappMessage: 'Olá! Gostaria de uma proposta para Qualificação de Líderes e Equipes corporativas com a Aidê Soluções.',
    deliverableCards: [
      { icon: 'record_voice_over', title: 'Comunicação Eficaz', description: 'Elimine ruídos de comunicação interna e alinhe expectativas de entrega.' },
      { icon: 'diversity_3', title: 'Trabalho em Equipe', description: 'União de propósitos para transformar grupos em times de alta performance.' },
      { icon: 'handshake', title: 'Resolução de Conflitos', description: 'Ferramentas dinâmicas para transformar desavenças em colaboração.' },
      { icon: 'sentiment_satisfied', title: 'Clima & Satisfação', description: 'Ambiente saudável que retém talentos e reduz turnover sensivelmente.' }
    ],
    metrics: [
      { value: '-65%', label: 'Turnover Reduzido' },
      { value: '+92%', label: 'Engajamento Interno' },
      { value: '100%', label: 'Prático e Dinâmico' }
    ]
  },
  {
    id: 'gestao-financeira-vendas',
    pillarNumber: 'Serviço 06',
    title: 'Consultoria Financeira & Vendas',
    subtitle: 'Controle de caixa, margem de contribuição e aceleração da esteira comercial.',
    description: 'Estruturação de rotinas financeiras precisas, DRE gerencial, separação de despesas PF/PJ aliadas à capacitação em vendas consultivas e superação de objeções para fechamento acelerado.',
    icon: 'account_balance',
    category: 'Finanças & Vendas',
    imageUrl: 'https://aidesolucoes.com.br/wp-content/uploads/2024/09/5-1.png',
    deliverables: [
      'Controle Financeiro de Pequenos e Médios Negócios',
      'Fluxo de Caixa gerencial e previsibilidade orçamentária',
      'Separação rigorosa de patrimônio PF e PJ',
      'Técnicas de Vendas Consultivas e Encantamento',
      'Superação de Objeções e Estratégias de Fechamento',
      'Treinamento de Cross-selling e Up-selling comercial',
      'Estruturação de metas e comissionamento claro'
    ],
    ctaText: 'Contratar Consultoria Financeira & Vendas',
    whatsappMessage: 'Olá! Gostaria de contratar a Consultoria em Finanças e Vendas da Aidê Soluções.',
    deliverableCards: [
      { icon: 'insights', title: 'DRE & Lucro Real', description: 'Clareza exata da margem de contribuição por produto e serviço.' },
      { icon: 'savings', title: 'Controle de Caixa', description: 'Eliminação de furos financeiros e previsibilidade de expansão.' },
      { icon: 'trending_up', title: 'Conversão Comercial', description: 'Treinamento de vendas para aumentar o ticket médio e fechar propostas.' }
    ],
    metrics: [
      { value: '+38%', label: 'Ticket Médio' },
      { value: '100%', label: 'Controle de Caixa' },
      { value: '3.2x', label: 'Velocidade Comercial' }
    ]
  }
];
