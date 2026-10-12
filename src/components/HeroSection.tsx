"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, ArrowDown } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0D0C]">
      {/* Background Hero Image with natural luminosity and subtle soft overlays */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <Image
          src="/images/hero/hero-exterior.webp"
          alt="Orgánico Hotel Boutique Valle de Bravo - Vista panorámica aérea de las instalaciones y bosque"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.88] contrast-[1.02]"
        />
        {/* Soft, balanced overlays - Allows the image colors and light to shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D0C]/65 via-[#0A0D0C]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/30 to-transparent" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Hero Content - Centered with strong legibility drop-shadows */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 sm:pt-28 pb-16 sm:pb-20 flex flex-col items-center">
        {/* Main Title - Prominent Editorial Scale on Mobile */}
        <h1 className="text-[2.6rem] min-[390px]:text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F4F5F1] tracking-tight leading-[1.08] sm:leading-[1.12] max-w-4xl mx-auto text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] font-normal">
          Así se siente el lago,
          <span className="block italic font-light text-[#C5B49F] mt-1 sm:mt-2.5 drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
            Así se Siente Orgánico valle
          </span>
        </h1>

        {/* Elegant Editorial Subtitle in Two Balanced Paragraphs */}
        <div className="mt-5 sm:mt-6 text-[12px] min-[390px]:text-[13px] sm:text-base md:text-lg text-[#F4F5F1] max-w-3xl mx-auto font-light leading-relaxed tracking-wide space-y-1 sm:space-y-1.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          <p>Un santuario de calma y naturaleza viva a la orilla de Valle de Bravo.</p>
          <p>Suites privadas entre el bosque y momentos para reconectar con lo esencial.</p>
        </div>

        {/* CTA Buttons - Perfectly Balanced & Equal Size on Mobile & Desktop */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 w-full max-w-[370px] sm:flex sm:w-auto sm:items-center sm:justify-center sm:gap-4">
          <a
            href={getWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:min-w-[195px] inline-flex items-center justify-center gap-2 px-3 sm:px-7 py-3 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-[10.5px] min-[390px]:text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.16em] font-semibold hover:bg-[#d8c7b5] transition-all duration-300 shadow-xl shadow-[#C5B49F]/25 whitespace-nowrap group text-center"
          >
            <WhatsAppIcon black size={16} className="w-4 h-4 flex-shrink-0" />
            <span>Reservar</span>
          </a>

          <Link
            href="/nuestras-habitaciones"
            className="w-full sm:w-auto sm:min-w-[195px] inline-flex items-center justify-center gap-2 px-3 sm:px-7 py-3 rounded-full bg-black/40 border border-white/25 text-[#F4F5F1] text-[10.5px] min-[390px]:text-[11px] sm:text-xs uppercase tracking-[0.08em] min-[390px]:tracking-[0.12em] sm:tracking-[0.16em] font-medium hover:bg-black/60 hover:border-[#C5B49F]/60 backdrop-blur-md transition-all duration-300 shadow-lg whitespace-nowrap group text-center"
          >
            <Bed className="w-4 h-4 text-[#C5B49F] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Ver Habitaciones</span>
          </Link>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#C5B49F] text-[10px] uppercase tracking-[0.25em] pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
        <span>Descubre</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C5B49F] animate-bounce" />
      </div>
    </section>
  );
}
