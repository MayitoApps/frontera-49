# Frontera 49 Roma Norte · Sitio Web Oficial

> Rediseño integral y plataforma web de alta conversión para **Frontera 49 Roma Norte**, parte de **Grupo Orgánico Hoteles Boutique**. Migrado desde Squarespace hacia Next.js 15 App Router para máxima velocidad, estética editorial de lujo urbano y conversión directa vía WhatsApp y motor de contacto empresarial.

---

## 🏛️ Sobre el Proyecto

Frontera 49 es un hostal y hotel boutique ubicado en Calle Frontera 49, Roma Norte, Ciudad de México. El sitio web combina una estética contemporánea en modo oscuro (*Dark Earth Aesthetic* con el rojo característico `#981A15` de la marca), arquitectura SEO semántica, tipografía moderna (*Space Grotesk* + *Raleway*) y flujos de reserva personalizados por tipo de habitación y experiencia.

### 🌟 Características Principales

- **Next.js 15 App Router + React 19 + TypeScript**: Rendimiento óptimo con SSR, generación estática (SSG) y First Load JS mínimo.
- **Identidad de Marca Oficial**:
  - Color rojo terracota carmín característico: `#981A15`.
  - Logotipo oficial de Frontera 49 y Grupo Orgánico.
  - Iconos de WhatsApp en color blanco puro en todos los botones de reserva.
- **Motor de Reservas WhatsApp Personalizado**:
  - Mensajes predeterminados personalizados para Habitación Sencilla ($928.00 MXN), Habitación Deluxe ($1,392.00 MXN), Cenas Románticas ($5,000 MXN), Pintor por un Día, Coworking, Foro Cultural, Rooftop y Alianzas.
- **Sección de Grupo Orgánico**:
  - Video institucional integrado en alta definición sin distracciones.
  - Narrativa editorial del universo de destinos del grupo (Valle de Bravo, Tepoztlán, Ajusco, Tlalpan, Roma Norte y Veracruz).
- **Sistema de Contacto Dual**:
  - Endpoint `/api/contacto` con fallback automático entre Resend y Gmail SMTP.
  - Protección con honeypot antispam.
  - Plantilla HTML de correo corporativo para el equipo de atención (`artes.grupoorganico@gmail.com`).
- **SEO & Redirecciones 301**:
  - Esquema estructurado Schema.org JSON-LD (`Hotel`, `LodgingBusiness`, `LocalBusiness`).
  - `sitemap.xml` y `robots.txt` dinámicos.
  - Redirecciones 301 de URLs previas de Squarespace en `next.config.mjs` para preservar rankings en Google.
- **UX Móvil Optimizada**:
  - Menú desplegable móvil con enlaces perfectamente centrados en pantalla.
  - Botones del Hero adaptativos, estilizados y compactos en pantallas móviles.
  - Jerarquía tipográfica móvil con títulos dominantes.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Email Delivery**: [Resend](https://resend.com/) + [Nodemailer](https://nodemailer.com/) (Gmail SMTP)
- **Analíticas**: [@vercel/analytics](https://vercel.com/analytics)

---

## 🚀 Despliegue en Desarrollo y Producción

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Variables de Entorno
Crea un archivo `.env.local` basado en `.env.example`:
```env
CONTACT_RECEIVER_EMAIL="artes.grupoorganico@gmail.com"
RESEND_API_KEY="" # Opcional si se usa Resend
GMAIL_USER=""     # Opcional si se usa Gmail SMTP
GMAIL_APP_PASS="" # Contraseña de aplicación de Google
```

### 3. Ejecutar servidor local
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Compilación de producción
```bash
npm run build
npm run start
```

---

## 📄 Estructura de Rutas

- `/`: Inicio, Hero interactivo, Video Grupo Orgánico, Habitaciones y Experiencias.
- `/habitaciones`: Catálogo con tarifas oficiales (Sencilla $928.00 MXN / Deluxe $1,392.00 MXN).
- `/espacios`: Rooftop, Cafetería, Coworking y Foro Cultural.
- `/restaurante`: Garnachería Única, gastronomía mexicana tradicional y barras.
- `/eventos`: Cotización de eventos privados, corporativos, press days y talleres.
- `/momentos`: Cenas románticas de 4 tiempos y Noches de Cine al aire libre.
- `/quienes-somos`: Nosotros, identidad, hospitalidad honesta y comunidad en Roma Norte.
- `/hagamos-equipo`: Alianzas con artistas, colectivos, creadores y marcas locales.
- `/contacto`: Líneas telefónicas, WhatsApp concierge, formulario y mapa interactivo.
- `/aviso-de-privacidad`: Términos legales y protección de datos ARCO.

---

Desarrollado para **Frontera 49 Roma Norte** · *Grupo Orgánico Hoteles Boutique*.
