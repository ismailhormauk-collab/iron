import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbSchema } from "@/lib/schema";
import { ChevronRightIcon } from "./icons";
import { JsonLd } from "./JsonLd";

type Props = {
  title: string;
  description?: ReactNode;
  /** Current page entry for the breadcrumb trail (home is prepended automatically). */
  breadcrumb: { name: string; path: string };
  children?: ReactNode;
};

/** Dark page banner with the page's H1, visible breadcrumbs and BreadcrumbList structured data. */
export function PageHeader({ title, description, breadcrumb, children }: Props) {
  const trail = [{ name: "Accueil", path: "/" }, breadcrumb];
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <JsonLd data={breadcrumbSchema(trail)} />
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -right-32 -top-24 -z-10 size-[28rem] rounded-full bg-violet-brand/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 left-0 -z-10 size-[26rem] rounded-full bg-electric/25 blur-3xl" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8">
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            {trail.map((item, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={item.path} className="flex items-center gap-1.5">
                  {last ? (
                    <span aria-current="page" className="text-white/90">
                      {item.name}
                    </span>
                  ) : (
                    <>
                      <Link href={item.path} className="transition hover:text-white">
                        {item.name}
                      </Link>
                      <ChevronRightIcon className="size-3.5 opacity-60" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
