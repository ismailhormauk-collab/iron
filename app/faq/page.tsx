import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ : questions fréquentes",
  description:
    "Formules, appareils compatibles, activation, configuration, renouvellement, paiement : les réponses aux questions fréquentes sur IRON TV MAX.",
  path: "/faq",
});

// FAQPage structured data is intentionally omitted: Google limits FAQ rich results
// to well-known, authoritative government and health websites.
export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Questions fréquentes"
        description="Tout ce qu'il faut savoir avant et après votre souscription. Vous ne trouvez pas la réponse ? Notre équipe vous répond directement."
        breadcrumb={{ name: "FAQ", path: "/faq" }}
      />
      <section className="py-16 sm:py-24" aria-label="Liste des questions">
        <Container className="max-w-3xl">
          <FaqAccordion items={faqs} headingLevel="h2" />
          <p className="mt-10 text-center text-sm text-muted">
            Consultez aussi nos{" "}
            <Link href="/tutoriels" className="font-semibold text-violet-brand underline-offset-4 hover:underline">
              tutoriels d&apos;installation
            </Link>{" "}
            et nos{" "}
            <Link href="/tarifs" className="font-semibold text-violet-brand underline-offset-4 hover:underline">
              tarifs
            </Link>
            .
          </p>
        </Container>
      </section>
      <ContactCta title="Vous n'avez pas trouvé votre réponse ?" />
    </>
  );
}
