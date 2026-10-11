import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Utensils, Sparkles, Heart, Clock, Sun, Coffee } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Restaurante Milagro | Orgánico Hotel Boutique Valle de Bravo",
  description:
    "Descubre Restaurante Milagro en Valle de Bravo. Brunch de fin de semana, cocina de origen con ingredientes locales y cenas románticas privadas bajo las estrellas.",
};

export default function RestaurantePage() {
  return (
    <div className="w-full bg-[#0A0D0C] pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-4 font-medium">
          <Utensils className="w-3.5 h-3.5" />
          Gastronomía de Origen & Sabor de Campo
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#F4F5F1] tracking-tight">
          Restaurante Milagro
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#8E9B93] max-w-3xl mx-auto font-light leading-relaxed">
          Sabores que se disfrutan sin prisas. Una propuesta culinaria que rinde homenaje a la tierra, fusionando la frescura de los ingredientes locales con recetas reconfortantes que abrazan el alma en un entorno íntimo frente a la sierra de Valle de Bravo.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("restaurante_milagro")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-xl shadow-[#C5B49F]/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Reservar Mesa por WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Main Feature 1: Brunch Único & Buffet */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium block">
              Fines de Semana & Días Festivos
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
              Un Brunch Único en Valle de Bravo
            </h2>
            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              Hemos curado una selección gastronómica que combina lo mejor de la cocina tradicional mexicana con toques contemporáneos. Con nosotros, el brunch no es solo una comida: es el ritual perfecto para comenzar tu día en Valle.
            </p>
            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              Disfruta de barra premium, cazuelas calientes, panadería artesanal recién horneada, jugos naturales, café de altura y platillos preparados al momento frente a la mejor vista de la región.
            </p>

            <div className="p-4 rounded-xl bg-[#121715] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#F4F5F1] font-medium">
                <Clock className="w-4 h-4 text-[#C5B49F]" />
                <span>Horario de Brunch: Sábados y Domingos de 9:00 a 14:00 hrs</span>
              </div>
              <p className="text-xs text-[#8E9B93]">
                Abierto a huéspedes y visitantes con reservación previa.
              </p>
            </div>

            <div>
              <a
                href={getWhatsAppUrl("brunch_valle")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B49F] font-semibold hover:text-[#d8c7b5]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Cotizar o Reservar Brunch</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/restaurante/milagro-2.webp"
                alt="Brunch en Restaurante Milagro Valle de Bravo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature 2: Cenas Románticas Privadas */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="rounded-3xl bg-[#121715] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/restaurante/milagro-3.webp"
                  alt="Cena Romántica Privada en Orgánico Valle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 lg:order-1">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                Momentos Inolvidables en Pareja
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#F4F5F1]">
                Cenas Privadas y Románticas
              </h2>

              <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                Nos especializamos en ser los arquitectos de tu historia de amor. Creamos experiencias íntimas y personalizadas, pensadas meticulosamente para celebrar esos hitos que marcan la vida: desde aniversarios y pedidas de mano bajo las estrellas, hasta escapadas románticas para reconectar.
              </p>

              <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
                Espacios exclusivos al aire libre donde la naturaleza es el mejor escenario, complementados con ambientaciones cuidadas al detalle —velas, flores, iluminación cálida y menús de autor maridados con vinos selectos.
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("cena_romantica")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all shadow-xl shadow-[#C5B49F]/20"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Cotizar Cena Romántica por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery of Dishes & Spaces */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium block mb-2">
            Platillos & Espacios
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F5F1]">
            Nuestra Cocina en Imágenes
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-[#8E9B93] max-w-xl mx-auto font-light">
            Recorre la atmósfera de nuestro salón rústico, terrazas al aire libre y las creaciones gastronómicas preparadas con ingredientes de la más alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/platillo-1.webp"
              alt="Platillo Gourmet Restaurante Milagro"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Platillo de Autor</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Cocina con Identidad</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/platillo-3.webp"
              alt="Cena gourmet servida con crema artesanal y salmón"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Cenas Privadas</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Cremas & Salmón a la Leña</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/platillo-2.webp"
              alt="Creación culinaria con botánicos de la región"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Tradición & Vanguardia</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Sabores de la Sierra</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/platillo-4.webp"
              alt="Tartaletas artesanales y maridaje con vino blanco"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Repostería & Cava</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Tartas de Frutos Rojos & Maridaje</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/milagro-6.webp"
              alt="Banquete de brunch, panadería y jugos frescos"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Brunch & Desayuno</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Mesa de Panadería Artesanal & Jugos</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/milagro-4.webp"
              alt="Terraza exterior de Restaurante Milagro con vista al bosque"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Espacios al Aire Libre</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Terraza Rodeada de Jardines</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/milagro-5.webp"
              alt="Gran Salón con vigas de madera y candelabros rústicos"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Salón Principal</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Arquitectura Rústica de Montaña</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/milagro-1.webp"
              alt="Ambiente cálido y acogedor en Restaurante Milagro"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Comedor Panorámico</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Ventilado & Luz Natural</span>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="/images/restaurante/milagro-7.webp"
              alt="Barra de servicio y bebidas tradicionales"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs uppercase tracking-wider text-[#C5B49F] block font-medium">Barra Tradicional</span>
              <span className="text-sm font-serif text-[#F4F5F1]">Cantería & Servicio Personalizado</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
