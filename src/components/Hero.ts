export function renderHero(): string {
  return `
    <section class="relative overflow-hidden bg-gradient-to-b from-surface via-surface to-surface-container-low py-12 lg:py-20" id="hero">
      <!-- Ambient Diffused Glows -->
      <div class="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <!-- Top Strategic Conversion Hook Strip -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-8 p-3 px-4 rounded-2xl bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 shadow-sm">
          <div class="flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary">
            <span class="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
            <span>⚡ Diagnóstico Comercial &amp; Digital Gratuito: <strong>Apenas 4 vagas restantes para esta semana</strong></span>
          </div>
          <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
            <span class="material-symbols-outlined text-[16px] text-primary">verified</span>
            <span>Retorno Comercial em até 15 minutos</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <!-- Left: High Conversion Value Proposition -->
          <div class="lg:col-span-7 flex flex-col items-start">
            
            <!-- Category Tag -->
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container mb-5 shadow-sm border border-secondary/20">
              <span class="material-symbols-outlined text-[16px] text-primary">trending_up</span>
              <span class="font-sans text-xs font-bold uppercase tracking-wider text-secondary">
                Aceleração de Vendas, Gestão &amp; Sites de Alta Conversão
              </span>
            </div>

            <!-- Headline: Pain & Direct Outcome Focused -->
            <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-on-surface tracking-tight mb-6 leading-[1.12] font-bold">
              Não Criamos Apenas Sites. <br class="hidden sm:inline">
              Construímos <span class="italic font-serif text-primary underline decoration-secondary-container decoration-4 underline-offset-8">Máquinas de Vendas</span> e Crescimento para a Sua Empresa.
            </h1>

            <!-- Subtitle -->
            <p class="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
              Elimine o amadorismo da sua presença digital, estruture sua equipe de vendas e organize suas finanças. Uma consultoria estratégica 360º desenhada para empresários e produtores rurais que buscam lucro real e autoridade inquestionável.
            </p>

            <!-- High Impact CTAs -->
            <div class="flex flex-col gap-4 w-full sm:w-auto mb-10">
              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a 
                  href="#diagnostico" 
                  class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary-container text-on-primary font-sans text-base font-bold shadow-featured hover:bg-primary hover:scale-[1.02] transition-all duration-200 group"
                  data-nav
                >
                  <span>Solicitar Diagnóstico Estratégico Gratuito</span>
                  <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">bolt</span>
                </a>
                
                <a 
                  href="https://wa.me/5567996763435?text=Olá,%20gostaria%20de%20um%20diagnóstico%20estratégico%20de%20vendas%20e%20site%20para%20minha%20empresa!" 
                  target="_blank" 
                  rel="noopener" 
                  class="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface-container-lowest text-on-surface font-sans text-sm sm:text-base font-bold hover:bg-surface-container-high transition-all border border-outline-variant/40 shadow-sm"
                >
                  <span class="material-symbols-outlined text-[20px] text-primary">chat</span>
                  <span>Falar no WhatsApp Imediato</span>
                </a>
              </div>

              <!-- Guarantee Micro-Badges -->
              <div class="flex flex-wrap items-center gap-4 text-xs font-semibold text-on-surface-variant">
                <span class="flex items-center gap-1.5 text-primary">
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>100% Personalizado</span>
                </span>
                <span class="flex items-center gap-1.5 text-primary">
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Sem Custos Iniciais de Avaliação</span>
                </span>
                <span class="flex items-center gap-1.5 text-primary">
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Retorno Rápido Garantido</span>
                </span>
              </div>
            </div>

            <!-- Social Proof Strip -->
            <div class="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm">
              <div class="flex items-center gap-1 text-secondary">
                <span class="material-symbols-outlined text-[18px]">star</span>
                <span class="material-symbols-outlined text-[18px]">star</span>
                <span class="material-symbols-outlined text-[18px]">star</span>
                <span class="material-symbols-outlined text-[18px]">star</span>
                <span class="material-symbols-outlined text-[18px]">star</span>
              </div>
              <div class="text-xs sm:text-sm text-on-surface">
                <strong class="font-bold text-primary">4.9/5 estrelas</strong> em avaliações de mais de <strong>+500 empresas e líderes capacitados</strong>.
              </div>
            </div>
          </div>

          <!-- Right: Visual Strategic Showcase -->
          <div class="lg:col-span-5 relative flex justify-center items-end mt-4 lg:mt-0">
            <!-- Background Layer Glow -->
            <div class="absolute inset-x-4 top-6 bottom-0 rounded-3xl bg-gradient-to-b from-secondary-container via-surface-container to-surface-container-high -rotate-2 scale-95 shadow-md"></div>
            
            <div class="relative w-full max-w-md rounded-3xl bg-surface-container-low shadow-2xl overflow-hidden pt-6 px-6 border border-outline-variant/30">
              
              <!-- Floating Notification Pill (Social Proof Pop) -->
              <div class="absolute top-4 left-4 right-4 z-20 p-2.5 px-3.5 rounded-xl bg-surface/90 backdrop-blur-md border border-white/80 shadow-md flex items-center gap-2.5 text-xs text-on-surface">
                <span class="w-2 h-2 rounded-full bg-success animate-ping"></span>
                <span class="truncate">Novo diagnóstico solicitado por empresa de MS há 12 min</span>
              </div>

              <!-- Founder Portrait -->
              <div class="relative z-10 flex justify-center pt-8">
                <img 
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XSzQo4CcrYiI0-C7Bd9QKtQGPXML11hMOYM_7fJtVBX9cucSok0kjCe3S4Iq_s2kqQLQtbI7nOy4gCruaKz1398Ynyda6U44d8sRUM6jmte4yqavzFcnKZxb8d906l7K_peCADA02nqrTHB9a9U7HRhFm04of8qV6rNLNwHRhxbb9RIZfg7_zGleco9DgMcY4ZDHhSxm5BdF4zgXiaHZVH4rnrfq76vd2hfkWo2hq1FGLRoMAm-0cbEwI" 
                  alt="Magali Aidê" 
                  class="w-auto max-h-[380px] sm:max-h-[430px] object-contain drop-shadow-2xl"
                />
              </div>

              <!-- Floating Authority Card -->
              <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 p-3.5 sm:p-4 rounded-2xl bg-surface/95 backdrop-blur-md shadow-lg border border-white/80 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm shrink-0">
                    <span class="material-symbols-outlined text-[20px]">verified</span>
                  </div>
                  <div>
                    <h2 class="font-sans text-sm sm:text-base text-on-surface font-bold leading-tight">Magali Aidê</h2>
                    <p class="font-body text-[11px] sm:text-xs text-on-surface-variant">Estrategista de Negócios &amp; Gestão</p>
                  </div>
                </div>
                <span class="text-primary font-bold text-xs uppercase tracking-wider bg-primary-fixed/70 px-2.5 py-1 rounded-full border border-primary/20">
                  10+ Anos
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- High-Impact Trust Numbers Strip -->
        <div class="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
          <div class="flex flex-col items-center lg:items-start p-3 sm:p-4 border-r border-outline-variant/20 last:border-r-0">
            <span class="font-serif text-3xl sm:text-4xl text-primary font-bold leading-none mb-1">+10 Anos</span>
            <span class="font-body text-xs sm:text-sm text-on-surface-variant text-center lg:text-left">Consolidação e liderança em consultoria</span>
          </div>
          <div class="flex flex-col items-center lg:items-start p-3 sm:p-4 border-r border-outline-variant/20 last:border-r-0">
            <span class="font-serif text-3xl sm:text-4xl text-primary font-bold leading-none mb-1">6 Pilares</span>
            <span class="font-body text-xs sm:text-sm text-on-surface-variant text-center lg:text-left">Ecossistema 360º de Tração e Lucro</span>
          </div>
          <div class="flex flex-col items-center lg:items-start p-3 sm:p-4 border-r border-outline-variant/20 last:border-r-0">
            <span class="font-serif text-3xl sm:text-4xl text-primary font-bold leading-none mb-1">+500</span>
            <span class="font-body text-xs sm:text-sm text-on-surface-variant text-center lg:text-left">Empresas e marcas alavancadas</span>
          </div>
          <div class="flex flex-col items-center lg:items-start p-3 sm:p-4">
            <span class="font-serif text-3xl sm:text-4xl text-primary font-bold leading-none mb-1">98%</span>
            <span class="font-body text-xs sm:text-sm text-on-surface-variant text-center lg:text-left">Índice de aprovação de clientes</span>
          </div>
        </div>

      </div>
    </section>
  `;
}
