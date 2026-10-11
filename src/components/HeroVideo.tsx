"use client";

import React from "react";
import Link from "next/link";
import { Bed, ArrowDown } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroVideo() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0D0C]">
      {/* Background YouTube Video with seamless cover fit */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <iframe
          src="https://www.youtube-nocookie.com/embed/3BNcav9cD5c?autoplay=1&mute=1&loop=1&playlist=3BNcav9cD5c&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Así se siente el lago, Así se Siente Orgánico valle"
          className="w-[300%] h-[300%] md:w-[150%] md:h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover filter brightness-[0.65] contrast-[1.08]"
          allow="autoplay; encrypted-media"
        />
        {/* Editorial Gradients & Vignette for maximum text readability and luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/40 to-[#0A0D0C]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D0C]/80 via-transparent to-[#0A0D0C]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70" />
      </div>

      {/* Hero Content - Perfectly Balanced & Centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 sm:pt-28 pb-16 sm:pb-20 flex flex-col items-center">
        {/* Main Title - Prominent Editorial Scale on Mobile */}
        <h1 className="text-[2.6rem] min-[390px]:text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F4F5F1] tracking-tight leading-[1.08] sm:leading-[1.12] max-w-4xl mx-auto text-balance drop-shadow-2xl font-normal">
          Así se siente el lago,
          <span className="block italic font-light text-[#C5B49F] mt-1 sm:mt-2.5">
            Así se Siente Orgánico valle
          </span>
        </h1>

        {/* Elegant Editorial Subtitle in Two Balanced Paragraphs */}
        <div className="mt-5 sm:mt-6 text-[12px] min-[390px]:text-[13px] sm:text-base md:text-lg text-[#F4F5F1]/85 max-w-3xl mx-auto font-light leading-relaxed tracking-wide space-y-1 sm:space-y-1.5 drop-shadow-md">
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
            className="w-full sm:w-auto sm:min-w-[195px] inline-flex items-center justify-center gap-2 px-3 sm:px-7 py-3 rounded-full bg-white/[0.08] border border-white/20 text-[#F4F5F1] text-[10.5px] min-[390px]:text-[11px] sm:text-xs uppercase tracking-[0.08em] min-[390px]:tracking-[0.12em] sm:tracking-[0.16em] font-medium hover:bg-white/[0.16] hover:border-[#C5B49F]/60 backdrop-blur-md transition-all duration-300 shadow-lg whitespace-nowrap group text-center"
          >
            <Bed className="w-4 h-4 text-[#C5B49F] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <span>Ver Habitaciones</span>
          </Link>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#C5B49F]/80 text-[10px] uppercase tracking-[0.25em] pointer-events-none">
        <span>Descubre</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C5B49F] animate-bounce" />
      </div>
    </section>
  );
}
