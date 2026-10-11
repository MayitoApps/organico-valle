"use client";

import React from "react";
import Image from "next/image";
import { Users, Check } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { RoomData } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface RoomCardProps {
  room: RoomData;
  featured?: boolean;
}

export default function RoomCard({ room, featured = false }: RoomCardProps) {
  const whatsappUrl = getWhatsAppUrl(room.bookingType);

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden bg-[#121715] border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-500 flex flex-col shadow-2xl ${
        featured ? "lg:grid lg:grid-cols-12 gap-0" : ""
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden bg-black ${
          featured ? "lg:col-span-7 aspect-[16/10] lg:aspect-auto min-h-[340px]" : "aspect-[16/11]"
        }`}
      >
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121715] via-transparent to-transparent opacity-80" />

        {/* Capacity badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0D0C]/80 border border-white/10 text-[11px] text-[#F4F5F1] backdrop-blur-md">
          <Users className="w-3 h-3 text-[#C5B49F]" />
          <span>{room.capacity}</span>
        </div>
      </div>

      {/* Info Container */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-between flex-1 ${
          featured ? "lg:col-span-5 lg:p-10" : ""
        }`}
      >
        <div className="space-y-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5B49F] font-medium block mb-1">
              {room.bedType}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors">
              {room.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-light">
            {room.description}
          </p>

          {/* Features */}
          <div className="pt-2 border-t border-white/5 space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#F4F5F1]/80 font-medium block">
              Amenidades destacadas:
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {room.features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#8E9B93]">
                  <Check className="w-3.5 h-3.5 text-[#C5B49F] flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing & Action Button */}
        <div className="pt-5 mt-6 border-t border-white/10 space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] uppercase tracking-wider text-[#8E9B93]">Tarifa por noche</span>
            <span className="text-xl sm:text-2xl font-serif text-[#C5B49F] font-semibold">{room.price}</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-lg shadow-[#C5B49F]/20"
          >
            <WhatsAppIcon black className="w-4 h-4" />
            <span>Reservar por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
