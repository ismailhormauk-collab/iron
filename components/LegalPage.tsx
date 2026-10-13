import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import { Container } from "./ui";

type Props = { title: string; path: string; intro: string; children: ReactNode };

export function LegalPage({ title, path, intro, children }: Props) {
  return (
    <>
      <PageHeader title={title} description={intro} breadcrumb={{ name: title, path }} />
      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-[0.98rem] leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-2 [&_h2+*]:mt-4 [&_a]:font-semibold [&_a]:text-violet-brand [&_a]:underline-offset-4 hover:[&_a]:underline">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
