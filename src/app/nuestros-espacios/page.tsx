import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, Check, Trees, Waves, Building2, Flame } from "lucide-react";
import { SPACES } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import OrigenSpaSection from "@/components/OrigenSpaSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Nuestros Espacios | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Descubre más de 6 hectáreas de bosque y confort en Valle de Bravo. Alberca, Casa Club, Capilla, Salón Porvenir, jardines botánicos y canchas deportivas.",
};

export default function NuestrosEspaciosPage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <Trees className="w-3.5 h-3.5" />
          Más de 6 Hectáreas de Bosque & Confort
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          Nuestros Espacios
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-3xl mx-auto font-light leading-relaxed">
          Somos el refugio donde el pulso del bosque se encuentra con la serenidad de un hogar diseñado para conectar. Desde el susurro de los árboles hasta el diseño orgánico que nos define, te ofrecemos un santuario para desconectarte del ruido y reponerte en la esencia de lo natural.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={getWhatsAppUrl("general", "Quiero conocer más sobre las instalaciones y espacios")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-xl shadow-[#C5B49F]/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Solicitar Recorrido o Información</span>
          </a>
        </div>
      </section>

      {/* Grid of Spaces */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPACES.map((space) => (
            <div
              key={space.id}
              className="rounded-2xl overflow-hidden bg-[#121715] border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group"
            >
              <div>
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121715] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A0D0C]/80 border border-white/10 text-[10px] uppercase tracking-widest text-[#C5B49F] backdrop-blur-md">
                    {space.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <span className="text-xs text-[#C5B49F] italic font-serif block">
                    {space.tagline}
                  </span>
                  <h3 className="text-2xl font-serif text-[#F4F5F1]">
                    {space.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-light">
                    {space.description}
                  </p>

                  <div className="pt-2 border-t border-white/5 space-y-1.5">
                    {space.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#8E9B93]">
                        <Check className="w-3.5 h-3.5 text-[#C5B49F] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={getWhatsAppUrl("general", `Información sobre ${space.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-[#C5B49F] hover:text-[#0A0D0C] text-[#F4F5F1] text-xs uppercase tracking-widest transition-all font-medium"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Consultar Espacio</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Origen Spa Integration */}
      <div className="mt-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <OrigenSpaSection variant="compact" />
      </div>
    </div>
  );
}
