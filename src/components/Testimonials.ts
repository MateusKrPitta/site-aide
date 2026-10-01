import { TESTIMONIALS_DATA, CLIENT_LOGOS_OR_BADGES } from '../data/testimonials';

export function renderTestimonials(): string {
  return `
    <section class="py-16 lg:py-24 bg-surface-container-lowest" id="depoimentos">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span class="inline-block px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-sans text-xs font-bold uppercase tracking-widest mb-3">Resultados Comprovados</span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface font-bold mb-4">Empresas e Líderes que Crescem Conosco</h2>
          <p class="font-body text-base sm:text-lg text-on-surface-variant">
            Conheça o impacto real das soluções personalizadas Aidê na voz de empresários e gestores atendidos.
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${TESTIMONIALS_DATA.map(t => `
            <div class="p-6 sm:p-7 rounded-3xl bg-surface-container-low flex flex-col justify-between shadow-sm border border-outline-variant/30 hover:border-primary-container/40 transition-all duration-300 hover:shadow-md">
              <div>
                <div class="flex items-center gap-1 text-secondary mb-4">
                  ${Array.from({ length: t.rating }).map(() => `
                    <span class="material-symbols-outlined text-[18px]">star</span>
                  `).join('')}
                </div>
                <p class="font-body text-sm sm:text-base text-on-surface leading-relaxed mb-6 italic">
                  "${t.quote}"
                </p>
              </div>

              <div class="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <div>
                  <h3 class="font-sans text-sm sm:text-base text-on-surface font-bold">
                    ${t.companyName}
                  </h3>
                  <p class="font-body text-xs text-on-surface-variant mt-0.5">
                    ${t.segment}
                  </p>
                </div>
                <span class="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-sans text-xs font-bold shrink-0">
                  ${t.initials}
                </span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Client Badges Strip -->
        <div class="mt-12 p-6 rounded-2xl bg-surface-container flex flex-wrap items-center justify-around gap-6 text-on-surface-variant font-sans text-xs sm:text-sm font-semibold border border-outline-variant/20">
          ${CLIENT_LOGOS_OR_BADGES.map(c => `
            <span class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-[20px]">${c.icon}</span>
              <span>${c.name}</span>
            </span>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
