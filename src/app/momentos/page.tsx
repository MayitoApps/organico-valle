import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, Check, Compass, Flame, Heart } from "lucide-react";
import { MOMENTS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import OrigenSpaSection from "@/components/OrigenSpaSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Momentos & Experiencias | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Descubre momentos creados especialmente para ti en Valle de Bravo. Vuelo en parapente, kayak en el lago, fogatadas entre amigos y cenas románticas privadas.",
};

export default function MomentosPage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Experiencias Diseñadas a la Medida
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          Momentos Orgánico
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-3xl mx-auto font-light leading-relaxed">
          En Orgánico Hotel Boutique Valle cada estancia se transforma en una colección de instantes inolvidables. Entendemos que viajar es cambiar de perspectiva: aquí vienes a celebrar los hitos que marcan tu historia, a reconectar contigo y a vivir Valle desde la emoción que solo la naturaleza puede inspirar.
        </p>
      </section>

      {/* Moments Sections */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-24">
        {MOMENTS.map((moment, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={moment.id}
              id={moment.id}
              className="rounded-3xl bg-[#121715] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual */}
                <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Info */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold block mb-2">
                      {moment.categoryTitle}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
                      {moment.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#C5B49F] font-serif italic">
                      &ldquo;{moment.subtitle}&rdquo;
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                    {moment.description}
                  </p>

                  <div className="pt-2 border-t border-white/5 space-y-2.5">
                    <span className="text-xs uppercase tracking-wider text-[#F4F5F1] font-medium block">
                      Experiencias disponibles:
                    </span>
                    <div className="space-y-2">
                      {moment.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#8E9B93]">
                          <Check className="w-4 h-4 text-[#C5B49F] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={getWhatsAppUrl(moment.bookingType)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-xl shadow-[#C5B49F]/20"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Cotizar este Momento por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Origen Spa Integration */}
      <div className="mt-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <OrigenSpaSection variant="full" />
      </div>
    </div>
  );
}
