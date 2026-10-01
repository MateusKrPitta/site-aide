export function renderHowItWorks(): string {
  const steps = [
    {
      number: '01',
      bgClass: 'bg-primary-container text-on-primary',
      title: 'Diagnóstico Prévio',
      description: 'Escolha a sua área de interesse e preencha o formulário rápido de diagnóstico com os pontos de atenção da sua empresa.',
      icon: 'fact_check',
      tag: 'Preenchimento online ágil'
    },
    {
      number: '02',
      bgClass: 'bg-secondary text-on-secondary',
      title: 'Contato em até 48h',
      description: 'Em até dois dias úteis nossa equipe entrará em contato para conferir suas informações e agendar o primeiro encontro executivo.',
      icon: 'schedule',
      tag: 'Agilidade garantida'
    },
    {
      number: '03',
      bgClass: 'bg-tertiary-container text-on-tertiary',
      title: 'Sessão de Imersão',
      description: 'Primeiro encontro direcionado a entender melhor as suas necessidades, gargalos operacionais e metas imediatas.',
      icon: 'psychology',
      tag: 'Escuta ativa e estratégica'
    },
    {
      number: '04',
      bgClass: 'bg-primary text-on-primary',
      title: 'Proposta Sob Medida',
      description: 'Apresentação da proposta com escopo detalhado, orçamento claro e designação da equipe especialista responsável pela execução.',
      icon: 'verified',
      tag: 'Escopo claro sem surpresas'
    }
  ];

  return `
    <section class="py-16 lg:py-24 bg-surface-container-lowest relative" id="como-funciona">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <span class="inline-block px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-sans text-xs font-bold uppercase tracking-widest mb-3">Processo Transparente</span>
            <h2 class="font-serif text-2xl sm:text-4xl text-on-surface font-bold">Como Funciona o Nosso Atendimento?</h2>
            <p class="font-body text-base sm:text-lg text-on-surface-variant mt-2 max-w-2xl">
              Um método estruturado em 4 etapas para individualizar a solução exata para o seu negócio e acelerar os seus resultados.
            </p>
          </div>
          <a 
            href="#diagnostico" 
            class="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-sans text-sm font-bold hover:bg-secondary hover:text-on-secondary transition-all shadow-sm shrink-0 self-start md:self-auto"
            data-nav
          >
            <span>Tenho Interesse</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        <!-- 4 Step Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${steps.map(step => `
            <div class="p-6 sm:p-8 rounded-3xl bg-surface-container-low hover:bg-surface transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group border border-outline-variant/20 hover:border-primary/20 hover:-translate-y-1">
              <div>
                <div class="w-12 h-12 rounded-2xl ${step.bgClass} flex items-center justify-center font-serif text-xl font-bold mb-6 shadow-sm">
                  ${step.number}
                </div>
                <h3 class="font-sans text-lg sm:text-xl font-bold text-on-surface mb-3">
                  ${step.title}
                </h3>
                <p class="font-body text-sm text-on-surface-variant leading-relaxed">
                  ${step.description}
                </p>
              </div>

              <div class="pt-6 mt-6 border-t border-outline-variant/20 flex items-center gap-2 text-primary text-xs sm:text-sm font-bold">
                <span class="material-symbols-outlined text-[18px]">${step.icon}</span>
                <span>${step.tag}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
