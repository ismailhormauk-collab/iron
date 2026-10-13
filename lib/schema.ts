import { siteConfig, contact } from "./site";
import { plans } from "./pricing";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/iron-tv-max-logo.png`,
    sameAs: [contact.telegram.url],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${contact.whatsapp.number}`,
        availableLanguage: ["French"],
        url: contact.whatsapp.url,
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "fr-FR",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** Subscription offers, generated from the central pricing config. */
export function offersSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Abonnement ${siteConfig.name}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "FR",
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: `${siteConfig.name} — ${plan.label}`,
      price: plan.price.toFixed(2),
      priceCurrency: "EUR",
      url: `${siteConfig.url}/tarifs#${plan.id}`,
      availability: "https://schema.org/InStock",
    })),
  };
}
