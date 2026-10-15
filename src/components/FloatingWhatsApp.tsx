'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { getWhatsAppUrl, WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import { X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const generalUrl = getWhatsAppUrl(WHATSAPP_TEMPLATES.general);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Tooltip / Quick card popup */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#121715]/95 border border-[#981A15]/40 backdrop-blur-xl p-4 rounded-xl shadow-2xl text-left animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#981A15] animate-pulse" />
              <span className="text-xs font-semibold text-[#F4F5F1] tracking-wider uppercase font-sans">
                Concierge Frontera 49
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8E9B93] hover:text-[#F4F5F1] p-1 rounded"
              aria-label="Cerrar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#8E9B93] mb-3 leading-relaxed font-sans">
            ¿Planeando tu viaje a la Roma Norte? Escríbenos directamente y te ayudamos a reservar tu habitación o experiencia.
          </p>
          <a
            href={generalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#981A15] hover:bg-[#B8241D] text-[#F4F5F1] font-semibold text-xs rounded-lg uppercase tracking-wider transition-colors shadow-glow-red"
          >
            <div className="relative w-4 h-4">
              <Image src="/images/whatsapp-white.png" alt="WhatsApp" fill className="object-contain" />
            </div>
            Chatear ahora
          </a>
        </div>
      )}

      {/* Main floating button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#121715] border border-[#981A15]/60 hover:border-[#981A15] shadow-2xl hover:shadow-glow-red transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          {/* Ambient pulse effect en rojo Frontera 49 */}
          <div className="absolute inset-0 rounded-full bg-[#981A15]/25 animate-ping opacity-30 pointer-events-none" />

          {/* WhatsApp icon */}
          <div className="relative w-6 h-6 sm:w-7 sm:h-7">
            <Image
              src="/images/whatsapp-white.png"
              alt="WhatsApp Frontera 49"
              fill
              className="object-contain drop-shadow"
            />
          </div>
        </button>

        {/* Small badge tooltip on hover */}
        <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-[#121715] border border-white/10 text-[#F4F5F1] text-[11px] uppercase tracking-wider font-sans px-3 py-1.5 rounded-md shadow-xl">
          Atención Inmediata
        </div>
      </div>
    </div>
  );
}
