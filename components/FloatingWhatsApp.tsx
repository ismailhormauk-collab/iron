import { contact, defaultWhatsappMessage, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Nous écrire sur WhatsApp au ${contact.whatsapp.display} (nouvel onglet)`}
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-3 sm:right-6"
    >
      <span className="hidden rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-ink shadow-[var(--shadow-card)] ring-1 ring-line transition group-hover:-translate-x-1 md:block">
        Une question ?
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-[#0d7a3f] text-white shadow-lg shadow-black/20 transition group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/30 [animation-duration:2.6s]" aria-hidden="true" />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </a>
  );
}
