import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Container } from "@/components/ui";
import { VehicleCard } from "@/components/vehicle-card";
import { demoOpportunityRepository } from "@/lib/demo/opportunities";
export const metadata: Metadata = {
  title: "Oportunidades seleccionadas — Demo",
  robots: { index: false, follow: true },
};
export default async function OpportunitiesPage() {
  const items = await demoOpportunityRepository.list();
  return (
    <>
      <PageIntro
        eyebrow="SELECCIÓN EUROPEA · DEMO"
        title="No buscamos cantidad. Buscamos criterio."
        description="Una muestra de cómo presentaremos las oportunidades. Todas las unidades, imágenes, precios y puntuaciones son ilustrativos. No hay vehículos disponibles para comprar en esta fase."
      />
      <section className="section">
        <Container>
          {items.length ? (
            <div className="vehicle-grid">
              {items.map((opportunity) => (
                <VehicleCard key={opportunity.slug} opportunity={opportunity} />
              ))}
            </div>
          ) : (
            <div className="notice-panel">
              <h2>Estamos estudiando nuevas oportunidades</h2>
              <p className="muted">
                Publicaremos unidades cuando dispongamos de información
                suficiente para analizarlas.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
