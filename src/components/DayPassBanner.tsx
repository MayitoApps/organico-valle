"use client";

import React from "react";
import Image from "next/image";
import { Check, Sun, Coffee } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { HOTEL_INFO } from "@/lib/data";

export default function DayPassBanner() {
  const { dayPass } = HOTEL_INFO;

  return (
    <section className="relative py-20 sm:py-24 bg-[#0A0D0C] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#121715] via-[#0E1311] to-[#0A0D0C] p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Ambient blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5B49F]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Info Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs uppercase tracking-[0.25em] text-[#C5B49F]">
                <Sun className="w-3.5 h-3.5" />
                Pasadía en Valle de Bravo
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1] leading-tight">
                  Day Pass Orgánico Valle
                </h3>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-serif text-[#C5B49F] font-semibold">
                    {dayPass.price}
                  </span>
                  <span className="text-xs sm:text-sm text-[#8E9B93]">
                    &middot; {dayPass.note}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#8E9B93] leading-relaxed font-light">
                Escápate a pasar el día rodeado de naturaleza. Disfruta de nuestras instalaciones exclusivas, nada en la alberca y consiéntete con la gastronomía de Valle de Bravo.
              </p>

              {/* Inclusiones */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider text-[#F4F5F1] font-medium block">
                  Tu Day Pass Incluye:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {dayPass.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#F4F5F1]/90">
                      <div className="w-4 h-4 rounded-full bg-[#C5B49F]/20 flex items-center justify-center text-[#C5B49F] flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4">
                <a
                  href={getWhatsAppUrl("day_pass")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C5B49F] text-[#0A0D0C] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#d8c7b5] transition-all duration-300 shadow-xl shadow-[#C5B49F]/20"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Reservar Day Pass por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Visual Col */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/espacios/alberca-1.webp"
                  alt="Alberca y Day Pass Orgánico Valle de Bravo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F4F5F1] backdrop-blur-md bg-black/40 p-3 rounded-xl border border-white/10">
                  <span className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-[#C5B49F]" />
                    Desayuno & Cóctel incluido
                  </span>
                  <span className="text-[#C5B49F] font-mono">10:00 - 18:00 hrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
