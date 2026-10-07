import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { CalculatorSection } from "@/sections/home-sections";
export const metadata: Metadata = {
  title: "Calculadora de importación — Demo",
  description:
    "Explora una demostración de nuestra futura calculadora. Sin valoración real del mercado ni cálculo fiscal definitivo.",
};
export default function CalculatorPage() {
  return (
    <>
      <PageIntro
        eyebrow="CALCULADORA · DEMOSTRACIÓN"
        title="La decisión empieza por los números."
        description="Conoce cómo te ayudaremos a entender el coste completo de importar. Esta versión es una demostración de interfaz, no una herramienta fiscal."
      />
      <CalculatorSection />
    </>
  );
}
