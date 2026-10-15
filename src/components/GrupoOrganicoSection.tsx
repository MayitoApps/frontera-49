import React from 'react';
import { ExternalLink, Compass } from 'lucide-react';

export default function GrupoOrganicoSection() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-28 bg-[#0A0D0C] overflow-hidden border-b border-white/10">
      {/* Luz de ambiente sutil con tinte rojo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#981A15]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Etiqueta superior */}
        <div className="text-center mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#981A15]/30 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest font-sans">
            <Compass className="w-3.5 h-3.5 text-[#981A15]" />
            <span>Colección Exclusiva</span>
          </div>
        </div>

        {/* Título arriba del video requerido */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#F4F5F1] text-center tracking-wide font-display uppercase max-w-4xl mx-auto leading-tight mb-8 sm:mb-14">
          DESCUBRE EL UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE
        </h2>

        {/* Video con la menor cantidad de botones posibles y máxima calidad */}
        <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#981A15]/30 shadow-2xl bg-black mb-8 sm:mb-12 group">
          <iframe
            src="https://www.youtube-nocookie.com/embed/r2tnnrp-G6Y?autoplay=0&controls=1&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&vq=hd1080"
            title="Descubre el Universo de Grupo Orgánico Hoteles Boutique"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Descripción requerida textualmente con espaciado móvil optimizado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 text-[#8E9B93] text-sm sm:text-lg leading-relaxed font-sans">
          <p className="text-base sm:text-xl text-[#F4F5F1] font-light">
            Un universo de destinos, experiencias y momentos inolvidables.
          </p>

          <p>
            Déjate envolver por la serenidad del bosque y la energía mística de Valle de Bravo y Tepoztlán; reconecta con la naturaleza, el aire puro y la esencia de la montaña en Ajusco; o descubre el encanto histórico, el arte y la vida cultural que distinguen a Tlalpan y a la vibrante Roma Norte.
          </p>

          <p>
            Y cuando el cuerpo pida mar, calidez y tradición, Veracruz te espera con su brisa, su sabor y esa forma única de hacerte sentir bienvenido.
          </p>

          <div className="py-2 space-y-1.5 sm:space-y-2 text-[#981A15] font-serif italic text-sm sm:text-lg font-normal">
            <p>Cada destino tiene su propia esencia.</p>
            <p>Cada espacio, una historia por vivir.</p>
            <p>Cada experiencia, un momento para recordar.</p>
          </div>

          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#F4F5F1] font-semibold pt-1">
            Todo forma parte del Universo de Grupo Orgánico.
          </p>
        </div>

        {/* Botón a la página web del grupo en rojo Frontera 49 */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="https://www.gohb.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-[#981A15] hover:bg-[#B8241D] text-[#F4F5F1] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-glow-red hover:scale-105 active:scale-95"
          >
            <span>Conoce Grupo Orgánico Hoteles Boutique</span>
            <ExternalLink className="w-4 h-4 text-[#F4F5F1]" />
          </a>
        </div>
      </div>
    </section>
  );
}
