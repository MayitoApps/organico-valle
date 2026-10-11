"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ExternalLink, Leaf, Heart, ShieldCheck } from "lucide-react";

interface OrigenSpaSectionProps {
  variant?: "full" | "compact";
}

export default function OrigenSpaSection({ variant = "full" }: OrigenSpaSectionProps) {
  if (variant === "compact") {
    return (
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#121715] to-[#161D1A] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5B49F]">
            <Sparkles className="w-3.5 h-3.5" />
            Bienestar & Conexión Holística
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-[#F4F5F1]">
            Origen Centro Holístico y Spa
          </h3>
          <p className="text-xs sm:text-sm text-[#8E9B93] max-w-xl font-light">
            Complementa tu estancia en Orgánico Valle con terapias de sanación, masajes relajantes, piedras calientes y rituales de reconexión.
          </p>
        </div>

        <a
          href="https://www.origencentroholisticoyspa.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-lg"
        >
          <span>Conocer Servicios de Spa</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0D0C] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#C5B49F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/spa/origen-spa-1.webp"
                alt="Origen Centro Holístico y Spa en Orgánico Valle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3.5 py-1 rounded-full bg-[#0A0D0C]/80 border border-white/10 text-[11px] uppercase tracking-wider text-[#C5B49F] backdrop-blur-md">
                  Sanación & Bienestar
                </span>
                <p className="mt-2 text-sm text-[#F4F5F1] font-serif italic">
                  &ldquo;Restaura tu fuerza vital en un santuario rodeado de bosque y aire puro.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 p-5 rounded-xl bg-[#121715]/95 border border-[#C5B49F]/20 backdrop-blur-xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5B49F]/10 flex items-center justify-center text-[#C5B49F]">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#F4F5F1] font-medium">
                    Técnicas Ancestrales
                  </h4>
                  <p className="text-[11px] text-[#8E9B93]">
                    Masaje sueco, piedras calientes, reflexología y rituales holísticos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy and CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Santuario de Bienestar en Valle
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1] leading-tight">
              Origen Centro Holístico y Spa
            </h2>

            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              En el corazón de nuestro hotel, el tiempo se rinde ante la calma. Hemos concebido las experiencias de bienestar como un santuario de sanación donde el aire puro de Valle de Bravo se entrelaza con la ciencia del bienestar.
            </p>

            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              A través de <strong>Origen Centro Holístico y Spa</strong>, podrás disfrutar de masajes terapéuticos, rituales con piedras calientes, aromaterapia botánica y terapias diseñadas para liberar las tensiones y permitir que tu energía vital fluya de nuevo con absoluta libertad.
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#F4F5F1]">
                <ShieldCheck className="w-4 h-4 text-[#C5B49F] flex-shrink-0" />
                <span>Terapeutas certificados</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F4F5F1]">
                <Heart className="w-4 h-4 text-[#C5B49F] flex-shrink-0" />
                <span>Rituales para parejas</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://www.origencentroholisticoyspa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C5B49F] text-[#0A0D0C] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#d8c7b5] transition-all duration-300 shadow-xl shadow-[#C5B49F]/20 group"
              >
                <span>Conoce los Servicios de Origen Spa</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
