export function renderConversionCalculator(): string {
  return `
    <section class="py-16 lg:py-24 bg-surface relative" id="calculadora-roi">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-gradient-to-br from-surface-container-low to-surface-container rounded-3xl p-6 sm:p-10 lg:p-14 border border-outline-variant/40 shadow-xl">
          
          <!-- Left Info -->
          <div class="lg:col-span-5 flex flex-col gap-4">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-sans text-xs font-bold uppercase tracking-wider w-fit">
              <span class="material-symbols-outlined text-[16px] text-primary">calculate</span>
              <span>Simulador de Tração &amp; ROI</span>
            </div>

            <h2 class="font-serif text-3xl sm:text-4xl text-on-surface font-bold leading-tight">
              Estime o Potencial de Crescimento com a Metodologia Aidê
            </h2>

            <p class="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Descubra a estimativa de impacto em novos leads comerciais qualificados, aceleração de fechamentos e recuperação de margens ao implementar nosso ecossistema integrado.
            </p>

            <div class="space-y-3 pt-2 font-sans text-xs sm:text-sm font-semibold text-on-surface">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span>Páginas velozes que convertem até 3.4x mais visitantes</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span>Equipe de vendas alinhada com roteiros e CRM ativo</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span>Separação de finanças e corte de custos invisíveis</span>
              </div>
            </div>
          </div>

          <!-- Right Interactive Calculator Card -->
          <div class="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-xl border border-outline-variant/30 flex flex-col gap-6">
            
            <!-- Revenue Slider -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-on-surface" for="revenue-slider">
                  Faturamento Mensal Atual do seu Negócio:
                </label>
                <span class="font-sans text-base sm:text-lg font-bold text-primary" id="revenue-display">R$ 50.000 / mês</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="500000" 
                step="5000" 
                value="50000" 
                id="revenue-slider" 
                class="w-full h-3 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div class="flex justify-between text-[11px] text-on-surface-variant font-medium mt-1">
                <span>R$ 10 mil</span>
                <span>R$ 150 mil</span>
                <span>R$ 300 mil</span>
                <span>R$ 500 mil+</span>
              </div>
            </div>

            <!-- Focus area selector -->
            <div>
              <label class="block font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                Principal Objetivo Imediato:
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2" id="calc-focus-pills">
                <button type="button" class="calc-focus-btn px-3 py-2.5 rounded-xl bg-primary-container text-on-primary font-sans text-xs font-bold transition-all text-center" data-multiplier="1.35">
                  Vender Mais &amp; Leads
                </button>
                <button type="button" class="calc-focus-btn px-3 py-2.5 rounded-xl bg-surface-container text-on-surface font-sans text-xs font-bold transition-all text-center hover:bg-secondary-container" data-multiplier="1.25">
                  Organizar Finanças
                </button>
                <button type="button" class="calc-focus-btn px-3 py-2.5 rounded-xl bg-surface-container text-on-surface font-sans text-xs font-bold transition-all text-center hover:bg-secondary-container" data-multiplier="1.45">
                  Ecossistema Completo 360º
                </button>
              </div>
            </div>

            <!-- Dynamic Output Projection Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30">
              <div>
                <span class="text-xs font-medium text-on-surface-variant block mb-1">Estimativa de Ganho / Eficiência Anual:</span>
                <span class="font-serif text-2xl sm:text-3xl font-bold text-primary" id="roi-annual-gain">R$ 210.000,00</span>
                <span class="text-[11px] text-on-surface-variant block mt-0.5">Em novas vendas e redução de perdas</span>
              </div>

              <div class="border-t sm:border-t-0 sm:border-l border-outline-variant/30 pt-3 sm:pt-0 sm:pl-4">
                <span class="text-xs font-medium text-on-surface-variant block mb-1">Impacto na Taxa de Fechamento:</span>
                <span class="font-serif text-2xl sm:text-3xl font-bold text-secondary" id="roi-conversion-boost">+35% a +60%</span>
                <span class="text-[11px] text-on-surface-variant block mt-0.5">Com posicionamento e páginas de conversão</span>
              </div>
            </div>

            <!-- Direct CTA to Diagnostic Form -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
              <a 
                href="#diagnostico" 
                class="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary-container text-on-primary font-sans text-sm font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-md"
                data-nav
              >
                <span>Quero Validar Esse Potencial Gratuitamente</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <span class="text-[11px] text-on-surface-variant text-center sm:text-right">
                Análise individualizada sem custo
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function initConversionCalculatorEvents(): void {
  const slider = document.getElementById('revenue-slider') as HTMLInputElement | null;
  const display = document.getElementById('revenue-display');
  const annualGain = document.getElementById('roi-annual-gain');
  const conversionBoost = document.getElementById('roi-conversion-boost');
  const focusBtns = document.querySelectorAll('.calc-focus-btn');

  let currentMultiplier = 1.35;

  function updateCalculations(): void {
    if (!slider) return;
    const rev = parseFloat(slider.value) || 50000;
    
    if (display) {
      display.textContent = `R$ ${rev.toLocaleString('pt-BR')} / mês`;
    }

    const estimatedAnnualIncremental = (rev * (currentMultiplier - 1)) * 12;
    if (annualGain) {
      annualGain.textContent = `R$ ${Math.round(estimatedAnnualIncremental).toLocaleString('pt-BR')},00`;
    }

    if (conversionBoost) {
      const percentage = Math.round((currentMultiplier - 1) * 100);
      conversionBoost.textContent = `+${percentage}% a +${percentage + 25}%`;
    }
  }

  slider?.addEventListener('input', updateCalculations);

  focusBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      focusBtns.forEach(b => {
        b.classList.remove('bg-primary-container', 'text-on-primary');
        b.classList.add('bg-surface-container', 'text-on-surface');
      });
      const target = e.currentTarget as HTMLElement;
      target.classList.add('bg-primary-container', 'text-on-primary');
      target.classList.remove('bg-surface-container', 'text-on-surface');
      currentMultiplier = parseFloat(target.getAttribute('data-multiplier') || '1.35');
      updateCalculations();
    });
  });

  updateCalculations();
}
