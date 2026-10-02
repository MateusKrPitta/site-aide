import { SOLUTIONS_DATA } from '../data/services';

export function renderServicesPage(): string {
  const categories = [
    { id: 'all', label: 'Todos os Serviços', icon: 'grid_view' },
    { id: 'Saúde & Clínicas', label: 'Clínicas & Hospitais', icon: 'medical_services' },
    { id: 'Presença & Marca', label: 'Marketing Digital', icon: 'campaign' },
    { id: 'Desenvolvimento Humano', label: 'Palestras, Cursos & Mentorias', icon: 'groups' },
    { id: 'Tecnologia & Web', label: 'Sites & E-commerce', icon: 'devices' },
    { id: 'Finanças & Vendas', label: 'Finanças & Vendas', icon: 'account_balance' }
  ];

  return `
    <div class="w-full pb-20 bg-surface">
      <!-- Top Editorial Header & Breadcrumb -->
      <section class="relative w-full bg-gradient-to-b from-surface-container-low via-surface-container-lowest to-surface px-4 sm:px-6 lg:px-12 pt-10 pb-16 overflow-hidden border-b border-outline-variant/30">
        <!-- Ambient Glows -->
        <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            <div class="lg:col-span-8 flex flex-col gap-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container w-fit shadow-sm">
                <span class="material-symbols-outlined text-[16px] text-primary">verified</span>
                <span class="font-sans text-xs font-bold uppercase tracking-wider">Catálogo Oficial de Soluções</span>
              </div>
              
              <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight font-bold tracking-tight">
                Nossos Serviços Especializados
              </h1>
              
              <p class="font-body text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Transformando a cultura, os processos e os resultados da sua empresa ou instituição de saúde! Soluções integradas com mais de uma década de autoridade e confiabilidade comprovadas.
              </p>

              <!-- Interactive Category Tabs -->
              <div class="flex flex-wrap items-center gap-2 pt-3" id="service-category-tabs">
                ${categories.map((c, idx) => `
                  <button 
                    class="service-filter-btn px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 border ${idx === 0 ? 'bg-primary text-on-primary border-primary shadow-sm' : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high border-outline-variant/30'}"
                    data-category="${c.id}"
                  >
                    <span class="material-symbols-outlined text-[18px]">${c.icon}</span>
                    <span>${c.label}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Fast Chat / Interactive Assistant Card -->
            <div class="lg:col-span-4 flex flex-col">
              <div class="relative bg-surface-container-lowest p-6 rounded-3xl shadow-xl border border-outline-variant/30 flex flex-col gap-4">
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <img 
                      src="https://lh3.googleusercontent.com/aida/AEtjO1ViwN98phUipWTjs1h33CxD6eRCHKfODDHlTwvjYXY9Tea4syMLMdVIXw-Q4YHEhBxuZSy0q8lyPyVPnXPXY-Oc9Kl_hemejNMv2qE85dm3KDh_cNAXl94FaBgTUbPhRvvDtJM7eai-oWbbGKALqCCaNuYTHNbycEuxbCPvJ6ydIjzSQd4hKb2K7fh-4I1qUKRaIKWjsCwbzJprvNUf2VRv-fuQ0DkNAgWDDD-HSHZyoeiD_UYePSrhLw" 
                      alt="Magali Aidê" 
                      class="w-14 h-14 rounded-full object-cover shadow-md ring-2 ring-primary/20"
                    />
                    <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <h3 class="font-sans text-base font-bold text-primary">Chat Direto de Atendimento</h3>
                    <p class="font-body text-xs text-on-surface-variant">Qual serviço você procura hoje?</p>
                  </div>
                </div>

                <div class="bg-surface-container-low p-3.5 rounded-2xl flex flex-col gap-2 border border-outline-variant/20 text-xs">
                  <p class="text-on-surface font-medium flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[16px] text-primary">forum</span>
                    <span>Selecione para atendimento rápido:</span>
                  </p>
                  <div class="grid grid-cols-2 gap-1.5 pt-1">
                    <a href="https://wa.me/5567996763435?text=Olá!%20Gostaria%20de%20proposta%20de%20treinamento%20e%20atendimento%20humanizado%20para%20Clínicas%20e%20Hospitais." target="_blank" rel="noopener" class="p-2 rounded-lg bg-surface hover:bg-primary-container hover:text-on-primary transition-all text-center font-semibold text-[11px] text-on-surface border border-outline-variant/20 shadow-2xs">
                      🏥 Clínicas &amp; Saúde
                    </a>
                    <a href="https://wa.me/5567996763435?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Marketing%20Digital%20e%20Redes%20Sociais." target="_blank" rel="noopener" class="p-2 rounded-lg bg-surface hover:bg-primary-container hover:text-on-primary transition-all text-center font-semibold text-[11px] text-on-surface border border-outline-variant/20 shadow-2xs">
                      Marketing Digital
                    </a>
                    <a href="https://wa.me/5567996763435?text=Olá!%20Gostaria%20de%20proposta%20para%20Palestras%20e%20Cursos." target="_blank" rel="noopener" class="p-2 rounded-lg bg-surface hover:bg-primary-container hover:text-on-primary transition-all text-center font-semibold text-[11px] text-on-surface border border-outline-variant/20 shadow-2xs">
                      Palestras &amp; Cursos
                    </a>
                    <a href="https://wa.me/5567996763435?text=Olá!%20Gostaria%20de%20orçar%20a%20Criação%20de%20Site%20ou%20Loja%20Virtual." target="_blank" rel="noopener" class="p-2 rounded-lg bg-surface hover:bg-primary-container hover:text-on-primary transition-all text-center font-semibold text-[11px] text-on-surface border border-outline-variant/20 shadow-2xs">
                      Sites &amp; Lojas
                    </a>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5567996763435?text=Olá!%20Vim%20pela%20aba%20de%20Serviços%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20consultor." 
                  target="_blank" 
                  rel="noopener" 
                  class="w-full py-3 rounded-xl bg-secondary-container text-on-secondary-container font-sans text-xs sm:text-sm font-bold hover:bg-secondary hover:text-on-secondary transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span class="material-symbols-outlined text-[18px]">chat</span>
                  <span>Chamar no WhatsApp Oficial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Detailed Services Showcase -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20 w-full flex flex-col gap-16 lg:gap-24" id="services-list-container">
        ${SOLUTIONS_DATA.map((s, idx) => {
          const isEven = idx % 2 === 0;
          return `
            <div 
              class="service-item-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-28 p-6 sm:p-8 lg:p-10 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-md hover:shadow-xl transition-all duration-300" 
              id="service-detail-${s.id}"
              data-item-category="${s.category || 'all'}"
            >
              
              <!-- Content Column -->
              <div class="lg:col-span-7 flex flex-col gap-5 ${isEven ? '' : 'lg:order-2'}">
                <div class="flex flex-wrap items-center gap-2">
                  <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary font-sans text-xs font-bold uppercase tracking-wider">
                    <span class="material-symbols-outlined text-[16px]">${s.icon}</span>
                    <span>${s.pillarNumber}</span>
                  </div>
                  ${s.category ? `
                    <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-sans text-xs font-semibold">
                      ${s.category}
                    </span>
                  ` : ''}
                </div>

                <div>
                  <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight mb-2">${s.title}</h2>
                  <p class="font-sans text-base sm:text-lg font-semibold text-secondary leading-snug">
                    ${s.subtitle}
                  </p>
                </div>

                <p class="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  ${s.description}
                </p>

                <!-- Official Deliverable Items extracted from site -->
                <div class="pt-2">
                  <p class="font-sans text-xs uppercase tracking-widest font-bold text-on-surface mb-3 flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-[16px] text-primary">task_alt</span>
                    <span>O que está incluso neste serviço:</span>
                  </p>
                  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-body text-xs sm:text-sm text-on-surface-variant">
                    ${s.deliverables.map(item => `
                      <li class="flex items-start gap-2 bg-surface-container-low/60 p-2.5 rounded-xl border border-outline-variant/20">
                        <span class="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">check_circle</span>
                        <span class="font-medium text-on-surface">${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <!-- Feature Mini Cards if available -->
                ${s.deliverableCards && s.deliverableCards.length > 0 ? `
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    ${s.deliverableCards.map(d => `
                      <div class="flex items-start gap-3 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/20">
                        <div class="w-9 h-9 rounded-xl bg-secondary-container flex items-center justify-center text-primary shrink-0">
                          <span class="material-symbols-outlined text-[18px]">${d.icon}</span>
                        </div>
                        <div>
                          <p class="font-sans text-xs sm:text-sm font-bold text-on-surface">${d.title}</p>
                          <p class="font-body text-[11px] sm:text-xs text-on-surface-variant mt-0.5 leading-tight">${d.description}</p>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}

                <!-- CTA Action Bar -->
                <div class="pt-4 flex flex-wrap items-center gap-3">
                  <a 
                    href="https://wa.me/5567996763435?text=${encodeURIComponent(s.whatsappMessage)}" 
                    target="_blank" 
                    rel="noopener" 
                    class="px-6 py-3.5 rounded-xl bg-primary text-on-primary font-sans text-sm font-bold hover:bg-primary-container transition-all flex items-center gap-2 shadow-md hover:-translate-y-0.5"
                  >
                    <span>${s.ctaText}</span>
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <a 
                    href="#diagnostico" 
                    class="px-5 py-3.5 rounded-xl bg-surface-container-high text-on-surface font-sans text-sm font-bold hover:bg-surface-container-highest transition-all flex items-center gap-1.5"
                    data-nav
                  >
                    <span class="material-symbols-outlined text-[18px]">edit_document</span>
                    <span>Orçar no Diagnóstico</span>
                  </a>
                </div>
              </div>

              <!-- Media Showcase Box with Official Image & Metrics -->
              <div class="lg:col-span-5 flex flex-col gap-4 ${isEven ? '' : 'lg:order-1'}">
                <div class="relative overflow-hidden rounded-3xl shadow-lg border border-outline-variant/30 bg-surface-container-low group">
                  <div class="w-full aspect-square relative overflow-hidden bg-surface-container-low flex items-center justify-center">
                    <img 
                      src="${s.imageUrl || 'https://aidesolucoes.com.br/wp-content/uploads/2024/09/4.png'}" 
                      alt="${s.title}" 
                      class="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <!-- 3 Metric Stat Badges -->
                ${s.metrics && s.metrics.length > 0 ? `
                  <div class="grid grid-cols-3 gap-2.5 text-center">
                    ${s.metrics.map(m => `
                      <div class="p-3 bg-surface-container-low rounded-2xl border border-outline-variant/20">
                        <p class="font-serif text-base sm:text-xl text-primary font-bold leading-none mb-1">${m.value}</p>
                        <p class="font-body text-[10px] sm:text-xs text-on-surface-variant font-medium leading-tight">${m.label}</p>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </section>

      <!-- Bottom Consultation Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4">
        <div class="bg-gradient-to-r from-primary to-primary-container rounded-3xl p-8 sm:p-12 text-on-primary shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="max-w-2xl">
            <span class="px-3.5 py-1 rounded-full bg-white/20 text-white font-sans text-xs font-bold uppercase tracking-widest inline-block mb-3">
              Atendimento Consultivo Direto
            </span>
            <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Precisa de uma proposta personalizada para sua empresa?
            </h2>
            <p class="font-body text-sm sm:text-base text-white/90 leading-relaxed">
              Nossa equipe mapeia suas necessidades específicas e elabora um plano de ação focado em retorno imediato, engajamento e organização estrutural.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a 
              href="https://wa.me/5567996763435?text=Olá!%20Gostaria%20de%20uma%20reunião%20estratégica%20para%20avaliar%20as%20soluções%20da%20Aidê." 
              target="_blank" 
              rel="noopener" 
              class="w-full sm:w-auto px-6 py-4 rounded-xl bg-secondary-container text-on-secondary-container font-sans text-sm sm:text-base font-bold hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span class="material-symbols-outlined text-[20px]">chat</span>
              <span>Falar com a Magali Aidê</span>
            </a>
            <a 
              href="#diagnostico" 
              class="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-sans text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 border border-white/30"
              data-nav
            >
              <span>Preencher Diagnóstico</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initServicesPageEvents(): void {
  const filterBtns = document.querySelectorAll('.service-filter-btn');
  const serviceCards = document.querySelectorAll<HTMLElement>('.service-item-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const selectedCategory = target.getAttribute('data-category') || 'all';

      // Update active button styles
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-on-primary', 'border-primary', 'shadow-sm');
        b.classList.add('bg-surface-container-lowest', 'text-on-surface', 'border-outline-variant/30');
      });
      target.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'border-outline-variant/30');
      target.classList.add('bg-primary', 'text-on-primary', 'border-primary', 'shadow-sm');

      // Filter cards
      serviceCards.forEach(card => {
        const itemCategory = card.getAttribute('data-item-category') || '';
        if (selectedCategory === 'all' || itemCategory.includes(selectedCategory)) {
          card.style.display = 'grid';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
