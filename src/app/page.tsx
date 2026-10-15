import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import GrupoOrganicoSection from '@/components/GrupoOrganicoSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import { WHATSAPP_TEMPLATES } from '@/lib/whatsapp';
import {
  Sparkles,
  Bed,
  ArrowRight,
  Star,
  Quote,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[#0A0D0C] text-[#F4F5F1]">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. GRUPO ORGÁNICO SECTION (Directamente después del hero) */}
      <GrupoOrganicoSection />

      {/* 3. MANIFIESTO ROMA NORTE: QUÉDATE DONDE TODO SUCEDE */}
      <section className="py-12 sm:py-20 lg:py-28 relative border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Columna Izquierda: Texto Editorial */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#981A15]/40 text-[#F4F5F1] text-[10px] sm:text-xs uppercase tracking-widest font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#E25C54]" />
                <span>Hospitalidad Urbana con Identidad</span>
              </div>

              {/* Título en móvil mucho más grande que el texto */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F5F1] font-display uppercase leading-tight">
                Quédate donde <br />
                <span className="text-[#E25C54] font-serif italic lowercase font-normal">
                  todo sucede.
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#8E9B93] leading-relaxed font-sans font-light">
                <strong className="text-[#F4F5F1] font-medium">Frontera 49 Roma Norte</strong> es un espacio vivo en el corazón de la Ciudad de México, pensado para quienes disfrutan descubrir, compartir y habitar cada destino de forma más auténtica.
              </p>

              <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-sans font-light">
                Aquí, el viaje se vuelve encuentro: con otros viajeros, con nuevas ideas creativas y con la energía vibrante de las galerías, cafés y avenidas arboladas de la Roma. Un hostal boutique con diseño honesto, funcional y acogedor.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-wrap gap-3 sm:gap-4 items-center">
                <WhatsAppButton
                  message={WHATSAPP_TEMPLATES.general}
                  label="Reservar Estancia"
                  variant="primary"
                />
                <Link
                  href="/quienes-somos"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#981A15] text-xs uppercase tracking-wider text-[#F4F5F1] transition-colors group"
                >
                  <span>Conocer más</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F4F5F1] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Columna Derecha: Mosaico Fotográfico de Espacios */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative h-48 sm:h-72 lg:h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/espacios/fachada/ohbf49_fachada01.png"
                    alt="Fachada Frontera 49 Roma Norte"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F4F5F1] font-semibold">
                      Fachada Histórica
                    </span>
                  </div>
                </div>

                <div className="relative h-36 sm:h-48 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/espacios/cafeteria/ohbf49_cafeteria02.png"
                    alt="Cafetería Frontera 49"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F4F5F1] font-semibold">
                      Café de Especialidad
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
                <div className="relative h-36 sm:h-48 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/espacios/rooftop/ohbf49_rooftop01.jpeg"
                    alt="Rooftop con vista a Roma Norte"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F4F5F1] font-semibold">
                      Rooftop Atardeceres
                    </span>
                  </div>
                </div>

                <div className="relative h-48 sm:h-72 lg:h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/espacios/coworking/ohbf49_coworking02.png"
                    alt="Coworking creativo"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F4F5F1] font-semibold">
                      Comunidad Creativa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HABITACIONES SHOWCASE */}
      <section className="py-12 sm:py-20 lg:py-28 relative border-b border-white/10 bg-[#0E1210]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold block mb-1.5">
                Descanso & Intimidad
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                Habitaciones Diseñadas para Ti
              </h2>
            </div>
            <Link
              href="/habitaciones"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-[#981A15] border border-white/20 hover:border-[#981A15] text-xs uppercase tracking-widest text-[#F4F5F1] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-glow-red"
            >
              <span>Ver todas las opciones</span>
              <ArrowRight className="w-4 h-4 text-[#F4F5F1] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {/* Habitación Deluxe */}
            <div className="group bg-[#121715] border border-white/10 hover:border-[#981A15]/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
              <div className="relative h-60 sm:h-80 md:h-96 w-full overflow-hidden">
                <Image
                  src="/images/habitaciones/deluxe/ohbf49habitacion_delux01.png"
                  alt="Habitación Deluxe Frontera 49"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0A0D0C]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#981A15]/40 text-[10px] sm:text-xs uppercase tracking-wider text-[#F4F5F1] font-medium">
                  Experiencia Premium
                </div>
              </div>

              <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                      Habitación Deluxe
                    </h3>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8E9B93]">
                      Cama King / Queen · Baño Privado
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-light text-[#F4F5F1] font-display block">
                      $1,392.00
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#E25C54] font-semibold">
                      MXN / Noche
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-sans font-light">
                  Un refugio íntimo y privado para desconectar del bullicio de la metrópoli. Espacio amplio, acabados finos, baño privado y detalles pensados para un descanso profundo y reparador.
                </p>

                <ul className="grid grid-cols-2 gap-2 pt-2 text-[11px] sm:text-xs text-[#F4F5F1]/80">
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C54]" />
                    <span>Baño Privado</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C54]" />
                    <span>Wifi Rápido</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C54]" />
                    <span>Rooftop Lounge</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C54]" />
                    <span>Amenidades Orgánicas</span>
                  </li>
                </ul>

                <div className="pt-4 sm:pt-6 border-t border-white/10">
                  <WhatsAppButton
                    message={WHATSAPP_TEMPLATES.habitacionDeluxe}
                    label="Reservar Deluxe · $1,392 MXN"
                    variant="primary"
                    className="w-full text-center"
                  />
                </div>
              </div>
            </div>

            {/* Habitación Sencilla */}
            <div className="group bg-[#121715] border border-white/10 hover:border-[#981A15]/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
              <div className="relative h-60 sm:h-80 md:h-96 w-full overflow-hidden">
                <Image
                  src="/images/habitaciones/sencilla/ohbf49habitacion_sencilla02.png"
                  alt="Habitación Sencilla Frontera 49"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0A0D0C]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] sm:text-xs uppercase tracking-wider text-[#F4F5F1] font-medium">
                  23 Habitaciones
                </div>
              </div>

              <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                      Habitación Sencilla
                    </h3>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8E9B93]">
                      Práctica & Confort
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-light text-[#F4F5F1] font-display block">
                      $928.00
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#E25C54] font-semibold">
                      MXN / Noche
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-sans font-light">
                  Práctica, accesible y con todo el carácter de Roma Norte. Pensada para viajeros independientes, parejas o nómadas que buscan confort absoluto mientras viven la ciudad.
                </p>

                <ul className="grid grid-cols-2 gap-2 pt-2 text-[11px] sm:text-xs text-[#F4F5F1]/80">
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C54]" />
                    <span>Gran Confort</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C54]" />
                    <span>Baños Impecables</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C54]" />
                    <span>Coworking</span>
                  </li>
                  <li className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E25C54]" />
                    <span>Comunidad</span>
                  </li>
                </ul>

                <div className="pt-4 sm:pt-6 border-t border-white/10">
                  <WhatsAppButton
                    message={WHATSAPP_TEMPLATES.habitacionSencilla}
                    label="Reservar Sencilla · $928 MXN"
                    variant="outline"
                    className="w-full text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCIAS DESTACADAS */}
      <section className="py-12 sm:py-20 lg:py-28 relative border-b border-white/10 bg-[#0A0D0C]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold block mb-1.5">
              Momentos Memorables
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Experiencias en Roma Norte
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#8E9B93] font-light">
              Diseñamos experiencias que se sienten, se comparten y se recuerdan en pareja o con amigos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {/* Cena Romántica */}
            <div className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col group">
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <Image
                  src="/images/experiencias/cena-romantica/ohbf49_cenas-romanticas05.jpg"
                  alt="Cena Romántica en Roma Norte"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#981A15] text-[#F4F5F1] font-semibold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  $5,000 MXN / pareja
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                    Cena Romántica
                  </h3>
                  <p className="text-xs text-[#8E9B93] mt-2 leading-relaxed">
                    Una velada mágica con montaje especial: decoración personalizada, cena de 4 tiempos de autor y botella de vino tinto.
                  </p>
                </div>
                <WhatsAppButton
                  message={WHATSAPP_TEMPLATES.cenaRomantica}
                  label="Reservar Cena Romántica"
                  variant="primary"
                  className="w-full text-center"
                />
              </div>
            </div>

            {/* Pintor por un Día */}
            <div className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col group">
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <Image
                  src="/images/experiencias/pintor/img_6687.jpg"
                  alt="Pintor por un Día en Frontera 49"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#0A0D0C]/85 backdrop-blur-md text-[#F4F5F1] font-semibold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-[#981A15]/40">
                  Creatividad & Vino
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                    Pintor por un Día
                  </h3>
                  <p className="text-xs text-[#8E9B93] mt-2 leading-relaxed">
                    Sesiones creativas guiadas donde exploras el arte plástico mientras disfrutas de una copa de vino en nuestro foro cultural.
                  </p>
                </div>
                <WhatsAppButton
                  message={WHATSAPP_TEMPLATES.pintor}
                  label="Apartar Pintor por un Día"
                  variant="outline"
                  className="w-full text-center"
                />
              </div>
            </div>

            {/* Noches de Cine */}
            <div className="bg-[#121715] border border-white/10 hover:border-[#981A15]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col group">
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <Image
                  src="/images/espacios/cine/ohbf49_sala-de-cine05.png"
                  alt="Noches de Cine Frontera 49"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#0A0D0C]/85 backdrop-blur-md text-[#F4F5F1] font-semibold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                  Viernes & Sábado 7:00 PM
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                    Noches de Cine
                  </h3>
                  <p className="text-xs text-[#8E9B93] mt-2 leading-relaxed">
                    Los fines de semana nuestro espacio se convierte en un cine boutique para relajarse y compartir películas de autor.
                  </p>
                </div>
                <WhatsAppButton
                  message={WHATSAPP_TEMPLATES.cine}
                  label="Consultar Cartelera"
                  variant="outline"
                  className="w-full text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ESPACIOS & BENTO GRID */}
      <section className="py-12 sm:py-20 lg:py-28 relative border-b border-white/10 bg-[#0E1210]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold block mb-1.5">
                Convivencia & Diseño
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
                Nuestros Espacios Vivos
              </h2>
            </div>
            <Link
              href="/espacios"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-[#981A15] border border-white/20 hover:border-[#981A15] text-xs uppercase tracking-widest text-[#F4F5F1] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-glow-red"
            >
              <span>Explorar galería de espacios</span>
              <ArrowRight className="w-4 h-4 text-[#F4F5F1] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Bento Card 1: Rooftop */}
            <div className="md:col-span-2 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/images/espacios/rooftop/ohbf49_rooftop04.jpeg"
                alt="Rooftop Frontera 49 Roma Norte"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 sm:p-8 flex flex-col justify-end">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold mb-1">
                  Capacidad: 80 Personas
                </span>
                <h3 className="text-xl sm:text-3xl font-light text-[#F4F5F1] font-display uppercase">
                  Rooftop Frontera 49
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9B93] max-w-lg mt-1.5 leading-relaxed">
                  El escenario que todos recordarán. Vistas abiertas a Roma Norte, atardeceres y coctelería.
                </p>
                <div className="mt-3">
                  <WhatsAppButton
                    message={WHATSAPP_TEMPLATES.rooftop}
                    label="Cotizar Rooftop"
                    variant="compact"
                  />
                </div>
              </div>
            </div>

            {/* Bento Card 2: Coworking */}
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/images/espacios/coworking/ohbf49_coworking04.png"
                alt="Coworking nómadas digitales Roma Norte"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold mb-1">
                  Nómadas Digitales
                </span>
                <h3 className="text-lg sm:text-2xl font-light text-[#F4F5F1] font-display uppercase">
                  Coworking Hub
                </h3>
                <p className="text-xs text-[#8E9B93] mt-1.5 leading-relaxed">
                  Escritorios ergonómicos, wifi de alta velocidad y café de especialidad.
                </p>
                <div className="mt-3">
                  <WhatsAppButton
                    message={WHATSAPP_TEMPLATES.coworking}
                    label="Pases Coworking"
                    variant="compact"
                  />
                </div>
              </div>
            </div>

            {/* Bento Card 3: Restaurante Garnachería */}
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/images/espacios/restaurante/ohbf49_garnacheria14.png"
                alt="Restaurante Garnachería Única"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold mb-1">
                  Gastronomía Tradicional
                </span>
                <h3 className="text-lg sm:text-2xl font-light text-[#F4F5F1] font-display uppercase">
                  Garnachería Única
                </h3>
                <p className="text-xs text-[#8E9B93] mt-1.5 leading-relaxed">
                  El comal, las salsas frescas y el maíz que celebran la auténtica cocina de barrio.
                </p>
                <div className="mt-3">
                  <WhatsAppButton
                    message={WHATSAPP_TEMPLATES.restaurante}
                    label="Reservar Mesa"
                    variant="compact"
                  />
                </div>
              </div>
            </div>

            {/* Bento Card 4: Foro Cultural & Galería */}
            <div className="md:col-span-2 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/images/espacios/foro-cultural/ohbf49_galeria-re01.png"
                alt="Foro Cultural Frontera 49 Roma Norte"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 sm:p-8 flex flex-col justify-end">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold mb-1">
                  13m x 5.5m · 70 Pax
                </span>
                <h3 className="text-xl sm:text-3xl font-light text-[#F4F5F1] font-display uppercase">
                  Foro Cultural & Galería
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9B93] max-w-lg mt-1.5 leading-relaxed">
                  Espacio versátil para workshops, presentaciones, exposiciones de arte y pop-ups.
                </p>
                <div className="mt-3">
                  <WhatsAppButton
                    message={WHATSAPP_TEMPLATES.foroCultural}
                    label="Cotizar Espacio"
                    variant="compact"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESEÑAS REALES */}
      <section className="py-12 sm:py-20 lg:py-28 relative border-b border-white/10 bg-[#0A0D0C]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <div className="flex items-center justify-center gap-1 text-[#E25C54] mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E25C54]" />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold block mb-1.5">
              Experiencias Reales & Recomendadas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              Lo que dicen nuestros huéspedes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="bg-[#121715] border border-white/10 p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between shadow-xl">
              <Quote className="w-6 h-6 text-[#E25C54]/50 mb-3" />
              <p className="text-xs sm:text-sm text-[#F4F5F1] leading-relaxed font-sans font-light italic mb-4 sm:mb-6">
                “Súper recomendable, de buen precio y la comida con un sabor estupendo. La presentación atractiva de sus emplatados. El servicio es en extremo bueno.”
              </p>
              <div className="border-t border-white/10 pt-3">
                <span className="text-xs sm:text-sm font-semibold text-[#F4F5F1] block">Mónica Ramírez</span>
                <span className="text-[10px] text-[#8E9B93] uppercase tracking-wider">Huésped verificada · México</span>
              </div>
            </div>

            <div className="bg-[#121715] border border-white/10 p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between shadow-xl">
              <Quote className="w-6 h-6 text-[#E25C54]/50 mb-3" />
              <p className="text-xs sm:text-sm text-[#F4F5F1] leading-relaxed font-sans font-light italic mb-4 sm:mb-6">
                “Great location and friendly staff. The room was clean and functional, and the interior of the boutique hotel is nicely decorated with authentic character.”
              </p>
              <div className="border-t border-white/10 pt-3">
                <span className="text-xs sm:text-sm font-semibold text-[#F4F5F1] block">Darre Gonzales</span>
                <span className="text-[10px] text-[#8E9B93] uppercase tracking-wider">Huésped internacional · USA</span>
              </div>
            </div>

            <div className="bg-[#121715] border border-white/10 p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between shadow-xl">
              <Quote className="w-6 h-6 text-[#E25C54]/50 mb-3" />
              <p className="text-xs sm:text-sm text-[#F4F5F1] leading-relaxed font-sans font-light italic mb-4 sm:mb-6">
                “Súper buen café, servicio de primera. Ricardo súper barista! El ambiente de la cafetería y áreas de coworking es inigualable en la Roma.”
              </p>
              <div className="border-t border-white/10 pt-3">
                <span className="text-xs sm:text-sm font-semibold text-[#F4F5F1] block">Kenneth Rosenzweig</span>
                <span className="text-[10px] text-[#8E9B93] uppercase tracking-wider">Cliente habitual cafetería</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECCIÓN CONTACTO */}
      <section className="py-12 sm:py-20 lg:py-28 relative bg-[#0E1210]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E25C54] font-semibold block mb-1.5">
              Siempre Contigo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F5F1] font-display uppercase tracking-wide">
              ¿Te ayudamos a crear tu experiencia ideal?
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#8E9B93] font-light">
              Escríbenos directamente o completa el formulario para recibir una propuesta personalizada.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
