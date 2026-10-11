"use client";

import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";

export default function GrupoOrganicoSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#080B0A] border-t border-b border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C5B49F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Title above video */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Colección de Destinos & Hospitalidad
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1] tracking-wider uppercase leading-tight">
            DESCUBRE EL UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5B49F] mx-auto mt-6" />
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black mb-14">
          <iframe
            src="https://www.youtube-nocookie.com/embed/r2tnnrp-G6Y?modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&color=white"
            title="Descubre el Universo de Grupo Orgánico Hoteles Boutique"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description after video */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-serif text-[#F4F5F1] italic font-light">
            Un universo de destinos, experiencias y momentos inolvidables.
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
            <p>
              Déjate envolver por la serenidad del bosque y la energía mística de Valle de Bravo y Tepoztlán; reconecta con la naturaleza, el aire puro y la esencia de la montaña en Ajusco; o descubre el encanto histórico, el arte y la vida cultural que distinguen a Tlalpan y a la vibrante Roma Norte.
            </p>
            <p>
              Y cuando el cuerpo pida mar, calidez y tradición, Veracruz te espera con su brisa, su sabor y esa forma única de hacerte sentir bienvenido.
            </p>
            <div className="py-2 text-[#C5B49F] font-serif text-lg sm:text-xl space-y-1">
              <p>Cada destino tiene su propia esencia.</p>
              <p>Cada espacio, una historia por vivir.</p>
              <p>Cada experiencia, un momento para recordar.</p>
            </div>
            <p className="text-sm font-medium text-[#F4F5F1] tracking-wide uppercase pt-2">
              Todo forma parte del Universo de Grupo Orgánico.
            </p>
          </div>

          {/* Button to group page */}
          <div className="pt-8">
            <a
              href="https://www.gohb.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C5B49F] text-[#0A0D0C] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#d8c7b5] transition-all duration-300 shadow-xl shadow-[#C5B49F]/20 group"
            >
              <span>Conoce Más de Grupo Orgánico</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
