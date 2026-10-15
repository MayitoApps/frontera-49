import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garnachería Única · Restaurante en Roma Norte',
  description:
    'Cada bocado celebra el maíz, el comal y las salsas que forman parte de nuestra identidad gastronómica. Ingredientes locales y ambiente relajado en Frontera 49.',
  alternates: {
    canonical: 'https://www.frontera49.com/restaurante',
  },
};

const DISHES_PHOTOS = [
  '/images/espacios/restaurante/ohbf49_garnacheria04.jpg',
  '/images/espacios/restaurante/ohbf49_garnacheria07.jpg',
  '/images/espacios/restaurante/ohbf49_garnacheria09.jpg',
  '/images/espacios/restaurante/ohbf49_garnacheria11.jpg',
  '/images/espacios/restaurante/ohbf49_garnacheria14.png',
  '/images/espacios/restaurante/ohbf49_garnacheria22.png',
  '/images/espacios/restaurante/ohbf49_garnacheria23.jpeg',
  '/images/espacios/restaurante/ohbf49_garnacheria44.png',
  '/images/espacios/restaurante/ohbf49_garnacheria47.png',
  '/images/espacios/restaurante/ohbf49_garnacheria49.png',
  '/images/espacios/restaurante/ohbf49_garnacheria53.png',
  '/images/espacios/restaurante/ohbf49_garnacheria66.png',
];

export default function RestaurantePage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 text-center border-b border-white/10">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-2 sm:mb-3">
          Gastronomía Mexicana Tradicional · Roma Norte
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F4F5F1] font-display uppercase tracking-wide max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          Garnachería Única
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Cada bocado celebra el maíz, el comal y las salsas que forman parte de nuestra identidad culinaria más genuina.
        </p>
      </section>

      {/* Sección Editorial 1: Manifiesto Culinario */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#981A15]/40 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest font-sans">
              <Flame className="w-3.5 h-3.5 text-[#981A15]" />
              <span>Ingredientes Frescos y Locales</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              La calidad que nace desde el origen
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
              En nuestra cocina, creemos que la calidad empieza desde el origen. Por eso, trabajamos día a día con ingredientes frescos y cuidadosamente seleccionados, provenientes directamente de mercados y pequeños productores locales.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
              Esta estrecha colaboración no solo nos permite mantener vivo el sabor auténtico y tradicional de nuestras garnachas, sino que también refuerza nuestro compromiso con la economía de nuestra comunidad y el consumo consciente.
            </p>

            <div className="pt-2 sm:pt-4">
              <WhatsAppButton
                message={WHATSAPP_TEMPLATES.restaurante}
                label="Reservar Mesa en Garnachería"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 sm:px-8 sm:py-4"
              />
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative h-48 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/espacios/restaurante/ohbf49_garnacheria04.jpg"
                alt="Platillos Garnachería Única"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl pt-4 sm:pt-8">
              <Image
                src="/images/espacios/restaurante/ohbf49_garnacheria14.png"
                alt="Comal y Tradición"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Editorial 2: Un lugar para compartir */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block">
            Capacidad: 50 Pax · Ambiente Social
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
            Un punto de encuentro casual y sin pretensiones
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
            Ubicada en el corazón de uno de los barrios más dinámicos de la ciudad, Garnachería Única es mucho más que un restaurante; es el punto de encuentro ideal para crear recuerdos inolvidables rodeados de amigos, buena plática y sabor auténtico.
          </p>
        </div>
      </section>

      {/* Galería Fotográfica de Platillos */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold mb-1">
            Nuestra Mesa
          </h3>
          <p className="text-xl sm:text-3xl font-light text-[#F4F5F1] font-display uppercase">
            Galería Culinaria
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4">
          {DISHES_PHOTOS.map((src, i) => (
            <div
              key={i}
              className="relative h-40 sm:h-52 md:h-60 rounded-xl overflow-hidden border border-white/10 shadow-lg group"
            >
              <Image
                src={src}
                alt={`Platillo o espacio Garnachería ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <WhatsAppButton
            message={WHATSAPP_TEMPLATES.restaurante}
            label="Consultar Menú del Día & Reservar"
            variant="primary"
            className="text-xs sm:text-sm px-7 py-3.5 sm:px-8 sm:py-4"
          />
        </div>
      </section>
    </div>
  );
}
