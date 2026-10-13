import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Politique de remboursement",
  description: "Comment faire une demande de remboursement pour un abonnement IRON TV MAX.",
  path: "/politique-remboursement",
  noindex: true,
});

export default function RemboursementPage() {
  return (
    <LegalPage
      title="Politique de remboursement"
      path="/politique-remboursement"
      intro="Les conditions de remboursement vous sont présentées par le support avant toute commande. Voici comment procéder si vous rencontrez un problème."
    >
      <div>
        <h2>Avant de commander</h2>
        <p>
          Pour éviter toute mauvaise surprise, indiquez au support le modèle de votre appareil et l&apos;application que vous
          souhaitez utiliser. Demandez également les conditions de remboursement en vigueur : elles vous seront confirmées
          avant le paiement.
        </p>
      </div>
      <div>
        <h2>En cas de problème</h2>
        <p>
          La plupart des difficultés se règlent rapidement avec l&apos;aide du support (configuration, saisie des
          identifiants, choix de l&apos;application). Contactez-nous d&apos;abord pour que nous puissions vous aider.
        </p>
      </div>
      <div>
        <h2>Faire une demande</h2>
        <p>Si le problème persiste, envoyez votre demande au support en précisant :</p>
        <ul>
          <li>la formule achetée et la date de commande ;</li>
          <li>la description du problème rencontré et, si possible, une capture d&apos;écran ;</li>
          <li>les démarches déjà effectuées avec le support.</li>
        </ul>
        <p>
          Écrivez-nous sur{" "}
          <a href={contact.whatsapp.url} target="_blank" rel="noopener noreferrer">WhatsApp</a> ou{" "}
          <a href={contact.telegram.url} target="_blank" rel="noopener noreferrer">Telegram ({contact.telegram.username})</a>.
          Chaque demande est étudiée selon les conditions communiquées lors de la commande.
        </p>
      </div>
    </LegalPage>
  );
}
