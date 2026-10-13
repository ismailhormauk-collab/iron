import type { ReactNode } from "react";

type Props = { icon: ReactNode; title: string; children: ReactNode };

export function FeatureCard({ icon, title, children }: Props) {
  return (
    <article className="group relative rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="grid size-12 place-items-center rounded-xl bg-violet-tint text-violet-brand transition group-hover:bg-brand-gradient group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{children}</p>
    </article>
  );
}
