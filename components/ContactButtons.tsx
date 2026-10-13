import { contact, defaultWhatsappMessage, whatsappLink } from "@/lib/site";
import { buttonStyles } from "./ui";
import { TelegramIcon, WhatsAppIcon } from "./icons";

type Props = { message?: string; className?: string; label?: string };

export function WhatsAppButton({ message = defaultWhatsappMessage, className = "", label = "WhatsApp" }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonStyles.whatsapp} ${className}`}
      aria-label={`${label} — écrire au ${contact.whatsapp.display} (nouvel onglet)`}
    >
      <WhatsAppIcon className="size-5" />
      {label}
    </a>
  );
}

export function TelegramButton({ className = "", label = "Telegram" }: Omit<Props, "message">) {
  return (
    <a
      href={contact.telegram.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonStyles.telegram} ${className}`}
      aria-label={`${label} — écrire à ${contact.telegram.username} (nouvel onglet)`}
    >
      <TelegramIcon className="size-5" />
      {label}
    </a>
  );
}
