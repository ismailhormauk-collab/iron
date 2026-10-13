import { siteConfig, whatsappLink } from "./site";

/**
 * Single source of truth for subscription prices.
 * Change a price here and it updates everywhere (cards, Remises, structured data, WhatsApp messages).
 */

export type Plan = {
  /** URL-safe identifier, also used in ?offre= query strings */
  id: string;
  months: number;
  label: string;
  /** Price in whole euros, VAT handling as communicated by the seller */
  price: number;
  highlighted?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  { id: "3-mois", months: 3, label: "3 mois", price: 20 },
  { id: "6-mois", months: 6, label: "6 mois", price: 35 },
  { id: "12-mois", months: 12, label: "12 mois", price: 45, highlighted: true, badge: "Recommandé" },
  { id: "24-mois", months: 24, label: "24 mois", price: 65 },
];

/**
 * Features shared by every plan. These mirror what the service advertises;
 * review them before going live and remove anything you cannot confirm.
 */
export const planFeatures: string[] = [
  "Qualité jusqu'à 4K selon le contenu et votre connexion",
  "Identifiants M3U ou Xtream Codes",
  "Guide TV (EPG) disponible",
  "Compatible Smart TV, Android et autres appareils",
  "Mises à jour régulières",
  "Assistance par WhatsApp et Telegram",
];

const eur = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const eurCents = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatPrice(value: number): string {
  return eur.format(value);
}

/** Monthly equivalent, purely arithmetic (price ÷ months). */
export function formatMonthly(plan: Plan): string {
  return eurCents.format(Math.round((plan.price / plan.months) * 100) / 100);
}

export function getPlan(id: string | null | undefined): Plan | undefined {
  return plans.find((p) => p.id === id);
}

export function planMessage(plan: Plan): string {
  return `Bonjour, je souhaite souscrire à l'offre ${siteConfig.name} ${plan.label} (${formatPrice(plan.price)}). Pouvez-vous m'indiquer la marche à suivre ?`;
}

export function planWhatsappLink(plan: Plan): string {
  return whatsappLink(planMessage(plan));
}
