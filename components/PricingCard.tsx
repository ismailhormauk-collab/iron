import { formatMonthly, formatPrice, planFeatures, plans, planWhatsappLink, type Plan } from "@/lib/pricing";
import Link from "next/link";
import { CheckIcon, WhatsAppIcon } from "./icons";
import { buttonStyles } from "./ui";

export function PricingCard({ plan, headingLevel = "h3" }: { plan: Plan; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const featured = plan.highlighted;
  return (
    <article
      id={plan.id}
      aria-labelledby={`${plan.id}-title`}
      className={`relative flex scroll-mt-28 flex-col rounded-3xl p-[1.5px] transition duration-300 hover:-translate-y-1 ${
        featured ? "bg-brand-gradient shadow-[var(--shadow-card-hover)]" : "bg-line shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
      }`}
    >
      <div className="flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-white p-6 sm:p-7">
        <div className="flex min-h-7 items-center justify-between gap-3">
          <Heading id={`${plan.id}-title`} className="font-display text-lg font-semibold">
            {plan.label}
          </Heading>
          {plan.badge && (
            <span className="rounded-full bg-violet-tint px-3 py-1 text-xs font-semibold text-violet-brand">{plan.badge}</span>
          )}
        </div>

        <p className="mt-5 flex items-baseline gap-1.5">
          <span className="font-display text-5xl font-semibold tracking-tight text-ink">{formatPrice(plan.price)}</span>
        </p>
        <p className="mt-1.5 text-sm text-muted">
          Paiement unique pour {plan.label}, soit {formatMonthly(plan)}&nbsp;/ mois
        </p>

        <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6 text-sm">
          {planFeatures.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-electric-tint text-electric">
                <CheckIcon className="size-3.5" strokeWidth={2.4} />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href={planWhatsappLink(plan)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Choisir l'offre ${plan.label} à ${formatPrice(plan.price)} — commander sur WhatsApp (nouvel onglet)`}
          className={`${featured ? buttonStyles.primary : buttonStyles.secondary} mt-7 w-full`}
        >
          <WhatsAppIcon className="size-4.5" />
          Choisir cette offre
        </a>
        <Link
          href={`/contact?offre=${plan.id}`}
          className="mt-3 text-center text-xs font-medium text-muted underline-offset-4 transition hover:text-violet-brand hover:underline"
        >
          Préférer Telegram ou poser une question
        </Link>
      </div>
    </article>
  );
}

export function PricingGrid({ headingLevel }: { headingLevel?: "h2" | "h3" }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} headingLevel={headingLevel} />
      ))}
    </div>
  );
}
