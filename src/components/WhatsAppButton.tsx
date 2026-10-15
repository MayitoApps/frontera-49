import React from 'react';
import Image from 'next/image';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  variant?: 'primary' | 'red' | 'outline' | 'compact' | 'dark';
  className?: string;
  iconOnly?: boolean;
}

export default function WhatsAppButton({
  message,
  label = 'Reservar por WhatsApp',
  variant = 'primary',
  className = '',
  iconOnly = false,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);

  const baseStyles =
    'inline-flex items-center justify-center gap-2 sm:gap-2.5 font-medium transition-all duration-300 rounded-lg text-xs uppercase tracking-wider select-none px-4 py-2.5 sm:px-5 sm:py-3';

  const variants = {
    // Botón principal con el rojo característico Frontera 49 (#981A15)
    primary:
      'bg-[#981A15] hover:bg-[#B8241D] text-[#F4F5F1] font-semibold shadow-glow-red hover:scale-[1.02] active:scale-[0.98] border border-[#981A15]',
    red:
      'bg-[#981A15] hover:bg-[#B8241D] text-[#F4F5F1] font-semibold shadow-glow-red',
    outline:
      'bg-transparent border border-[#981A15]/60 hover:border-[#981A15] text-[#F4F5F1] hover:bg-[#981A15]/15',
    compact:
      'bg-[#121715] hover:bg-[#1A211E] border border-[#981A15]/40 hover:border-[#981A15] text-[#F4F5F1] !px-3.5 !py-2 !text-[11px]',
    dark:
      'bg-[#0A0D0C] hover:bg-[#121715] text-[#F4F5F1] border border-[#981A15]/50',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={label}
    >
      {/* Icono de WhatsApp en color blanco según la solicitud */}
      <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0">
        <Image
          src="/images/whatsapp-white.png"
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>
      {!iconOnly && <span>{label}</span>}
    </a>
  );
}
