import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { ChevronDown, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0D0C]">
      {/* Fondo con Hero.PNG optimizado con Next/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Frontera 49 Roma Norte Boutique Hostal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Degradados editoriales de alto contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/75 to-[#0A0D0C]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,13,12,0.3)_0%,rgba(10,13,12,0.85)_100%)]" />
      </div>

      {/* Contenido Hero - Espaciado móvil optimizado y jerarquía visual estricta */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-28 pb-12 sm:py-32 text-center flex flex-col items-center">
        {/* Kicker superior */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#981A15]/40 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest font-sans mb-5 sm:mb-8">
          <MapPin className="w-3.5 h-3.5 text-[#E25C54]" />
          <span>Roma Norte · Ciudad de México</span>
        </div>

        {/* Título Principal: En móvil mucho más grande y dominante que el subtítulo */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F4F5F1] tracking-tight font-display leading-[1.12] max-w-4xl mx-auto mb-4 sm:mb-6">
          Así se siente la Ciudad, <br className="hidden sm:inline" />
          <span className="text-[#E25C54] font-normal italic font-serif drop-shadow-md">
            Así se Siente Frontera 49.
          </span>
        </h1>

        {/* Subtítulo editorial: Claramente menor en escala móvil para máximo contraste jerárquico */}
        <p className="text-xs sm:text-base md:text-lg text-[#F4F5F1]/80 max-w-2xl mx-auto font-sans font-light leading-relaxed mb-6 sm:mb-10 px-2 sm:px-0">
          Un refugio urbano de hospitalidad boutique en el corazón cultural de Roma Norte. Espacios con identidad, comunidad creativa y el balance perfecto entre descanso y vida citadina.
        </p>

        {/* Acciones principales con el rojo característico y logo WhatsApp blanco (Compactos y estilizados en móvil) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
          <WhatsAppButton
            message={WHATSAPP_TEMPLATES.general}
            label="Reservar Estancia"
            variant="primary"
            className="w-full max-w-[210px] sm:max-w-none sm:w-auto !text-[11px] sm:!text-sm !px-4 !py-2 sm:!px-8 sm:!py-3.5 tracking-wider sm:tracking-widest"
          />

          <Link
            href="/habitaciones"
            className="w-full max-w-[210px] sm:max-w-none sm:w-auto inline-flex items-center justify-center !px-4 !py-2 sm:!px-8 sm:!py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-[#F4F5F1] hover:border-[#981A15] !text-[11px] sm:!text-sm uppercase tracking-wider sm:tracking-widest font-sans font-medium transition-all duration-300"
          >
            Ver Habitaciones
          </Link>
        </div>

        {/* Micro-puntos de valor compactos en móvil */}
        <div className="mt-8 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 border-t border-white/10 pt-5 sm:pt-8 w-full max-w-3xl text-center text-[10px] sm:text-xs uppercase tracking-widest text-[#8E9B93]">
          <div className="bg-white/[0.02] sm:bg-transparent p-2 sm:p-0 rounded-lg">
            <span className="text-[#E25C54] font-bold block text-sm sm:text-base">23</span>
            <span>Habitaciones</span>
          </div>
          <div className="bg-white/[0.02] sm:bg-transparent p-2 sm:p-0 rounded-lg">
            <span className="text-[#E25C54] font-bold block text-sm sm:text-base">Rooftop</span>
            <span>Vista Panorámica</span>
          </div>
          <div className="bg-white/[0.02] sm:bg-transparent p-2 sm:p-0 rounded-lg">
            <span className="text-[#E25C54] font-bold block text-sm sm:text-base">Foro Cultural</span>
            <span>Arte & Talleres</span>
          </div>
          <div className="bg-white/[0.02] sm:bg-transparent p-2 sm:p-0 rounded-lg">
            <span className="text-[#E25C54] font-bold block text-sm sm:text-base">Coworking</span>
            <span>Fibra Óptica</span>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="mt-6 sm:mt-10 text-[#8E9B93] animate-bounce">
          <ChevronDown className="w-5 h-5 text-[#E25C54]" />
        </div>
      </div>
    </section>
  );
}
