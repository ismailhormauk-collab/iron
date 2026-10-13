import Link from "next/link";
import { contact, defaultWhatsappMessage, legalNav, mainNav, siteConfig, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { TelegramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/70">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-violet-brand/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <Link href="/" aria-label="IRON TV MAX — Accueil" className="inline-block rounded-lg">
            <Logo className="h-20" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Formules d&apos;abonnement de 3 à 24 mois, guides de configuration et assistance par messagerie.
          </p>
        </div>

        <nav aria-label="Plan du site">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Navigation</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informations légales">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Informations</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Nous contacter</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 transition hover:text-white"
              >
                <span className="grid size-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 transition group-hover:bg-[#0d7a3f]">
                  <WhatsAppIcon className="size-4.5" />
                </span>
                <span>
                  <span className="block text-xs text-white/50">WhatsApp</span>
                  {contact.whatsapp.display}
                </span>
              </a>
            </li>
            <li>
              <a
                href={contact.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 transition hover:text-white"
              >
                <span className="grid size-9 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 transition group-hover:bg-[#1a6dab]">
                  <TelegramIcon className="size-4.5" />
                </span>
                <span>
                  <span className="block text-xs text-white/50">Telegram</span>
                  {contact.telegram.username}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>Prix affichés en euros (€).</p>
        </div>
      </div>
    </footer>
  );
}
