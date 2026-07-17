export interface ServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  metrics: string;
  iconName: "Code" | "Cpu" | "Bot" | "Database" | "Shield" | "Globe";
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  ratingValue: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  impactMetric: string;
  impactLabel: string;
  description: string;
  outcomes: string[];
  visualType: "flow" | "graph" | "db";
}

export interface ShowcaseFeature {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface InquiryFormInput {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  projectBudget: string;
  message: string;
}
