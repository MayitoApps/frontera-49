'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface DiaDeMuertosPopupProps {
  forceOpen?: boolean;
}

const EVENTS = [
  {
    id: 'promo-desfiles',
    tag: 'PROMO DESFILES · 50% OFF & 2X1',
    name: 'Promoción Especial Desfiles de Muertos',
    desc: 'Llega con disfraz a cualquier desfile de CDMX y obtén tu 2ª noche al 50% de descuento + 2x1 en bebidas calientes en cafetería.',
  },
  {
    id: 'taller-pan',
    tag: 'MIÉRCOLES 28 DE OCTUBRE · CUPO LIMITADO',
    name: 'Taller Artesanal de Pan de Muerto',
    desc: 'Aprende el amasado tradicional con agua de azahar y mantequilla de campo, hornea tu pieza y degusta con chocolate de metate.',
  },
  {
    id: 'retrato-catrina',
    tag: 'DÍAS DE DESFILES · PREVIA CITA',
    name: '"Retrato de Catrina" · Maquillaje Artístico',
    desc: 'Caracterización profesional en nuestra casona con artistas del maquillaje antes de salir a marchar en Reforma.',
  },
  {
    id: 'epicentro',
    tag: 'UBICACIÓN ESTRATÉGICA',
    name: 'El Epicentro de las Procesiones en CDMX',
    desc: 'Hostal boutique y cafetería a minutos caminando de Paseo de la Reforma, Ángel de la Independencia y Zócalo.',
  },
];

export default function DiaDeMuertosPopup({ forceOpen = false }: DiaDeMuertosPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  const POPUP_STORAGE_KEY = 'gohb_seen_frontera49';
  const PROGRAM_URL = 'https://dia-de-muertos-gohb.vercel.app/frontera49';

  // Abrir modal con transición fluida
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  }, []);

  // Cerrar modal con animación de salida y registrar en sessionStorage
  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 320);

    try {
      sessionStorage.setItem(POPUP_STORAGE_KEY, 'true');
    } catch {
      // Ignorar si el modo incógnito restringe sessionStorage
    }
  }, []);

  // Manejador de teclado ESC y métodos globales de compatibilidad
  useEffect(() => {
    setMounted(true);

    if (typeof window !== 'undefined') {
      (window as unknown as { gohbOpenPopup?: (id?: string) => void }).gohbOpenPopup = () => {
        handleOpen();
      };
      (window as unknown as { gohbClosePopup?: (id?: string) => void }).gohbClosePopup = () => {
        handleClose();
      };
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleOpen, handleClose]);

  // Temporizador de apertura inicial de 1.4s
  useEffect(() => {
    if (!mounted) return;

    let shouldShow = forceOpen;

    if (!shouldShow) {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const queryForce = urlParams.has('popup') || urlParams.has('ddm');
        const alreadySeen = sessionStorage.getItem(POPUP_STORAGE_KEY) === 'true';

        if (queryForce || !alreadySeen) {
          shouldShow = true;
        }
      } catch {
        shouldShow = true;
      }
    }

    if (shouldShow) {
      const timer = setTimeout(() => {
        handleOpen();
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, [mounted, forceOpen, handleOpen]);

  // Bloqueo total de scroll de fondo (vertical y horizontal) mientras el modal está abierto
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflowX = document.body.style.overflowX;
      const originalHtmlOverflowX = document.documentElement.style.overflowX;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflowX = originalBodyOverflowX;
        document.documentElement.style.overflowX = originalHtmlOverflowX;
      };
    }
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div
      id="gohb-modal-frontera49"
      className={`fixed inset-0 z-[99999999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto overflow-x-hidden overscroll-contain transition-all duration-300 ease-out select-none ${
        isAnimating ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Día de Muertos 2026 - Frontera 49 Roma Norte"
    >
      {/* Fondo difuminado (Backdrop) */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-[#0E0B09]/82 backdrop-blur-md transition-opacity duration-300 ease-out cursor-pointer ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Tarjeta Modal Contenedora: Perfectamente centrada en horizontal y vertical */}
      <div
        className={`relative z-10 w-full max-w-[530px] m-auto my-auto max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3.5rem)] overflow-y-auto overflow-x-hidden rounded-2xl sm:rounded-3xl bg-[#1D1815] border border-[#D9822B]/45 p-5 sm:p-7 text-[#F2E8DC] shadow-[0_25px_65px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(217,130,43,0.22)] transition-all duration-300 ease-out transform select-auto ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#D9822B #1D1815',
        }}
      >
        {/* Resplandor decorativo de fondo */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-36 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D9822B]/22 via-[#B84A29]/08 to-transparent rounded-t-2xl sm:rounded-t-3xl overflow-hidden"
          aria-hidden="true"
        />

        {/* Botón de Cerrar */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar ventana"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-white/[0.06] border border-[#D9822B]/30 text-[#F2E8DC] hover:text-[#1D1815] hover:bg-[#D9822B] hover:rotate-90 flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado del Pop-up */}
        <div className="relative text-center mb-5 sm:mb-6 pt-1">
          {/* Badge con flama */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9822B]/12 border border-dashed border-[#D9822B]/50 text-[#D9822B] text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-bold mb-3 shadow-[0_0_15px_rgba(217,130,43,0.15)]">
            <span className="text-xs sm:text-sm">🔥</span>
            <span>DÍA DE MUERTOS 2026 · ROMA NORTE</span>
          </div>

          {/* Título Principal */}
          <h2 className="font-cinzel text-[20px] sm:text-[23px] font-bold text-[#F2E8DC] leading-snug tracking-wide mb-2 bg-gradient-to-r from-white via-[#F59E42] to-[#D9822B] bg-clip-text text-transparent">
            Recordar es volver a encontrarnos
          </h2>

          {/* Subtítulo descriptivo */}
          <p className="text-[12.5px] sm:text-[13.5px] text-[#A89B91] leading-relaxed max-w-[420px] mx-auto font-light">
            A unos pasos de los grandes desfiles de Reforma, panadería de autor y casona de época en Roma Norte.
          </p>
        </div>

        {/* Lista de Eventos Clave */}
        <div className="flex flex-col gap-2.5 mb-5 sm:mb-6">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="group relative rounded-xl bg-[#261F1B]/75 hover:bg-[#2D241F]/90 border border-[#B84A29]/28 hover:border-[#D9822B]/60 border-l-[3px] border-l-[#D9822B] p-3 sm:p-3.5 text-left transition-all duration-200 hover:shadow-[0_0_12px_rgba(217,130,43,0.15)]"
            >
              {/* Event Tag */}
              <div className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.08em] text-[#D9822B] uppercase mb-1">
                {event.tag}
              </div>

              {/* Event Name */}
              <h3 className="font-cinzel text-[13.5px] sm:text-[14.5px] font-bold text-[#F2E8DC] group-hover:text-[#FDD59B] transition-colors leading-snug mb-1">
                {event.name}
              </h3>

              {/* Event Desc */}
              <p className="text-[11px] sm:text-[12px] text-[#A89B91] leading-relaxed m-0 font-light">
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Botón de Llamado a la Acción (CTA) */}
        <div className="text-center pt-0.5">
          <a
            id="gohb-cta-frontera49"
            href={PROGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#D9822B] to-[#B84A29] hover:from-[#E68E35] hover:to-[#C45330] text-white font-bold text-[13.5px] sm:text-[14px] tracking-wide shadow-[0_6px_20px_rgba(217,130,43,0.4)] hover:shadow-[0_10px_28px_rgba(217,130,43,0.6)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Ver Promociones y Reservar Frontera 49</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <p className="text-[10.5px] sm:text-[11px] text-[#A89B91] mt-2.5 opacity-80 font-light">
            Talleres y maquillaje con cupo limitado · Reserva tus fechas con anticipación
          </p>
        </div>
      </div>
    </div>
  );
}
