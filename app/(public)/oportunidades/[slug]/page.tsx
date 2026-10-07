import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  demoOpportunityRepository,
  demoOpportunities,
} from "@/lib/demo/opportunities";
import { PageIntro } from "@/components/page-intro";
import { Container, ButtonLink } from "@/components/ui";
import { BuhoScore } from "@/components/buho-score";
import { formatEuro } from "@/lib/calculator";
export function generateStaticParams() {
  return demoOpportunities.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const item = await demoOpportunityRepository.findBySlug((await params).slug);
  return {
    title: item
      ? `${item.vehicle.brand} ${item.vehicle.model} — Demo`
      : "Oportunidad no encontrada",
    robots: { index: false, follow: true },
  };
}
export default async function OpportunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const item = await demoOpportunityRepository.findBySlug((await params).slug);
  if (!item) notFound();
  const { vehicle } = item;
  return (
    <>
      <PageIntro
        eyebrow="OPORTUNIDAD DE DEMOSTRACIÓN · NO DISPONIBLE"
        title={`${vehicle.brand} ${vehicle.model}`}
        description={`${vehicle.version}. Ficha ficticia para mostrar el futuro análisis de una oportunidad. Imágenes generadas e información ilustrativa, no verificadas.`}
      />
      <section className="section">
        <Container className="split-layout">
          <div>
            <div className="detail-image">
              <Image
                src={vehicle.image}
                alt={`Representación ilustrativa de ${vehicle.brand} ${vehicle.model}`}
                fill
                priority
                sizes="(max-width:767px) 100vw, 50vw"
              />
            </div>
            <dl className="detail-specs">
              {[
                ["Año", vehicle.year],
                [
                  "Kilometraje",
                  `${vehicle.mileage.toLocaleString("es-ES")} km`,
                ],
                ["País", vehicle.country],
                ["Disponibilidad", "Demo · No disponible"],
                ["Precio en origen", formatEuro(vehicle.price)],
                ["Estimación en España", formatEuro(item.landedPrice)],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="micro muted">
              Importes orientativos de demostración. No constituyen una oferta
              comercial. Los costes reales dependen de fiscalidad,
              documentación, vehículo y servicios acordados.
            </p>
          </div>
          <div>
            <BuhoScore value={item.score.value} />
            <div className="notice-panel">
              <h2>El análisis viene antes de la decisión.</h2>
              <p className="muted">
                Historial, estado y equipamiento pendientes de verificación. El
                score de esta ficha es ficticio y no certifica el vehículo.
              </p>
              <ButtonLink href="/buscar">Buscar un coche similar</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
