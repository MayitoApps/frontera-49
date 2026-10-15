import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
  description:
    'Aviso de privacidad legal de Frontera 49 Roma Norte y Grupo Orgánico Hoteles Boutique.',
  alternates: {
    canonical: 'https://www.frontera49.com/aviso-de-privacidad',
  },
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1] pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-16">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold block mb-2 sm:mb-3">
          Términos Legales
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] font-display uppercase tracking-wide mb-6 sm:mb-8">
          Aviso de Privacidad
        </h1>

        <div className="space-y-5 sm:space-y-6 text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-sans font-light">
          <p>
            En cumplimiento con lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, <strong className="text-[#F4F5F1]">Frontera 49 Roma Norte</strong>, operado por Grupo Orgánico Hoteles Boutique, con domicilio en Calle Frontera 49, Colonia Roma Norte, Alcaldía Cuauhtémoc, C.P. 06700, Ciudad de México, hace de su conocimiento la siguiente política de privacidad:
          </p>

          <h2 className="text-base sm:text-lg text-[#F4F5F1] font-medium pt-3 sm:pt-4">1. Datos Personales Recabados</h2>
          <p>
            Los datos personales que recabamos a través de nuestros formularios web, WhatsApp y canales de reserva incluyen: Nombre completo, correo electrónico, número telefónico o WhatsApp, fechas estimadas de estancia, número de huéspedes y detalles o requerimientos específicos de su visita o evento.
          </p>

          <h2 className="text-base sm:text-lg text-[#F4F5F1] font-medium pt-3 sm:pt-4">2. Finalidad del Tratamiento de Datos</h2>
          <p>
            Sus datos personales serán utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2">
            <li>Gestionar, confirmar y dar seguimiento a sus reservaciones de habitaciones y experiencias.</li>
            <li>Elaborar y remitir cotizaciones para eventos privados, corporativos o talleres en nuestras instalaciones.</li>
            <li>Responder a sus dudas, comentarios y solicitudes de información remitidas mediante nuestros canales de contacto.</li>
            <li>Cumplir con las obligaciones legales y regulatorias aplicables a la industria hotelera y de hospitalidad en México.</li>
          </ul>

          <h2 className="text-base sm:text-lg text-[#F4F5F1] font-medium pt-3 sm:pt-4">3. Seguridad y Confidencialidad</h2>
          <p>
            Frontera 49 no vende, renta ni transfiere sus datos personales a terceros no relacionados con la operación de sus servicios de hospedaje y eventos. Mantenemos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.
          </p>

          <h2 className="text-base sm:text-lg text-[#F4F5F1] font-medium pt-3 sm:pt-4">4. Derechos ARCO</h2>
          <p>
            Usted tiene en todo momento el derecho de Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO), enviando una solicitud por escrito a la cuenta de correo: <a href="mailto:artes.grupoorganico@gmail.com" className="text-[#E25C54] underline hover:text-[#F4F5F1] transition-colors">artes.grupoorganico@gmail.com</a> con el asunto &quot;Derechos ARCO - Frontera 49&quot;.
          </p>

          <p className="pt-6 text-xs text-[#8E9B93]/60">
            Última actualización: Octubre 2026. Frontera 49 Roma Norte · Grupo Orgánico Hoteles Boutique.
          </p>
        </div>
      </div>
    </div>
  );
}
