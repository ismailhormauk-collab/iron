/**
 * Central site configuration: identity, contact channels and navigation.
 * Every page and component reads from here so details stay consistent.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "IRON TV MAX",
  shortName: "IRON TV MAX",
  /** Production origin, without trailing slash. Set NEXT_PUBLIC_SITE_URL in the deployment environment. */
  url: rawUrl.replace(/\/+$/, ""),
  locale: "fr_FR",
  language: "fr",
  description:
    "Découvrez les formules d'abonnement IRON TV MAX de 3 à 24 mois, les appareils compatibles, des guides de configuration et une assistance par WhatsApp et Telegram.",
} as const;

export const contact = {
  whatsapp: {
    /** E.164 without the plus sign, as expected by wa.me */
    number: "34613836698",
    display: "+34 613 83 66 98",
    url: "https://wa.me/34613836698",
  },
  telegram: {
    username: "@pulseiptv4k",
    url: "https://t.me/pulseiptv4k",
  },
} as const;

/** Builds a wa.me link with a prefilled message. */
export function whatsappLink(message?: string): string {
  if (!message) return contact.whatsapp.url;
  return `${contact.whatsapp.url}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Bonjour, j'aimerais avoir des informations sur les abonnements IRON TV MAX.";

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Remises", href: "/remises" },
  { label: "Tutoriels", href: "/tutoriels" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Conditions d'utilisation", href: "/conditions-utilisation" },
  { label: "Politique de remboursement", href: "/politique-remboursement" },
];
