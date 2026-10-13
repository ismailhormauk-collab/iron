import { TelegramButton, WhatsAppButton } from "./ContactButtons";
import { Container } from "./ui";

type Props = { title?: string; description?: string };

export function ContactCta({
  title = "Une question avant de vous abonner ?",
  description = "Indiquez-nous votre appareil et la formule qui vous intéresse : notre équipe vous répond sur WhatsApp ou Telegram et vous guide jusqu'à l'activation.",
}: Props) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
          <div className="absolute -left-20 -top-24 -z-10 size-80 rounded-full bg-violet-brand/35 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-16 -z-10 size-80 rounded-full bg-cyan-brand/25 blur-3xl" aria-hidden="true" />
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton label="Écrire sur WhatsApp" />
            <TelegramButton label="Écrire sur Telegram" />
          </div>
        </div>
      </Container>
    </section>
  );
}
