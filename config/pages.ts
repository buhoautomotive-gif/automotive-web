export const basePages = {
  buscar: {
    eyebrow: "TU PRÓXIMO COCHE",
    title: "No empezamos por un catálogo. Empezamos por ti.",
    description:
      "Marca, modelo, presupuesto y aquello a lo que no quieres renunciar. Tus criterios serán el punto de partida de nuestra búsqueda.",
    heading: "La búsqueda personalizada está en preparación",
    body: "En la próxima fase podrás enviarnos tus preferencias desde aquí. Por ahora no recogemos ni guardamos datos personales. Puedes explorar la calculadora de demostración para conocer nuestro enfoque.",
    cta: "Explorar la calculadora",
    href: "/calculadora",
  },
  contacto: {
    eyebrow: "HABLEMOS DE TU PRÓXIMO COCHE",
    title: "Una buena decisión empieza con una conversación.",
    description:
      "Queremos entender qué buscas y ayudarte a valorar si la búsqueda en Europa tiene sentido para ti.",
    heading: "Canales de contacto pendientes de habilitar",
    body: "Estamos preparando la atención directa de Búho Automotive. El formulario, el correo y WhatsApp se habilitarán cuando estén confirmados los canales oficiales. Esta web no envía solicitudes todavía.",
    cta: "Conocer el proceso",
    href: "/como-funciona",
  },
  "sobre-buho": {
    eyebrow: "DEL LADO DEL COMPRADOR",
    title: "El coche que quieres. No el que tenemos.",
    description:
      "Búho Automotive nace con una idea clara: una búsqueda independiente, centrada en tus criterios y con Europa como punto de partida.",
    heading: "Criterio antes que inventario",
    body: "No somos un compraventa ni un portal de anuncios. Buscamos, comparamos y coordinamos. El vehículo se compra directamente al vendedor; Búho factura únicamente sus servicios. La confianza se construye explicando cada paso y separando con claridad cada coste.",
    cta: "Descubrir cómo funciona",
    href: "/como-funciona",
  },
  "aviso-legal": {
    eyebrow: "INFORMACIÓN LEGAL",
    title: "Aviso legal",
    description:
      "Página base pendiente de completar con los datos legales del titular.",
    heading: "Documentación pendiente de validación",
    body: "Antes de la publicación comercial se incorporarán la identidad fiscal del titular, domicilio, vías de contacto y condiciones del servicio. Esta página no constituye un aviso legal definitivo.",
    cta: "Volver al inicio",
    href: "/",
  },
  privacidad: {
    eyebrow: "TUS DATOS",
    title: "Privacidad",
    description:
      "La transparencia también empieza por cómo tratamos tu información.",
    heading: "Sin recogida de solicitudes en esta fase",
    body: "La calculadora funciona temporalmente en tu navegador: no guarda sus entradas en una base de datos ni en localStorage. Antes de habilitar formularios, autenticación o herramientas de seguimiento se publicará una política completa con responsable, finalidades, base legal, conservación y derechos.",
    cta: "Volver al inicio",
    href: "/",
  },
  cookies: {
    eyebrow: "TRANSPARENCIA DIGITAL",
    title: "Cookies",
    description: "Información inicial sobre esta versión de la web.",
    heading: "Sin analítica ni publicidad añadida",
    body: "Esta base no incorpora herramientas de seguimiento, cookies publicitarias ni almacenamiento local de preferencias. La política definitiva se completará después de revisar el entorno de producción y los servicios que se incorporen.",
    cta: "Volver al inicio",
    href: "/",
  },
} as const;
export type BasePageSlug = keyof typeof basePages;
export function isBasePage(value: string): value is BasePageSlug {
  return Object.hasOwn(basePages, value);
}
