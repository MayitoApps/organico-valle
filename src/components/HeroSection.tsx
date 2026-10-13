"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 px-5 sm:px-8 overflow-hidden bg-[#0A0D0C]">
      {/* Background Image & Multi-layered Scrims */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-exterior.webp"
          alt="Orgánico Hotel Boutique Valle de Bravo - Vista panorámica aérea de las instalaciones y bosque"
          fill
          priority
          loading="eager"
          className="object-cover object-center scale-105 transform animate-in fade-in duration-1000"
          sizes="100vw"
        />
        {/* Multi-layered dark gradients for atmospheric depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/60 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,13,12,0.8)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 mt-8 reveal-stagger">
        {/* Overline tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.3em] text-[#C5B49F] font-semibold reveal">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F] animate-pulse" />
          <span>Valle de Bravo · A 2h de CDMX · Estado de México</span>
        </div>

        {/* Mandatory Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F4F5F1] tracking-tight leading-[1.08] max-w-4xl reveal">
          Así se siente el Lago, <br />
          <span className="font-normal text-[#C5B49F]">
            Así se siente Orgánico Valle.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#9AA39D] font-light max-w-2xl leading-relaxed reveal">
          Un santuario de calma y naturaleza viva a la orilla de Valle de Bravo. Suites privadas entre el bosque y momentos para reconectar con lo esencial.
        </p>

        {/* Direct Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto reveal">
          <a
            href={getWhatsAppUrl("habitaciones_general")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#D8C7B3] hover:shadow-lg hover:shadow-[#C5B49F]/20 active:scale-[0.98] transition-all duration-300 shadow-2xl select-none"
            aria-label="Reservar por WhatsApp para Orgánico Valle"
          >
            <WhatsAppIcon black size={18} className="w-4 h-4 shrink-0" />
            <span>Reservar por WhatsApp</span>
          </a>
          <Link
            href="/nuestras-habitaciones"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-[#F4F5F1] bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-md transition-all duration-300 group"
          >
            <span>Ver Habitaciones</span>
            <ArrowRight className="w-4 h-4 text-[#C5B49F] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-12 border-t border-white/10 w-full max-w-2xl text-center reveal-stagger">
          <div className="reveal">
            <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">40</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">Suites de Lujo</p>
          </div>
          <div className="reveal">
            <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">6+ Hectáreas</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">Jardines y Bosque</p>
          </div>
          <div className="reveal">
            <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">Pet Friendly</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">100% Bienvenidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
