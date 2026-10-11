import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Wine, Flame, Music, Sparkles, Moon, GlassWater } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Mixología & Bar Bienaventurado | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Disfruta de Bar Bienaventurado en Valle de Bravo. Cocteles de autor con botánicos locales, noches de trovador en vivo, fogateros al aire libre y cava de vinos.",
};

export default function MixologiaPage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <Wine className="w-3.5 h-3.5" />
          Alquimia de Sabores & Noches de Fuego
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          Bar Bienaventurado
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-3xl mx-auto font-light leading-relaxed">
          Hay momentos que merecen ser detenidos en el tiempo, y Bar Bienaventurado nace para ser ese refugio. Aquí la mixología no es solo técnica, es alquimia: botánicos frescos, destilados premium y el rumor del viento entre los pinos de Valle de Bravo.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("bar_bienaventurado")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-xl shadow-[#C5B49F]/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Consultar Noches de Fogata & Trova</span>
          </a>
        </div>
      </section>

      {/* Feature 1: Noches de Fuego y Melodía */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium">
              <Music className="w-3.5 h-3.5" />
              Música en Vivo & Atardeceres
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
              Noches de fuego y melodía
            </h2>

            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              ¿Buscas el cierre perfecto para tu día? En Bar Bienaventurado la música en vivo no es un simple acompañamiento; es la chispa que enciende la noche. Cuando el sol se oculta tras los montes de Valle de Bravo, nuestro espacio se transforma en un refugio de luz ámbar, fogateros encendidos y sonidos honestos.
            </p>

            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              Déjate envolver por la voz y guitarra de nuestro trovador, cuyas melodías cuentan historias que parecen escritas para el instante exacto en que brindas con quienes más quieres.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-[#F4F5F1]">
                <Flame className="w-4 h-4 text-[#C5B49F]" />
                <span>Fogatas y leña aromática</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#F4F5F1]">
                <Moon className="w-4 h-4 text-[#C5B49F]" />
                <span>Cielo nocturno abierto</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/mixologia/bar-2.webp"
                alt="Ambiente y veladas en Bar Bienaventurado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Curaduría de Vinos y Destilados */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-20">
        <div className="rounded-3xl bg-[#121715] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/mixologia/bar-1.webp"
                  alt="Coctelería y barra de Bar Bienaventurado"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:order-1">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium block">
                Cava Seleccionada & Mixología Botánica
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
                Curaduría de Vinos de Origen
              </h2>

              <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                La experiencia se complementa con una curaduría especial de vinos de pequeñas producciones, etiquetas cuidadosamente seleccionadas que cuentan historias de territorio, terruño y pasión por el detalle. Vinos pensados para descubrir, compartir y maridar a la perfección con la propuesta de Milagro.
              </p>

              <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                Un espacio íntimo y relajado para brindar al atardecer, cerrar el día después de una cena especial o simplemente dejar que la noche fluya entre luces cálidas y buena conversación.
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("cata_vino")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-xl shadow-[#C5B49F]/20"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Solicitar Información de Catas</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Espacios & Atmósfera de Bar Bienaventurado */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-medium block mb-2">
            Atmósfera & Detalles
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
            El Espacio de la Tertulia
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/mixologia/bar-2.webp"
              alt="Salón y Barra Iluminada Bar Bienaventurado"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-sm font-serif text-[#F4F5F1]">Salón & Barra Iluminada</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/mixologia/bar-3.webp"
              alt="Lounge con Vistas al Bosque"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-sm font-serif text-[#F4F5F1]">Lounge & Vistas al Bosque</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/mixologia/bar-4.webp"
              alt="Mesa de Degustación y Vinos"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-sm font-serif text-[#F4F5F1]">Mesa de Degustación & Vinos</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/mixologia/bar-5.webp"
              alt="Aperitivos y Charcutería Gourmet"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-sm font-serif text-[#F4F5F1]">Aperitivos & Tablas de Origen</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
