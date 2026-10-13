import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: "Comment IRON TV MAX traite les informations personnelles des visiteurs et des clients.",
  path: "/confidentialite",
  noindex: true,
});

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      path="/confidentialite"
      intro="Cette page explique quelles informations sont traitées lorsque vous consultez ce site ou nous contactez."
    >
      <div>
        <h2>Données collectées par ce site</h2>
        <p>
          Ce site ne propose pas de création de compte et n&apos;enregistre aucune donnée saisie dans le formulaire de contact :
          celui-ci se contente de préparer un message que vous envoyez vous-même via WhatsApp ou Telegram.
        </p>
        <p>
          Comme tout site web, l&apos;hébergeur peut enregistrer des journaux techniques (adresse IP, navigateur, pages
          consultées) nécessaires à la sécurité et au bon fonctionnement du service.
        </p>
      </div>
      <div>
        <h2>Échanges avec le support</h2>
        <p>
          Lorsque vous nous écrivez sur WhatsApp ou Telegram, les informations que vous partagez (nom, numéro, contenu des
          messages) sont utilisées uniquement pour répondre à votre demande et gérer votre abonnement. Ces services sont
          soumis à leurs propres politiques de confidentialité.
        </p>
      </div>
      <div>
        <h2>Cookies</h2>
        <p>
          Ce site n&apos;utilise pas de cookies publicitaires ni d&apos;outil de mesure d&apos;audience tiers. Si cela devait
          changer, cette page serait mise à jour et votre consentement serait demandé lorsque la loi l&apos;exige.
        </p>
      </div>
      <div>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous pouvez demander l&apos;accès, la rectification ou la suppression des informations vous
          concernant en nous écrivant sur{" "}
          <a href={contact.whatsapp.url} target="_blank" rel="noopener noreferrer">WhatsApp</a> ou{" "}
          <a href={contact.telegram.url} target="_blank" rel="noopener noreferrer">Telegram</a>. Vous pouvez également
          introduire une réclamation auprès de la CNIL.
        </p>
      </div>
      <div>
        <h2>Bonnes pratiques</h2>
        <ul>
          <li>Ne transmettez jamais vos coordonnées bancaires complètes par message.</li>
          <li>Gardez vos identifiants pour vous : ils sont personnels.</li>
          <li>
            Communiquez uniquement via les canaux indiqués sur la <Link href="/contact">page contact</Link>.
          </li>
        </ul>
      </div>
    </LegalPage>
  );
}
