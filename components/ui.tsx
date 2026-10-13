import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2";
  align?: "center" | "left";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, as: Tag = "h2", align = "center", id }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-brand">{eyebrow}</p>
      )}
      <Tag id={id} className="text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </Tag>
      {description && <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">{description}</p>}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

export const buttonStyles = {
  primary: `${buttonBase} bg-brand-gradient text-white shadow-[var(--shadow-cta)] hover:-translate-y-0.5 hover:brightness-110`,
  secondaryDark: `${buttonBase} border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/12 hover:border-white/35`,
  secondary: `${buttonBase} border border-line bg-white text-ink hover:border-violet-brand/40 hover:text-violet-brand`,
  whatsapp: `${buttonBase} bg-[#0d7a3f] text-white hover:bg-[#0a6834] hover:-translate-y-0.5`,
  telegram: `${buttonBase} bg-[#1a6dab] text-white hover:bg-[#155c92] hover:-translate-y-0.5`,
};

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: keyof typeof buttonStyles };

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${buttonStyles[variant]} ${className}`} {...props} />;
}
