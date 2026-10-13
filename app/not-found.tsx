import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-xl text-center">
        <p className="font-display text-7xl font-semibold text-brand-gradient [background-image:linear-gradient(100deg,#6a3cf0,#2459e8)]">404</p>
        <h1 className="mt-4 text-3xl font-semibold">Cette page est introuvable</h1>
        <p className="mt-3">Le lien est peut-être erroné ou la page a été déplacée.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
          <ButtonLink href="/tarifs" variant="secondary">
            Voir les tarifs <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
