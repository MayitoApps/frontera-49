import React from 'react';
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { Handshake, Palette, Sparkles, Store, Flame, Radio } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hagamos Equipo · Alianzas, Arte & Creadores',
  description:
    'Colabora con Frontera 49 Roma Norte. Espacios para exposiciones, bazares, showrooms, talleres, activaciones de marca y pop-ups.',
  alternates: {
    canonical: 'https://www.frontera49.com/hagamos-equipo',
  },
};

const AREAS = [
  {
    title: 'Exposición & Arte',
    desc: 'Un espacio abierto para artistas, fotógrafos, ilustradores y escultores. Exposiciones temporales, intervenciones en muros e instalaciones.',
    icon: Palette,
  },
  {
    title: 'Talleres & Workshops',
    desc: 'Comparte tu conocimiento, inspira a otros y crea comunidad. Espacio ideal para círculos creativos, conferencias y talleres gastronómicos.',
    icon: Sparkles,
  },
  {
    title: 'Bazares, Mercaditos & Pop-ups',
    desc: 'Plataforma para marcas locales, diseño independiente, showrooms y activaciones comerciales con afluencia constante.',
    icon: Store,
  },
  {
    title: 'Rooftop Sessions',
    desc: 'Atardeceres, música acústica, lanzamientos de podcasts, networking y experiencias al aire libre que conectan con el espíritu de Roma Norte.',
    icon: Radio,
  },
];

export default function HagamosEquipoPage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-16 text-center border-b border-white/10">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-2 sm:mb-3">
          Colaboraciones & Alianzas · Roma Norte
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F4F5F1] font-display uppercase tracking-wide max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          Hagamos Equipo
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Buscamos colaborar con artistas, emprendedores, marcas y colectivos que quieran construir experiencias auténticas dentro de una comunidad abierta y diversa.
        </p>
      </section>

      {/* Áreas de Alianza - Espaciado móvil optimizado */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AREAS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 p-6 sm:p-8 rounded-2xl space-y-3 sm:space-y-4 shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#981A15]/15 border border-[#981A15]/30 flex items-center justify-center text-[#981A15]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <WhatsAppButton
            message={WHATSAPP_TEMPLATES.alianzas}
            label="Presentar Propuesta por WhatsApp"
            variant="primary"
            className="w-full sm:w-auto text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4"
          />
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12 sm:py-24 bg-[#0E1210]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-1.5 sm:mb-2">
              Conexión Creativa
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Cuéntanos sobre tu Proyecto
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#8E9B93]">
              Compártenos tu propuesta, dossier o idea y nuestro equipo de curaduría se pondrá en contacto contigo.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
