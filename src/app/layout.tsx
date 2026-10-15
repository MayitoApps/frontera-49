import type { Metadata } from 'next';
import { Space_Grotesk, Raleway } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.frontera49.com'),
  title: {
    default: 'Frontera 49 · Hotel Boutique Roma Norte | Ciudad de México',
    template: '%s | Frontera 49 Roma Norte',
  },
  description:
    'Hospédate en Frontera 49 – Roma Norte: un hotel boutique y hostal contemporáneo donde el descanso, el arte, la gastronomía y la comunidad creativa de la Ciudad de México se unen.',
  keywords: [
    'Frontera 49',
    'Hotel Boutique Roma Norte',
    'Hostal Roma Norte CDMX',
    'Alojamiento Roma Norte',
    'Grupo Orgánico Hoteles Boutique',
    'Rooftop Roma Norte',
    'Coworking Roma Norte',
    'Garnachería Única',
    'Eventos Roma Norte',
    'Cenas Románticas CDMX'
  ],
  authors: [{ name: 'Grupo Orgánico Hoteles Boutique', url: 'https://www.gohb.com.mx' }],
  creator: 'Frontera 49',
  publisher: 'Grupo Orgánico Hoteles Boutique',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://www.frontera49.com',
  },
  openGraph: {
    title: 'Frontera 49 · Hotel Boutique Roma Norte | CDMX',
    description:
      'Hospédate en Frontera 49 – Roma Norte: un hotel boutique contemporáneo donde diseño, comunidad, gastronomía y descanso se encuentran en el corazón de la Ciudad de México.',
    url: 'https://www.frontera49.com',
    siteName: 'Frontera 49 Roma Norte',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Frontera 49 Hotel Boutique Roma Norte',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontera 49 · Hotel Boutique Roma Norte',
    description:
      'Así se siente la Ciudad, Así se Siente Frontera 49. Hotel boutique y comunidad en Roma Norte, CDMX.',
    images: ['/images/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data para Google y Motores de Búsqueda IA (GEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Hotel', 'LodgingBusiness', 'LocalBusiness'],
    '@id': 'https://www.frontera49.com/#hotel',
    name: 'Frontera 49 Roma Norte',
    legalName: 'Frontera 49 - Grupo Orgánico Hoteles Boutique',
    url: 'https://www.frontera49.com',
    logo: 'https://www.frontera49.com/images/logo-white.png',
    image: 'https://www.frontera49.com/images/hero-bg.png',
    description:
      'Hotel boutique y hostal contemporáneo ubicado en la emblemática Colonia Roma Norte de la Ciudad de México. Cuenta con 23 habitaciones, rooftop panorámico, coworking, foro cultural y cafetería de especialidad.',
    telephone: '+52-55-7455-5091',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Frontera 49',
      addressLocality: 'Cuauhtémoc, Roma Norte',
      addressRegion: 'CDMX',
      postalCode: '06700',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.4208',
      longitude: '-99.1578',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '21:00',
      },
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Grupo Orgánico Hoteles Boutique',
      url: 'https://www.gohb.com.mx/',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Rooftop con vista a la ciudad', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Coworking de alta velocidad', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurante Garnachería Única', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Foro Cultural & Galería', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Sala de Cine', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Cenas Románticas', value: true },
    ],
  };

  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${raleway.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0D0C] text-[#F4F5F1] antialiased selection:bg-[#981A15] selection:text-[#F4F5F1] flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
