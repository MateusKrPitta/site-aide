export function renderProblemSolution(): string {
  const comparisons = [
    {
      problemTitle: 'Site Institucional que não Vende',
      problemDesc: 'Páginas bonitas mas lentas, sem estratégia de conversão, sem chamadas claras e que não geram leads no WhatsApp.',
      solutionTitle: 'Landing Pages & Sites de Alta Conversão',
      solutionDesc: 'Estrutura desenhada para transformar visitantes em contatos comerciais qualificados todos os dias, com velocidade ultra-rápida e copy persuasiva.'
    },
    {
      problemTitle: 'Vendas Dependentes de Sorte & Descontos',
      problemDesc: 'Vendedores sem roteiro, sem acompanhamento de métricas no CRM e dando descontos excessivos para conseguir fechar contratos.',
      solutionTitle: 'Processo Comercial de Alta Performance',
      solutionDesc: 'Treinamento de vendas avançado, scripts de abordagem, funil estruturado e rituais de metas para fechar mais sem queimar margem.'
    },
    {
      problemTitle: 'Confusão Financeira & Caixa Apertado',
      problemDesc: 'Mistura de despesas pessoais com as da empresa (PF x PJ), falta de visão da margem real de lucro e sustos no final do mês.',
      solutionTitle: 'Controladoria & Finanças Blindadas',
      solutionDesc: 'DRE gerencial lúcido, controle semanal rigoroso de entradas/saídas, separação patrimonial total e previsibilidade para crescer.'
    },
    {
      problemTitle: 'Tráfego Pago sem Retorno (Dinheiro Queimado)',
      problemDesc: 'Investimento em anúncios no Google e Instagram que trazem curiosos desqualificados e nenhum retorno comprovado no bolso.',
      solutionTitle: 'Tráfego Estratégico com Foco em ROI',
      solutionDesc: 'Campanhas segmentadas para tomadores de decisão, otimização de custo por lead (CPL) e dashboards transparentes de retorno sobre o investimento.'
    }
  ];

  return `
    <section class="py-16 lg:py-24 bg-surface-container-low relative" id="por-que-a-aide">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span class="inline-block px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-sans text-xs font-bold uppercase tracking-widest mb-3">
            O Diagnóstico da Realidade
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface font-bold mb-4">
            Por Que 9 em Cada 10 Empresas Estagnam no Digital e nas Vendas?
          </h2>
          <p class="font-body text-base sm:text-lg text-on-surface-variant">
            Identifique os gargalos que estão custando caro ao seu negócio hoje e veja como transformá-los em vantagens competitivas de lucro.
          </p>
        </div>

        <!-- Comparison Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          ${comparisons.map(item => `
            <div class="rounded-3xl bg-surface-container-lowest p-6 sm:p-8 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              
              <!-- Problem Side (Red Tinted) -->
              <div class="p-4 rounded-2xl bg-error/5 border border-error/15 mb-4">
                <div class="flex items-center gap-2 text-error font-sans text-xs font-bold uppercase tracking-wider mb-1.5">
                  <span class="material-symbols-outlined text-[18px]">cancel</span>
                  <span>O Cenário Comum (Queima de Lucro)</span>
                </div>
                <h3 class="font-sans text-base font-bold text-on-surface mb-1">${item.problemTitle}</h3>
                <p class="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">${item.problemDesc}</p>
              </div>

              <!-- Solution Side (Marsala & Gold Tinted) -->
              <div class="p-4 rounded-2xl bg-primary-fixed/30 border border-primary/20">
                <div class="flex items-center gap-2 text-primary font-sans text-xs font-bold uppercase tracking-wider mb-1.5">
                  <span class="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                  <span>Com a Metodologia Aidê</span>
                </div>
                <h4 class="font-sans text-base font-bold text-primary mb-1">${item.solutionTitle}</h4>
                <p class="font-body text-xs sm:text-sm text-on-surface leading-relaxed">${item.solutionDesc}</p>
              </div>

            </div>
          `).join('')}
        </div>

        <!-- Bottom CTA Box inside section -->
        <div class="mt-12 p-8 rounded-3xl bg-gradient-to-r from-tertiary via-primary to-primary-container text-on-primary shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 class="font-serif text-xl sm:text-2xl font-bold mb-1">Deseja eliminar esses gargalos da sua empresa?</h3>
            <p class="font-body text-xs sm:text-sm text-on-primary-container">Nossa equipe faz uma análise gratuita dos seus processos e presença digital.</p>
          </div>
          <a 
            href="#diagnostico" 
            class="px-8 py-4 rounded-xl bg-secondary-container text-on-secondary-container font-sans text-sm sm:text-base font-bold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all shadow-md shrink-0"
            data-nav
          >
            <span>Quero Minha Análise Gratuita</span>
          </a>
        </div>

      </div>
    </section>
  `;
}
