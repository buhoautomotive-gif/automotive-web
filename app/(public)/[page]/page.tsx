import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { basePages, isBasePage } from "@/config/pages";
import { PageIntro } from "@/components/page-intro";
import { Container, ButtonLink } from "@/components/ui";
export function generateStaticParams() {
  return Object.keys(basePages).map((page) => ({ page }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  if (!isBasePage(page)) return {};
  return {
    title: basePages[page].title,
    description: basePages[page].description,
    ...(page === "buscar" ||
    page === "contacto" ||
    ["aviso-legal", "privacidad", "cookies"].includes(page)
      ? { robots: { index: false, follow: true } }
      : {}),
  };
}
export default async function BasePage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (!isBasePage(page)) notFound();
  const content = basePages[page];
  return (
    <>
      <PageIntro {...content} />
      <section className="section page-body">
        <Container>
          <div className="notice-panel">
            <h2>{content.heading}</h2>
            <p className="muted">{content.body}</p>
            <ButtonLink href={content.href}>{content.cta}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
