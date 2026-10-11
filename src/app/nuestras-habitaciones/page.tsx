import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, Users, Bed, Check, ShieldCheck, Heart } from "lucide-react";
import { ROOMS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import OrigenSpaSection from "@/components/OrigenSpaSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Habitaciones & Suites | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Descubre nuestras 40 habitaciones y suites privadas en Valle de Bravo. Suite Master, Suite Premium y Suite Familiar con chimenea, balcón y rodeadas de bosque.",
};

export default function HabitacionesPage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Descanso & Arquitectura Viva
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          Nuestras Habitaciones
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-2xl mx-auto font-light leading-relaxed">
          Un refugio para desconectar, dormir rico y despertar rodeado de naturaleza. Cada una de nuestras 40 habitaciones está diseñada para que descanses profundo: espacios cálidos, luz suave, texturas que abrazan y el silencio del Valle como compañía.
        </p>

        {/* Global inclusion perks */}
        <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-6 py-4 px-8 rounded-2xl bg-[#121715] border border-white/10 text-xs text-[#F4F5F1]">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C5B49F]" /> Desayuno Incluido
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C5B49F]" /> Bebida de Cortesía
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C5B49F]" /> Acceso a Alberca
          </span>
          <span className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#C5B49F]" /> 100% Pet Friendly
          </span>
        </div>
      </section>

      {/* Rooms List */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-20">
        {ROOMS.map((room, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={room.id}
              id={room.slug}
              className="rounded-3xl bg-[#121715] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Image Gallery Column */}
                <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Secondary Thumbnails */}
                  {room.gallery.length > 1 && (
                    <div className="grid grid-cols-3 gap-3 mt-3">
                      {room.gallery.map((img, i) => (
                        <div key={i} className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
                          <Image src={img} alt={`${room.name} ${i + 1}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium block mb-2">
                      {room.bedType} &middot; {room.capacity}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
                      {room.name}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-[#C5B49F] italic font-serif">
                      {room.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#8E9B93] leading-relaxed font-light">
                    {room.description}
                  </p>

                  <div className="pt-2 border-t border-white/5 space-y-3">
                    <span className="text-xs uppercase tracking-wider text-[#F4F5F1] font-medium block">
                      Características de la Suite:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#8E9B93]">
                          <Check className="w-3.5 h-3.5 text-[#C5B49F] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Action CTA with personalized WhatsApp */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-[#8E9B93] block">Tarifa por noche</span>
                      <span className="text-2xl sm:text-3xl font-serif text-[#C5B49F] font-semibold">{room.price}</span>
                    </div>

                    <a
                      href={getWhatsAppUrl(room.bookingType)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-xl shadow-[#C5B49F]/20"
                    >
                      <WhatsAppIcon black className="w-4 h-4" />
                      <span>Reservar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Spa Integration */}
      <div className="mt-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <OrigenSpaSection variant="compact" />
      </div>
    </div>
  );
}
