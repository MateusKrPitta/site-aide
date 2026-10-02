import { Toast } from './Toast';
import { applyInputMasks } from '../utils/masks';

export function renderCaptureLandingPage(): string {
  return `
    <div class="min-h-screen bg-surface flex flex-col justify-between selection:bg-primary selection:text-white" id="landing-page-funnel">
      
      <!-- Top High-Converting Header -->
      <header class="w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 py-3.5 px-4 sm:px-6 lg:px-12 sticky top-0 z-50">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Aidê Soluções" 
              class="h-9 sm:h-11 w-auto object-contain"
            />
          </div>

          <div class="flex items-center gap-2 sm:gap-4">
            <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/90 text-on-secondary-container text-xs font-bold shadow-2xs">
              <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
              <span>Plantão Estratégico Disponível</span>
            </div>
            
            <a 
              href="https://wa.me/5567996763435?text=Olá,%20Magali!%20Quero%20destravar%20as%20vendas%20e%20a%20equipe%20do%20meu%20negócio%20com%20o%20Diagnóstico%20Estratégico." 
              target="_blank" 
              rel="noopener"
              class="px-4 sm:px-5 py-2 rounded-xl bg-primary text-on-primary font-sans text-xs sm:text-sm font-bold hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
            >
              <span class="material-symbols-outlined text-[18px]">bolt</span>
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <!-- Urgency Strip - High Impact & Human Focus -->
      <div class="bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary py-2.5 px-4 text-center text-xs sm:text-sm font-bold tracking-wide shadow-inner">
        <div class="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[18px] text-secondary-container animate-pulse">local_fire_department</span>
          <span>⚡ ATENÇÃO: Sessões individuais e gratuitas limitadas a <strong>apenas 5 empresas nesta semana</strong>.</span>
        </div>
      </div>

      <!-- Main Funnel Hero Section -->
      <main class="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        <!-- Hero Hook & Strong Contrast -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container mb-5 shadow-sm border border-secondary/20">
            <span class="material-symbols-outlined text-[18px] text-primary">trending_up</span>
            <span class="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-secondary">
              Marketing Humanizado &amp; Aceleração Comercial
            </span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl text-on-surface font-bold leading-[1.15] tracking-tight mb-6">
            Você Não Precisa Mais Carregar o Peso da Sua Empresa Sozinho(a). Vamos <span class="text-primary italic underline decoration-secondary-container decoration-4">Destravar Suas Vendas</span> e Fortalecer Sua Equipe.
          </h1>

          <p class="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Pare de perder clientes para concorrentes amadores e de queimar dinheiro sem retorno. Em uma conversa individual, acolhedora e 100% prática, identificamos os furos no seu atendimento, na sua presença digital e na sua equipe para gerar resultados reais no seu caixa.
          </p>
        </div>

        <!-- 2-Column Grid: Left Attack + Empathy Stack, Right Step Capture Form -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <!-- Left Column: Value Stack with Direct Emotional Hook -->
          <div class="lg:col-span-6 flex flex-col gap-6">
            
            <div class="bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col gap-5">
              <div class="flex items-center justify-between border-b border-outline-variant/20 pb-3">
                <h2 class="font-serif text-xl sm:text-2xl text-primary font-bold">
                  O que você vai receber nesta Sessão:
                </h2>
                <span class="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-bold uppercase">100% Gratuito</span>
              </div>

              <ul class="space-y-4 font-body text-sm text-on-surface">
                <li class="flex items-start gap-3.5 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 shadow-2xs hover:border-primary/40 transition-colors">
                  <div class="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[22px]">target</span>
                  </div>
                  <div>
                    <strong class="font-sans text-on-surface font-bold block text-sm sm:text-base">Resgate Imediato de Vendas &amp; Orçamentos:</strong>
                    <span class="text-on-surface-variant text-xs sm:text-sm mt-0.5 block leading-relaxed">
                      Descubra por que clientes somem no WhatsApp após pedir orçamento e aplique técnicas humanizadas de fechamento para transformar contatos frios em contratos assinados.
                    </span>
                  </div>
                </li>

                <li class="flex items-start gap-3.5 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 shadow-2xs hover:border-primary/40 transition-colors">
                  <div class="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[22px]">campaign</span>
                  </div>
                  <div>
                    <strong class="font-sans text-on-surface font-bold block text-sm sm:text-base">Marketing Digital que Vende de Verdade (Sem Ilusão):</strong>
                    <span class="text-on-surface-variant text-xs sm:text-sm mt-0.5 block leading-relaxed">
                      Chega de postagens sem engajamento e dinheiro jogado fora em anúncios errados. Estruture sua marca, seu site e suas mídias para atrair quem realmente tem poder de compra.
                    </span>
                  </div>
                </li>

                <li class="flex items-start gap-3.5 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 shadow-2xs hover:border-primary/40 transition-colors">
                  <div class="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[22px]">groups</span>
                  </div>
                  <div>
                    <strong class="font-sans text-on-surface font-bold block text-sm sm:text-base">Equipe Motivada que Entrega e Atendimento Humanizado:</strong>
                    <span class="text-on-surface-variant text-xs sm:text-sm mt-0.5 block leading-relaxed">
                      Elimine o estresse de ter que vigiar funcionários o tempo todo. Desenvolva líderes confiáveis, melhore a comunicação e crie uma cultura de acolhimento (inclusive para clínicas, consultórios e hospitais).
                    </span>
                  </div>
                </li>

                <li class="flex items-start gap-3.5 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20 shadow-2xs hover:border-primary/40 transition-colors">
                  <div class="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span class="material-symbols-outlined text-[22px]">map</span>
                  </div>
                  <div>
                    <strong class="font-sans text-on-surface font-bold block text-sm sm:text-base">Plano de Ação Cirúrgico para o Seu Caixa:</strong>
                    <span class="text-on-surface-variant text-xs sm:text-sm mt-0.5 block leading-relaxed">
                      Você sai da conversa com um roteiro claro das prioridades para executar já nesta semana, sem gastar fortunas e com foco em retorno sobre investimento.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Founder Warmth & Authority Card -->
            <div class="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-md flex items-center gap-4">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1ViwN98phUipWTjs1h33CxD6eRCHKfODDHlTwvjYXY9Tea4syMLMdVIXw-Q4YHEhBxuZSy0q8lyPyVPnXPXY-Oc9Kl_hemejNMv2qE85dm3KDh_cNAXl94FaBgTUbPhRvvDtJM7eai-oWbbGKALqCCaNuYTHNbycEuxbCPvJ6ydIjzSQd4hKb2K7fh-4I1qUKRaIKWjsCwbzJprvNUf2VRv-fuQ0DkNAgWDDD-HSHZyoeiD_UYePSrhLw" 
                alt="Magali Aidê" 
                class="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30 shrink-0"
              />
              <div>
                <p class="font-serif text-sm font-bold text-primary italic">
                  "Empresas fortes cuidam de gente e não têm medo de vender com autoridade e propósito. Vamos colocar o seu negócio no lugar de destaque que ele merece."
                </p>
                <p class="font-sans text-xs font-bold text-on-surface mt-1">
                  Magali Aidê Sehn Abrão • <span class="font-normal text-on-surface-variant">Fundadora &amp; Mentora Executiva</span>
                </p>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Conversion Funnel Form -->
          <div class="lg:col-span-6">
            <div class="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-primary/30 relative overflow-hidden">
              
              <div class="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-6">
                <div>
                  <h3 class="font-serif text-xl sm:text-2xl font-bold text-on-surface">Agende Sua Sessão Agora</h3>
                  <p class="font-body text-xs text-on-surface-variant">Preencha abaixo para garantirmos seu atendimento prioritário.</p>
                </div>
                <div class="w-10 h-10 rounded-2xl bg-secondary-container text-primary flex items-center justify-center">
                  <span class="material-symbols-outlined text-[24px]">rocket_launch</span>
                </div>
              </div>

              <form id="capture-funnel-form" class="space-y-4">
                
                <!-- Challenge Selector -->
                <div>
                  <label class="block font-sans text-xs font-bold text-on-surface mb-2">
                    1. Qual o maior gargalo que você quer destravar hoje? *
                  </label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="capture-challenge-options">
                    <button type="button" class="capture-choice-btn p-3 rounded-xl border border-outline-variant/30 text-left font-sans text-xs font-semibold bg-surface-container-low hover:border-primary transition-all flex items-center gap-2" data-choice="Atrair clientes qualificados e destravar vendas">
                      <span class="material-symbols-outlined text-[18px] text-primary">campaign</span>
                      <span>Mais Clientes &amp; Vendas</span>
                    </button>
                    <button type="button" class="capture-choice-btn p-3 rounded-xl border border-outline-variant/30 text-left font-sans text-xs font-semibold bg-surface-container-low hover:border-primary transition-all flex items-center gap-2" data-choice="Criar ou modernizar site institucional ou loja virtual">
                      <span class="material-symbols-outlined text-[18px] text-primary">devices</span>
                      <span>Site &amp; Loja Virtual</span>
                    </button>
                    <button type="button" class="capture-choice-btn p-3 rounded-xl border border-outline-variant/30 text-left font-sans text-xs font-semibold bg-surface-container-low hover:border-primary transition-all flex items-center gap-2" data-choice="Alinhar equipe, liderança e processos internos">
                      <span class="material-symbols-outlined text-[18px] text-primary">groups</span>
                      <span>Equipe &amp; Liderança (DHO)</span>
                    </button>
                    <button type="button" class="capture-choice-btn p-3 rounded-xl border border-outline-variant/30 text-left font-sans text-xs font-semibold bg-surface-container-low hover:border-primary transition-all flex items-center gap-2" data-choice="Atendimento humanizado e gestão para clínicas e saúde">
                      <span class="material-symbols-outlined text-[18px] text-primary">medical_services</span>
                      <span>Clínicas &amp; Área da Saúde</span>
                    </button>
                  </div>
                  <input type="hidden" id="capture-selected-goal" name="selectedGoal" value="Atrair clientes qualificados e destravar vendas" />
                </div>

                <!-- Personal Info Inputs -->
                <div class="space-y-3 pt-2">
                  <div>
                    <label for="capture-name" class="block font-sans text-xs font-bold text-on-surface mb-1">Como você prefere ser chamado(a)? *</label>
                    <input 
                      type="text" 
                      id="capture-name" 
                      required 
                      placeholder="Ex: Seu Nome Completo"
                      class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface text-on-surface font-body text-sm transition-all"
                    />
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label for="capture-phone" class="block font-sans text-xs font-bold text-on-surface mb-1">Seu WhatsApp para contato *</label>
                      <input 
                        type="tel" 
                        id="capture-phone" 
                        required 
                        placeholder="(67) 99999-9999"
                        class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface text-on-surface font-body text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label for="capture-company" class="block font-sans text-xs font-bold text-on-surface mb-1">Nome da Sua Empresa / Negócio *</label>
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
                    <label for="capture-city" class="block font-sans text-xs font-bold text-on-surface mb-1">Qual é a sua Cidade / Estado?</label>
                    <input 
                      type="text" 
                      id="capture-city" 
                      placeholder="Ex: Nova Andradina - MS"
                      class="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 focus:border-primary focus:bg-surface text-on-surface font-body text-sm transition-all"
                    />
                  </div>
                </div>

                <!-- Submit Button with Direct Response Hook -->
                <div class="pt-3">
                  <button 
                    type="submit" 
                    id="capture-submit-btn"
                    class="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary font-sans text-base font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group hover:scale-[1.02]"
                  >
                    <span>QUERO MINHA SESSÃO ESTRATÉGICA &amp; DESTRAVAR MEU NEGÓCIO</span>
                    <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">bolt</span>
                  </button>
                  <p class="font-body text-[11px] text-center text-on-surface-variant mt-2 flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[14px] text-green-600">verified_user</span>
                    <span>100% gratuito, confidencial e com retorno direto via WhatsApp.</span>
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
            <span class="material-symbols-outlined text-primary text-[24px]">timer</span>
            <span class="font-sans text-xs sm:text-sm font-bold text-on-surface">Retorno Comercial em até 15 Minutos</span>
          </div>
          <div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-center gap-3">
            <span class="material-symbols-outlined text-primary text-[24px]">workspace_premium</span>
            <span class="font-sans text-xs sm:text-sm font-bold text-on-surface">+10 Anos Gerando Resultados Reais</span>
          </div>
        </div>

      </main>

      <!-- Minimalist Clean Footer -->
      <footer class="w-full bg-surface-container-lowest border-t border-outline-variant/20 py-6 px-4 text-center text-xs text-on-surface-variant">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Aidê Soluções Empresariais e Rurais • Desenvolvimento Humano &amp; Organizacional.</p>
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
    const goal = goalInput?.value || 'Atrair clientes qualificados e destravar vendas';

    if (!name || !phone || !company) {
      Toast.show('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    Toast.show('Solicitação enviada! Abrindo WhatsApp comercial da Aidê...', 'success');

    const whatsappMessage = `Olá, Magali! Meu nome é *${name}* da empresa *${company}* (${city || 'MS'}).\n\n🎯 *Meu principal gargalo hoje é:* ${goal}\n📞 *Meu WhatsApp:* ${phone}\n\nAcabei de solicitar minha *Sessão Estratégica Gratuita* e quero destravar os resultados do meu negócio!`;

    setTimeout(() => {
      window.open(`https://wa.me/5567996763435?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }, 800);
  });
}
