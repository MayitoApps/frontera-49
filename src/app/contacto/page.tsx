import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto & Ubicación · Roma Norte CDMX',
  description:
    'Contáctanos para reservaciones, eventos y dudas sobre Frontera 49 Roma Norte. Ubicación en calle Frontera 49, líneas telefónicas y WhatsApp directo.',
  alternates: {
    canonical: 'https://www.frontera49.com/contacto',
  },
};

export default function ContactoPage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16 text-center border-b border-white/10">
        <span className="text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-2 sm:mb-3">
          Atención al Huésped · Roma Norte
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#F4F5F1] font-display uppercase tracking-wide max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          Estamos Aquí para Ti
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-[#8E9B93] max-w-2xl mx-auto font-sans font-light leading-relaxed">
          ¿Tienes dudas sobre tu próxima visita, deseas cotizar un evento privado o reservar una habitación? Escríbenos o visítanos directamente en la Roma Norte.
        </p>
      </section>

      {/* Grid de Contacto y Formulario - Espaciado móvil optimizado */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Columna Izquierda: Información de Contacto (Correo Electrónico removido según solicitud) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-[#121715] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-5 sm:space-y-6 shadow-xl">
              <h2 className="text-lg sm:text-xl font-light text-[#F4F5F1] font-display uppercase tracking-wider border-b border-white/10 pb-3">
                Información Oficial
              </h2>

              {/* Dirección */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#981A15]/15 border border-[#981A15]/30 flex items-center justify-center text-[#981A15] flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] block mb-0.5">
                    Ubicación
                  </span>
                  <p className="text-xs sm:text-sm text-[#F4F5F1] leading-relaxed">
                    Frontera 49, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX
                  </p>
                </div>
              </div>

              {/* Teléfonos Fijos */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#981A15]/15 border border-[#981A15]/30 flex items-center justify-center text-[#981A15] flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] block mb-0.5">
                    Líneas Fijas
                  </span>
                  <div className="text-xs sm:text-sm text-[#F4F5F1] space-x-2">
                    <a href="tel:5596969073" className="hover:text-[#981A15] transition-colors">
                      55 9696 9073
                    </a>
                    <span>/</span>
                    <a href="tel:5596910966" className="hover:text-[#981A15] transition-colors">
                      55 9691 0966
                    </a>
                  </div>
                </div>
              </div>

              {/* Teléfonos Móviles */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#981A15]/15 border border-[#981A15]/30 flex items-center justify-center text-[#981A15] flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] block mb-0.5">
                    Líneas Móviles
                  </span>
                  <div className="text-xs sm:text-sm text-[#F4F5F1] space-x-2">
                    <a href="tel:5556455347" className="hover:text-[#981A15] transition-colors">
                      55 5645 5347
                    </a>
                    <span>/</span>
                    <a href="tel:5555737822" className="hover:text-[#981A15] transition-colors">
                      55 5573 7822
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Oficial */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#981A15]/15 border border-[#981A15]/30 flex items-center justify-center text-[#981A15] flex-shrink-0">
                  <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                    <Image src="/images/whatsapp-white.png" alt="WhatsApp" fill className="object-contain" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] block mb-0.5">
                    WhatsApp Concierge
                  </span>
                  <a
                    href="https://wa.me/525574555091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#F4F5F1] hover:text-[#981A15] transition-colors block font-medium"
                  >
                    +52 55 7455 5091
                  </a>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#981A15]/15 border border-[#981A15]/30 flex items-center justify-center text-[#981A15] flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] block mb-0.5">
                    Horario de Atención
                  </span>
                  <p className="text-xs sm:text-sm text-[#F4F5F1]">Lunes a domingo de 7:00 a.m. a 9:00 p.m.</p>
                </div>
              </div>
            </div>

            {/* Mapa de Google Interactivo */}
            <div className="h-56 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <iframe
                title="Ubicación Frontera 49 Roma Norte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6394576395984!2d-99.1599889!3d19.420800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff374bc7e583%3A0xc3b83c5000000000!2sFrontera%2049%2C%20Roma%20Nte.%2C%20Cuauht%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Columna Derecha: Formulario Glassmorphism */}
          <div className="lg:col-span-7">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs uppercase tracking-widest text-[#981A15] font-semibold block mb-1.5">
                Envía un Mensaje
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                Formulario de Contacto
              </h2>
              <p className="text-xs sm:text-sm text-[#8E9B93] mt-1.5 leading-relaxed">
                Completa tus datos y recibirás una respuesta personalizada de nuestro equipo de concierge a la brevedad.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
