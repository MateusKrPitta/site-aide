export function renderFaqSection(): string {
  const faqs = [
    {
      q: 'Minha empresa é de pequeno ou médio porte / sou produtor rural. A consultoria é para mim?',
      a: 'Sim, com certeza! O método da Aidê foi desenhado especificamente para negócios que precisam de resultados práticos e não têm tempo nem dinheiro para desperdiçar com teorias complexas. Atendemos desde pequenos comércios e clínicas até indústrias, redes corporativas e produtores rurais.'
    },
    {
      q: 'Em quanto tempo podemos notar os primeiros resultados de vendas e organização?',
      a: 'Com a implementação do diagnóstico prévio e das páginas/ações imediatas, muitos clientes experimentam aumento de contatos comerciais qualificados nos primeiros 15 a 30 dias. Na área de finanças e DHO, a clareza e corte de desperdícios ocorrem logo nas primeiras semanas de acompanhamento.'
    },
    {
      q: 'Qual a diferença entre criar um site comum e um Site/Landing Page de Alta Conversão da Aidê?',
      a: 'Sites comuns funcionam apenas como cartões de visita estáticos que ninguém acessa. Nossas páginas de alta conversão são construídas como ferramentas ativas de venda: carregamento em menos de 1.2 segundos, design visual executivo de alta credibilidade, textos persuasivos (copywriting) e botões estrategicamente posicionados para levar o cliente direto para o seu WhatsApp e CRM.'
    },
    {
      q: 'O atendimento da Aidê é presencial ou online?',
      a: 'Trabalhamos no formato híbrido ideal: temos nossa Sede Executiva em Nova Andradina - MS para atendimento presencial e imersões corporativas, e atendemos empresas e propriedades rurais em todo o Brasil através de mentorias e consultoria digital ao vivo.'
    },
    {
      q: 'O que acontece após eu preencher o formulário de diagnóstico gratuito?',
      a: 'Nossa equipe analisa os dados do seu segmento e desafios. Em até 2 dias úteis (ou menos de 15 minutos via WhatsApp em horário comercial), entraremos em contato com um parecer preliminar e o agendamento da sua Sessão de Imersão sem nenhum compromisso financeiro.'
    },
    {
      q: 'Meus dados e informações financeiras estão protegidos?',
      a: 'Totalmente. Trabalhamos com cláusulas rigorosas de sigilo comercial e estrita conformidade com a LGPD (Lei Geral de Proteção de Dados). Suas informações financeiras e cadastrais nunca são compartilhadas com terceiros.'
    }
  ];

  return `
    <section class="py-16 lg:py-24 bg-surface-container-lowest relative" id="faq">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <!-- Section Header -->
        <div class="text-center mb-12 lg:mb-16">
          <span class="inline-block px-3.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-sans text-xs font-bold uppercase tracking-widest mb-3">
            Dúvidas Frequentes
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl text-on-surface font-bold mb-3">
            Perguntas Comuns sobre Nossas Soluções
          </h2>
          <p class="font-body text-sm sm:text-base text-on-surface-variant">
            Tudo o que você precisa saber para tomar uma decisão segura e transparente para a sua empresa.
          </p>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-4" id="faq-accordion">
          ${faqs.map((f, i) => `
            <div class="faq-item rounded-2xl bg-surface-container-low border border-outline-variant/30 overflow-hidden transition-all duration-200">
              <button 
                type="button" 
                class="faq-question-btn w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sans text-base sm:text-lg font-bold text-on-surface hover:text-primary transition-colors"
                data-faq-index="${i}"
              >
                <span>${f.q}</span>
                <span class="faq-icon material-symbols-outlined text-primary text-[24px] shrink-0 transition-transform duration-300">
                  expand_more
                </span>
              </button>
              <div class="faq-answer hidden px-5 sm:px-6 pb-6 pt-1 font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/15">
                ${f.a}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Still have questions box -->
        <div class="mt-10 p-6 rounded-2xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border border-outline-variant/30">
          <div>
            <h4 class="font-sans text-base font-bold text-on-surface">Ainda tem alguma dúvida específica?</h4>
            <p class="font-body text-xs text-on-surface-variant">Fale diretamente com nossa consultoria agora mesmo.</p>
          </div>
          <a 
            href="https://wa.me/5567996763435?text=Olá,%20tenho%20uma%20dúvida%20sobre%20os%20serviços%20da%20Aidê!" 
            target="_blank" 
            rel="noopener" 
            class="px-5 py-2.5 rounded-xl bg-primary-container text-on-primary font-sans text-xs sm:text-sm font-bold hover:bg-primary transition-all flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span class="material-symbols-outlined text-[18px]">chat</span>
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  `;
}

export function initFaqEvents(): void {
  document.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const item = target.closest('.faq-item');
      const answer = item?.querySelector('.faq-answer');
      const icon = item?.querySelector('.faq-icon');

      const isHidden = answer?.classList.contains('hidden');

      // Close other open faqs
      document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(ic => (ic as HTMLElement).style.transform = 'rotate(0deg)');

      if (isHidden) {
        answer?.classList.remove('hidden');
        if (icon) (icon as HTMLElement).style.transform = 'rotate(180deg)';
      }
    });
  });
}
