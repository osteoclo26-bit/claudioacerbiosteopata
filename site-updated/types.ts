import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}