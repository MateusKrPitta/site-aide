import { SOLUTIONS_DATA } from '../data/services';

export function renderServicesGrid(): string {
  return `
    <section class="py-16 lg:py-24 bg-surface relative" id="solucoes">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span class="inline-block px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-sans text-xs font-bold uppercase tracking-widest mb-3">Ecossistema de Soluções</span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface font-bold mb-4">6 Áreas Estratégicas para Alavancar seu Negócio</h2>
          <p class="font-body text-base sm:text-lg text-on-surface-variant">
            Identifique os pontos que te interessam para que possamos individualizar o seu atendimento e encontrar a solução exata para a sua empresa ou propriedade rural.
          </p>
        </div>

        <!-- 6 Solution Pillar Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          ${SOLUTIONS_DATA.map(item => {
            const isFeatured = item.isFeatured;
            return `
              <div class="p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 ${isFeatured ? 'bg-tertiary text-on-tertiary shadow-lg relative overflow-hidden' : 'bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/30 hover:border-primary-container/40'}">
                
                ${isFeatured ? `
                  <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-primary-container/30 rounded-full blur-2xl pointer-events-none"></div>
                ` : ''}

                <div>
                  <div class="flex items-center justify-between mb-6">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center ${isFeatured ? 'bg-surface/20 text-on-tertiary' : 'bg-primary-container/15 text-primary'}">
                      <span class="material-symbols-outlined text-[26px]">${item.icon}</span>
                    </div>
                    <span class="font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isFeatured ? 'bg-secondary-container text-on-secondary-container' : 'bg-secondary-container/60 text-secondary'}">
                      ${item.pillarNumber}
                    </span>
                  </div>

                  <h3 class="font-sans text-xl sm:text-2xl font-bold mb-3 ${isFeatured ? 'text-on-tertiary' : 'text-on-surface group-hover:text-primary transition-colors'}">
                    ${item.title}
                  </h3>
                  <p class="font-body text-sm mb-6 ${isFeatured ? 'text-on-tertiary-container' : 'text-on-surface-variant'}">
                    ${item.subtitle}
                  </p>

                  <ul class="space-y-2.5 font-body text-sm mb-8 ${isFeatured ? 'text-on-tertiary-container' : 'text-on-surface-variant'}">
                    ${item.deliverables.map(del => `
                      <li class="flex items-start gap-2.5">
                        <span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${isFeatured ? 'text-secondary-container' : 'text-primary'}">check_circle</span>
                        <span>${del}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="flex flex-col gap-2 mt-auto">
                  <button 
                    class="w-full py-3.5 rounded-xl font-sans text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${isFeatured ? 'bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary' : 'bg-primary-container text-on-primary hover:bg-primary'}"
                    data-select-solution="${item.title}"
                  >
                    <span>${item.ctaText}</span>
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                  <span class="text-[11px] text-center ${isFeatured ? 'text-on-tertiary-container/80' : 'text-on-surface-variant'}">
                    Proposta sob medida sem compromisso
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initServicesEvents(): void {
  document.querySelectorAll('[data-select-solution]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const solutionName = target.getAttribute('data-select-solution') || '';

      const pillButtons = document.querySelectorAll('.solution-pill-btn');
      pillButtons.forEach(pill => {
        const text = pill.textContent?.trim().toLowerCase() || '';
        if (text.includes(solutionName.toLowerCase().substring(0, 4))) {
          pill.classList.add('bg-primary-container', 'text-on-primary');
          pill.classList.remove('bg-surface-container', 'text-on-surface');
        }
      });

      const diag = document.getElementById('diagnostico');
      if (diag) {
        diag.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
