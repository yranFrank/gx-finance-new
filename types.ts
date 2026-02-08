import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  role?: string;
}

export interface LoanProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}