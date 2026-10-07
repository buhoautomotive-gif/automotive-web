import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, ScanLine } from "lucide-react";
import {
  Container,
  SectionHeading,
  ButtonLink,
  TrustItem,
} from "@/components/ui";
import { CalculatorPreview } from "@/components/calculator-preview";
import { VehicleCard } from "@/components/vehicle-card";
import { BuhoScore } from "@/components/buho-score";
import { demoOpportunities } from "@/lib/demo/opportunities";
import { es } from "@/lib/i18n/es";
export function ValueSection() {
  return (
    <section id="nuestro-enfoque" className="value-section">
      <Container>
        <div className="value-grid">
          {es.values.map((item, index) => (
            <article key={item.title}>
              <span className="eyebrow">0{index + 1}</span>
              <h2>{item.title}</h2>
              <p className="muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
export function CalculatorSection() {
  return (
    <section className="section calculator-section">
      <Container className="split-layout">
        <div>
          <SectionHeading
            eyebrow="PRIMERO, LOS NÚMEROS"
            title={es.calculator.title}
            description={es.calculator.description}
          />
          <div className="calculator-benefits">
            <TrustItem title="Una primera orientación, sin compromiso" />
            <TrustItem title="El coste completo, no solo el precio del coche" />
            <TrustItem title="Comparativa con el mercado español" />
          </div>
          <p className="micro muted demo-explanation">
            <ScanLine size={17} />
            Vista previa de nuestra herramienta. Los resultados son ilustrativos
            y no representan ofertas reales.
          </p>
        </div>
        <CalculatorPreview />
      </Container>
    </section>
  );
}
export function OpportunitiesSection() {
  return (
    <section className="section opportunities-section">
      <Container>
        <div className="section-top">
          <SectionHeading
            eyebrow="EL CRITERIO MARCA LA DIFERENCIA"
            title="Oportunidades seleccionadas"
            description="No buscamos cantidad. Buscamos operaciones que tengan sentido."
          />
          <Link href="/oportunidades" className="text-link">
            Ver todas las oportunidades <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="vehicle-grid">
          {demoOpportunities.map((opportunity) => (
            <VehicleCard key={opportunity.slug} opportunity={opportunity} />
          ))}
        </div>
        <p className="micro muted demo-caption">
          Selección de demostración. Vehículos, imágenes, precios y puntuaciones
          ilustrativos; no son anuncios reales.
        </p>
      </Container>
    </section>
  );
}
export function ScoreSection() {
  return (
    <section className="section score-section">
      <Container className="split-layout">
        <div>
          <SectionHeading
            eyebrow="MÁS ALLÁ DEL PRECIO"
            title="Una oportunidad no es solo un buen precio."
            description="Un coche merece una mirada completa. Búho Score reúne los factores que importan para ayudarte a decidir con más criterio."
          />
          <div className="score-factors">
            {[
              "Precio",
              "Kilometraje",
              "Historial",
              "Estado",
              "Equipamiento",
              "Frente a España",
            ].map((text, i) => (
              <span key={text}>
                <span>0{i + 1}</span>
                {text}
              </span>
            ))}
          </div>
        </div>
        <BuhoScore value={87} />
      </Container>
    </section>
  );
}
export function DifferenceSection() {
  return (
    <section className="difference-section">
      <div className="difference-image">
        <Image
          src="/images/hero.png"
          alt="La carretera alpina como punto de partida de la búsqueda europea"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <div className="difference-content">
        <p className="eyebrow">INDEPENDIENTES. POR PRINCIPIO.</p>
        <h2>
          No es solo un coche.
          <br />
          Es una decisión
          <br />
          de alto valor.
        </h2>
        <p className="difference-quote">
          Ellos te venden el coche que tienen.
          <br />
          <span>Nosotros buscamos el que quieres.</span>
        </p>
        <p className="muted">
          No trabajamos para colocar stock propio. Trabajamos a partir de tus
          criterios. Tú pagas el vehículo directamente al vendedor. Búho factura
          únicamente sus servicios.
        </p>
        <Link className="text-link" href="/sobre-buho">
          Conoce nuestra forma de pensar <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
export function TrustSection() {
  return (
    <section className="section trust-section">
      <Container>
        <div className="section-top">
          <SectionHeading
            eyebrow="LA CONFIANZA SE CONSTRUYE"
            title="Menos promesas. Más transparencia."
          />
          <ShieldCheck className="trust-symbol" size={35} strokeWidth={1} />
        </div>
        <div className="trust-grid">
          {[
            {
              title: "Compra directa al vendedor",
              text: "Sabes a quién compras y qué pagas.",
            },
            {
              title: "Revisión documental",
              text: "La información importa antes de decidir.",
            },
            {
              title: "Inspección opcional",
              text: "Acordamos el alcance de la revisión.",
            },
            {
              title: "Transparencia de costes",
              text: "Vehículo y servicios, por separado.",
            },
            {
              title: "Seguimiento de operación",
              text: "Cada paso, explicado con claridad.",
            },
            {
              title: "Búho Score",
              text: "Criterio orientativo, nunca una garantía.",
            },
          ].map((item) => (
            <TrustItem key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
export function CTASection() {
  return (
    <section className="cta-section">
      <Container>
        <p className="eyebrow">TU PRÓXIMO COCHE EMPIEZA AQUÍ</p>
        <h2>
          El coche que buscas puede estar a 2.000 km.
          <br />
          <span>Encontrarlo no debería ser tu problema.</span>
        </h2>
        <p className="muted">
          Cuéntanos qué buscas y estudiaremos el mercado europeo por ti.
        </p>
        <div className="hero-buttons">
          <ButtonLink href="/buscar">{es.cta.search}</ButtonLink>
          <ButtonLink href="/contacto" secondary>
            {es.cta.contact}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
