import { Toast } from './Toast';
import { applyInputMasks } from '../utils/masks';

export function renderCaptureLandingPage(): string {
  return `
    <div class="min-h-screen bg-surface flex flex-col justify-between selection:bg-primary selection:text-white" id="landing-page-funnel">
      
      <!-- Distraction-Free High-Converting Top Header -->
      <header class="w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 py-4 px-4 sm:px-6 lg:px-12 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Aidê Soluções" 
              class="h-9 sm:h-11 w-auto object-contain"
            />
          </div>

          <div class="flex items-center gap-2 sm:gap-4">
            <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/80 text-on-secondary-container text-xs font-bold">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              <span>Consultores Online Agora</span>
            </div>
            
            <a 
              href="https://wa.me/5567996763435?text=Olá!%20Vim%20pela%20página%20especial%20e%20gostaria%20de%20garantir%20meu%20Diagnóstico%20Estratégico%20VIP." 
              target="_blank" 
              rel="noopener"
              class="px-4 sm:px-5 py-2 rounded-xl bg-primary text-on-primary font-sans text-xs sm:text-sm font-bold hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
            >
              <span class="material-symbols-outlined text-[18px]">bolt</span>
              <span>Acesso Rápido WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <!-- Urgency Strip -->
      <div class="bg-gradient-to-r from-primary to-primary-container text-on-primary py-2 px-4 text-center text-xs sm:text-sm font-bold tracking-wide shadow-inner">
        <div class="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[18px] animate-pulse">timer</span>
          <span>⚡ ATENÇÃO: Sessões Diagnósticas Gratuitas limitadas a <strong>5 empresas por semana</strong>.</span>
        </div>
      </div>

      <!-- Main Funnel Hero Section -->
      <main class="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        <!-- Hero Text & Hook -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container mb-4 shadow-sm border border-secondary/20">
            <span class="material-symbols-outlined text-[18px] text-primary">verified</span>
            <span class="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-secondary">
              Diagnóstico de Aceleração Empresarial &amp; Digital
            </span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface font-bold leading-tight tracking-tight mb-6">
            Descubra os Gargalos Ocultos que Estão <span class="text-primary italic underline decoration-secondary-container decoration-4">Travando Suas Vendas</span> e Receba um Plano Prático em 15 Minutos.
          </h1>

          <p class="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Sem teorias rasas. Uma avaliação personalizada feita por especialistas com mais de 10 anos de mercado para analisar sua presença digital, processos de vendas, atendimento e gestão de equipe.
          </p>
        </div>

        <!-- 2-Column High-Converting Grid: Left Value Stack, Right Step Capture Form -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <!-- Left Column: What You Get Stack & Social Proof -->
          <div class="lg:col-span-6 flex flex-col gap-6">
            
            <div class="bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col gap-5">
              <h2 class="font-serif text-xl sm:text-2xl text-primary font-bold">
                O que você vai receber nesta Sessão Estratégica:
              </h2>

              <ul class="space-y-4 font-body text-sm text-on-surface">
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[18px]">troubleshoot</span>
                  </div>
                  <div>
                    <strong class="font-sans text-on-surface font-bold block">Raio-X de Presença &amp; Atração Digital:</strong>
                    <span class="text-on-surface-variant">Identificação de falhas no site, mídias sociais e captação que estão fazendo você perder clientes para a concorrência.</span>
                  </div>
                </li>

                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[18px]">trending_up</span>
                  </div>
                  <div>
                    <strong class="font-sans text-on-surface font-bold block">Auditoria do Processo de Vendas &amp; Fechamento:</strong>
                    <span class="text-on-surface-variant">Como transformar orçamentos parados em contratos fechados com técnicas consultivas de alta conversão.</span>
                  </div>
                </li>

                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[18px]">groups</span>
                  </div>
                  <div>
                    <strong class="font-sans text-on-surface font-bold block">Alinhamento de Equipe &amp; DHO / Clínicas:</strong>
                    <span class="text-on-surface-variant">Orientações práticas para liderança, atendimento humanizado e eliminação de conflitos operacionais.</span>
                  </div>
                </li>

                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[18px]">map</span>
                  </div>
                  <div>
                    <strong class="font-sans text-on-surface font-bold block">Roteiro de Ação Sob Medida:</strong>
                    <span class="text-on-surface-variant">Passo a passo das prioridades para implementar imediatamente sem desperdício de tempo ou dinheiro.</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Founder Authority Card -->
            <div class="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-md flex items-center gap-4">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1ViwN98phUipWTjs1h33CxD6eRCHKfODDHlTwvjYXY9Tea4syMLMdVIXw-Q4YHEhBxuZSy0q8lyPyVPnXPXY-Oc9Kl_hemejNMv2qE85dm3KDh_cNAXl94FaBgTUbPhRvvDtJM7eai-oWbbGKALqCCaNuYTHNbycEuxbCPvJ6ydIjzSQd4hKb2K7fh-4I1qUKRaIKWjsCwbzJprvNUf2VRv-fuQ0DkNAgWDDD-HSHZyoeiD_UYePSrhLw" 
                alt="Magali Aidê" 
                class="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30 shrink-0"
              />
              <div>
                <p class="font-sans text-sm font-bold text-primary">Conduzido por Magali Aidê &amp; Equipe</p>
                <p class="font-body text-xs text-on-surface-variant mt-0.5">
                  Administradora, Especialista em DHO, Gestão e Marketing Estratégico com mais de 10 anos transformando negócios no MS e em todo o Brasil.
                </p>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Capture Funnel Form -->
          <div class="lg:col-span-6">
            <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-primary/20 relative overflow-hidden">
              
              <div class="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-6">
                <div>
                  <h3 class="font-serif text-xl sm:text-2xl font-bold text-on-surface">Preencha e Garanta Sua Vaga</h3>
                  <p class="font-body text-xs text-on-surface-variant">Leva menos de 1 minuto e é 100% gratuito.</p>
                </div>
                <div class="w-10 h-10 rounded-2xl bg-secondary-container text-primary flex items-center justify-center">
                  <span class="material-symbols-outlined text-[24px]">lock_open</span>
                </div>
              </div>

              <form id="capture-funnel-form" class="space-y-4">
                
                <!-- Challenge Selector -->
                <div>
                  <label class="block font-sans text-xs font-bold text-on-surface mb-2">
                    1. Qual é o principal objetivo do seu negócio agora? *
                  </label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="capture-challenge-options">
                    <button type="button" class="capture-choice-btn p-3 rounded-xl border border-outline-variant/30 text-left font-sans text-xs font-semibold bg-surface-container-low hover:border-primary transition-all flex items-center gap-2" data-choice="Atrair mais clientes & Vender mais">
                      <span class="material-symbols-outlined text-[18px] text-primary">campaign</span>
                      <span>Mais Vendas &amp; Marketing</span>
                    </button>
                    <button type="button" class="capture-choice-btn p-3 rounded-xl border border-outline-variant/30 text-left font-sans text-xs font-semibold bg-surface-container-low hover:border-primary transition-all flex items-center gap-2" data-choice="Criar ou modernizar Site / E-commerce">
                      <span class="material-symbols-outlined text-[18px] text-primary">devices</span>
                      <span>Criar Site / Loja Virtual</span>
                    </button>
                    <button type="button" class="capture-choice-btn p-3 rounded-xl border border-outline-variant/30 text-left font-sans text-xs font-semibold bg-surface-container-low hover:border-primary transition-all flex items-center gap-2" data-choice="Treinar equipe e alinhar liderança (DHO)">
                      <span class="material-symbols-outlined text-[18px] text-primary">groups</span>
                      <span>Treinar Equipe &amp; Líderes</span>
                    </button>
                    <button type="button" class="capture-choice-btn p-3 rounded-xl border border-outline-variant/30 text-left font-sans text-xs font-semibold bg-surface-container-low hover:border-primary transition-all flex items-center gap-2" data-choice="Gestão para Clínicas, Farmácias e Saúde">
                      <span class="material-symbols-outlined text-[18px] text-primary">medical_services</span>
                      <span>Clínicas &amp; Área da Saúde</span>
                    </button>
                  </div>
                  <input type="hidden" id="capture-selected-goal" name="selectedGoal" value="Atrair mais clientes & Vender mais" />
                </div>

                <!-- Personal Info Inputs -->
                <div class="space-y-3 pt-2">
                  <div>
                    <label for="capture-name" class="block font-sans text-xs font-bold text-on-surface mb-1">Seu Nome Completo *</label>
                    <input 
                      type="text" 
                      id="capture-name" 
                      required 
                      placeholder="Ex: João da Silva"
                      class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface text-on-surface font-body text-sm transition-all"
                    />
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label for="capture-phone" class="block font-sans text-xs font-bold text-on-surface mb-1">WhatsApp com DDD *</label>
                      <input 
                        type="tel" 
                        id="capture-phone" 
                        required 
                        placeholder="(67) 99999-9999"
                        class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface text-on-surface font-body text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label for="capture-company" class="block font-sans text-xs font-bold text-on-surface mb-1">Nome da Empresa / Negócio *</label>
                      <input 
                        type="text" 
                        id="capture-company" 
                        required 
                        placeholder="Ex: Minha Empresa"
                        class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface text-on-surface font-body text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="capture-city" class="block font-sans text-xs font-bold text-on-surface mb-1">Cidade / Estado</label>
                    <input 
                      type="text" 
                      id="capture-city" 
                      placeholder="Ex: Nova Andradina - MS"
                      class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface text-on-surface font-body text-sm transition-all"
                    />
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="pt-3">
                  <button 
                    type="submit" 
                    id="capture-submit-btn"
                    class="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-base font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group hover:scale-[1.02]"
                  >
                    <span>QUERO MEU DIAGNÓSTICO GRATUITO</span>
                    <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <p class="font-body text-[11px] text-center text-on-surface-variant mt-2 flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[14px] text-green-600">lock</span>
                    <span>Seus dados estão 100% seguros e confidenciais.</span>
                  </p>
                </div>
              </form>

            </div>
          </div>

        </div>

        <!-- 3 Quick Guarantee Badges -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-center">
          <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-center gap-3">
            <span class="material-symbols-outlined text-primary text-[24px]">verified</span>
            <span class="font-sans text-xs sm:text-sm font-bold text-on-surface">100% Gratuito e Sem Compromisso</span>
          </div>
          <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-center gap-3">
            <span class="material-symbols-outlined text-primary text-[24px]">schedule</span>
            <span class="font-sans text-xs sm:text-sm font-bold text-on-surface">Retorno Comercial em até 15 Minutos</span>
          </div>
          <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-center gap-3">
            <span class="material-symbols-outlined text-primary text-[24px]">workspace_premium</span>
            <span class="font-sans text-xs sm:text-sm font-bold text-on-surface">+10 Anos de Autoridade Comprovada</span>
          </div>
        </div>

      </main>

      <!-- Minimalist Clean Footer -->
      <footer class="w-full bg-surface-container-lowest border-t border-outline-variant/20 py-6 px-4 text-center text-xs text-on-surface-variant">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Aidê Soluções Empresariais e Rurais. Todos os direitos reservados.</p>
          <p>Nova Andradina - MS • WhatsApp: (67) 99676-3435</p>
        </div>
      </footer>

    </div>
  `;
}

export function initCaptureLandingPageEvents(): void {
  // Apply phone mask
  applyInputMasks();

  const choiceButtons = document.querySelectorAll<HTMLElement>('.capture-choice-btn');
  const goalInput = document.getElementById('capture-selected-goal') as HTMLInputElement;

  choiceButtons.forEach((btn, idx) => {
    if (idx === 0) {
      btn.classList.add('border-primary', 'bg-primary-container/15', 'text-primary');
    }

    btn.addEventListener('click', () => {
      choiceButtons.forEach(b => {
        b.classList.remove('border-primary', 'bg-primary-container/15', 'text-primary');
        b.classList.add('bg-surface-container-low');
      });

      btn.classList.add('border-primary', 'bg-primary-container/15', 'text-primary');
      btn.classList.remove('bg-surface-container-low');

      if (goalInput) {
        goalInput.value = btn.getAttribute('data-choice') || '';
      }
    });
  });

  // Handle Form Submission
  const form = document.getElementById('capture-funnel-form') as HTMLFormElement;
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('capture-name') as HTMLInputElement)?.value.trim();
    const phone = (document.getElementById('capture-phone') as HTMLInputElement)?.value.trim();
    const company = (document.getElementById('capture-company') as HTMLInputElement)?.value.trim();
    const city = (document.getElementById('capture-city') as HTMLInputElement)?.value.trim();
    const goal = goalInput?.value || 'Atrair mais clientes & Vender mais';

    if (!name || !phone || !company) {
      Toast.show('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    Toast.show('Diagnóstico solicitado com sucesso! Encaminhando ao WhatsApp...', 'success');

    const whatsappMessage = `Olá, meu nome é *${name}* da empresa *${company}* (${city || 'MS'}).\n\n🎯 *Objetivo Principal:* ${goal}\n📞 *WhatsApp:* ${phone}\n\nAcabei de solicitar meu *Diagnóstico Empresarial Estratégico Gratuito* pela página VIP da Aidê Soluções!`;

    setTimeout(() => {
      window.open(`https://wa.me/5567996763435?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }, 800);
  });
}
