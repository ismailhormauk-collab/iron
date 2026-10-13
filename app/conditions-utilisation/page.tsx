import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation du site et des abonnements IRON TV MAX.",
  path: "/conditions-utilisation",
  noindex: true,
});

export default function ConditionsPage() {
  return (
    <LegalPage
      title="Conditions d'utilisation"
      path="/conditions-utilisation"
      intro="En utilisant ce site ou en souscrivant à une formule, vous acceptez les conditions ci-dessous."
    >
      <div>
        <h2>Objet du site</h2>
        <p>
          Ce site présente les formules d&apos;abonnement IRON TV MAX, leurs tarifs et des guides de configuration. Aucune
          vente ni aucun paiement n&apos;est réalisé directement sur le site : les commandes sont traitées par le support via
          WhatsApp ou Telegram.
        </p>
      </div>
      <div>
        <h2>Tarifs</h2>
        <p>
          Les prix sont indiqués en euros pour la durée affichée et correspondent à un paiement unique. Le tarif applicable est
          celui affiché sur la <Link href="/tarifs">page des tarifs</Link> au moment de la commande et confirmé par le
          support.
        </p>
      </div>
      <div>
        <h2>Utilisation de l&apos;abonnement</h2>
        <ul>
          <li>Les identifiants fournis sont personnels et ne doivent pas être partagés ni revendus.</li>
          <li>Le nombre d&apos;appareils pouvant être utilisés simultanément est précisé par le support lors de la commande.</li>
          <li>
            Vous vous engagez à utiliser le service dans le respect de la législation applicable, notamment en matière de
            propriété intellectuelle.
          </li>
        </ul>
      </div>
      <div>
        <h2>Disponibilité</h2>
        <p>
          La qualité d&apos;utilisation dépend notamment de votre connexion Internet, de votre appareil et de l&apos;application
          de lecture choisie. Des interruptions ponctuelles peuvent survenir, par exemple lors d&apos;opérations de maintenance.
        </p>
      </div>
      <div>
        <h2>Remboursement</h2>
        <p>
          Les conditions applicables sont décrites dans la <Link href="/politique-remboursement">politique de remboursement</Link>.
        </p>
      </div>
      <div>
        <h2>Modification des conditions</h2>
        <p>Ces conditions peuvent évoluer. La version en vigueur est celle publiée sur cette page.</p>
      </div>
    </LegalPage>
  );
}
