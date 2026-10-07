import { Container, SectionHeading } from "@/components/ui";
import { es } from "@/lib/i18n/es";
export function ProcessStep({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <li className="process-step">
      <span className="step-number">0{index + 1}</span>
      <h3>{title}</h3>
      <p className="muted">{text}</p>
    </li>
  );
}
export function ProcessSection() {
  return (
    <section className="section process-section">
      <Container>
        <SectionHeading
          eyebrow="EL CAMINO HASTA TU COCHE"
          title="Tú eliges el destino. Nosotros, el camino."
          description="Un proceso claro de principio a fin. Sin sorpresas, sin que tengas que ocuparte de todo."
        />
        <ol className="process-grid">
          {es.steps.map((step, index) => (
            <ProcessStep key={step.title} {...step} index={index} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
