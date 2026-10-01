export function renderStickyConversionBar(): string {
  return `
    <aside 
      id="sticky-conversion-bar" 
      aria-label="Diagnóstico Estratégico Gratuito"
      class="fixed bottom-0 left-0 w-full z-40 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/40 shadow-featured py-3 px-4 sm:px-6 transition-all duration-300 transform translate-y-full opacity-0"
    >
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <span class="w-2.5 h-2.5 rounded-full bg-primary animate-ping shrink-0 hidden sm:block"></span>
          <div class="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span class="font-sans text-xs sm:text-sm font-bold text-on-surface">Diagnóstico Estratégico Gratuito:</span>
            <span class="text-xs text-primary font-bold">Apenas 4 vagas disponíveis para esta semana</span>
          </div>
        </div>

        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <a 
            href="#diagnostico" 
            class="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-primary-container text-on-primary font-sans text-xs sm:text-sm font-bold hover:bg-primary transition-all shadow-md flex items-center gap-1.5"
            data-nav
          >
            <span>Garantir Minha Vaga</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          <button 
            id="close-sticky-bar" 
            class="text-on-surface-variant hover:text-primary p-1 text-sm font-bold" 
            aria-label="Fechar Aviso"
          >
            ✕
          </button>
        </div>
      </div>
    </aside>
  `;
}

export function initStickyConversionBarEvents(): void {
  const bar = document.getElementById('sticky-conversion-bar');
  const closeBtn = document.getElementById('close-sticky-bar');
  let isClosed = false;

  closeBtn?.addEventListener('click', () => {
    isClosed = true;
    if (bar) {
      bar.classList.add('translate-y-full', 'opacity-0');
    }
  });

  window.addEventListener('scroll', () => {
    if (isClosed || !bar) return;
    if (window.scrollY > 450) {
      bar.classList.remove('translate-y-full', 'opacity-0');
      bar.classList.add('translate-y-0', 'opacity-100');
    } else {
      bar.classList.add('translate-y-full', 'opacity-0');
      bar.classList.remove('translate-y-0', 'opacity-100');
    }
  });
}
