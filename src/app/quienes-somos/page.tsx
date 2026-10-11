import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Sparkles, Heart, Compass, CheckCircle2, Trees, Shield } from "lucide-react";
import GrupoOrganicoSection from "@/components/GrupoOrganicoSection";

export const metadata: Metadata = {
  title: "¿Quiénes Somos? | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Conoce la historia de Orgánico Hotel Boutique Valle de Bravo. Casi 90 años de vocación de descanso, más de 6 hectáreas de bosque y hospitalidad de Grupo Orgánico.",
};

export default function QuienesSomosPage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <Compass className="w-3.5 h-3.5" />
          Nuestra Esencia & Legado
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          ¿Quiénes Somos?
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-2xl mx-auto font-light leading-relaxed">
          Una historia que merece ser contada. Más de 6 hectáreas de naturaleza transformadas en un santuario boutique para volver a lo que de verdad importa.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-serif text-[#F4F5F1] leading-tight">
              Casi un siglo dedicado al descanso y la conexión con el bosque
            </h2>
            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              Durante casi 90 años este lugar ha sido un espacio dedicado al descanso, la reflexión y la conexión humana. Hoy conserva esa esencia en más de seis hectáreas de naturaleza, transformadas en un refugio boutique para quienes buscan desconectarse del ruido y volver a lo importante.
            </p>
            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              Ubicado estratégicamente en Valle de Bravo, nuestro hotel combina el aislamiento apacible de la montaña con la cercanía privilegiada de estar a escasos 5 minutos del pueblo y su emblemático lago.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#121715] border border-white/5">
                <Trees className="w-6 h-6 text-[#C5B49F] mb-2" />
                <span className="text-xl font-serif text-[#F4F5F1] block">6+ Hectáreas</span>
                <span className="text-xs text-[#8E9B93]">De bosque y jardines privados</span>
              </div>
              <div className="p-4 rounded-xl bg-[#121715] border border-white/5">
                <Shield className="w-6 h-6 text-[#C5B49F] mb-2" />
                <span className="text-xl font-serif text-[#F4F5F1] block">90 Años</span>
                <span className="text-xs text-[#8E9B93]">De historia y tradición viva</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/entorno/exterior-2.webp"
                alt="Historia y naturaleza en Orgánico Valle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pet Friendly Section */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="rounded-3xl bg-gradient-to-br from-[#121715] via-[#101513] to-[#0A0D0C] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-medium">
                <Heart className="w-3.5 h-3.5" />
                Filosofía Pet Friendly
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
                Tu mejor amigo también es bienvenido
              </h2>

              <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                En Orgánico Hotel Boutique sabemos que tu mascota es parte inseparable de tu familia. Por eso abrimos nuestras puertas para que disfruten juntos de la experiencia: caminatas entre la naturaleza viva, descanso en habitaciones amplias y confortables, y momentos al aire libre que nunca olvidarán.
              </p>

              <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                Aquí no tendrás que dejar a tu compañero de cuatro patas en casa: somos un espacio en armonía con la naturaleza y con quienes más amas.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-[#F4F5F1]">
                <CheckCircle2 className="w-4 h-4 text-[#C5B49F]" />
                <span>Senderos libres para caminatas caninas con correa</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/huespedes/perrito.webp"
                  alt="Tu mejor amigo también es bienvenido en Orgánico Valle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grupo Orgánico Hoteles Boutique Universe */}
      <GrupoOrganicoSection />
    </div>
  );
}
