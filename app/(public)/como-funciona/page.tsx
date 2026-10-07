import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProcessSection } from "@/sections/process";
import { TrustSection, CTASection } from "@/sections/home-sections";
export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "De tus criterios a la entrega matriculada: conoce el proceso de búsqueda, análisis e importación de Búho Automotive.",
};
export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="DE EUROPA A TU PUERTA"
        title="Un proceso claro. Una decisión tuya."
        description="Desde la primera búsqueda hasta la entrega, coordinamos cada fase contigo. La compra del vehículo se realiza directamente al vendedor."
      />
      <ProcessSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
