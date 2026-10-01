export function renderKeynotesBanner(): string {
  return `
    <section class="py-16 lg:py-24 bg-surface relative overflow-hidden" id="palestras">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div class="rounded-3xl bg-gradient-to-r from-primary via-tertiary to-primary-container text-on-primary p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <!-- Subtle Pattern Backdrop -->
          <div class="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-secondary-fixed/15 blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div class="lg:col-span-7">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/20 text-on-primary text-xs uppercase font-sans font-bold tracking-wider mb-6">
                <span class="material-symbols-outlined text-[16px]">mic</span>
                <span>Comunicação &amp; Convenções</span>
              </div>

              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-primary mb-6 leading-tight font-bold">
                Cardápio de Palestras Aidê
              </h2>

              <p class="font-body text-base sm:text-lg text-on-primary-container mb-4 leading-relaxed">
                Você está pronto para elevar a motivação e a produtividade da sua equipe? Nossas palestras são a chave para o sucesso da sua empresa. Com palestrantes experientes e conteúdo sob medida, estamos prontos para impulsionar o seu negócio.
              </p>

              <p class="font-body text-sm sm:text-base text-on-primary-container/90 mb-8 leading-relaxed">
                Nossas apresentações abordam temas cruciais como liderança, inovação, superação de metas e trabalho em equipe. Cada apresentação é adaptada às necessidades específicas da sua empresa, garantindo que as mensagens sejam pertinentes e aplicáveis no dia a dia.
              </p>

              <div class="flex flex-wrap items-center gap-4">
                <a 
                  href="https://wa.me/5567996763435?text=Olá,%20gostaria%20de%20cotar%20uma%20palestra%20corporativa%20e%20solicitar%20data%20disponível!" 
                  target="_blank" 
                  rel="noopener" 
                  class="px-6 sm:px-8 py-4 rounded-xl bg-secondary-container text-on-secondary-container font-sans text-sm sm:text-base font-bold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Cotar Palestra Corporativa / Solicitar Data</span>
                  <span class="material-symbols-outlined text-[20px]">calendar_today</span>
                </a>
                
                <span class="text-xs sm:text-sm text-on-primary-container/80 flex items-center gap-1.5 font-medium">
                  <span class="material-symbols-outlined text-[18px]">verified</span>
                  Formatos Presenciais e Online
                </span>
              </div>
            </div>

            <!-- Keynote Visual Badge -->
            <div class="lg:col-span-5 flex justify-center">
              <div class="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-surface/10 p-3 backdrop-blur-md border border-white/20">
                <img 
                  src="https://lh3.googleusercontent.com/aida/AEtjO1X7o0EdFvAf7xYvw5Z3gTYddtOVr3EHsiTYU7q_u3ODJAi1c4HPMjlM25mow0QawzItReemxl6Tmte2c1LBwqGjtuK2-1PXtTAojZ7_2z2H9C4-igOthB2PCnIld_anj_Fc2X_tzo2tsc1Pdkv9tdSSfcbpi5LofyHi15sRO-UhWRBkt-9SUHAhwEOJiml3eiOKpK-WJwh7TU0ftE6toEe4QLfYSZqgquV6zBI1KFsYNevNi90SHbeFBMc" 
                  alt="Palestras Magali Aidê" 
                  class="w-full h-auto rounded-2xl object-cover"
                />
                <div class="p-4 bg-surface text-on-surface rounded-2xl mt-3 shadow-sm flex items-center justify-between">
                  <div>
                    <h3 class="font-sans text-sm sm:text-base font-bold text-primary">Imersões Corporativas</h3>
                    <p class="font-body text-xs text-on-surface-variant">Liderança, Metas e Alta Performance</p>
                  </div>
                  <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-sans font-bold text-xs">Exclusivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
