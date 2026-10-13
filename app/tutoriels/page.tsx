import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { DeviceGrid } from "@/components/DeviceGrid";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tutoriels : installation et configuration",
  description:
    "Guides d'installation IRON TV MAX : configurer une application de lecture multimédia compatible sur Smart TV, Android, Fire TV Stick ou ordinateur avec vos identifiants M3U ou Xtream.",
  path: "/tutoriels",
});

const guides = [
  {
    id: "smart-tv",
    title: "Smart TV Samsung et LG",
    steps: [
      "Ouvrez la boutique d'applications de votre téléviseur (Samsung Apps ou LG Content Store).",
      "Installez l'application de lecture recommandée par le support pour votre modèle.",
      "Notez l'adresse MAC ou l'identifiant affiché par l'application et transmettez-le au support si cela vous est demandé.",
      "Saisissez vos identifiants ou laissez le support activer l'application, puis redémarrez-la.",
    ],
  },
  {
    id: "android",
    title: "Android, Android TV et box Android",
    steps: [
      "Ouvrez le Google Play Store sur votre appareil.",
      "Installez une application de lecture compatible M3U ou Xtream Codes.",
      "Choisissez l'option de connexion « Xtream Codes » (serveur, nom d'utilisateur, mot de passe) ou « Playlist M3U ».",
      "Collez les informations reçues, enregistrez et patientez pendant le chargement des listes.",
    ],
  },
  {
    id: "fire-tv",
    title: "Amazon Fire TV Stick",
    steps: [
      "Depuis l'écran d'accueil, ouvrez la recherche ou l'Appstore Amazon.",
      "Installez l'application de lecture compatible indiquée par le support.",
      "Ouvrez l'application et sélectionnez le mode de connexion correspondant à vos identifiants.",
      "Saisissez vos accès à l'aide de la télécommande, puis validez.",
    ],
  },
  {
    id: "ordinateur",
    title: "Ordinateur Windows ou macOS",
    steps: [
      "Installez un lecteur multimédia compatible avec les listes M3U.",
      "Dans le lecteur, choisissez l'ouverture d'un flux ou d'une liste réseau.",
      "Collez le lien M3U fourni par le support.",
      "Lancez la lecture ; pour un guide TV complet, privilégiez une application gérant l'EPG.",
    ],
  },
];

const tips = [
  "Utilisez de préférence une connexion filaire ou un Wi-Fi 5 GHz stable.",
  "Vérifiez qu'aucun espace ne s'est glissé avant ou après vos identifiants.",
  "Redémarrez l'application et l'appareil après la première configuration.",
  "Ne partagez jamais vos identifiants : ils sont personnels.",
];

export default function TutorielsPage() {
  return (
    <>
      <PageHeader
        title="Tutoriels d'installation"
        description="Les étapes générales pour configurer une application de lecture multimédia compatible sur vos appareils. Chaque application ayant ses particularités, le support reste disponible pour vous guider."
        breadcrumb={{ name: "Tutoriels", path: "/tutoriels" }}
      >
        <nav aria-label="Guides par appareil">
          <ul className="flex flex-wrap gap-2">
            {guides.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <section className="py-16 sm:py-24" aria-labelledby="avant">
        <Container>
          <SectionHeading
            id="avant"
            eyebrow="Avant de commencer"
            title="Ce dont vous avez besoin"
            description="Vos identifiants (lien M3U ou codes Xtream), un appareil compatible et une connexion Internet stable."
          />
          <div className="mt-12">
            <DeviceGrid />
          </div>
        </Container>
      </section>

      <section className="bg-paper-soft py-16 sm:py-24" aria-labelledby="guides">
        <Container>
          <SectionHeading id="guides" eyebrow="Guides" title="Configuration par appareil" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {guides.map((g) => (
              <article key={g.id} id={g.id} className="scroll-mt-28 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
                <h3 className="text-xl font-semibold">{g.title}</h3>
                <ol className="mt-5 space-y-4">
                  {g.steps.map((step, i) => (
                    <li key={step} className="flex gap-4 text-sm leading-relaxed sm:text-[0.95rem]">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-violet-tint font-display text-sm font-semibold text-violet-brand">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="conseils">
        <Container className="max-w-3xl">
          <SectionHeading id="conseils" eyebrow="Bonnes pratiques" title="Conseils pour une lecture fluide" />
          <ul className="mt-10 space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex gap-3 rounded-xl border border-line bg-white px-5 py-4 text-[0.95rem]">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gradient" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-muted">
            Un message d&apos;erreur ? Consultez la{" "}
            <Link href="/faq" className="font-semibold text-violet-brand underline-offset-4 hover:underline">
              FAQ
            </Link>{" "}
            ou envoyez-nous une capture d&apos;écran.
          </p>
        </Container>
      </section>

      <ContactCta title="Besoin d'aide pour la configuration ?" description="Envoyez-nous le modèle de votre appareil et l'application utilisée : nous vous guidons étape par étape." />
    </>
  );
}
