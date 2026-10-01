import { Toast } from './Toast';
import { applyInputMasks } from '../utils/masks';

export function renderDiagnosticForm(): string {
  const pills = [
    { title: 'Marketing Digital', desc: 'Posicionamento & Branding' },
    { title: 'DHO & Pessoas', desc: 'Equipes & Liderança' },
    { title: 'Vendas & Fechamento', desc: 'Metas & Conversão' },
    { title: 'Finanças & Caixa', desc: 'Margens & Controladoria' },
    { title: 'Sites de Alta Conversão', desc: 'Landing Pages & E-commerce' },
    { title: 'Tráfego Pago & ROI', desc: 'Google & Meta Ads' }
  ];

  return `
    <section class="py-16 lg:py-24 bg-surface relative" id="diagnostico">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 bg-surface-container-low rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-outline-variant/30">
          
          <!-- Left Column: Briefing & Direct Contacts -->
          <div class="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary text-on-primary font-sans text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                <span>Análise Gratuita de Mercado</span>
              </span>
              
              <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl text-on-surface mb-4 leading-tight font-bold">
                Receba um Plano Estratégico Sob Medida para o Seu Negócio
              </h2>
              
              <p class="font-body text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                Preencha os dados e receba uma avaliação preliminar de gargalos operacionais, presença digital e oportunidades imediatas de faturamento.
              </p>

              <!-- Benefits List -->
              <div class="space-y-3 mb-8 text-xs sm:text-sm font-semibold text-on-surface">
                <div class="flex items-center gap-2.5">
                  <div class="w-6 h-6 rounded-full bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-[16px]">verified</span>
                  </div>
                  <span>Avaliação conduzida por consultores especialistas seniores</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <div class="w-6 h-6 rounded-full bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-[16px]">verified</span>
                  </div>
                  <span>Sem custo e sem qualquer compromisso de contratação</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <div class="w-6 h-6 rounded-full bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-[16px]">verified</span>
                  </div>
                  <span>Retorno comercial expresso em até 15 minutos via WhatsApp</span>
                </div>
              </div>

              <!-- Quick direct cards -->
              <div class="space-y-3">
                <a 
                  href="https://wa.me/5567996763435?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20comercial%20prioritário." 
                  target="_blank" 
                  rel="noopener" 
                  class="flex items-center gap-3.5 p-3.5 px-4 rounded-2xl bg-surface-container-lowest hover:bg-secondary-container transition-all shadow-sm group border border-outline-variant/20"
                >
                  <div class="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <span class="text-[11px] text-on-surface-variant block">Plantão Comercial Direto</span>
                    <span class="font-sans text-sm sm:text-base font-bold text-on-surface group-hover:text-primary transition-colors">(67) 99676-3435</span>
                  </div>
                </a>

                <div class="flex items-center gap-3.5 p-3.5 px-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/20">
                  <div class="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <span class="text-[11px] text-on-surface-variant block">Sede Presencial</span>
                    <span class="font-body text-xs text-on-surface font-medium">Nova Andradina - MS (Atendimento Nacional)</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <span class="text-[11px] text-on-surface-variant font-medium">
                🔒 Ambiente Seguro com Criptografia e Proteção LGPD.
              </span>
            </div>
          </div>

          <!-- Right Column: Conversion Form -->
          <div class="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-outline-variant/30">
            
            <!-- Step Indicator -->
            <div class="mb-6 pb-4 border-b border-outline-variant/20 flex items-center justify-between">
              <div>
                <span class="text-xs font-bold text-primary uppercase tracking-wider font-sans">Passo Único de Diagnóstico</span>
                <h3 class="font-sans text-lg font-bold text-on-surface">Monte o seu Diagnóstico Sob Medida</h3>
              </div>
              <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-sans text-xs font-bold">100% Gratuito</span>
            </div>

            <form class="space-y-5" id="diagnostic-form-element">
              
              <!-- Multi-Pill Selection Step -->
              <div>
                <label class="block font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                  1. Quais Soluções Você Deseja Avaliar? (Selecione uma ou mais)
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5" id="solution-pills-container">
                  ${pills.map(p => `
                    <button 
                      type="button" 
                      class="solution-pill-btn p-3 rounded-2xl bg-surface-container text-on-surface font-sans text-left hover:bg-secondary-container transition-all duration-200 border border-outline-variant/30 flex flex-col justify-between"
                      data-pill="${p.title}"
                    >
                      <span class="text-xs font-bold text-on-surface block leading-tight mb-1">${p.title}</span>
                      <span class="text-[10px] text-on-surface-variant block leading-none opacity-80">${p.desc}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Contact Inputs -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div>
                  <label class="block font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1" for="form-nome">
                    Seu Nome Completo *
                  </label>
                  <input 
                    type="text" 
                    id="form-nome" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="Ex: João da Silva" 
                    required 
                  />
                </div>
                <div>
                  <label class="block font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1" for="form-email">
                    E-mail Corporativo *
                  </label>
                  <input 
                    type="email" 
                    id="form-email" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="joao@suaempresa.com.br" 
                    required 
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label class="block font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1" for="form-celular">
                    WhatsApp / Celular *
                  </label>
                  <input 
                    type="tel" 
                    id="form-celular" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="(67) 90000-0000" 
                    required 
                  />
                </div>
                <div>
                  <label class="block font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1" for="form-cidade">
                    Cidade / UF *
                  </label>
                  <input 
                    type="text" 
                    id="form-cidade" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="Nova Andradina - MS" 
                    required 
                  />
                </div>
                <div>
                  <label class="block font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1" for="form-cpf">
                    CPF / CNPJ (Opcional)
                  </label>
                  <input 
                    type="text" 
                    id="form-cpf" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="00.000.000/0001-00" 
                  />
                </div>
              </div>

              <!-- Challenges Textarea -->
              <div>
                <label class="block font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1" for="form-desafios">
                  Qual o Principal Desafio que Você Quer Superar? (Opcional)
                </label>
                <textarea 
                  id="form-desafios" 
                  class="w-full p-3.5 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none" 
                  placeholder="Ex: Quero um site moderno que gere orçamentos no WhatsApp, treinar meu time de vendas e organizar o fluxo de caixa..." 
                  rows="2"
                ></textarea>
              </div>

              <!-- Submit Button & Guarantee -->
              <div class="pt-2 flex flex-col gap-3">
                <button 
                  type="submit" 
                  class="w-full py-4 rounded-xl bg-primary-container text-on-primary font-sans text-base font-bold hover:bg-primary transition-all shadow-featured flex items-center justify-center gap-2 group hover:scale-[1.01]"
                >
                  <span>Solicitar Diagnóstico Estratégico Imediato</span>
                  <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <p class="text-xs text-center text-on-surface-variant">
                  ✅ Retorno prioritário em até 15 minutos em horário comercial via WhatsApp.
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initDiagnosticFormEvents(): void {
  // Apply Phone and CPF/CNPJ automatic masks
  applyInputMasks();

  document.querySelectorAll('.solution-pill-btn').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const btn = e.currentTarget as HTMLElement;
      btn.classList.toggle('bg-primary-container');
      btn.classList.toggle('text-on-primary');
      btn.classList.toggle('bg-surface-container');
      btn.classList.toggle('text-on-surface');
      btn.classList.toggle('border-primary');
    });
  });

  const form = document.getElementById('diagnostic-form-element') as HTMLFormElement | null;
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = (document.getElementById('form-nome') as HTMLInputElement)?.value || '';
    const emailInput = (document.getElementById('form-email') as HTMLInputElement)?.value || '';
    const phoneInput = (document.getElementById('form-celular') as HTMLInputElement)?.value || '';
    const cityInput = (document.getElementById('form-cidade') as HTMLInputElement)?.value || '';
    const challengesInput = (document.getElementById('form-desafios') as HTMLTextAreaElement)?.value || '';

    const selectedPills: string[] = [];
    document.querySelectorAll('.solution-pill-btn.bg-primary-container').forEach(p => {
      const text = p.querySelector('span')?.textContent?.trim() || '';
      if (text) selectedPills.push(text);
    });

    const solutionsText = selectedPills.length > 0 ? selectedPills.join(', ') : 'Ecossistema Geral';

    Toast.show('Solicitação enviada com sucesso! Abrindo seu atendimento prioritário no WhatsApp...', 'success', 5000);

    const formattedMsg = encodeURIComponent(
      `Olá! Meu nome é ${nameInput} (${cityInput}).\n` +
      `Gostaria do Diagnóstico Estratégico Gratuito da Aidê para: ${solutionsText}.\n` +
      (challengesInput ? `Principal objetivo: ${challengesInput}\n` : '') +
      `E-mail: ${emailInput} | WhatsApp: ${phoneInput}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/5567996763435?text=${formattedMsg}`, '_blank');
    }, 600);

    form.reset();
    document.querySelectorAll('.solution-pill-btn.bg-primary-container').forEach(p => {
      p.classList.remove('bg-primary-container', 'text-on-primary', 'border-primary');
      p.classList.add('bg-surface-container', 'text-on-surface');
    });
  });
}
