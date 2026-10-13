"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { formatPrice, getPlan, plans } from "@/lib/pricing";
import { contact, siteConfig, whatsappLink } from "@/lib/site";
import { CheckIcon, CopyIcon, InfoIcon, TelegramIcon, WhatsAppIcon } from "./icons";
import { buttonStyles } from "./ui";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Result = { channel: "whatsapp" | "telegram"; text: string; popupBlocked?: boolean } | null;

const generalSubjects = ["Question avant achat", "Aide à la configuration", "Renouvellement", "Autre demande"];
const planSubject = (id: string) => {
  const p = getPlan(id);
  return p ? `Souscription — ${p.label} (${formatPrice(p.price)})` : "";
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Indiquez votre nom (2 caractères minimum).";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Indiquez une adresse e-mail valide, par exemple nom@exemple.fr.";
  if (!f.subject) e.subject = "Choisissez un objet.";
  if (f.message.trim().length < 10) e.message = "Votre message doit contenir au moins 10 caractères.";
  else if (f.message.length > 1500) e.message = "Votre message ne doit pas dépasser 1 500 caractères.";
  return e;
}

function compose(f: Fields): string {
  return [
    `Bonjour ${siteConfig.name},`,
    "",
    `Objet : ${f.subject}`,
    `Nom : ${f.name.trim()}`,
    `E-mail : ${f.email.trim()}`,
    "",
    f.message.trim(),
  ].join("\n");
}

const inputBase =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/70 transition focus:border-violet-brand focus:outline-none focus:ring-4 focus:ring-violet-brand/15";

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = planSubject(searchParams.get("offre") ?? "");
  const [fields, setFields] = useState<Fields>({ name: "", email: "", subject: preselected || generalSubjects[0], message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<Result>(null);
  const [copied, setCopied] = useState<"idle" | "ok" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "telegram" ? "telegram" : "whatsapp";
    const errs = validate(fields);
    setErrors(errs);
    const firstInvalid = (Object.keys(errs) as (keyof Fields)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    const text = compose(fields);
    setCopied("idle");
    if (channel === "whatsapp") {
      const win = window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
      setResult({ channel, text, popupBlocked: !win });
    } else {
      setResult({ channel, text });
    }
  }

  async function copy() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.text);
      setCopied("ok");
    } catch {
      setCopied("error");
    }
  }

  const fieldProps = (key: keyof Fields) => ({
    id: `contact-${key}`,
    name: key,
    value: fields[key],
    onChange: update(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
    className: `${inputBase} ${errors[key] ? "border-red-500" : "border-line"}`,
  });

  const errorText = (key: keyof Fields) =>
    errors[key] && (
      <p id={`contact-${key}-error`} className="mt-1.5 text-sm text-red-600">
        {errors[key]}
      </p>
    );

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-9">
      <h2 className="text-2xl font-semibold">Écrivez-nous</h2>
      <div className="mt-4 flex gap-3 rounded-xl bg-electric-tint/60 p-4 text-sm leading-relaxed text-ink">
        <InfoIcon className="mt-0.5 size-5 shrink-0 text-electric" />
        <p>
          Ce formulaire n&apos;envoie pas d&apos;e-mail : il prépare votre message pour que vous l&apos;envoyiez vous-même sur
          WhatsApp ou Telegram, nos deux canaux de support.
        </p>
      </div>

      <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-7 space-y-5">
        <div aria-live="polite" className="sr-only">
          {errorCount > 0 ? `Le formulaire contient ${errorCount} erreur${errorCount > 1 ? "s" : ""}.` : ""}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
              Nom <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input type="text" autoComplete="name" required placeholder="Votre nom" {...fieldProps("name")} />
            {errorText("name")}
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
              E-mail <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input type="email" autoComplete="email" inputMode="email" required placeholder="nom@exemple.fr" {...fieldProps("email")} />
            {errorText("email")}
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="text-sm font-semibold text-ink">
            Objet <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <select required {...fieldProps("subject")}>
            <optgroup label="Souscrire à une formule">
              {plans.map((p) => (
                <option key={p.id} value={planSubject(p.id)}>
                  {planSubject(p.id)}
                </option>
              ))}
            </optgroup>
            <optgroup label="Autres demandes">
              {generalSubjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </optgroup>
          </select>
          {errorText("subject")}
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
            Message <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <textarea
            rows={6}
            required
            maxLength={1500}
            placeholder="Précisez votre appareil et votre question."
            {...fieldProps("message")}
          />
          <div className="flex justify-between gap-4">
            {errorText("message") ?? <span />}
            <p className="mt-1.5 text-xs text-muted">{fields.message.length} / 1 500</p>
          </div>
        </div>

        <p className="text-xs text-muted">
          <span className="text-red-600" aria-hidden="true">*</span> Champs obligatoires. Vos informations ne sont ni stockées
          ni transmises par ce site.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="submit" name="channel" value="whatsapp" className={`${buttonStyles.whatsapp} flex-1`}>
            <WhatsAppIcon className="size-5" />
            Envoyer via WhatsApp
          </button>
          <button type="submit" name="channel" value="telegram" className={`${buttonStyles.telegram} flex-1`}>
            <TelegramIcon className="size-5" />
            Préparer pour Telegram
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {result && (
          <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-ink">
            <p className="flex items-center gap-2 font-semibold">
              <CheckIcon className="size-5 text-emerald-700" strokeWidth={2.4} />
              Votre message est prêt.
            </p>
            {result.channel === "whatsapp" ? (
              <p className="mt-2 leading-relaxed">
                {result.popupBlocked
                  ? "Votre navigateur a bloqué l'ouverture de WhatsApp. "
                  : "WhatsApp s'est ouvert dans un nouvel onglet : appuyez sur « Envoyer » dans l'application pour nous le transmettre. "}
                <a
                  href={whatsappLink(result.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline underline-offset-4"
                >
                  Ouvrir WhatsApp
                </a>
              </p>
            ) : (
              <>
                <p className="mt-2 leading-relaxed">
                  Telegram ne permet pas de préremplir un message : copiez-le, puis collez-le dans la conversation avec{" "}
                  {contact.telegram.username}.
                </p>
                <pre className="mt-3 max-h-48 overflow-auto whitespace-pre-wrap rounded-xl bg-white p-4 font-sans text-[0.85rem] ring-1 ring-emerald-200">
                  {result.text}
                </pre>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <button type="button" onClick={copy} className={`${buttonStyles.secondary} flex-1`}>
                    <CopyIcon className="size-4" />
                    {copied === "ok" ? "Message copié" : "Copier le message"}
                  </button>
                  <a href={contact.telegram.url} target="_blank" rel="noopener noreferrer" className={`${buttonStyles.telegram} flex-1`}>
                    <TelegramIcon className="size-4.5" />
                    Ouvrir Telegram
                  </a>
                </div>
                {copied === "error" && (
                  <p className="mt-2 text-red-600">La copie automatique a échoué : sélectionnez le texte ci-dessus et copiez-le manuellement.</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
