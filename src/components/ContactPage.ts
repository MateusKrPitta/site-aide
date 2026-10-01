import { CONTACT_CHANNELS } from '../data/contactChannels';
import { Toast } from './Toast';
import { applyInputMasks } from '../utils/masks';

export function renderContactPage(): string {
  return `
    <div class="w-full pb-16">
      <!-- Top Subtle Ambient Light & Hero Header Section -->
      <section class="relative overflow-hidden bg-surface py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
        <!-- Ambient Blur Background Accents -->
        <div class="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-primary-fixed-dim/30 blur-3xl"></div>
        <div class="pointer-events-none absolute top-40 left-10 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl"></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 mb-6 text-xs sm:text-sm text-on-surface-variant font-sans">
            <a href="#inicio" class="hover:text-primary transition-colors flex items-center gap-1 font-semibold">
              <span class="material-symbols-outlined text-[16px]">home</span>
              <span>Início</span>
            </a>
            <span class="text-outline-variant font-bold">/</span>
            <span class="text-primary font-bold">Fale Conosco &amp; Atendimento</span>
          </nav>

          <!-- Header Content Block with Split Balance -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div class="lg:col-span-8 flex flex-col gap-4">
              <div class="inline-flex items-center gap-2 w-max px-3.5 py-1.5 rounded-full bg-secondary-container/80 text-primary font-sans text-xs font-bold uppercase tracking-wider">
                <span class="material-symbols-outlined text-[16px] text-primary">verified</span>
                <span>Canais Oficiais de Atendimento</span>
              </div>
              
              <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight font-bold">
                Fale com o Atendimento Comercial da <span class="text-primary italic font-normal">Aidê Soluções</span> e Solicite Sua Proposta
              </h1>
              
              <p class="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Seja para consultoria empresarial, qualificação de equipes, marketing digital ou palestras corporativas, estamos à disposição para entender o momento do seu negócio e desenhar soluções personalizadas.
              </p>
            </div>

            <div class="lg:col-span-4 flex flex-col gap-3">
              <div class="p-6 rounded-3xl bg-surface-container-low shadow-sm border border-outline-variant/30">
                <div class="flex items-center gap-3 mb-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span class="font-sans text-base font-bold text-primary">Cobertura Geográfica</span>
                </div>
                <p class="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Atendimento presencial em todo o estado do <strong>Mato Grosso do Sul</strong> e operação híbrida/digital para organizações e produtores em todo o <strong>território nacional</strong>.
                </p>
                <div class="mt-3 flex items-center gap-2 text-primary font-sans text-xs sm:text-sm font-bold">
                  <span class="material-symbols-outlined text-[18px]">travel_explore</span>
                  <span>Hub Central em Nova Andradina - MS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 Fast Executive Channels Grid -->
      <section class="w-full bg-surface-container-lowest py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span class="font-sans text-xs font-bold text-secondary uppercase tracking-widest">Acesso Imediato</span>
              <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold">Canais Prioritários de Contato</h2>
            </div>
            <p class="font-body text-xs sm:text-sm text-on-surface-variant max-w-md">
              Selecione a via mais conveniente para sua demanda institucional ou agendamento executivo.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${CONTACT_CHANNELS.map(c => `
              <div class="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-surface hover:bg-surface-container-low transition-all duration-300 shadow-sm hover:shadow-md border border-outline-variant/30 hover:border-primary-container/40">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <div class="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <span class="material-symbols-outlined text-[24px]">${c.icon}</span>
                    </div>
                    <span class="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-sans text-[10px] font-bold tracking-wide">
                      ${c.badge}
                    </span>
                  </div>
                  <div>
                    <span class="font-sans text-xs font-bold uppercase tracking-wider text-secondary">${c.number}</span>
                    <h3 class="font-sans text-lg font-bold text-on-surface mt-0.5">${c.title}</h3>
                    <p class="font-sans text-sm sm:text-base font-bold text-primary mt-1 truncate">${c.value}</p>
                  </div>
                  <p class="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    ${c.description}
                  </p>
                </div>

                <div class="pt-6 mt-4 flex items-center gap-2">
                  <a 
                    href="${c.actionHref}" 
                    ${c.isExternal ? 'target="_blank" rel="noopener"' : ''}
                    class="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary-container text-on-primary font-sans text-xs sm:text-sm font-bold hover:bg-primary transition-all shadow-sm"
                  >
                    <span>${c.actionText}</span>
                    <span class="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                  ${c.isCopyable ? `
                    <button 
                      class="h-11 w-11 flex items-center justify-center rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shrink-0" 
                      id="btnCopyEmail" 
                      title="Copiar E-mail" 
                      type="button"
                    >
                      <span class="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Main Dual Column Section: Form & Strategic Presence -->
      <section class="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-surface" id="solicitar-proposta">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <!-- Left Column: Form -->
          <div class="lg:col-span-7 flex flex-col gap-6 bg-surface-container-lowest p-6 sm:p-10 lg:p-12 rounded-3xl shadow-sm border border-outline-variant/30">
            <div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-primary font-sans text-xs font-bold uppercase tracking-wider mb-3">
                <span class="material-symbols-outlined text-[15px]">edit_note</span>
                <span>Atendimento Personalizado</span>
              </div>
              <h2 class="font-serif text-2xl sm:text-3xl text-on-surface font-bold">Solicitação de Proposta Comercial</h2>
              <p class="font-body text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Preencha os campos abaixo e nosso time executivo entrará em contato em até 2 dias úteis com um panorama preliminar.
              </p>
            </div>

            <form class="flex flex-col gap-5" id="contact-page-form">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1.5">
                  <label class="font-sans text-xs font-bold uppercase tracking-wider text-on-surface" for="contact-name">Nome Completo *</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="Seu nome" 
                    required 
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="font-sans text-xs font-bold uppercase tracking-wider text-on-surface" for="contact-email">E-mail Corporativo *</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="seu@empresa.com" 
                    required 
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1.5">
                  <label class="font-sans text-xs font-bold uppercase tracking-wider text-on-surface" for="contact-phone">WhatsApp / Telefone *</label>
                  <input 
                    type="tel" 
                    id="contact-phone" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="(67) 90000-0000" 
                    required 
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="font-sans text-xs font-bold uppercase tracking-wider text-on-surface" for="contact-city">Cidade / Estado *</label>
                  <input 
                    type="text" 
                    id="contact-city" 
                    class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all" 
                    placeholder="Nova Andradina - MS" 
                    required 
                  />
                </div>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="font-sans text-xs font-bold uppercase tracking-wider text-on-surface" for="contact-subject">Assunto Principal de Interesse</label>
                <select 
                  id="contact-subject" 
                  class="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                >
                  <option value="Marketing Digital & Branding">Marketing Digital &amp; Branding</option>
                  <option value="DHO & Gestão de Pessoas">DHO &amp; Gestão de Pessoas</option>
                  <option value="Vendas & Treinamento Comercial">Vendas &amp; Treinamento Comercial</option>
                  <option value="Finanças & Controladoria">Finanças &amp; Controladoria</option>
                  <option value="Desenvolvimento de Sites & E-commerce">Desenvolvimento de Sites &amp; E-commerce</option>
                  <option value="Tráfego Pago & Performance">Tráfego Pago &amp; Performance</option>
                  <option value="Contratação de Palestras">Contratação de Palestras Corporativas</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="font-sans text-xs font-bold uppercase tracking-wider text-on-surface" for="contact-message">Mensagem / Descrição da Necessidade</label>
                <textarea 
                  id="contact-message" 
                  rows="3" 
                  class="w-full p-4 rounded-xl bg-surface-container-low text-on-surface font-body text-sm border border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none" 
                  placeholder="Descreva brevemente seu segmento e principais gargalos ou objetivos..."
                ></textarea>
              </div>

              <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button 
                  type="submit" 
                  class="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-container text-on-primary font-sans text-sm sm:text-base font-bold hover:bg-primary transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Enviar Solicitação de Proposta</span>
                  <span class="material-symbols-outlined text-[18px]">send</span>
                </button>
                <span class="text-xs text-on-surface-variant text-center sm:text-right">
                  Retorno garantido em até 2 dias úteis
                </span>
              </div>
            </form>
          </div>

          <!-- Right Column: Strategic Presence & Work With Us -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <!-- Physical Location Box -->
            <div class="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col gap-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-sans text-xs font-bold uppercase tracking-wider w-fit">
                <span class="material-symbols-outlined text-[16px]">location_on</span>
                <span>Visita Presencial</span>
              </div>
              <h3 class="font-serif text-2xl font-bold text-on-surface">Sede em Nova Andradina - MS</h3>
              <p class="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Rua São Vicente de Paula, 1076, Capilé<br>
                Nova Andradina - MS, CEP: 79750-000<br>
                Localizada estrategicamente no centro agropecuário e corporativo da região.
              </p>
              <a 
                href="https://www.google.com/maps/place/Aid%C3%AA+Marketing+Digital+Estrat%C3%A9gico/@-22.250882,-53.3413083,15z" 
                target="_blank" 
                rel="noopener" 
                class="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-surface-container-high text-on-surface font-sans text-sm font-bold hover:bg-primary hover:text-on-primary transition-all border border-outline-variant/30"
              >
                <span class="material-symbols-outlined text-[18px]">navigation</span>
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>

            <!-- Work with us Box -->
            <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-surface-container-low to-surface-container border border-outline-variant/40 shadow-sm flex flex-col gap-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-sans text-xs font-bold uppercase tracking-wider w-fit">
                <span class="material-symbols-outlined text-[16px]">badge</span>
                <span>Expansão de Rede</span>
              </div>
              <h3 class="font-serif text-xl sm:text-2xl font-bold text-on-surface">Trabalhe Conosco: Consultores &amp; Palestrantes</h3>
              <p class="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Você que é consultor, instrutor corporativo ou palestrante: a Aidê aguarda seu cadastro para futuros trabalhos e parcerias em todo o Brasil.
              </p>
              <a 
                href="mailto:aide.contatoo@gmail.com?subject=Cadastro%20de%20Consultor%20/%20Palestrante%20Aidê" 
                class="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary text-on-secondary font-sans text-sm font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm"
              >
                <span class="material-symbols-outlined text-[18px]">badge</span>
                <span>Cadastrar Currículo</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initContactPageEvents(): void {
  // Apply Phone and CPF/CNPJ automatic masks
  applyInputMasks();

  const copyBtn = document.getElementById('btnCopyEmail');
  copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText('aide.contatoo@gmail.com');
    Toast.show('E-mail aide.contatoo@gmail.com copiado!', 'success');
  });

  const contactForm = document.getElementById('contact-page-form') as HTMLFormElement | null;
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('contact-name') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('contact-email') as HTMLInputElement)?.value || '';
    const phone = (document.getElementById('contact-phone') as HTMLInputElement)?.value || '';
    const city = (document.getElementById('contact-city') as HTMLInputElement)?.value || '';
    const subject = (document.getElementById('contact-subject') as HTMLSelectElement)?.value || '';
    const message = (document.getElementById('contact-message') as HTMLTextAreaElement)?.value || '';

    Toast.show(`Obrigado, ${name}! Sua solicitação foi enviada com sucesso.`, 'success', 5000);

    const waText = encodeURIComponent(
      `Olá, meu nome é ${name} (${city}).\n` +
      `Assunto: ${subject}\n` +
      (message ? `Mensagem: ${message}\n` : '') +
      `E-mail: ${email} | Telefone: ${phone}`
    );

    setTimeout(() => {
      const openWa = confirm('Deseja também abrir o WhatsApp com sua mensagem pronta?');
      if (openWa) {
        window.open(`https://wa.me/5567996763435?text=${waText}`, '_blank');
      }
    }, 800);

    contactForm.reset();
  });
}
