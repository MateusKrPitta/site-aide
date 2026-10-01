export function renderWhatsAppFloating(): string {
  return `
    <div class="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50 flex items-center">
      <a 
        href="https://wa.me/5567996763435?text=Olá,%20gostaria%20de%20falar%20com%20o%20comercial%20da%20Aidê%20Soluções%20agora%20mesmo!" 
        target="_blank" 
        rel="noopener" 
        class="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-3 rounded-full bg-primary-container text-on-primary shadow-2xl hover:bg-primary transition-all duration-300 ring-2 ring-secondary-container hover:scale-105"
        aria-label="Atendimento Comercial WhatsApp"
      >
        <span class="w-3 h-3 rounded-full bg-secondary-container animate-pulse"></span>
        <span class="material-symbols-outlined text-[22px] sm:text-[24px]">chat</span>
        <span class="font-sans text-xs sm:text-sm font-bold hidden sm:inline">💬 Fale com o Comercial (Plantão Ativo)</span>
        <span class="font-sans text-xs font-bold sm:hidden">WhatsApp</span>
      </a>
    </div>
  `;
}
