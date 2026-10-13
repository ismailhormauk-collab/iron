import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { TelegramIcon, WhatsAppIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/seo";
import { contact, defaultWhatsappMessage, whatsappLink } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact et assistance",
  description:
    "Contactez l'assistance IRON TV MAX sur WhatsApp ou Telegram pour une question avant achat, une aide à la configuration ou un renouvellement.",
  path: "/contact",
});

const channels = [
  {
    name: "WhatsApp",
    value: contact.whatsapp.display,
    href: whatsappLink(defaultWhatsappMessage),
    text: "Le plus simple pour commander une formule ou poser une question rapide.",
    Icon: WhatsAppIcon,
    tone: "bg-[#0d7a3f]",
    cta: "Ouvrir la conversation",
  },
  {
    name: "Telegram",
    value: contact.telegram.username,
    href: contact.telegram.url,
    text: "Une alternative si vous préférez Telegram ou n'utilisez pas WhatsApp.",
    Icon: TelegramIcon,
    tone: "bg-[#1a6dab]",
    cta: "Ouvrir Telegram",
  },
];

const tips = [
  "La formule qui vous intéresse ou celle que vous possédez déjà",
  "Le modèle de votre appareil (Smart TV, box Android, Fire TV…)",
  "L'application utilisée et, en cas de problème, une capture du message d'erreur",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contactez-nous"
        description="Notre équipe répond sur WhatsApp et Telegram. Choisissez le canal qui vous convient le mieux."
        breadcrumb={{ name: "Contact", path: "/contact" }}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-8">
          <div className="space-y-5">
            {channels.map(({ name, value, href, text, Icon, tone, cta }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className={`grid size-14 shrink-0 place-items-center rounded-2xl text-white ${tone}`}>
                  <Icon className="size-7" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-muted">{name}</span>
                  <span className="block break-words font-display text-xl font-semibold text-ink">{value}</span>
                  <span className="mt-1.5 block text-sm leading-relaxed">{text}</span>
                  <span className="mt-3 inline-block text-sm font-semibold text-violet-brand group-hover:underline group-hover:underline-offset-4">
                    {cta} <span className="sr-only">(nouvel onglet)</span>→
                  </span>
                </span>
              </a>
            ))}

            <div className="rounded-2xl bg-paper-soft p-6">
              <h2 className="text-lg font-semibold">Pour une réponse plus rapide, précisez :</h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed">
                {tips.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-brand" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Suspense fallback={<div className="min-h-[40rem] rounded-3xl border border-line bg-white" aria-hidden="true" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
