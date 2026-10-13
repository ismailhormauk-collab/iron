import { ContactCta } from "@/components/ContactCta";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRightIcon, CalendarIcon, TagIcon } from "@/components/icons";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { formatMonthly, formatPrice, plans } from "@/lib/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Remises et offres longue durée",
  description:
    "Comparez le coût mensuel des abonnements IRON TV MAX de 3 à 24 mois et découvrez comment être informé des offres promotionnelles en cours.",
  path: "/remises",
});

export default function RemisesPage() {
  return (
    <>
      <PageHeader
        title="Remises et offres"
        description="La meilleure façon de payer moins chaque mois : choisir une durée plus longue. Voici le coût mensuel réel de chaque formule."
        breadcrumb={{ name: "Remises", path: "/remises" }}
      />

      <section className="py-16 sm:py-24" aria-labelledby="comparatif">
        <Container>
          <SectionHeading
            id="comparatif"
            eyebrow="Comparatif"
            title="Le coût mensuel de chaque formule"
            description="Calcul simple : prix de la formule divisé par le nombre de mois."
          />
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
            <table className="w-full text-left text-sm sm:text-base">
              <caption className="sr-only">Prix total et équivalent mensuel par formule</caption>
              <thead className="bg-paper-soft text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-4 py-4 font-semibold sm:px-6">Formule</th>
                  <th scope="col" className="px-4 py-4 text-right font-semibold sm:px-6">Prix total</th>
                  <th scope="col" className="px-4 py-4 text-right font-semibold sm:px-6">Par mois</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {plans.map((p) => (
                  <tr key={p.id} className={p.highlighted ? "bg-violet-tint/50" : undefined}>
                    <th scope="row" className="px-4 py-4 font-semibold text-ink sm:px-6">
                      {p.label}
                      {p.badge && (
                        <span className="ml-2 rounded-full bg-violet-tint px-2 py-0.5 text-xs font-semibold text-violet-brand">{p.badge}</span>
                      )}
                    </th>
                    <td className="px-4 py-4 text-right font-display font-semibold text-ink sm:px-6">{formatPrice(p.price)}</td>
                    <td className="px-4 py-4 text-right sm:px-6">{formatMonthly(p)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/tarifs">
              Choisir ma formule
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-paper-soft py-16 sm:py-24" aria-labelledby="promotions">
        <Container className="grid gap-5 md:grid-cols-2">
          <h2 id="promotions" className="sr-only">Offres promotionnelles</h2>
          <article className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
            <span className="grid size-12 place-items-center rounded-xl bg-violet-tint text-violet-brand">
              <TagIcon className="size-6" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Offres ponctuelles</h3>
            <p className="mt-2 leading-relaxed">
              Lorsqu&apos;une offre promotionnelle est disponible, elle est communiquée directement par le support. Demandez-nous
              s&apos;il existe une offre en cours avant de commander.
            </p>
          </article>
          <article className="rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
            <span className="grid size-12 place-items-center rounded-xl bg-electric-tint text-electric">
              <CalendarIcon className="size-6" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Renouvellement</h3>
            <p className="mt-2 leading-relaxed">
              Vous êtes déjà abonné ? Contactez le support avant la fin de votre période pour prolonger votre abonnement avec la
              formule de votre choix.
            </p>
          </article>
        </Container>
      </section>

      <ContactCta title="Une offre est-elle disponible en ce moment ?" description="Posez-nous la question sur WhatsApp ou Telegram : nous vous indiquerons les conditions en vigueur." />
    </>
  );
}
