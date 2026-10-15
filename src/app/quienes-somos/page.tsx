import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { Compass, ExternalLink, Heart, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quiénes Somos · Filosofía & Comunidad',
  description:
    'Frontera 49 es parte de Grupo Orgánico Hoteles Boutique. Hospitalidad honesta, diseño urbano y comunidad en la Colonia Roma Norte, CDMX.',
  alternates: {
    canonical: 'https://www.frontera49.com/quienes-somos',
  },
};

export default function QuienesSomosPage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-16 text-center border-b border-white/10">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-2 sm:mb-3">
          Nuestra Identidad · Roma Norte
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F4F5F1] font-display uppercase tracking-wide max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          Más que un Hostal, un Espacio Vivo
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Diseñado para conectar personas, ideas y momentos auténticos en una de las zonas con mayor riqueza cultural y gastronómica de América Latina.
        </p>
      </section>

      {/* Filosofía Grupo Orgánico - Espaciado móvil optimizado */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#981A15]/10 border border-[#981A15]/30 text-[#981A15] text-[10px] sm:text-xs uppercase tracking-widest font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Sello Grupo Orgánico</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-[#F4F5F1] font-display uppercase leading-relaxed">
            “No solo ofrecer hospedaje, sino diseñar momentos que se sienten, se comparten y se recuerdan.”
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] leading-relaxed font-sans font-light">
            Cada propiedad de <strong className="text-[#F4F5F1]">Grupo Orgánico Hoteles Boutique</strong> comparte una misma raíz: el respeto por el entorno, la atención cálida y personalizada, y la creación de refugios donde el huésped conecta con la esencia de cada destino.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href="https://www.gohb.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#981A15] hover:text-[#B8241D] border border-[#981A15]/40 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#981A15]/10 transition-colors"
            >
              Visitar Grupo Orgánico Hoteles Boutique
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Donde la ciudad sucede - Espaciado móvil optimizado */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block">
              Colonia Roma Norte · CDMX
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide leading-tight">
              Donde la Ciudad Sucede
            </h2>
            <p className="text-xs sm:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
              Roma Norte es movimiento constante, diseño, propuestas gastronómicas independientes y encuentros entre creativos de todo el planeta. Hospedarte en Frontera 49 es tener todo a unos pasos: desde una caminata matutina por calles arboladas hasta una velada entre galerías de arte, librerías y coctelerías de autor.
            </p>
            <p className="text-xs sm:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
              En Frontera 49 esa energía citadina se transforma en hospitalidad cercana: un espacio donde siempre hay alguien interesante por conocer, una charla por empezar y un lugar cómodo al cual regresar a descansar.
            </p>
            <div className="pt-2 sm:pt-3">
              <WhatsAppButton
                message={WHATSAPP_TEMPLATES.general}
                label="Planear mi Estancia"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4"
              />
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative h-60 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/espacios/fachada/ohbf49_fachada02.png"
                alt="Frontera 49 fachada Roma Norte"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-60 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl pt-6 sm:pt-10">
              <Image
                src="/images/espacios/recepcion/ohbf49_recepcion05.png"
                alt="Recepción y bienvenida"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores fundamentales - Espaciado móvil optimizado */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 p-6 sm:p-8 rounded-2xl space-y-3 transition-colors">
            <h3 className="text-base sm:text-lg font-light text-[#F4F5F1] font-display uppercase tracking-wider">
              Diseño con Propósito
            </h3>
            <p className="text-xs text-[#8E9B93] leading-relaxed">
              Materiales nobles, espacios ventilados, mobiliario ergonómico y una estética contemporánea pensada para sentirse en casa.
            </p>
          </div>

          <div className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 p-6 sm:p-8 rounded-2xl space-y-3 transition-colors">
            <h3 className="text-base sm:text-lg font-light text-[#F4F5F1] font-display uppercase tracking-wider">
              Comunidad Abierta
            </h3>
            <p className="text-xs text-[#8E9B93] leading-relaxed">
              Punto de reunión para viajeros solitarios, parejas, creadores y vecinos de la Roma que comparten historias alrededor de una mesa o un buen café.
            </p>
          </div>

          <div className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 p-6 sm:p-8 rounded-2xl space-y-3 transition-colors">
            <h3 className="text-base sm:text-lg font-light text-[#F4F5F1] font-display uppercase tracking-wider">
              Calidez Humana
            </h3>
            <p className="text-xs text-[#8E9B93] leading-relaxed">
              Servicio empático, atento y sin pretensiones. Nuestro equipo de concierge está siempre listo para recomendarte las joyas secretas del barrio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
