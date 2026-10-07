export const site = {
  name: "BÚHO AUTOMOTIVE",
  description:
    "Búsqueda, análisis e intermediación de vehículos en Europa. Del lado del comprador, desde la búsqueda hasta la entrega matriculada en tu domicilio.",
  url: null as string | null,
  whatsapp: null as string | null,
  email: null as string | null,
  social: [] as { name: string; url: string }[],
  locale: "es" as const,
  availableLocales: ["es"] as const,
};
export const navigation = [
  { label: "Buscar coche", href: "/buscar" },
  { label: "Oportunidades", href: "/oportunidades" },
  { label: "Cómo funciona", href: "/como-funciona" },
  { label: "Servicios", href: "/servicios" },
];
