export const es = {
  hero: {
    eyebrow: "BÚHO AUTOMOTIVE · EUROPEAN CAR SOURCING",
    title: "Tu próximo coche no tiene por qué estar en España.",
    description:
      "Lo buscamos por Europa, analizamos la operación y coordinamos todo hasta entregarlo matriculado en tu domicilio.",
  },
  cta: {
    search: "Encuentra tu coche",
    calculate: "Calcular importación",
    contact: "Hablar con Búho",
  },
  values: [
    {
      title: "Europa completa",
      text: "Buscamos la mejor oportunidad, no solo el stock de un concesionario.",
    },
    {
      title: "Compra directa",
      text: "El vehículo se compra directamente al vendedor. Sin intermediarios en el precio.",
    },
    {
      title: "Análisis con criterio",
      text: "Comparamos precio, kilometraje, historial, estado disponible y mercado español.",
    },
    {
      title: "Llave en mano",
      text: "Coordinamos inspección, transporte, ITV, matriculación y entrega.",
    },
  ],
  steps: [
    {
      title: "Cuéntanos qué buscas",
      text: "Tu próximo coche empieza por tus criterios, no por nuestro stock.",
    },
    {
      title: "Analizamos Europa",
      text: "Comparamos unidades y mercados para encontrar operaciones con sentido.",
    },
    {
      title: "Verificamos y negociamos",
      text: "Revisamos la documentación y coordinamos la inspección acordada.",
    },
    {
      title: "Coordinamos la importación",
      text: "Te acompañamos en la compra directa, transporte y matriculación.",
    },
    {
      title: "Te lo entregamos en casa",
      text: "Matriculado y listo para empezar vuestra historia.",
    },
  ],
  calculator: {
    title: "¿Tiene sentido importar tu próximo coche?",
    description:
      "Antes de decidir, empieza por los números. Explora cómo analizaremos el mercado europeo y el coste de traer tu coche a España.",
    disclaimer:
      "Estimación orientativa. El coste definitivo depende de la unidad concreta, fiscalidad, documentación y costes asociados.",
  },
  scoreDisclaimer:
    "Un score preliminar se basa únicamente en la información disponible y puede cambiar tras la verificación.",
};
export type Dictionary = typeof es;
export function getDictionary(locale: "es" = "es"): Dictionary {
  return { es }[locale];
}
