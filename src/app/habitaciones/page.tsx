import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { CheckCircle2, Bed, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Habitaciones & Descanso en Roma Norte',
  description:
    'Habitaciones pensadas para descansar bien y seguir viviendo la Ciudad de México a tu propio ritmo. Habitaciones sencillas y deluxe en Frontera 49 Roma Norte.',
  alternates: {
    canonical: 'https://www.frontera49.com/habitaciones',
  },
};

export default function HabitacionesPage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 text-center border-b border-white/10">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-2 sm:mb-3">
          Hospedaje Boutique · Roma Norte
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F4F5F1] font-display uppercase tracking-wide max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          Habitaciones para el Descanso y la Conexión
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Después de recorrer las calles, galerías y cafés de la Roma, encuentra un espacio honesto, práctico y con diseño para recargar energía.
        </p>
      </section>

      {/* 1. Habitación Deluxe */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="relative h-64 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/habitaciones/deluxe/ohbf49habitacion_delux01.png"
                alt="Habitación Deluxe Frontera 49 Roma Norte"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/habitaciones/deluxe/ohbf49habitacion_deluxe02.png"
                  alt="Detalles Habitación Deluxe"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/habitaciones/deluxe/ohbf49habitacion_deluxe04.png"
                  alt="Cama Habitación Deluxe"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-20 sm:h-28 md:h-32 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/habitaciones/deluxe/ohbf49habitacion_deluxe05.png"
                  alt="Interior Habitación Deluxe"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#981A15]/15 border border-[#981A15]/40 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#981A15]" />
              <span>Máxima Intimidad</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Habitación Deluxe
            </h2>

            {/* Tarifa Oficial */}
            <div className="flex items-baseline gap-2.5 py-1">
              <span className="text-3xl sm:text-4xl font-light text-[#F4F5F1] font-display">
                $1,392.00
              </span>
              <span className="text-xs uppercase tracking-widest text-[#981A15] font-semibold">
                MXN / Noche
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
              Nuestra opción más amplia y exclusiva. Diseñada para parejas o viajeros que buscan privacidad total en un entorno cálido, con baño privado, colchón de alta gama y amenidades orgánicas seleccionadas.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#F4F5F1]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] flex-shrink-0" />
                <span>Cama King / Queen con sábanas de alta densidad</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] flex-shrink-0" />
                <span>Baño privado completo con regadera de lluvia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] flex-shrink-0" />
                <span>Wifi dedicado para nómadas digitales</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] flex-shrink-0" />
                <span>Acceso completo a Rooftop, Coworking y Cine</span>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <WhatsAppButton
                message={WHATSAPP_TEMPLATES.habitacionDeluxe}
                label="Reservar Deluxe · $1,392 MXN"
                variant="primary"
                className="w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 sm:px-8 sm:py-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Habitación Sencilla */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest">
              <Bed className="w-3.5 h-3.5 text-[#981A15]" />
              <span>23 Habitaciones Disponibles</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Habitación Sencilla
            </h2>

            {/* Tarifa Oficial */}
            <div className="flex items-baseline gap-2.5 py-1">
              <span className="text-3xl sm:text-4xl font-light text-[#F4F5F1] font-display">
                $928.00
              </span>
              <span className="text-xs uppercase tracking-widest text-[#981A15] font-semibold">
                MXN / Noche
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-[#8E9B93] leading-relaxed font-sans font-light">
              Práctica, accesible y funcional. Nuestras 23 habitaciones sencillas están pensadas para viajeros individuales o parejas que buscan un lugar cómodo, seguro y con carácter para descansar mientras viven la vibrante energía de Roma Norte.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#F4F5F1]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] flex-shrink-0" />
                <span>Espacio acogedor para descanso profundo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] flex-shrink-0" />
                <span>Baños compartidos impecables con servicio constante</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] flex-shrink-0" />
                <span>Acceso directo a rooftop, áreas comunes y coworking</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#981A15] flex-shrink-0" />
                <span>Lockers individuales y seguridad 24/7</span>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <WhatsAppButton
                message={WHATSAPP_TEMPLATES.habitacionSencilla}
                label="Reservar Sencilla · $928 MXN"
                variant="outline"
                className="w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 sm:px-8 sm:py-4"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3 sm:space-y-4 order-1 lg:order-2">
            <div className="relative h-64 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/habitaciones/sencilla/ohbf49habitacion_sencilla02.png"
                alt="Habitación Sencilla Frontera 49 Roma Norte"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="relative h-24 sm:h-32 md:h-36 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/habitaciones/sencilla/ohbf49habitacion_sencilla04.png"
                  alt="Detalles Habitación Sencilla"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 sm:h-32 md:h-36 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/habitaciones/sencilla/ohbf49habitacion_sencilla05.png"
                  alt="Espacio de descanso"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#0E1210]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-1.5">
              Disponibilidad Inmediata
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Planea tu estancia con nosotros
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#8E9B93]">
              Indícanos tus fechas tentativas para confirmar disponibilidad en minutos.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
