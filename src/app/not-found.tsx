import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Compass, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Página no encontrada · Frontera 49',
  description: 'La página que buscas no existe o ha sido movida.',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#0A0D0C] text-[#F4F5F1] px-6 pt-32 pb-20">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E25C54] text-xs uppercase tracking-widest font-medium">
          <Compass className="w-3.5 h-3.5" />
          <span>Error 404 · Fuera de ruta</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-light font-display text-[#F4F5F1] tracking-tight">
          4<span className="text-[#E25C54]">0</span>4
        </h1>

        <p className="text-base text-[#8E9B93] leading-relaxed font-sans font-light">
          Parece que el rincón que buscas en la Roma Norte no se encuentra disponible o ha cambiado de lugar.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#981A15] hover:bg-[#B8241D] text-[#F4F5F1] font-semibold text-xs uppercase tracking-widest transition-colors shadow-glow-red"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>

          <Link
            href="/habitaciones"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#F4F5F1] text-xs uppercase tracking-widest transition-colors"
          >
            Ver Habitaciones
          </Link>
        </div>
      </div>
    </div>
  );
}
