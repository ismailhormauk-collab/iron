export type Faq = { question: string; answer: string; featured?: boolean };

/**
 * Answers deliberately avoid promising delays, refunds or payment methods:
 * anything not confirmed is redirected to the support team.
 */
export const faqs: Faq[] = [
  {
    question: "Comment choisir une formule d'abonnement ?",
    answer:
      "Les quatre formules donnent accès au même service : seule la durée change. Si vous souhaitez d'abord essayer sur une période courte, la formule 3 mois est la plus adaptée. Si vous êtes déjà convaincu, les formules 12 et 24 mois réduisent le coût mensuel. En cas d'hésitation, notre équipe vous conseille sur WhatsApp ou Telegram.",
    featured: true,
  },
  {
    question: "Quels appareils sont compatibles ?",
    answer:
      "Le service s'utilise via une application de lecture compatible sur Smart TV (Samsung, LG), boîtiers et téléviseurs Android, Amazon Fire TV Stick, ordinateurs et certains boîtiers dédiés. La compatibilité exacte dépend du modèle et de l'application installée : indiquez-nous votre appareil avant l'achat et nous vous confirmerons la marche à suivre.",
    featured: true,
  },
  {
    question: "Comment contacter le support ?",
    answer:
      "Vous pouvez nous écrire sur WhatsApp ou sur Telegram. Précisez votre formule, votre appareil et, en cas de problème, le message d'erreur affiché : cela nous permet de vous répondre plus efficacement.",
    featured: true,
  },
  {
    question: "Comment fonctionne le processus d'activation ?",
    answer:
      "Après avoir choisi votre formule, contactez-nous sur WhatsApp ou Telegram. Le support vous indique les modalités de paiement disponibles, puis vous transmet vos identifiants (lien M3U ou codes Xtream) ainsi que les instructions adaptées à votre appareil. Le délai de traitement vous est communiqué directement par le support.",
    featured: true,
  },
  {
    question: "Comment configurer une application compatible ?",
    answer:
      "Installez une application de lecture compatible depuis la boutique officielle de votre appareil, puis saisissez les identifiants reçus (lien M3U ou serveur, nom d'utilisateur et mot de passe Xtream). Nos tutoriels détaillent les étapes générales, et le support peut vous guider pas à pas pour votre modèle.",
  },
  {
    question: "Que faire en cas de problème de connexion ?",
    answer:
      "Commencez par vérifier votre connexion Internet, redémarrez votre appareil et votre box, puis assurez-vous que les identifiants ont été saisis sans espace ni faute de frappe. Si le problème persiste, envoyez-nous une capture d'écran du message d'erreur sur WhatsApp ou Telegram.",
  },
  {
    question: "Comment renouveler son abonnement ?",
    answer:
      "Contactez le support avant la fin de votre période en indiquant la formule souhaitée. Nous vous expliquerons comment prolonger votre abonnement et si vos identifiants actuels restent valables.",
  },
  {
    question: "Quels moyens de paiement sont acceptés ?",
    answer:
      "Les moyens de paiement disponibles vous sont communiqués par le support au moment de la commande. Ne transmettez jamais vos coordonnées bancaires par message : aucun membre de l'équipe ne vous les demandera.",
  },
  {
    question: "Comment protéger mes informations personnelles ?",
    answer:
      "Ne partagez vos identifiants avec personne et ne les publiez pas en ligne. Communiquez uniquement via les canaux indiqués sur ce site. Ce site ne dépose pas de cookies publicitaires ; consultez notre politique de confidentialité pour en savoir plus.",
  },
];

export const featuredFaqs = faqs.filter((f) => f.featured);
