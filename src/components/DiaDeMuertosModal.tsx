"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

export default function DiaDeMuertosModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Check if user already dismissed the modal in this session
    try {
      const seen = sessionStorage.getItem("gohb_seen_valle");
      if (seen === "true") {
        return;
      }
    } catch {
      // Ignore sessionStorage errors
    }

    // Delay appearance for elegant entrance after hero loads
    const timer = setTimeout(() => {
      setIsRendered(true);
      // Small tick for smooth CSS transition
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("gohb_seen_valle", "true");
    } catch {
      // Ignore
    }
    setTimeout(() => {
      setIsRendered(false);
    }, 350);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Campaña Día de Muertos 2026 - Orgánico Valle"
      className={`fixed inset-0 z-[999999] flex items-center justify-center p-4 transition-all duration-350 ease-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[#0E0B09]/85 backdrop-blur-md transition-opacity duration-350 cursor-pointer"
      />

      {/* Modal Card */}
      <div
        className={`relative z-10 w-full max-w-[530px] max-h-[90vh] overflow-y-auto bg-[#1D1815] border border-[#D9822B]/45 rounded-[22px] p-6 sm:p-8 text-[#F2E8DC] shadow-[0_25px_65px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(217,130,43,0.22)] transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-5 scale-[0.97]"
        }`}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#D9822B #1D1815",
        }}
      >
        {/* Glow effect at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[140px] bg-[radial-gradient(ellipse_at_top,rgba(217,130,43,0.25)_0%,rgba(184,74,41,0.08)_50%,transparent_80%)] pointer-events-none rounded-t-[22px]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar ventana"
          className="absolute top-3.5 right-4 w-9 h-9 rounded-full bg-white/[0.06] border border-[#D9822B]/30 text-[#F2E8DC] flex items-center justify-center hover:bg-[#D9822B] hover:text-[#1D1815] hover:rotate-90 transition-all duration-200 z-20 group"
        >
          <X className="w-4 h-4 transition-transform" />
        </button>

        {/* Header */}
        <div className="text-center mb-5 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[#D9822B]/10 border border-dashed border-[#D9822B]/50 px-3.5 py-1.5 rounded-full text-[10.5px] sm:text-[11px] font-bold tracking-[0.12em] text-[#D9822B] uppercase mb-3">
            <span>🔥</span>
            <span>DÍA DE MUERTOS 2026 · VALLE DE BRAVO</span>
          </div>

          <h2 className="text-2xl sm:text-[26px] font-serif font-bold leading-tight tracking-wide mb-2 bg-gradient-to-r from-white via-[#F59E42] to-[#D9822B] bg-clip-text text-transparent">
            Recordar es volver a encontrarnos
          </h2>
          <p className="text-[13px] sm:text-[13.5px] text-[#A89B91] max-w-md mx-auto leading-relaxed">
            El misticismo del bosque y el lago de Valle de Bravo para un reencuentro con nuestras raíces.
          </p>
        </div>

        {/* Events List */}
        <div className="flex flex-col gap-2.5 mb-6 relative z-10">
          {/* Evento 1 */}
          <div className="bg-[#261F1B]/80 hover:bg-[#2D241F] border border-[#B84A29]/30 hover:border-[#D9822B]/60 border-l-[3px] border-l-[#D9822B] rounded-xl p-3.5 text-left transition-all duration-200 hover:translate-x-1">
            <div className="text-[10px] font-bold tracking-[0.08em] text-[#D9822B] uppercase mb-0.5">
              31 DE OCTUBRE · 7:00 PM · $1,700 MXN
            </div>
            <div className="font-serif text-[14.5px] font-bold text-[#F2E8DC] mb-1 leading-snug">
              Cena de Raíces Valle de Bravo
            </div>
            <p className="text-[12px] text-[#A89B91] leading-relaxed m-0">
              Banquete íntimo de 6 tiempos a fuego de leña en terraza de montaña con maridaje curado por sommelier.
            </p>
          </div>

          {/* Evento 2 */}
          <div className="bg-[#261F1B]/80 hover:bg-[#2D241F] border border-[#B84A29]/30 hover:border-[#D9822B]/60 border-l-[3px] border-l-[#D9822B] rounded-xl p-3.5 text-left transition-all duration-200 hover:translate-x-1">
            <div className="text-[10px] font-bold tracking-[0.08em] text-[#D9822B] uppercase mb-0.5">
              TEMPORADA OFICIAL DE MUERTOS
            </div>
            <div className="font-serif text-[14.5px] font-bold text-[#F2E8DC] mb-1 leading-snug">
              Restaurante Milagro: Mole Tradicional
            </div>
            <p className="text-[12px] text-[#A89B91] leading-relaxed m-0">
              Platillo emblemático de las ofrendas vallesanas: mole rojo ancestral de guajolote y arroz rojo de fiesta.
            </p>
          </div>

          {/* Evento 3 */}
          <div className="bg-[#261F1B]/80 hover:bg-[#2D241F] border border-[#B84A29]/30 hover:border-[#D9822B]/60 border-l-[3px] border-l-[#D9822B] rounded-xl p-3.5 text-left transition-all duration-200 hover:translate-x-1">
            <div className="text-[10px] font-bold tracking-[0.08em] text-[#D9822B] uppercase mb-0.5">
              DOBLE FUNCIÓN · 7:00 PM Y 9:30 PM
            </div>
            <div className="font-serif text-[14.5px] font-bold text-[#F2E8DC] mb-1 leading-snug">
              Cine de Terror al Aire Libre
            </div>
            <p className="text-[12px] text-[#A89B91] leading-relaxed m-0">
              Proyección bajo las estrellas con fogateros encendidos, cobijas térmicas y barra de snacks tradicionales.
            </p>
          </div>

          {/* Evento 4 */}
          <div className="bg-[#261F1B]/80 hover:bg-[#2D241F] border border-[#B84A29]/30 hover:border-[#D9822B]/60 border-l-[3px] border-l-[#D9822B] rounded-xl p-3.5 text-left transition-all duration-200 hover:translate-x-1">
            <div className="text-[10px] font-bold tracking-[0.08em] text-[#D9822B] uppercase mb-0.5">
              +120 ACTIVIDADES CULTURALES
            </div>
            <div className="font-serif text-[14.5px] font-bold text-[#F2E8DC] mb-1 leading-snug">
              Festival de las Almas & Pan Relleno
            </div>
            <p className="text-[12px] text-[#A89B91] leading-relaxed m-0">
              Hospedaje de alta exclusividad en Valle, pan de muerto artesanal relleno horneado a diario y altar natural.
            </p>
          </div>
        </div>

        {/* Footer & CTA */}
        <div className="text-center relative z-10">
          <a
            href="https://dia-de-muertos-gohb.vercel.app/organico-valle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D9822B] to-[#B84A29] hover:from-[#E68E35] hover:to-[#C45330] text-white font-bold text-[13.5px] sm:text-sm tracking-wide shadow-[0_6px_20px_rgba(217,130,43,0.4)] hover:shadow-[0_10px_28px_rgba(217,130,43,0.6)] hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Ver Experiencias y Reservar Valle</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <p className="text-[11px] text-[#A89B91]/80 mt-2.5 mb-0">
            Cupos limitados · Experiencias gastronómicas con previa reservación
          </p>
        </div>
      </div>
    </div>
  );
}
