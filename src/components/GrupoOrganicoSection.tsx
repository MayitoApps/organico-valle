"use client";

import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";

export default function GrupoOrganicoSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#060807] border-t border-b border-white/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-[#C5B49F]/5 via-[#D98A53]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] uppercase tracking-[0.3em] text-[#C5B49F] font-semibold reveal">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Colección de Refugios</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F4F5F1] tracking-tight max-w-4xl leading-[1.15] reveal">
          DESCUBRE EL UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-[#C5B49F] font-light max-w-3xl leading-relaxed reveal">
          Un universo de destinos, experiencias y momentos inolvidables.
        </p>

        {/* Video Player */}
        <div className="w-full max-w-4xl mx-auto my-3 reveal-scale">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/r2tnnrp-G6Y?modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&color=white"
              title="Descubre el Universo de Grupo Orgánico Hoteles Boutique"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl flex flex-col gap-6 text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed reveal">
          <p>
            Déjate envolver por la serenidad del bosque y la energía mística de Valle de Bravo y Tepoztlán; reconecta con la naturaleza, el aire puro y la esencia de la montaña en Ajusco; o descubre el encanto histórico, el arte y la vida cultural que distinguen a Tlalpan y a la vibrante Roma Norte.
          </p>
          <p>
            Y cuando el cuerpo pida mar, calidez y tradición, Veracruz te espera con su brisa, su sabor y esa forma única de hacerte sentir bienvenido.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl pt-4 border-y border-white/10 py-8 reveal-stagger">
          <div className="p-4 rounded-xl bg-white/[0.02] reveal">
            <p className="text-sm sm:text-base font-normal text-[#F4F5F1] italic">
              Cada destino tiene su propia esencia.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] reveal">
            <p className="text-sm sm:text-base font-normal text-[#F4F5F1] italic">
              Cada espacio, una historia por vivir.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] reveal">
            <p className="text-sm sm:text-base font-normal text-[#F4F5F1] italic">
              Cada experiencia, un momento para recordar.
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg font-medium text-[#F4F5F1] tracking-wide reveal">
          Todo forma parte del Universo de Grupo Orgánico.
        </p>

        <div className="pt-2 reveal">
          <a
            href="https://www.gohb.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A0D0C] bg-[#C5B49F] hover:bg-[#D8C7B3] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-black/60"
          >
            <span>Visitar Sitio Web de Grupo Orgánico</span>
            <ExternalLink className="w-4 h-4 text-[#0A0D0C]" />
          </a>
        </div>
      </div>
    </section>
  );
}
