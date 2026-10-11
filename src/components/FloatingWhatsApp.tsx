"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121715]/95 border border-[#C5B49F]/30 backdrop-blur-md shadow-2xl text-xs text-[#F4F5F1] animate-fade-in">
          <span>¿Deseas cotizar tu estancia? <strong>Escríbenos</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8E9B93] hover:text-[#F4F5F1] ml-1 p-0.5"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button with user's whatsapp.png */}
      <a
        href={getWhatsAppUrl("general")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 p-3"
        aria-label="Reservar y chatear por WhatsApp con Concierge"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <div className="relative w-8 h-8">
          <Image
            src="/images/whatsapp-blanco.png"
            alt="WhatsApp Oficial Orgánico Valle"
            fill
            className="object-contain"
          />
        </div>
      </a>
    </div>
  );
}
