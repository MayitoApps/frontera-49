'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  User,
  Mail,
  Phone,
  Sparkles,
  Calendar,
  Users,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  fecha: string;
  huespedes: string;
  mensaje: string;
  website_hp: string;
  privacidad: boolean;
}

const initialFormState: FormData = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: 'Reservaciones & Hospedaje',
  fecha: '',
  huespedes: '',
  mensaje: '',
  website_hp: '',
  privacidad: false,
};

const MOTIVOS = [
  'Reservaciones & Hospedaje',
  'Experiencias en Roma Norte',
  'Gastronomía & Cenas Privadas',
  'Eventos Empresariales',
  'Bodas & Celebraciones Sociales',
  'Consulta General o Especial',
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialFormState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!form.privacidad) {
      setErrorMessage('Debes aceptar el aviso de privacidad para continuar.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Ocurrió un error al enviar el mensaje.');
      }

      setStatus('success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error al procesar el envío.';
      setErrorMessage(msg);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setForm(initialFormState);
    setStatus('idle');
    setErrorMessage('');
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Frontera 49 Roma Norte, mi nombre es ${form.nombre || 'Huésped'}. Envié una solicitud web sobre: ${form.motivo}. Me gustaría darle seguimiento directo.`
  );
  const whatsappUrl = `https://wa.me/525574555091?text=${whatsappMessage}`;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Desenfoques ambientales decorativos en esquinas con tinte rojo */}
      <div className="absolute -top-10 -left-10 w-56 h-56 bg-[#981A15]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[#981A15]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Contenedor principal con Glassmorphism - Padding optimizado para móvil */}
      <div className="relative bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-5 sm:p-8 md:p-10 transition-all">
        {status === 'success' ? (
          /* Estado de Éxito */
          <div className="text-center py-6 sm:py-8 animate-fadeIn">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-full bg-[#981A15]/15 border border-[#981A15]/40 flex items-center justify-center text-[#E25C54]">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-light text-[#F4F5F1] tracking-wide mb-2 sm:mb-3">
              ¡Mensaje Recibido!
            </h3>

            <p className="text-[#8E9B93] text-xs sm:text-base leading-relaxed max-w-md mx-auto mb-6 sm:mb-8 font-sans">
              Gracias por comunicarte con <span className="text-[#F4F5F1] font-medium">Frontera 49 Roma Norte</span>. Nuestro equipo de concierge revisará tu solicitud y te contactará a la brevedad.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#981A15] hover:bg-[#B8241D] text-[#F4F5F1] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-glow-red hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="relative w-4 h-4">
                  <Image src="/images/whatsapp-white.png" alt="WhatsApp" fill className="object-contain" />
                </div>
                Seguimiento por WhatsApp
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#F4F5F1] text-xs sm:text-sm uppercase tracking-wider transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#8E9B93]" />
                Enviar otro mensaje
              </button>
            </div>
          </div>
        ) : (
          /* Formulario */
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Campo Honeypot invisible contra bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">Website</label>
              <input
                id="website_hp"
                name="website_hp"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website_hp}
                onChange={handleChange}
              />
            </div>

            {/* Banner de Error */}
            {status === 'error' && errorMessage && (
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-red-400 mt-0.5" />
                <div className="flex-1 font-sans">{errorMessage}</div>
              </div>
            )}

            {/* Fila 1: Nombre y Correo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Nombre Completo */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mb-1.5 font-sans font-medium">
                  Nombre Completo <span className="text-[#E25C54] font-bold">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B93]" />
                  <input
                    type="text"
                    name="nombre"
                    required
                    minLength={2}
                    placeholder="Tu nombre y apellido"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#0A0D0C]/80 border border-white/10 rounded-lg text-[#F4F5F1] placeholder-[#8E9B93]/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#981A15] focus:ring-1 focus:ring-[#981A15] transition-all"
                  />
                </div>
              </div>

              {/* Correo Electrónico */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mb-1.5 font-sans font-medium">
                  Correo Electrónico <span className="text-[#E25C54] font-bold">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B93]" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#0A0D0C]/80 border border-white/10 rounded-lg text-[#F4F5F1] placeholder-[#8E9B93]/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#981A15] focus:ring-1 focus:ring-[#981A15] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Fila 2: Teléfono y Motivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Teléfono o WhatsApp */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mb-1.5 font-sans font-medium">
                  Teléfono / WhatsApp <span className="text-[#E25C54] font-bold">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B93]" />
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="+52 55 ..."
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#0A0D0C]/80 border border-white/10 rounded-lg text-[#F4F5F1] placeholder-[#8E9B93]/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#981A15] focus:ring-1 focus:ring-[#981A15] transition-all"
                  />
                </div>
              </div>

              {/* Motivo de Interés */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mb-1.5 font-sans font-medium">
                  Motivo de Interés <span className="text-[#E25C54] font-bold">*</span>
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B93]" />
                  <select
                    name="motivo"
                    value={form.motivo}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#0A0D0C] border border-white/10 rounded-lg text-[#F4F5F1] text-xs sm:text-sm font-sans focus:outline-none focus:border-[#981A15] focus:ring-1 focus:ring-[#981A15] transition-all appearance-none cursor-pointer"
                  >
                    {MOTIVOS.map((motivo) => (
                      <option key={motivo} value={motivo} className="bg-[#121715] text-[#F4F5F1]">
                        {motivo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Fila 3: Fecha Tentativa y Huéspedes (Opcionales) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Fecha Tentativa */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mb-1.5 font-sans font-medium">
                  Fecha Tentativa <span className="text-[#8E9B93]/50 font-normal">(Opcional)</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B93]" />
                  <input
                    type="date"
                    name="fecha"
                    value={form.fecha}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#0A0D0C]/80 border border-white/10 rounded-lg text-[#F4F5F1] placeholder-[#8E9B93]/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#981A15] focus:ring-1 focus:ring-[#981A15] transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Nº de Huéspedes / Asistentes */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mb-1.5 font-sans font-medium">
                  Nº Huéspedes <span className="text-[#8E9B93]/50 font-normal">(Opcional)</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E9B93]" />
                  <input
                    type="text"
                    name="huespedes"
                    placeholder="Ej. 2 personas"
                    value={form.huespedes}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#0A0D0C]/80 border border-white/10 rounded-lg text-[#F4F5F1] placeholder-[#8E9B93]/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#981A15] focus:ring-1 focus:ring-[#981A15] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Mensaje o Detalles */}
            <div>
              <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mb-1.5 font-sans font-medium">
                Mensaje o Detalles <span className="text-[#E25C54] font-bold">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-[#8E9B93]" />
                <textarea
                  name="mensaje"
                  required
                  rows={3}
                  minLength={5}
                  placeholder="Cuéntanos más sobre tus fechas, dudas o requerimientos..."
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-[#0A0D0C]/80 border border-white/10 rounded-lg text-[#F4F5F1] placeholder-[#8E9B93]/50 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#981A15] focus:ring-1 focus:ring-[#981A15] transition-all resize-none"
                />
              </div>
            </div>

            {/* Checkbox Aviso de Privacidad */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="privacidad"
                type="checkbox"
                name="privacidad"
                required
                checked={form.privacidad}
                onChange={handleChange}
                className="mt-1 h-3.5 w-3.5 rounded border-white/20 bg-[#0A0D0C] text-[#981A15] focus:ring-[#981A15] focus:ring-offset-0 cursor-pointer accent-[#981A15]"
              />
              <label htmlFor="privacidad" className="text-[11px] sm:text-xs text-[#8E9B93] leading-relaxed cursor-pointer font-sans select-none">
                Acepto el{' '}
                <a
                  href="/aviso-de-privacidad"
                  className="text-[#E25C54] underline hover:text-[#F4F5F1] transition-colors"
                >
                  aviso de privacidad
                </a>{' '}
                de Frontera 49 Roma Norte para dar seguimiento a mi solicitud.
              </label>
            </div>

            {/* Botón de Envío en rojo característico */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full group inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg bg-[#981A15] hover:bg-[#B8241D] text-[#F4F5F1] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-glow-red hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Solicitud</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
