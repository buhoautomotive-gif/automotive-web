import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Container, TrustItem } from "@/components/ui";
import { CTASection } from "@/sections/home-sections";
export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Búsqueda independiente, análisis, coordinación de compra, importación y entrega de vehículos europeos.",
};
const services = [
  {
    title: "Búsqueda personalizada",
    text: "Localizamos unidades que respondan a tus criterios, sin depender de stock propio.",
  },
  {
    title: "Análisis de la oportunidad",
    text: "Comparamos precio, kilometraje, información disponible y alternativas en España.",
  },
  {
    title: "Revisión e inspección",
    text: "Revisión documental y coordinación de una inspección opcional con alcance acordado.",
  },
  {
    title: "Coordinación de compra",
    text: "Te acompañamos en la negociación y compra directa al vendedor.",
  },
  {
    title: "Importación y matriculación",
    text: "Coordinamos transporte, documentación, ITV y matriculación según la operación.",
  },
  {
    title: "Entrega a domicilio",
    text: "Organizamos la entrega del vehículo matriculado en la dirección acordada.",
  },
];
export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="SERVICIOS BÚHO"
        title="Tú decides cuánto camino hacemos contigo."
        description="Cada operación es distinta. El alcance del servicio, los honorarios y los costes se acuerdan antes de empezar. No hay tarifas ni ahorros garantizados en esta demostración."
      />
      <section className="section">
        <Container>
          <div className="trust-grid">
            {services.map((item) => (
              <TrustItem key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
