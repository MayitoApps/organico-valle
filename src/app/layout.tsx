import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { HOTEL_INFO } from "@/lib/data";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0D0C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.organicohotelboutiquevalle.com"),
  title: {
    default: "Orgánico Hotel Boutique Valle de Bravo | Lujo Rústico y Naturaleza",
    template: "%s | Orgánico Hotel Boutique Valle de Bravo",
  },
  description:
    "Descubre un refugio de lujo rústico en Valle de Bravo. 40 suites privadas, alberca, restaurante Milagro, Bar Bienaventurado, capilla, jardines y ambiente Pet Friendly a 5 minutos del centro y 2h de CDMX.",
  keywords: [
    "Hotel boutique en Valle de Bravo",
    "Orgánico Hotel Boutique Valle",
    "Hoteles en Valle de Bravo con alberca",
    "Hotel Pet Friendly Valle de Bravo",
    "Restaurante Milagro Valle de Bravo",
    "Bar Bienaventurado",
    "Grupo Orgánico Hoteles Boutique",
    "Hospedaje romántico Valle de Bravo",
    "Bodas y eventos en Valle de Bravo",
    "Origen Centro Holístico y Spa",
    "Cabañas y suites en Valle de Bravo",
  ],
  authors: [{ name: "Grupo Orgánico Hoteles Boutique" }],
  creator: "Grupo Orgánico Hoteles Boutique",
  publisher: "Orgánico Hotel Boutique Valle de Bravo",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.organicohotelboutiquevalle.com",
  },
  openGraph: {
    title: "Orgánico Hotel Boutique Valle de Bravo | Así se siente el lago",
    description:
      "Descubre un santuario de descanso y naturaleza en Valle de Bravo. 40 suites privadas, alberca, gastronomía de autor y experiencias con alma.",
    url: "https://www.organicohotelboutiquevalle.com",
    siteName: "Orgánico Hotel Boutique Valle de Bravo",
    images: [
      {
        url: "/images/suites/master-1.webp",
        width: 1200,
        height: 630,
        alt: "Orgánico Hotel Boutique Valle de Bravo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orgánico Hotel Boutique Valle de Bravo",
    description:
      "El hotel boutique donde naturaleza, bienestar y experiencias se encuentran en Valle de Bravo.",
    images: ["/images/suites/master-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Orgánico Valle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Hotel Structured Data (JSON-LD) for SEO and AI search engines
  const hotelJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    name: HOTEL_INFO.name,
    description: HOTEL_INFO.description,
    image: [
      "https://www.organicohotelboutiquevalle.com/images/suites/master-1.webp",
      "https://www.organicohotelboutiquevalle.com/images/espacios/alberca-1.webp",
      "https://www.organicohotelboutiquevalle.com/images/restaurante/milagro-1.webp",
    ],
    telephone: HOTEL_INFO.phone,
    url: "https://www.organicohotelboutiquevalle.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carretera del Manguito 121, Sin Nombre",
      addressLocality: "Valle de Bravo",
      addressRegion: "Estado de México",
      postalCode: "51200",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HOTEL_INFO.coordinates.lat,
      longitude: HOTEL_INFO.coordinates.lng,
    },
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    priceRange: "$$$",
    petsAllowed: true,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Alberca", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurante Milagro", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bar Bienaventurado", value: true },
      { "@type": "LocationFeatureSpecification", name: "Spa y Bienestar Origen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi Gratuito", value: true },
      { "@type": "LocationFeatureSpecification", name: "Capilla para bodas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Casa Club con billar", value: true },
      { "@type": "LocationFeatureSpecification", name: "Jardines de más de 6 hectáreas", value: true },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Grupo Orgánico Hoteles Boutique",
      url: "https://www.gohb.com.mx/",
    },
  };

  return (
    <html lang="es-MX" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </head>
      <body className="bg-[#0A0D0C] text-[#F4F5F1] font-sans antialiased selection:bg-[#C5B49F] selection:text-[#0A0D0C] overflow-x-hidden min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
