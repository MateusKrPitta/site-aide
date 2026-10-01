import { SOLUTIONS_DATA } from '../data/services';

export function renderServicesPage(): string {
  return `
    <div class="w-full pb-16">
      <!-- Top Editorial Header & Breadcrumb -->
      <section class="relative w-full bg-surface-container-low px-4 sm:px-6 lg:px-12 py-12 sm:py-16 overflow-hidden">
        <!-- Ambient Glows -->
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary-fixed/50 blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 mb-6 text-on-surface-variant font-sans text-xs sm:text-sm">
            <a href="#inicio" class="hover:text-primary transition-colors flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px]">home</span>
              <span>Início</span>
            </a>
            <span class="text-outline-variant font-bold">/</span>
            <span class="text-primary font-bold">Nossos Serviços Especializados</span>
          </nav>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
            <div class="lg:col-span-8 flex flex-col gap-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container w-fit">
                <span class="material-symbols-outlined text-[16px] text-primary">verified</span>
                <span class="font-sans text-xs font-bold uppercase tracking-wider">Consultoria &amp; Estratégia Integrada</span>
              </div>
              
              <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight font-bold tracking-tight">
                Soluções Estratégicas Feitas para Vender Mais, Reduzir Custos e Estruturar Sua Empresa
              </h1>
              
              <p class="font-body text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Consultoria executiva e soluções orientadas a ROI para empresas, cooperativas e produtores rurais. Metodologia testada que une atração comercial com margem sustentável, corte de desperdícios e aceleração de faturamento imediato.
              </p>

              <!-- Interactive Quick Filter Chips -->
              <div class="flex flex-wrap items-center gap-2.5 pt-2">
                ${SOLUTIONS_DATA.map(s => `
                  <a 
                    href="#service-detail-${s.id}" 
                    class="px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface hover:bg-primary-container hover:text-on-primary transition-all font-sans text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5 border border-outline-variant/30"
                  >
                    <span class="material-symbols-outlined text-[18px]">${s.icon}</span>
                    <span>${s.title}</span>
                  </a>
                `).join('')}
              </div>
            </div>

            <!-- Leadership Highlight Card -->
            <div class="lg:col-span-4 flex flex-col">
              <div class="relative bg-surface-container-lowest p-6 rounded-3xl shadow-xl border border-outline-variant/20 flex flex-col gap-4">
                <div class="flex items-center gap-4">
                  <img 
                    src="https://lh3.googleusercontent.com/aida/AEtjO1ViwN98phUipWTjs1h33CxD6eRCHKfODDHlTwvjYXY9Tea4syMLMdVIXw-Q4YHEhBxuZSy0q8lyPyVPnXPXY-Oc9Kl_hemejNMv2qE85dm3KDh_cNAXl94FaBgTUbPhRvvDtJM7eai-oWbbGKALqCCaNuYTHNbycEuxbCPvJ6ydIjzSQd4hKb2K7fh-4I1qUKRaIKWjsCwbzJprvNUf2VRv-fuQ0DkNAgWDDD-HSHZyoeiD_UYePSrhLw" 
                    alt="Magali Aidê" 
                    class="w-16 h-16 rounded-full object-cover shadow-md ring-2 ring-secondary-container"
                  />
                  <div>
                    <h2 class="font-sans text-lg font-bold text-primary">Magali Aidê</h2>
                    <p class="font-body text-xs text-on-surface-variant">Diretora Executiva &amp; Mentora</p>
                    <span class="inline-block mt-1 font-sans text-[11px] font-bold text-secondary tracking-widest uppercase">Especialista Corporativa</span>
                  </div>
                </div>
                <p class="font-body text-xs sm:text-sm text-on-surface-variant italic leading-relaxed">
                  "Transformamos a visão e a cultura da sua empresa em resultados tangíveis, potencializando talentos e blindando a governança com estratégias sólidas."
                </p>
                <div class="pt-3 flex items-center justify-between border-t border-surface-container-high text-xs text-on-surface font-semibold">
                  <div class="flex items-center gap-1.5 text-primary">
                    <span class="material-symbols-outlined text-[18px]">star</span>
                    <span class="font-bold text-sm">10+ Anos</span>
                  </div>
                  <span class="text-on-surface-variant font-sans text-[11px] uppercase tracking-wider">Experiência Comprovada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Detailed Services Showcase -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 w-full flex flex-col gap-16 lg:gap-24">
        ${SOLUTIONS_DATA.map((s, idx) => {
          const isEven = idx % 2 === 0;
          return `
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-32" id="service-detail-${s.id}">
              
              <div class="lg:col-span-6 flex flex-col gap-5 ${isEven ? '' : 'lg:order-2'}">
                <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed w-fit font-sans text-xs font-bold uppercase tracking-wider">
                  <span class="material-symbols-outlined text-[16px]">${s.icon}</span>
                  <span>${s.pillarNumber}</span>
                </div>

                <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary font-bold">${s.title}</h2>
                <p class="font-sans text-base sm:text-lg font-semibold text-secondary">
                  ${s.subtitle}
                </p>
                <p class="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  ${s.description}
                </p>

                <!-- Deliverable Sub-cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  ${(s.deliverableCards || []).map(d => `
                    <div class="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/20">
                      <div class="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary shrink-0">
                        <span class="material-symbols-outlined text-[20px]">${d.icon}</span>
                      </div>
                      <div>
                        <p class="font-sans text-sm font-bold text-on-surface">${d.title}</p>
                        <p class="font-body text-xs text-on-surface-variant mt-0.5 leading-snug">${d.description}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <div class="pt-4 flex flex-wrap items-center gap-4">
                  <a 
                    href="https://wa.me/5567996763435?text=${encodeURIComponent(s.whatsappMessage)}" 
                    target="_blank" 
                    rel="noopener" 
                    class="px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-sans text-sm sm:text-base font-bold hover:bg-primary transition-all flex items-center gap-2 shadow-md hover:-translate-y-0.5"
                  >
                    <span>Contratar ${s.title}</span>
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <a href="#diagnostico" class="px-5 py-3.5 rounded-xl bg-surface-container text-on-surface font-sans text-sm font-bold hover:bg-surface-container-high transition-all" data-nav>
                    <span>Orçar no Formulário</span>
                  </a>
                </div>
              </div>

              <!-- Visual Showcase Box with Metrics and Sparkline -->
              <div class="lg:col-span-6 flex flex-col gap-4 ${isEven ? '' : 'lg:order-1'}">
                <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-xl border border-outline-variant/30 flex flex-col gap-5">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary font-bold">
                        <span class="material-symbols-outlined text-[24px]">${s.icon}</span>
                      </div>
                      <div>
                        <h3 class="font-sans text-base sm:text-lg font-bold text-on-surface">${s.title}</h3>
                        <p class="font-body text-xs text-on-surface-variant">Performance &amp; Aceleração</p>
                      </div>
                    </div>
                    <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-sans text-xs font-bold">Relatório Ativo</span>
                  </div>

                  <!-- Sparkline SVG -->
                  <div class="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-2">
                    <div class="flex items-center justify-between text-xs sm:text-sm text-on-surface-variant font-medium">
                      <span>Crescimento de Alcance Qualificado</span>
                      <span class="text-primary font-bold">+248% em 90 dias</span>
                    </div>
                    <svg class="w-full h-20 text-primary overflow-visible" fill="none" viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 65 C 50 60, 80 50, 120 45 C 160 40, 200 48, 250 25 C 290 8, 340 18, 400 5" stroke="currentColor" stroke-linecap="round" stroke-width="3"></path>
                      <path d="M0 65 C 50 60, 80 50, 120 45 C 160 40, 200 48, 250 25 C 290 8, 340 18, 400 5 L 400 80 L 0 80 Z" fill="currentColor" fill-opacity="0.08"></path>
                      <circle cx="250" cy="25" fill="currentColor" r="5"></circle>
                      <circle cx="400" cy="5" fill="currentColor" r="5"></circle>
                    </svg>
                    <div class="flex items-center justify-between font-sans text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider pt-1">
                      <span>Mês 1 • Diagnóstico</span>
                      <span>Mês 2 • Tração</span>
                      <span>Mês 3 • Escala</span>
                    </div>
                  </div>

                  <!-- 3 Metric Numbers -->
                  <div class="grid grid-cols-3 gap-3 text-center">
                    ${(s.metrics || []).map(m => `
                      <div class="p-3.5 bg-surface-container rounded-2xl">
                        <p class="font-serif text-lg sm:text-2xl text-primary font-bold leading-none mb-1">${m.value}</p>
                        <p class="font-body text-[11px] sm:text-xs text-on-surface-variant">${m.label}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </section>
    </div>
  `;
}
