import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { Heart, Palette, Film, Flame, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experiencias & Momentos | Cenas Románticas & Arte',
  description:
    'Cenas románticas privadas ($5,000 MXN / pareja), talleres de Pintor por un Día, Noches de Cine y parrilladas en Rooftop en Roma Norte.',
  alternates: {
    canonical: 'https://www.frontera49.com/momentos',
  },
};

export default function MomentosPage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 text-center border-b border-white/10">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold block mb-2 sm:mb-3">
          Momentos Inolvidables · Roma Norte
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F4F5F1] font-display uppercase tracking-wide max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          Experiencias Diseñadas para Conectar
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Diseñamos atmósferas que se sienten, se comparten y se recuerdan. Momentos para celebrar aniversarios, crear arte con vino o compartir una noche especial.
        </p>
      </section>

      {/* 1. Cena Romántica */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="relative h-64 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/experiencias/cena-romantica/ohbf49_cenas-romanticas05.jpg"
                alt="Cena Romántica Roma Norte"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-3.5 right-3.5 bg-[#981A15] text-[#F4F5F1] font-semibold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                $5,000.00 MXN por pareja
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/experiencias/cena-romantica/ohbf49_cenas-romanticas06.jpg"
                  alt="Detalles de la mesa romántica"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/experiencias/cena-romantica/ohbf49_cenas-romanticas15.jpg"
                  alt="Velas y flores"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/experiencias/cena-romantica/ohbf49_cenas-romanticas17.jpg"
                  alt="Ambiente nocturno romántico"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#981A15]/15 border border-[#981A15]/40 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-[#E25C54]" />
              <span>Experiencia Íntima en Pareja</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Cena Romántica de Autor
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
              Porque algunos aniversarios y momentos merecen un escenario diferente. Preparamos un montaje privado en un rincón reservado con atmósfera a la luz de las velas, música sutil y atención personalizada.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#F4F5F1]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E25C54] flex-shrink-0" />
                <span>Decoración romántica exclusiva (velas, montaje botánico)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E25C54] flex-shrink-0" />
                <span>Menú de 4 tiempos diseñado por nuestro chef</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E25C54] flex-shrink-0" />
                <span>Botella de vino tinto seleccionada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E25C54] flex-shrink-0" />
                <span>Servicio de mesero privado durante toda la experiencia</span>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <WhatsAppButton
                message={WHATSAPP_TEMPLATES.cenaRomantica}
                label="Reservar Cena Romántica ($5,000 MXN)"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 sm:px-8 sm:py-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pintor por un Día */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest">
              <Palette className="w-3.5 h-3.5 text-[#E25C54]" />
              <span>Creatividad & Convivencia</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Pintor por un Día
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
              Despierta tu lado artístico en nuestro foro cultural. Una experiencia donde te brindamos caballete, lienzo, pinturas y una copa de vino mientras eres guiado paso a paso para crear tu propia obra de arte.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#F4F5F1]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E25C54] flex-shrink-0" />
                <span>Todos los materiales incluidos (lienzo, acrílicos, pinceles)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E25C54] flex-shrink-0" />
                <span>Copa de vino de cortesía</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E25C54] flex-shrink-0" />
                <span>Ideal para parejas, amigos o eventos privados</span>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <WhatsAppButton
                message={WHATSAPP_TEMPLATES.pintor}
                label="Apartar Lugar para Pintor por un Día"
                variant="outline"
                className="w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 sm:px-8 sm:py-4"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <div className="relative h-64 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/experiencias/pintor/img_6687.jpg"
                alt="Pintor por un Día Frontera 49"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/experiencias/pintor/img_6689.jpg"
                  alt="Taller de pintura en Roma Norte"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/experiencias/pintor/img_6694.jpg"
                  alt="Lienzos y pinturas"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/experiencias/pintor/img_6710.jpg"
                  alt="Comunidad creativa"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Noches de Cine & Parrilladas */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Noches de Cine */}
          <div className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest">
                <Film className="w-3.5 h-3.5 text-[#E25C54]" />
                <span>Viernes & Sábado 7:00 PM</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                Noches de Cine Boutique
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed">
                Los fines de semana el hostal se transforma en un refugio para relajarse y compartir una buena película con palomitas, bebidas y ambiente íntimo.
              </p>
            </div>
            <WhatsAppButton
              message={WHATSAPP_TEMPLATES.cine}
              label="Consultar Funciones de Cine"
              variant="outline"
              className="w-full text-center"
            />
          </div>

          {/* Parrillada en Rooftop */}
          <div className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 text-[#E25C54]" />
                <span>A la Medida · Terraza Abierta</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                Parrilladas en el Rooftop
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed">
                Nuestra terraza al aire libre se convierte en el escenario ideal para disfrutar de cortes selectos con amigos. Organizamos todo a la medida según el número de invitados.
              </p>
            </div>
            <WhatsAppButton
              message={WHATSAPP_TEMPLATES.rooftop}
              label="Cotizar Parrillada en Rooftop"
              variant="outline"
              className="w-full text-center"
            />
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#0E1210]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold block mb-1.5">
              Atención Personalizada
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Cotiza tu Experiencia a la Medida
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#8E9B93]">
              Cuéntanos qué fecha tienes en mente y personalizamos cada detalle para ti.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
