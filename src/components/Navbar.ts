import { NavRoute } from '../types';

export const NAV_ROUTES: NavRoute[] = [
  { path: '#inicio', label: 'Início', isAnchor: true },
  { path: '#solucoes-servicos', label: 'Soluções & Serviços' },
  { path: '#como-funciona', label: 'Como Funciona', isAnchor: true },
  { path: '#sobre-a-aide', label: 'Sobre a Aidê', isAnchor: true },
  { path: '#depoimentos', label: 'Depoimentos', isAnchor: true },
  { path: '#palestras', label: 'Palestras', isAnchor: true },
  { path: '#contato', label: 'Contato' }
];

export function renderNavbar(currentPath = '#inicio'): string {
  return `
    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300" id="site-header">
      <!-- Main Navigation Bar -->
      <div class="h-20 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-300" id="main-nav-bar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center justify-between gap-4 sm:gap-6">
          
          <!-- Logo -->
          <a href="#inicio" class="flex items-center group py-1" data-nav>
            <img 
              src="/logo.png" 
              alt="Aidê Sehn Sites" 
              class="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden xl:flex items-center gap-6 2xl:gap-8">
            ${NAV_ROUTES.map(route => {
              const isActive = currentPath === route.path || (route.path === '#solucoes-servicos' && (currentPath === '#solucoes-servicos' || currentPath === '#servicos'));
              return `
                <a 
                  href="${route.path}" 
                  class="font-sans text-sm font-medium transition-colors relative py-1 ${isActive ? 'text-primary font-bold after:w-full' : 'text-on-surface-variant hover:text-primary after:w-0'} after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  data-nav
                >
                  ${route.label}
                </a>
              `;
            }).join('')}
          </nav>

          <!-- Nav Right CTAs -->
          <div class="flex items-center gap-2 sm:gap-3">
            <a 
              href="#diagnostico" 
              class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-sans text-xs sm:text-sm font-semibold hover:bg-primary transition-all shadow-md group"
              data-nav
            >
              <span class="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
              <span class="hidden sm:inline">Contratar Soluções</span>
              <span class="sm:hidden">Contratar</span>
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            <!-- Mobile Menu Toggle Button -->
            <button class="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" id="mobile-menu-toggle" aria-label="Abrir Menu">
              <span class="material-symbols-outlined" id="mobile-menu-icon">menu</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <div class="hidden xl:hidden fixed top-20 left-0 w-full bg-surface border-b border-outline-variant/40 shadow-featured px-6 py-6 flex-col gap-3 z-40 max-h-[calc(100vh-80px)] overflow-y-auto" id="mobile-drawer">
        ${NAV_ROUTES.map(route => {
          const isActive = currentPath === route.path || (route.path === '#solucoes-servicos' && (currentPath === '#solucoes-servicos' || currentPath === '#servicos'));
          return `
            <a 
              href="${route.path}" 
              class="font-sans text-base font-semibold py-2.5 border-b border-outline-variant/20 transition-colors ${isActive ? 'text-primary font-bold' : 'text-on-surface hover:text-primary'}"
              data-nav
            >
              ${route.label}
            </a>
          `;
        }).join('')}
        <div class="pt-3 flex flex-col gap-3">
          <a href="https://wa.me/5567996763435" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-secondary-container text-on-secondary-container font-sans text-sm font-bold">
            <span class="material-symbols-outlined text-[20px]">chat</span>
            <span>Falar no WhatsApp Comercial</span>
          </a>
          <a href="#diagnostico" class="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary-container text-on-primary font-sans text-sm font-bold" data-nav>
            <span>Solicitar Diagnóstico Comercial</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </header>
  `;
}

export function initNavbarEvents(): void {
  const headerNav = document.getElementById('main-nav-bar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      headerNav?.classList.add('h-16', 'shadow-md');
      headerNav?.classList.remove('h-20');
    } else {
      headerNav?.classList.add('h-20');
      headerNav?.classList.remove('h-16', 'shadow-md');
    }
  });

  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const icon = document.getElementById('mobile-menu-icon');

  toggleBtn?.addEventListener('click', () => {
    const isHidden = drawer?.classList.toggle('hidden');
    if (drawer && !isHidden) {
      drawer.classList.add('flex');
    } else if (drawer) {
      drawer.classList.remove('flex');
    }
    if (icon) {
      icon.textContent = !isHidden ? 'close' : 'menu';
    }
  });

  drawer?.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
      drawer.classList.remove('flex');
      if (icon) icon.textContent = 'menu';
    });
  });
}
