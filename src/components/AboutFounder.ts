export function renderAboutFounder(): string {
  return `
    <section class="py-16 lg:py-24 bg-surface-container-low relative overflow-hidden" id="sobre-a-aide">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <!-- Left: Image Duo & Spatial Mosaic -->
          <div class="lg:col-span-5 relative">
            <div class="relative z-10 rounded-3xl overflow-hidden shadow-xl bg-surface border border-outline-variant/30">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1Vuq6pXWfppCxVxaVXonaEBMugaZtvLEqfDCUAhVKs34fukd_madogYsUyN77iTtXSDAjmZtWjJqL5K9N1DZFktEH41hsXXkTLf0e9oHyeTVtM9t94sApihYPtiJY_d66HkPwCXsfg2j0cJ2-vxSYJ_Hbhd6fLtPRdMFPLOVj07jNg2d_VR8romMSs0qNSSXZEIGHmnwyUssRXP-A8xduPlIEVVAVLhc3-9QYUsY4z4pPMW2pSVoYoilA" 
                alt="Magali Aidê Sehn Abrão" 
                class="w-full h-auto object-cover"
              />
            </div>
            
            <!-- Overlapping Headquarters preview -->
            <div class="absolute -bottom-8 -right-6 z-20 w-40 sm:w-48 h-40 sm:h-48 rounded-2xl overflow-hidden shadow-2xl hidden sm:block border-4 border-surface">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1U_CMY51BYe6e_gGFbGBlXc-TGN0ULCGejGy-etNolXsslxLkfey3W3eX5DStSORTB1dtfYtZGzhbY9Zd1It_WHtPelcmVaEU339YMzhWUvPdMu43Z4Oprt-nGQ7pXb5qH5OZrtvADRo_WXCiaF9_KCT7_T3B39567KxritHT88Hc5fPwpd3vKOtYdTfeWNvoLx9t-gZ5iuwAaIDIbc4moeLYMO9tWLPeInYBXtxkfM2Gw2VqA7rNsYsiY" 
                alt="Aidê Soluções Sede" 
                class="w-full h-full object-cover"
              />
            </div>

            <div class="p-4 rounded-2xl bg-secondary-container/90 backdrop-blur-md absolute top-6 -left-4 sm:-left-6 z-20 shadow-lg hidden sm:flex items-center gap-3 border border-white/60">
              <span class="material-symbols-outlined text-on-secondary-container text-[24px]">workspace_premium</span>
              <div class="text-xs font-bold text-on-secondary-container">
                <div>Administradora &amp; RH</div>
                <div class="font-normal opacity-80">Mentoria Executiva</div>
              </div>
            </div>
          </div>

          <!-- Right: Verbatim Story & Organizational Pillars -->
          <div class="lg:col-span-7 flex flex-col">
            <span class="inline-block px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-sans text-xs font-bold uppercase tracking-widest mb-3 self-start">
              Liderança &amp; Propósito
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-on-surface font-bold mb-6">
              Quem é Magali Aidê e Por Que Escolher a Aidê?
            </h2>

            <div class="space-y-4 font-body text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8">
              <p>
                <strong class="text-on-surface font-semibold">Magali Aidê Sehn Abrão</strong> é uma experiente profissional com formação em Administração e RH, além de vasta experiência em consultoria e gestão de pessoas. Ela é a fundadora da Aidê, que oferece soluções empresariais, cursos e mentorias de liderança. Sua maior qualidade é sua capacidade de inspirar e orientar outras pessoas, ajudando-as a desenvolver habilidades de liderança e alcançar objetivos de negócios.
              </p>
              <p>
                Magali é conhecida por seu estilo brilhante, empático e encorajador, tornando-a uma guia confiável e valorizada por empresários e líderes do agronegócio e comércio. Uma mentora e líder inspiradora, ideal para quem busca orientação de alta qualidade e inspiração para o sucesso continuado.
              </p>
            </div>

            <!-- 4 Pillars Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-3.5 border border-outline-variant/20">
                <span class="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">verified_user</span>
                <div>
                  <h3 class="font-sans text-sm sm:text-base font-bold text-on-surface">Credibilidade &amp; Honestidade</h3>
                  <p class="font-body text-xs text-on-surface-variant mt-1 leading-snug">Pontualidade e ética sólida cultivadas há mais de uma década de mercado.</p>
                </div>
              </div>

              <div class="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-3.5 border border-outline-variant/20">
                <span class="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">engineering</span>
                <div>
                  <h3 class="font-sans text-sm sm:text-base font-bold text-on-surface">Equipe Comprometida</h3>
                  <p class="font-body text-xs text-on-surface-variant mt-1 leading-snug">Especialistas com conhecimento técnico e prático comprovado em cada disciplina.</p>
                </div>
              </div>

              <div class="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-3.5 border border-outline-variant/20">
                <span class="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">trending_up</span>
                <div>
                  <h3 class="font-sans text-sm sm:text-base font-bold text-on-surface">Desenvolvimento Contínuo</h3>
                  <p class="font-body text-xs text-on-surface-variant mt-1 leading-snug">Metodologia viva focada na expansão sustentável de negócios e pessoas.</p>
                </div>
              </div>

              <div class="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-3.5 border border-outline-variant/20">
                <span class="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">handshake</span>
                <div>
                  <h3 class="font-sans text-sm sm:text-base font-bold text-on-surface">Rede de Relacionamento Ética</h3>
                  <p class="font-body text-xs text-on-surface-variant mt-1 leading-snug">Clientes e parceiros tratados como amigos em conexões fundamentadas no bem.</p>
                </div>
              </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
              <a 
                href="#diagnostico" 
                class="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-primary-container text-on-primary font-sans text-sm sm:text-base font-bold hover:bg-primary transition-all shadow-md"
                data-nav
              >
                <span>Iniciar Transformação com a Aidê</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
