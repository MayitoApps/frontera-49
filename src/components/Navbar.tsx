'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  // "Inicio" removido del menú principal según la solicitud (se accede dando clic al logo)
  { href: '/habitaciones', label: 'Habitaciones' },
  { href: '/espacios', label: 'Espacios' },
  { href: '/restaurante', label: 'Restaurante' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/momentos', label: 'Experiencias' },
  { href: '/quienes-somos', label: 'Nosotros' }, // Cambiado "Quiénes Somos" por "Nosotros"
  { href: '/hagamos-equipo', label: 'Alianzas' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al navegar
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll en body cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0D0C]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0D0C]/85 via-[#0A0D0C]/45 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0 z-10">
            <Link
              href="/"
              className="inline-block relative h-9 w-32 sm:h-12 sm:w-44 transition-opacity hover:opacity-90"
              aria-label="Frontera 49 Inicio"
            >
              <Image
                src="/images/logo-white.png"
                alt="Frontera 49 Roma Norte"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>
          </div>

          {/* Menú lineal centrado (Desktop) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8" aria-label="Navegación principal">
            <ul className="flex items-center gap-6 xl:gap-8 list-none m-0 p-0">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative py-1 text-xs uppercase tracking-widest font-sans transition-colors duration-200 ${
                        isActive
                          ? 'text-[#F4F5F1] font-semibold'
                          : 'text-[#F4F5F1]/75 hover:text-[#E25C54]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#981A15] rounded-full shadow-glow-red animate-fadeIn" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contenedor derecho fantasma para balancear el layout flex (sin botones en header) */}
          <div className="hidden lg:block w-32 sm:w-44" aria-hidden="true" />

          {/* Botón Móvil Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F4F5F1] hover:text-[#E25C54] transition-colors focus:outline-none z-50"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#F4F5F1]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Menú Móvil Desplegable: Perfectamente centrado en pantalla para fácil alcance */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0D0C]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          {/* Header del modal con logo y botón cerrar */}
          <div className="flex items-center justify-between w-full pb-4 border-b border-white/10">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="relative h-9 w-32">
              <Image
                src="/images/logo-white.png"
                alt="Frontera 49 Roma Norte"
                fill
                className="object-contain object-left"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#8E9B93] hover:text-[#F4F5F1] focus:outline-none"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Opciones del menú centradas vertical y horizontalmente */}
          <nav className="my-auto w-full max-w-sm mx-auto text-center py-6" aria-label="Menú móvil">
            <ul className="space-y-4 list-none p-0 m-0">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-lg sm:text-xl uppercase tracking-widest font-sans py-2.5 transition-all ${
                        isActive
                          ? 'text-[#F4F5F1] font-semibold border-b border-[#981A15] inline-block shadow-glow-red'
                          : 'text-[#8E9B93] hover:text-[#F4F5F1]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Pie del menú móvil */}
          <div className="pt-4 border-t border-white/10 text-center space-y-1">
            <p className="text-[11px] uppercase tracking-widest text-[#E25C54] font-semibold">
              Frontera 49 · Roma Norte
            </p>
            <p className="text-[11px] text-[#8E9B93]">Ciudad de México</p>
          </div>
        </div>
      )}
    </>
  );
}
