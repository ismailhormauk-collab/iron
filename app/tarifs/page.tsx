import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PricingGrid } from "@/components/PricingCard";
import { InfoIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/ui";
import { formatPrice, plans } from "@/lib/pricing";
import { offersSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const priceList = plans.map((p) => `${p.label} à ${formatPrice(p.price)}`).join(", ");

export const metadata = pageMetadata({
  title: "Tarifs et abonnements",
  description: `Tarifs des abonnements IRON TV MAX : ${priceList}. Choisissez votre durée et commandez directement auprès du support.`,
  path: "/tarifs",
});

const steps = [
  { title: "Choisissez votre formule", text: "Cliquez sur « Choisir cette offre » : un message WhatsApp précisant la durée et le prix est préparé pour vous." },
  { title: "Échangez avec le support", text: "Indiquez votre appareil. Le support vous communique les modalités de paiement disponibles." },
  { title: "Recevez vos identifiants", text: "Vous recevez vos accès et les instructions de configuration adaptées à votre appareil." },
];

export default function TarifsPage() {
  return (
    <>
      <JsonLd data={offersSchema()} />
      <PageHeader
        title="Nos tarifs"
        description="Quatre formules, un seul service : choisissez la durée qui vous convient. Le prix affiché correspond à un paiement unique pour toute la période."
        breadcrumb={{ name: "Tarifs", path: "/tarifs" }}
      />

      <section className="py-16 sm:py-24" aria-label="Formules d'abonnement">
        <Container>
          <PricingGrid headingLevel="h2" />
          <div className="mx-auto mt-10 flex max-w-3xl gap-3 rounded-2xl border border-line bg-paper-soft p-5 text-sm leading-relaxed">
            <InfoIcon className="mt-0.5 size-5 shrink-0 text-electric" />
            <p>
              Aucun paiement n&apos;est effectué sur ce site. Le bouton « Choisir cette offre » ouvre une conversation WhatsApp
              avec la formule sélectionnée ; le support vous indique ensuite les moyens de paiement disponibles. Vous préférez
              Telegram ou avez une question ? Rendez-vous sur la{" "}
              <Link href="/contact" className="font-semibold text-violet-brand underline-offset-4 hover:underline">
                page contact
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper-soft py-16 sm:py-24" aria-labelledby="commander">
        <Container>
          <SectionHeading id="commander" eyebrow="Comment commander" title="Trois étapes pour démarrer" />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="grid size-10 place-items-center rounded-full bg-brand-gradient font-display font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center text-sm text-muted">
            Avant de commander, vérifiez la{" "}
            <Link href="/tutoriels" className="font-semibold text-violet-brand underline-offset-4 hover:underline">
              compatibilité de votre appareil
            </Link>{" "}
            ou consultez la{" "}
            <Link href="/politique-remboursement" className="font-semibold text-violet-brand underline-offset-4 hover:underline">
              politique de remboursement
            </Link>
            .
          </p>
        </Container>
      </section>

      <ContactCta title="Besoin d'aide pour choisir ?" />
    </>
  );
}
