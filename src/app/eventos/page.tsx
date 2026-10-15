import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { Sparkles, Calendar, Users, Coffee, Building2, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eventos Privados & Corporativos en Roma Norte',
  description:
    'Rooftop (80 pax), Foro Cultural (70 pax) y Restaurante para lanzamientos de producto, press days, aniversarios y talleres en CDMX.',
  alternates: {
    canonical: 'https://www.frontera49.com/eventos',
  },
};

const EVENT_TYPES = [
  {
    title: 'Lanzamientos & Press Days',
    desc: 'Convierte tu presentación en una experiencia memorable. Press days, activaciones, pop-ups, showrooms y eventos para creadores de contenido.',
    icon: Sparkles,
  },
  {
    title: 'Reuniones & Team Building',
    desc: 'Espacios flexibles, coffee break continuo, proyectores y todo lo necesario para que tus sesiones corporativas o de integración fluyan con comodidad.',
    icon: Building2,
  },
  {
    title: 'Celebraciones Privadas',
    desc: 'Celebra cumpleaños, aniversarios, cenas de maridaje o cócteles exclusivos con el cielo de Roma Norte como testigo.',
    icon: Users,
  },
];

export default function EventosPage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-16 text-center border-b border-white/10">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-2 sm:mb-3">
          Sedes Exclusivas · Roma Norte
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F4F5F1] font-display uppercase tracking-wide max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          Eventos que se Viven y se Recuerdan
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Un espacio con carácter, diseño contemporáneo y ubicación estratégica en una de las colonias más vibrantes de la Ciudad de México.
        </p>
      </section>

      {/* Tipos de Eventos - Espaciado móvil optimizado */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {EVENT_TYPES.map((evt, i) => {
            const Icon = evt.icon;
            return (
              <div
                key={i}
                className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 p-6 sm:p-8 rounded-2xl space-y-3 sm:space-y-4 shadow-xl transition-all"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#981A15]/15 border border-[#981A15]/30 flex items-center justify-center text-[#981A15]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                  {evt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-sans font-light">
                  {evt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Todo lo que necesitas en un solo lugar - Espaciado móvil optimizado */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block">
              Servicio Integral
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide leading-tight">
              Todo lo que necesitas en un solo lugar
            </h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#8E9B93]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#F4F5F1]">Espacios Versátiles:</strong> Rooftop panorámico (80 pax), Foro Cultural (70 pax) y restaurante privado (50 pax).</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#F4F5F1]">Hospedaje en el Mismo Sitio:</strong> 23 habitaciones para que tus invitados o equipo descansen sin traslados.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#F4F5F1]">Gastronomía & Coctelería:</strong> Menús personalizados de bocadillos mexicanos, comal, maridajes o barras de autor.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#F4F5F1]">Atención Concierge:</strong> Asesoría dedicada desde el primer contacto hasta el cierre de tu evento.</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <WhatsAppButton
                message={WHATSAPP_TEMPLATES.foroCultural}
                label="Cotizar Evento por WhatsApp"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4"
              />
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative h-56 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/espacios/rooftop/ohbf49_rooftop06.jpeg"
                alt="Evento en Rooftop"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-56 sm:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl pt-6 sm:pt-8">
              <Image
                src="/images/espacios/foro-cultural/ohbf49_galeria-re05.png"
                alt="Foro Cultural eventos"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12 sm:py-24 bg-[#0E1210]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-1.5 sm:mb-2">
              Solicitud de Propuesta
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Cuéntanos sobre tu evento
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#8E9B93]">
              Indícanos la fecha estimada y cantidad de asistentes para prepararte un dossier y cotización personalizada.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
