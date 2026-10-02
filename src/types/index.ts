export interface SolutionArea {
  id: string;
  pillarNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  imageUrl?: string;
  category?: string;
  isFeatured?: boolean;
  deliverables: string[];
  ctaText: string;
  whatsappMessage: string;
  deliverableCards?: {
    icon: string;
    title: string;
    description: string;
  }[];
  metrics?: {
    value: string;
    label: string;
  }[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  companyName: string;
  segment: string;
  initials: string;
  quote: string;
  rating: number;
  featured?: boolean;
}

export interface DiagnosticFormData {
  fullName: string;
  email: string;
  cpfCnpj?: string;
  cityState: string;
  phone: string;
  selectedSolutions: string[];
  challenges: string;
}

export interface ContactChannel {
  id: string;
  number: string;
  title: string;
  value: string;
  description: string;
  icon: string;
  badge: string;
  actionText: string;
  actionHref: string;
  isExternal?: boolean;
  isCopyable?: boolean;
}

export interface NavRoute {
  path: string;
  label: string;
  isAnchor?: boolean;
}
