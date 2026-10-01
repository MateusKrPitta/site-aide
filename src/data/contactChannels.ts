import { ContactChannel } from '../types';

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'whatsapp',
    number: 'Canal 01',
    title: 'WhatsApp Direto',
    value: '(67) 99676-3435',
    description: 'Atendimento ágil para agendamentos de diagnóstico, propostas comerciais e dúvidas imediatas.',
    icon: 'chat',
    badge: '< 15min resposta',
    actionText: 'Iniciar Conversa',
    actionHref: 'https://wa.me/5567996763435?text=Olá,%20gostaria%20de%20falar%20com%20a%20equipe%20da%20Aidê%20Soluções!',
    isExternal: true
  },
  {
    id: 'email',
    number: 'Canal 02',
    title: 'E-mail Corporativo',
    value: 'aide.contatoo@gmail.com',
    description: 'Envio de RFPs, parcerias institucionais, convites para palestras magnas e formalização de contratos.',
    icon: 'mark_email_read',
    badge: 'Oficial',
    actionText: 'Escrever E-mail',
    actionHref: 'mailto:aide.contatoo@gmail.com',
    isCopyable: true
  },
  {
    id: 'sede',
    number: 'Canal 03',
    title: 'Sede Executiva',
    value: 'Nova Andradina - MS',
    description: 'Rua São Vicente de Paula, 1076, Capilé, Nova Andradina - MS, CEP 79750-000.',
    icon: 'corporate_fare',
    badge: 'Presencial',
    actionText: 'Como Chegar via Maps',
    actionHref: 'https://www.google.com/maps/place/Aid%C3%AA+Marketing+Digital+Estrat%C3%A9gico/@-22.250882,-53.3413083,15z',
    isExternal: true
  },
  {
    id: 'horario',
    number: 'Canal 04',
    title: 'Disponibilidade',
    value: '08:00 às 19:00 (Seg a Sex)',
    description: 'Plantão estratégico ativo para clientes em consultoria contínua, convenções e eventos corporativos.',
    icon: 'schedule',
    badge: 'Horário de Brasília',
    actionText: 'Agendar Reunião',
    actionHref: '#diagnostico'
  }
];
