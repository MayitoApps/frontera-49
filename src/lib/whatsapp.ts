const WHATSAPP_NUMBER = '525574555091';

export function getWhatsAppUrl(customMessage: string): string {
  const encoded = encodeURIComponent(customMessage.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_TEMPLATES = {
  general: 'Hola Frontera 49 Roma Norte, me gustaría solicitar información general y disponibilidad para mi próxima estancia.',
  habitacionSencilla: 'Hola Frontera 49 Roma Norte, deseo consultar disponibilidad y reservar una Habitación Sencilla ($928.00 MXN).',
  habitacionDeluxe: 'Hola Frontera 49 Roma Norte, me interesa consultar disponibilidad y reservar la Habitación Deluxe ($1,392.00 MXN).',
  cenaRomantica: 'Hola Frontera 49 Roma Norte, quisiera reservar la experiencia de Cena Romántica de 4 tiempos ($5,000 MXN). ¿Qué fechas tienen disponibles?',
  pintor: 'Hola Frontera 49 Roma Norte, me gustaría apartar lugar para la experiencia creativa de Pintor por un Día.',
  coworking: 'Hola Frontera 49 Roma Norte, requiero información sobre pases de Coworking y espacios para nómadas digitales.',
  foroCultural: 'Hola Frontera 49 Roma Norte, me gustaría consultar disponibilidad para organizar un evento / taller en el Foro Cultural.',
  restaurante: 'Hola Garnachería Única en Frontera 49, quisiera reservar una mesa para disfrutar de su menú tradicional.',
  rooftop: 'Hola Frontera 49 Roma Norte, me gustaría cotizar un evento privado o reunión en el Rooftop con vista a la ciudad.',
  cine: 'Hola Frontera 49 Roma Norte, quisiera información sobre las Noches de Cine de fin de semana.',
  alianzas: 'Hola Frontera 49 Roma Norte, me gustaría presentar una propuesta de colaboración artística, marca o pop-up.',
};
