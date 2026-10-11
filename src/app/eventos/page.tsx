import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, Check, Calendar, Users, Briefcase, Heart, Flame } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Eventos, Bodas & Retiros | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Celebra bodas íntimas, retiros de bienestar y eventos corporativos en Valle de Bravo. Capilla consagrada, Salón Porvenir y banquetes exclusivos rodeados de bosque.",
};

const EVENT_TYPES = [
  {
    title: "Bodas & Celebraciones Sociales",
    subtitle: "Ceremonias íntimas con alma y belleza natural",
    description:
      "Nuestra Capilla consagrada y los jardines arbolados son el escenario soñado para jurarse amor eterno. Diseñamos banquetes de autor, ambientaciones con velas y veladas bajo las estrellas.",
    image: "/images/eventos/sociales-1.webp",
    bookingType: "bodas" as const,
  },
  {
    title: "Retiros de Bienestar & Conexión",
    subtitle: "Espacios de paz para yoga, meditación y sanación",
    description:
      "Rodeados del silencio de la sierra, nuestros jardines y terrazas son ideales para grupos que buscan reconectar con la respiración, la salud holística y el equilibrio interior.",
    image: "/images/eventos/meditacion.webp",
    bookingType: "eventos_sociales" as const,
  },
  {
    title: "Eventos Corporativos & Offsites",
    subtitle: "El lugar donde las ideas y las conexiones cobran vida",
    description:
      "Salón Porvenir equipado con tecnología audiovisual, dinámicas de integración como el reto Iron Chef al aire libre, y hospedaje en 40 suites privadas para equipos de alto rendimiento.",
    image: "/images/eventos/corporativos-1.webp",
    bookingType: "eventos_corporativos" as const,
  },
  {
    title: "Activaciones de Marca & Producciones",
    subtitle: "Locaciones estéticas y versátiles para marcas premium",
    description:
      "Sesiones fotográficas de moda, rodajes cinematográficos y lanzamientos de productos en locaciones con luz natural exquisita y privacidad garantizada.",
    image: "/images/eventos/montaje.webp",
    bookingType: "eventos_corporativos" as const,
  },
];

export default function EventosPage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <Calendar className="w-3.5 h-3.5" />
          Celebraciones, Retiros & Convenciones
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          Eventos con Alma
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-3xl mx-auto font-light leading-relaxed">
          Celebra diferente. Conecta profundo. Disfruta sin prisas. En Orgánico Hotel Boutique Valle creamos eventos que se sienten: más de 10 años de experiencia transformando bodas, retiros y encuentros empresariales en vivencias memorables.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={getWhatsAppUrl("eventos_sociales")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-xl shadow-[#C5B49F]/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Solicitar Propuesta para tu Evento</span>
          </a>
        </div>
      </section>

      {/* Event Categories */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENT_TYPES.map((ev, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden bg-[#121715] border border-white/10 hover:border-[#C5B49F]/30 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121715] via-transparent to-transparent" />
                </div>

                <div className="p-8 space-y-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C5B49F] font-medium block">
                    {ev.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F5F1]">
                    {ev.title}
                  </h3>
                  <p className="text-sm text-[#8E9B93] leading-relaxed font-light">
                    {ev.description}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <a
                  href={getWhatsAppUrl(ev.bookingType)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Cotizar {ev.title}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form for Event Inquiries */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <ContactForm />
      </section>
    </div>
  );
}
