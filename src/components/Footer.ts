import { Toast } from './Toast';

export function renderFooter(): string {
  return `
    <footer class="w-full bg-surface-container-low text-on-surface border-t border-outline-variant/30 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          <!-- Col 1: Brand & Slogan -->
          <div class="lg:col-span-4 flex flex-col gap-4">
            <div class="flex items-center">
              <img 
                src="/logo.png" 
                alt="Aidê Sehn Sites" 
                class="h-12 w-auto object-contain"
              />
            </div>
            <p class="font-body text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Transformando a gestão e o potencial da sua empresa com inteligência estratégica, governança e aceleração mercadológica.
            </p>
            <div class="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/aidetreinamentospalestras/" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-all duration-200" aria-label="Instagram">
                <span class="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a href="https://www.linkedin.com/company/aidê-soluções-empresariais/" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-all duration-200" aria-label="LinkedIn">
                <span class="material-symbols-outlined text-[18px]">business_center</span>
              </a>
              <a href="https://wa.me/5567996763435" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-all duration-200" aria-label="WhatsApp">
                <span class="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>

          <!-- Col 2: Solutions Links -->
          <div class="lg:col-span-2 flex flex-col gap-3">
            <span class="font-sans text-xs font-bold uppercase tracking-widest text-primary">Soluções &amp; Pilares</span>
            <ul class="flex flex-col gap-2 font-body text-xs sm:text-sm text-on-surface-variant">
              <li><a href="#solucoes-servicos" class="hover:text-primary transition-colors" data-nav>Marketing Digital</a></li>
              <li><a href="#solucoes-servicos" class="hover:text-primary transition-colors" data-nav>DHO &amp; Pessoas</a></li>
              <li><a href="#solucoes-servicos" class="hover:text-primary transition-colors" data-nav>Gestão de Vendas</a></li>
              <li><a href="#solucoes-servicos" class="hover:text-primary transition-colors" data-nav>Finanças &amp; Caixa</a></li>
              <li><a href="#solucoes-servicos" class="hover:text-primary transition-colors" data-nav>Desenvolvimento Web</a></li>
              <li><a href="#solucoes-servicos" class="hover:text-primary transition-colors" data-nav>Tráfego Pago</a></li>
            </ul>
          </div>

          <!-- Col 3: Headquarter Info -->
          <div class="lg:col-span-3 flex flex-col gap-3">
            <span class="font-sans text-xs font-bold uppercase tracking-widest text-primary">Sede Executiva</span>
            <div class="flex flex-col gap-2.5 font-body text-xs sm:text-sm text-on-surface-variant">
              <p class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">location_on</span>
                <span>Rua São Vicente de Paula, 1076, Capilé, Nova Andradina - MS</span>
              </p>
              <p class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[18px]">call</span>
                <span>(67) 99676-3435</span>
              </p>
              <p class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[18px]">mail</span>
                <span>aide.contatoo@gmail.com</span>
              </p>
              <p class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[18px]">schedule</span>
                <span>Seg - Sex: 08:00 às 19:00</span>
              </p>
            </div>
          </div>

          <!-- Col 4: Quick Diagnostic Newsletter -->
          <div class="lg:col-span-3 flex flex-col gap-3">
            <span class="font-sans text-xs font-bold uppercase tracking-widest text-primary">Diagnóstico Imediato</span>
            <p class="font-body text-xs sm:text-sm text-on-surface-variant">
              Receba uma avaliação preliminar do estágio de maturidade do seu negócio.
            </p>
            <form class="flex flex-col gap-2 pt-1" id="footer-newsletter-form">
              <input 
                type="email" 
                id="footer-email-input" 
                placeholder="Seu e-mail corporativo" 
                class="h-11 px-3.5 bg-surface-container-lowest text-on-surface text-xs sm:text-sm rounded-xl border border-outline-variant/60 focus:border-primary-container focus:outline-none transition-colors" 
                required 
              />
              <button 
                type="submit" 
                class="h-11 px-4 rounded-xl bg-primary-container text-on-primary font-sans text-xs sm:text-sm font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2"
              >
                <span>Solicitar Contato</span>
                <span class="material-symbols-outlined text-[16px]">send</span>
              </button>
            </form>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-outline-variant/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs sm:text-sm text-on-surface-variant">
          <p>© 2025-2026 Aidê Soluções Digitais Empresariais e Rurais. Todos os direitos reservados.</p>
          <div class="flex items-center gap-6">
            <a href="#inicio" class="hover:text-primary transition-colors" data-nav>Privacidade</a>
            <a href="#inicio" class="hover:text-primary transition-colors" data-nav>Termos de Uso</a>
            <a href="#inicio" class="hover:text-primary transition-colors" data-nav>Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initFooterEvents(): void {
  const form = document.getElementById('footer-newsletter-form') as HTMLFormElement | null;
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = (document.getElementById('footer-email-input') as HTMLInputElement)?.value || '';
    Toast.show(`Obrigado! Entraremos em contato no e-mail ${email}.`, 'success');
    form.reset();
  });
}
