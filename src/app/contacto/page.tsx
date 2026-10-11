import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Clock, Sparkles, Heart } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { HOTEL_INFO } from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contáctanos & Reservaciones | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Comunícate con nuestro equipo en Valle de Bravo. Teléfonos empresariales (55) 9691-0966, (55) 5645-5347, WhatsApp, ubicación y reservaciones.",
};

export default function ContactoPage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Atención Personalizada 24/7
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          Contáctanos
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-2xl mx-auto font-light leading-relaxed">
          Estamos listos para recibirte. Ya sea que desees reservar una suite, planear una cena sorpresa o cotizar una experiencia holística, nuestro concierge te atenderá de inmediato.
        </p>
      </section>

      {/* Contact Direct Cards Grid */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Números Empresariales */}
          <div className="p-8 rounded-2xl bg-[#121715] border border-white/10 hover:border-[#C5B49F]/40 transition-all flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#C5B49F]/10 flex items-center justify-center text-[#C5B49F]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F4F5F1]">Números Empresariales</h3>
              <p className="text-xs text-[#8E9B93] leading-relaxed">
                Líneas telefónicas de atención directa para reservaciones, eventos corporativos y asistencia general.
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-white/5 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-x-2 text-[#C5B49F]">
                <a href="tel:+525596910966" className="hover:underline hover:text-[#F4F5F1] transition-colors font-semibold">
                  (55) 9691-0966
                </a>
                <span className="text-[#8E9B93]/40">/</span>
                <a href="tel:+525596969073" className="hover:underline hover:text-[#F4F5F1] transition-colors font-semibold">
                  (55) 9696-9073
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 text-[#C5B49F]">
                <a href="tel:+525556455347" className="hover:underline hover:text-[#F4F5F1] transition-colors font-semibold">
                  (55) 5645-5347
                </a>
                <span className="text-[#8E9B93]/40">/</span>
                <a href="tel:+525555737822" className="hover:underline hover:text-[#F4F5F1] transition-colors font-semibold">
                  (55) 5573-7822
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Ubicación */}
          <div className="p-8 rounded-2xl bg-[#121715] border border-white/10 hover:border-[#C5B49F]/40 transition-all flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#C5B49F]/10 flex items-center justify-center text-[#C5B49F]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F4F5F1]">Ubicación en Valle</h3>
              <p className="text-xs text-[#8E9B93] leading-relaxed">
                Carretera del Manguito 121, Sin Nombre, 51200 Valle de Bravo, Estado de México. A solo 5 min del centro.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Carretera+del+Manguito+121,+Valle+de+Bravo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5B49F] font-semibold hover:underline"
            >
              <span>Ver en Google Maps</span>
            </a>
          </div>

          {/* Card 3: WhatsApp Concierge */}
          <div className="p-8 rounded-2xl bg-[#121715] border border-white/10 hover:border-[#C5B49F]/40 transition-all flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#C5B49F]/10 flex items-center justify-center text-[#C5B49F]">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-[#F4F5F1]">WhatsApp Concierge</h3>
              <p className="text-xs text-[#8E9B93] leading-relaxed">
                Respuesta inmediata para disponibilidad de suites, reservaciones en Restaurante Milagro y experiencias holísticas.
              </p>
            </div>
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5B49F] font-semibold hover:underline"
            >
              <span>Iniciar Chat de WhatsApp &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-20">
        <ContactForm />
      </section>

      {/* Map Embed Section */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#121715] shadow-2xl">
          <div className="p-6 sm:p-8 flex items-center justify-between border-b border-white/5">
            <div>
              <h4 className="text-lg font-serif text-[#F4F5F1]">Cómo Llegar a Orgánico Valle</h4>
              <p className="text-xs text-[#8E9B93]">Aproximadamente 2 horas de CDMX por la Autopista Toluca-Valle de Bravo.</p>
            </div>
            <a
              href="https://maps.google.com/?q=Carretera+del+Manguito+121,+Valle+de+Bravo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C5B49F] uppercase tracking-wider font-medium hover:underline hidden sm:inline"
            >
              Abrir Navegador GPS
            </a>
          </div>
          <div className="w-full h-80 sm:h-96 bg-[#0E1311]">
            <iframe
              src="https://maps.google.com/maps?q=Carretera%20del%20Manguito%20121,%20Valle%20de%20Bravo,%20Mexico&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Orgánico Valle de Bravo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
