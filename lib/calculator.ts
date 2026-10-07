import type { CalculatorInput, Estimate } from "@/types/domain";
export const carModels: Record<string, string[]> = {
  Porsche: ["911", "Cayenne", "Macan", "Panamera"],
  BMW: ["Serie 3", "Serie 5", "X3", "X5"],
  Mercedes: ["Clase C", "Clase E", "GLC", "GLE"],
  Audi: ["A5", "A6", "Q5", "Q7"],
  "Land Rover": ["Defender", "Range Rover Sport"],
};
export function calculateDemoEstimate(input: CalculatorInput): Estimate {
  if (
    !Number.isFinite(input.budget) ||
    input.budget < 15000 ||
    input.budget > 500000
  )
    throw new Error("Introduce un presupuesto entre 15.000 y 500.000 €.");
  const rounded = (factor: number) =>
    Math.round((input.budget * factor) / 500) * 500;
  return {
    european: [rounded(0.8), rounded(0.855)],
    landed: [rounded(0.91), rounded(0.955)],
    spanish: [rounded(0.977), rounded(1.044)],
    saving: [rounded(0.022), rounded(0.133)],
    isDemo: true,
  };
}
export const formatEuro = (value: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
