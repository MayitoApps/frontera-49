import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Instagram, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070908] border-t border-white/10 text-[#8E9B93] font-sans pt-12 sm:pt-16 pb-10 overflow-hidden">
      {/* Luz de ambiente sutil con tinte rojo */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#981A15]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Columna 1: Marca e Identidad */}
          <div className="space-y-4 sm:space-y-5">
            <Link href="/" className="inline-block relative h-10 w-40 sm:h-12 sm:w-48">
              <Image
                src="/images/logo-white.png"
                alt="Frontera 49 Roma Norte"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-[#8E9B93]">
              Un espacio vivo en el corazón de la Roma Norte. Donde el diseño honesto, la comunidad creativa y la vibrante vida urbana de la Ciudad de México se encuentran.
            </p>
            <div className="pt-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#981A15] block mb-1.5 font-semibold">
                Parte del Universo
              </span>
              <a
                href="https://www.gohb.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#F4F5F1] hover:text-[#981A15] transition-colors uppercase tracking-wider"
              >
                Grupo Orgánico Hoteles Boutique
                <ExternalLink className="w-3 h-3 text-[#981A15]" />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#F4F5F1] font-semibold mb-4 sm:mb-6 border-b border-white/10 pb-2">
              Explorar
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/habitaciones" className="hover:text-[#981A15] transition-colors">
                  Habitaciones & Descanso
                </Link>
              </li>
              <li>
                <Link href="/espacios" className="hover:text-[#981A15] transition-colors">
                  Rooftop & Coworking
                </Link>
              </li>
              <li>
                <Link href="/restaurante" className="hover:text-[#981A15] transition-colors">
                  Garnachería Única
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-[#981A15] transition-colors">
                  Eventos & Foro Cultural
                </Link>
              </li>
              <li>
                <Link href="/momentos" className="hover:text-[#981A15] transition-colors">
                  Cenas Románticas & Cine
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-[#981A15] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/hagamos-equipo" className="hover:text-[#981A15] transition-colors">
                  Alianzas & Creadores
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#981A15] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ubicación y Horarios */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#F4F5F1] font-semibold mb-4 sm:mb-6 border-b border-white/10 pb-2">
              Ubicación & Horarios
            </h3>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#981A15] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#F4F5F1]">
                  Frontera 49, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#981A15] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93]">
                    Atención al Cliente:
                  </span>
                  <span className="text-[#F4F5F1]">Lunes a domingo de 7:00 a.m. a 9:00 p.m.</span>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/hostalromanorte/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#F4F5F1] hover:text-[#981A15] transition-colors bg-white/5 px-3.5 py-2 rounded-lg border border-white/10 hover:border-[#981A15]"
                >
                  <Instagram className="w-4 h-4 text-[#981A15]" />
                  @hostalromanorte
                </a>
              </div>
            </div>
          </div>

          {/* Columna 4: Contacto Telefónico & WhatsApp (Correo electrónico removido según instrucción) */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#F4F5F1] font-semibold mb-4 sm:mb-6 border-b border-white/10 pb-2">
              Líneas de Atención
            </h3>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#981A15] block mb-1 font-semibold">
                  Líneas Fijas
                </span>
                <div className="text-[#F4F5F1] space-x-2">
                  <a href="tel:5596969073" className="hover:text-[#981A15] transition-colors">
                    55 9696 9073
                  </a>
                  <span>/</span>
                  <a href="tel:5596910966" className="hover:text-[#981A15] transition-colors">
                    55 9691 0966
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#981A15] block mb-1 font-semibold">
                  Líneas Móviles
                </span>
                <div className="text-[#F4F5F1] space-x-2">
                  <a href="tel:5556455347" className="hover:text-[#981A15] transition-colors">
                    55 5645 5347
                  </a>
                  <span>/</span>
                  <a href="tel:5555737822" className="hover:text-[#981A15] transition-colors">
                    55 5573 7822
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#981A15] block mb-1 font-semibold">
                  WhatsApp Concierge
                </span>
                <a
                  href="https://wa.me/525574555091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4F5F1] hover:text-[#981A15] transition-colors font-medium block"
                >
                  +52 55 7455 5091
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {currentYear} Frontera 49 Roma Norte. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/aviso-de-privacidad" className="hover:text-[#981A15] transition-colors">
              Aviso de Privacidad
            </Link>
            <a
              href="https://www.gohb.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#981A15] transition-colors"
            >
              Grupo Orgánico
            </a>
            <Link href="/sitemap.xml" className="hover:text-[#981A15] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
