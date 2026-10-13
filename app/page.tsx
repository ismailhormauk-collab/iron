import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { DeviceGrid } from "@/components/DeviceGrid";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { PricingGrid } from "@/components/PricingCard";
import { ArrowRightIcon, DevicesIcon, HeadsetIcon, KeyIcon, LayoutIcon } from "@/components/icons";
import { Container, SectionHeading, buttonStyles } from "@/components/ui";
import { featuredFaqs } from "@/lib/faqs";
import { offersSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${siteConfig.name} — Abonnements de 3 à 24 mois, tarifs et assistance`,
  description:
    "IRON TV MAX : comparez les formules 3, 6, 12 et 24 mois, vérifiez la compatibilité de vos appareils et contactez l'assistance sur WhatsApp ou Telegram.",
  path: "/",
  absoluteTitle: true,
});

const benefits = [
  {
    icon: <LayoutIcon className="size-6" />,
    title: "Interface simple et intuitive",
    text: "Une navigation claire dans les applications de lecture compatibles, avec guide TV (EPG) pour retrouver facilement vos programmes.",
  },
  {
    icon: <HeadsetIcon className="size-6" />,
    title: "Assistance client",
    text: "Une équipe joignable sur WhatsApp et Telegram pour répondre à vos questions avant et après la souscription.",
  },
  {
    icon: <DevicesIcon className="size-6" />,
    title: "Compatibilité des appareils",
    text: "Smart TV Samsung et LG, Android, Fire TV Stick, ordinateur : vérifiez votre appareil avec le support avant l'achat.",
  },
  {
    icon: <KeyIcon className="size-6" />,
    title: "Activation et configuration",
    text: "Identifiants M3U ou Xtream Codes transmis selon les modalités indiquées par le support, avec des guides pour chaque étape.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={offersSchema()} />
      <Hero />

      <section className="py-20 sm:py-28" aria-labelledby="atouts">
        <Container>
          <SectionHeading
            id="atouts"
            eyebrow="Pourquoi IRON TV MAX"
            title="Un service pensé pour être simple à utiliser"
            description="Choisissez votre formule, installez une application compatible et laissez-vous guider : chaque étape est accompagnée."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <FeatureCard key={b.title} icon={b.icon} title={b.title}>
                {b.text}
              </FeatureCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-soft py-20 sm:py-28" aria-labelledby="tarifs">
        <Container>
          <SectionHeading
            id="tarifs"
            eyebrow="Nos tarifs"
            title="Souscrire ou prolonger votre abonnement"
            description="Quatre durées, le même service. Plus la durée est longue, plus le coût mensuel diminue."
          />
          <div className="mt-14">
            <PricingGrid />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Le paiement s&apos;effectue selon les modalités communiquées par le support.{" "}
            <Link href="/tarifs" className="font-semibold text-violet-brand underline-offset-4 hover:underline">
              Détails des formules
            </Link>
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="appareils">
        <Container>
          <SectionHeading
            id="appareils"
            eyebrow="Compatibilité"
            title="Compatible avec vos appareils du quotidien"
            description="Le service fonctionne avec une application de lecture compatible M3U ou Xtream Codes. La compatibilité dépend du modèle : en cas de doute, demandez-nous avant l'achat."
          />
          <div className="mt-14">
            <DeviceGrid />
          </div>
          <div className="mt-10 text-center">
            <Link href="/tutoriels" className={buttonStyles.secondary}>
              Voir les guides d&apos;installation
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-paper-soft py-20 sm:py-28" aria-labelledby="faq">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              id="faq"
              align="left"
              eyebrow="FAQ"
              title="Questions fréquentes"
              description="Les réponses aux questions que l'on nous pose le plus souvent avant de s'abonner."
            />
            <Link href="/faq" className={`${buttonStyles.secondary} mt-8`}>
              Toutes les questions
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <FaqAccordion items={featuredFaqs} />
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
