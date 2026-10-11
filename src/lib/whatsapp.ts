/**
 * WhatsApp Helper Utility for Orgánico Hotel Boutique Valle
 * Official number: +52 55 7455 5091
 */

export const OFFICIAL_WHATSAPP_PHONE = "525574555091";

export type BookingServiceType =
  | "master_suite"
  | "premium_suite"
  | "familiar_suite"
  | "habitaciones_general"
  | "restaurante_milagro"
  | "brunch_valle"
  | "cena_romantica"
  | "bar_bienaventurado"
  | "cata_vino"
  | "fogatada"
  | "parapente"
  | "rzr_cuatrimotos"
  | "kayak_lago"
  | "eventos_sociales"
  | "eventos_corporativos"
  | "bodas"
  | "day_pass"
  | "origen_spa"
  | "general";

const DEFAULT_MESSAGES: Record<BookingServiceType, string> = {
  master_suite:
    "Hola Orgánico Hotel Boutique Valle, me gustaría reservar la Suite Master ($4,500.00 MXN / noche). ¿Podrían compartirme disponibilidad para mis fechas?",
  premium_suite:
    "Hola Orgánico Hotel Boutique Valle, me gustaría reservar la Suite Premium ($3,500.00 MXN / noche). ¿Tienen fechas disponibles?",
  familiar_suite:
    "Hola Orgánico Hotel Boutique Valle, me gustaría reservar la Suite Familiar ($5,500.00 MXN / noche). ¿Podrían compartirme disponibilidad para mis fechas?",
  habitaciones_general:
    "Hola Orgánico Hotel Boutique Valle, me interesa conocer la disponibilidad de habitaciones y tarifas vigentes.",
  restaurante_milagro:
    "Hola Orgánico Hotel Boutique Valle, me gustaría reservar una mesa en Restaurante Milagro. ¿Podrían apoyarme con el menú y reservación?",
  brunch_valle:
    "Hola Orgánico Hotel Boutique Valle, me gustaría información y reservar para el Brunch de fin de semana en Restaurante Milagro.",
  cena_romantica:
    "Hola Orgánico Hotel Boutique Valle, quiero planear una Cena Romántica Privada bajo las estrellas. ¿Podrían enviarme las opciones y menús de autor?",
  bar_bienaventurado:
    "Hola Orgánico Hotel Boutique Valle, me gustaría información sobre Bar Bienaventurado, su carta de mixología y disponibilidad de mesa.",
  cata_vino:
    "Hola Orgánico Hotel Boutique Valle, me interesa agendar una Cata de Vinos y maridaje durante mi estancia.",
  fogatada:
    "Hola Orgánico Hotel Boutique Valle, me gustaría reservar una Fogatada entre amigos con vino y bombones.",
  parapente:
    "Hola Orgánico Hotel Boutique Valle, me interesa reservar la experiencia de Vuelo en Parapente sobre Valle de Bravo.",
  rzr_cuatrimotos:
    "Hola Orgánico Hotel Boutique Valle, me gustaría información sobre los recorridos en RZR y cuatrimotos por los senderos de Valle.",
  kayak_lago:
    "Hola Orgánico Hotel Boutique Valle, me gustaría información sobre los paseos en lancha, kayak y paddle board en el lago.",
  eventos_sociales:
    "Hola Orgánico Hotel Boutique Valle, estoy planeando un Evento Social / Celebración y me gustaría solicitar una propuesta y disponibilidad de salones y jardines.",
  eventos_corporativos:
    "Hola Orgánico Hotel Boutique Valle, deseo cotizar un Retiro Empresarial / Evento Corporativo para mi equipo de trabajo.",
  bodas:
    "Hola Orgánico Hotel Boutique Valle, me gustaría información sobre locaciones, Capilla y banquetería para una Boda en Valle de Bravo.",
  day_pass:
    "Hola Orgánico Hotel Boutique Valle, me gustaría información sobre el Day Pass ($1,200 MXN) con alberca, desayuno y acceso a jardines.",
  origen_spa:
    "Hola Orgánico Hotel Boutique Valle, me gustaría conocer los rituales y masajes holísticos en colaboración con Origen Centro Holístico y Spa.",
  general:
    "Hola Orgánico Hotel Boutique Valle, me comunico desde su sitio web y me gustaría recibir información sobre su hotel y servicios.",
};

export function getWhatsAppUrl(
  service: BookingServiceType = "general",
  customNote?: string
): string {
  let message = DEFAULT_MESSAGES[service] || DEFAULT_MESSAGES.general;
  if (customNote) {
    message += ` (${customNote})`;
  }
  return `https://wa.me/${OFFICIAL_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
