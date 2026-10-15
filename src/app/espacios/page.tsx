import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Nuestros Espacios Vivos | Rooftop, Coworking & Galería',
  description:
    'Rooftop panorámico (80 pax), Foro Cultural (70 pax), Coworking y Cafetería en Roma Norte. Espacios versátiles para trabajar, crear y celebrar.',
  alternates: {
    canonical: 'https://www.frontera49.com/espacios',
  },
};

const ESPACIOS_DATA = [
  {
    id: 'rooftop',
    title: 'Rooftop Frontera 49',
    subtitle: 'El escenario que todos recordarán',
    specs: 'Capacidad: 80 pax · 22 m x 8 m',
    description:
      'Descubre nuestro exclusivo espacio al aire libre con vista a los árboles y la arquitectura emblemática de Roma Norte. Perfecto para atardeceres, coctelería de autor, networking, música acústica y eventos privados.',
    image: '/images/espacios/rooftop/ohbf49_rooftop01.jpeg',
    gallery: [
      '/images/espacios/rooftop/ohbf49_rooftop02.png',
      '/images/espacios/rooftop/ohbf49_rooftop04.jpeg',
      '/images/espacios/rooftop/ohbf49_rooftop06.jpeg',
    ],
    whatsappMsg: WHATSAPP_TEMPLATES.rooftop,
    ctaLabel: 'Cotizar Rooftop',
  },
  {
    id: 'foro-cultural',
    title: 'Foro Cultural & Galería',
    subtitle: 'Un espacio vivo que se adapta a tu visión',
    specs: 'Capacidad: 70 pax · 13 m x 5.5 m',
    description:
      'Un entorno versátil y con carácter para dar vida a tus ideas. Diseñado para exposiciones de arte, conferencias, talleres creativos, presentaciones de producto y encuentros comunitarios.',
    image: '/images/espacios/foro-cultural/ohbf49_galeria-re01.png',
    gallery: [
      '/images/espacios/foro-cultural/ohbf49_galeria-re02.png',
      '/images/espacios/foro-cultural/ohbf49_galeria-re03.jpg',
      '/images/espacios/foro-cultural/ohbf49_galeria-re05.png',
    ],
    whatsappMsg: WHATSAPP_TEMPLATES.foroCultural,
    ctaLabel: 'Cotizar Foro Cultural',
  },
  {
    id: 'coworking',
    title: 'Coworking Hub',
    subtitle: 'Conexión y productividad para nómadas creativos',
    specs: 'Pases diarios, semanales & mensuales',
    description:
      'Ya sea que necesites un escritorio inspirador para concentrarte o un entorno dinámico para hacer networking, nuestras instalaciones cuentan con internet simétrico de alta velocidad, iluminación natural y café continuo.',
    image: '/images/espacios/coworking/ohbf49_coworking02.png',
    gallery: [
      '/images/espacios/coworking/ohbf49_coworking03.png',
      '/images/espacios/coworking/ohbf49_coworking07.png',
      '/images/espacios/coworking/ohbf49_coworking10.png',
    ],
    whatsappMsg: WHATSAPP_TEMPLATES.coworking,
    ctaLabel: 'Información Coworking',
  },
  {
    id: 'cafeteria',
    title: 'Cafetería de Especialidad',
    subtitle: 'Café de autor y repostería artesanal',
    specs: 'Abierto todos los días',
    description:
      'Granos seleccionados de fincas mexicanas preparados con maestría por nuestro equipo de baristas. El punto de partida perfecto para comenzar la mañana en la Roma o hacer una pausa aromática por la tarde.',
    image: '/images/espacios/cafeteria/ohbf49_cafeteria02.png',
    gallery: [
      '/images/espacios/cafeteria/ohbf49_cafeteria03.png',
      '/images/espacios/cafeteria/ohbf49_cafeteria04.png',
      '/images/espacios/cafeteria/ohbf49_cafeteria08.png',
    ],
    whatsappMsg: WHATSAPP_TEMPLATES.general,
    ctaLabel: 'Conocer Cafetería',
  },
  {
    id: 'cine',
    title: 'Sala de Cine Boutique',
    subtitle: 'Relajación y cultura audiovisual',
    specs: 'Viernes y sábado 7:00 pm',
    description:
      'Un micro-cine acogedor con sofás, iluminación tenue y proyección de alta fidelidad para disfrutar ciclos de cine independiente, documentales o noches de películas con amigos.',
    image: '/images/espacios/cine/ohbf49_sala-de-cine05.png',
    gallery: [
      '/images/espacios/cine/ohbf49_sala-de-cine08.png',
      '/images/generales/ohbf49_habitaciones02.png',
    ],
    whatsappMsg: WHATSAPP_TEMPLATES.cine,
    ctaLabel: 'Consultar Cartelera',
  },
];

export default function EspaciosPage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 text-center border-b border-white/10">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-2 sm:mb-3">
          Comunidad & Arquitectura
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F4F5F1] font-display uppercase tracking-wide max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          Espacios para Encontrarte
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Rooftop, áreas comunes, coworking, foro cultural y rincones compartidos que invitan a conversar, trabajar, crear o simplemente pasarla bien al ritmo de Roma Norte.
        </p>
      </section>

      {/* Lista de Espacios - Espaciado móvil optimizado */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 space-y-14 sm:space-y-20">
        {ESPACIOS_DATA.map((espacio, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={espacio.id}
              id={espacio.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-white/10 pb-12 sm:pb-16 last:border-b-0"
            >
              {/* Fotos del Espacio */}
              <div
                className={`lg:col-span-7 space-y-2.5 sm:space-y-3.5 ${
                  isEven ? 'order-1' : 'order-1 lg:order-2'
                }`}
              >
                <div className="relative h-60 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src={espacio.image}
                    alt={espacio.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#0A0D0C]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#981A15]/40 text-[10px] sm:text-xs uppercase tracking-wider text-[#F4F5F1]">
                    {espacio.specs}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {espacio.gallery.map((thumb, i) => (
                    <div
                      key={i}
                      className="relative h-18 sm:h-24 md:h-28 rounded-lg overflow-hidden border border-white/10"
                    >
                      <Image
                        src={thumb}
                        alt={`${espacio.title} vista ${i + 1}`}
                        fill
                        sizes="20vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenido Editorial del Espacio */}
              <div
                className={`lg:col-span-5 space-y-3 sm:space-y-5 ${
                  isEven ? 'order-2' : 'order-2 lg:order-1'
                }`}
              >
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-1">
                    {espacio.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                    {espacio.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
                  {espacio.description}
                </p>

                <div className="pt-2 sm:pt-4">
                  <WhatsAppButton
                    message={espacio.whatsappMsg}
                    label={espacio.ctaLabel}
                    variant="primary"
                    className="w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 sm:px-8 sm:py-3.5"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
