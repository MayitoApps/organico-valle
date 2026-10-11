import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Compass, MapPin, Waves, Trees, Wind, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Conoce Valle de Bravo | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Descubre Valle de Bravo: lago, centro histórico, senderismo, parapente y naturaleza. Orgánico Hotel Boutique se ubica a escasos 5 minutos del pueblo.",
};

const ATTRACTIONS = [
  {
    icon: Compass,
    title: "Centro Histórico & Calles Empedradas",
    description:
      "Galerías de arte, templos coloniales, tiendas artesanales de barro y textiles, y encantadores cafés donde sentarse a ver pasar la tarde. Todo a escasos 5 minutos de nuestro hotel.",
  },
  {
    icon: Waves,
    title: "El Lago de Valle de Bravo",
    description:
      "El corazón acuático del destino. Navega en lanchas de paseo, practica ski acuático, rema en kayak al amanecer o contempla los reflejos del atardecer sobre las aguas calmas.",
  },
  {
    icon: Wind,
    title: "Vuelos en Parapente & Alas Delta",
    description:
      "Reconocido internacionalmente como uno de los mejores spots del mundo para volar en térmicas. Despega desde El Peñón o Monte Alto y contempla el valle entero a vuelo de pájaro.",
  },
  {
    icon: Trees,
    title: "Santuario de la Mariposa Monarca & Bosques",
    description:
      "Durante los meses de invierno, millones de mariposas monarca llegan a los bosques de oyamel en Piedra Herrada. Una experiencia mística que te llena de asombro y gratitud.",
  },
];

export default function ConoceVallePage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <MapPin className="w-3.5 h-3.5" />
          El Pueblo Mágico & Su Entorno
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          Conoce Valle de Bravo
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-3xl mx-auto font-light leading-relaxed">
          Vive Valle más allá del hotel. Una experiencia que invita a bajar el ritmo, recorrer sus callejones con calma y descubrir los secretos de su lago y sus bosques, con el privilegio de regresar siempre a tu santuario privado.
        </p>
      </section>

      {/* Hero Visual Balance */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="rounded-3xl overflow-hidden bg-[#121715] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium block">
                El Equilibrio Perfecto
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
                Cerca de todo, lejos del ruido
              </h2>

              <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                En Orgánico Hotel Boutique hemos perfeccionado el arte del descanso. Nos encontramos a escasos 5 minutos del vibrante corazón del pueblo, permitiéndote disfrutar de sus restaurantes, vida cultural y muelle náutico, pero con el privilegio absoluto de regresar a un espacio de silencio total y bosque privado.
              </p>

              <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                Aquí el bullicio se apaga para dar paso al sonido del viento en los pinos y una atmósfera de regeneración pura. Desde aquí, todo queda cerca… pero se disfruta con otra calma.
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("general", "Quiero recomendaciones y concierge para actividades en Valle de Bravo")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Preguntar a Concierge por Tours</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/entorno/valle-dron.webp"
                  alt="Vista aérea de Valle de Bravo y lago"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium block mb-2">
            Planes & Actividades
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
            Imperdibles durante tu visita
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {ATTRACTIONS.map((att, i) => {
            const Icon = att.icon;
            return (
              <div
                key={i}
                className="p-8 sm:p-10 rounded-2xl bg-[#121715] border border-white/10 hover:border-[#C5B49F]/30 transition-all space-y-4 shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5B49F]/10 flex items-center justify-center text-[#C5B49F]">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl sm:text-2xl font-serif text-[#F4F5F1]">
                  {att.title}
                </h4>
                <p className="text-sm text-[#8E9B93] leading-relaxed font-light">
                  {att.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
