import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  isButton?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface UseCase {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

export enum UserInterest {
  Celebrity = 'Celebrity',
  Government = 'Government',
  Brand = 'Brand',
  NGO = 'NGO',
  Research = 'Research',
}