import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Utensils,
  Wine,
  CheckCircle,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import RoomCard from "@/components/RoomCard";
import OrigenSpaSection from "@/components/OrigenSpaSection";
import GrupoOrganicoSection from "@/components/GrupoOrganicoSection";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import DiaDeMuertosModal from "@/components/DiaDeMuertosModal";
import { ROOMS, SPACES, MOMENTS } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <div className="w-full bg-[#0A0D0C] overflow-hidden">
      {/* Pop-up Campaña Día de Muertos 2026 */}
      <DiaDeMuertosModal />

      {/* 1. Hero Section with Exterior Image */}
      <HeroSection />

      {/* 2. Descubre el Universo de Grupo Orgánico Hoteles Boutique (Ubicado justo después del Hero) */}
      <GrupoOrganicoSection />

      {/* 3. Editorial Essence Section */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-medium">
              <Compass className="w-3.5 h-3.5" />
              Santuario Natural en Valle de Bravo
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] text-[#F4F5F1] leading-[1.18] tracking-tight">
              <span className="block">Escápate a Valle de Bravo y</span>
              <span className="block italic font-light text-[#C5B49F] mt-1">vuelve a lo esencial</span>
            </h2>

            <p className="text-sm sm:text-base text-[#8E9B93] leading-relaxed font-light">
              Durante casi 90 años este terreno ha sido un espacio consagrado al descanso, la contemplación y la conexión humana. Hoy conserva esa misma alma viva en más de seis hectáreas de bosque y jardines, transformadas en un exclusivo hotel boutique diseñado para quienes buscan pausar el ritmo del mundo y reconectar con lo importante.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#C5B49F] mt-1 flex-shrink-0" />
                <span className="text-xs text-[#F4F5F1]/90 leading-relaxed">
                  A solo 5 minutos caminando o en auto del corazón de Valle de Bravo.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#C5B49F] mt-1 flex-shrink-0" />
                <span className="text-xs text-[#F4F5F1]/90 leading-relaxed">
                  100% Pet Friendly: tu compañero de cuatro patas es bienvenido.
                </span>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B49F] font-semibold hover:text-[#d8c7b5] group"
              >
                <span>Descubre Nuestra Historia</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/entorno/exterior-1.webp"
                alt="Exteriores de Orgánico Hotel Boutique Valle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Suites & Habitaciones Showcase */}
      <section className="relative py-24 sm:py-32 bg-[#080B0A] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-3 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Hospitalidad & Descanso Profundo
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F5F1]">
                Nuestras Habitaciones
              </h2>
              <p className="mt-3 text-sm text-[#8E9B93] max-w-xl font-light">
                Cada una de nuestras 40 suites está diseñada para que descanses profundo: espacios cálidos, luz suave, texturas que abrazan y el silencio del bosque como compañía.
              </p>
            </div>

            <Link
              href="/nuestras-habitaciones"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B49F] hover:text-[#d8c7b5] group font-medium"
            >
              <span>Ver Todas las Habitaciones</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Gastronomía & Mixología Highlights */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-medium block mb-3">
            Alta Cocina & Mixología Botánica
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F5F1]">
            El Sabor de la Buena Mesa
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8E9B93] font-light">
            En Orgánico Valle comer y brindar es un ritual sagrado de sobremesa, música en vivo y productos de origen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card Restaurante Milagro */}
          <div className="relative rounded-2xl overflow-hidden bg-[#121715] border border-white/10 group flex flex-col shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/restaurante/milagro-1.webp"
                alt="Restaurante Milagro en Orgánico Valle"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121715] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0D0C]/80 border border-white/10 text-xs text-[#C5B49F] backdrop-blur-md">
                <Utensils className="w-3.5 h-3.5" />
                <span>Restaurante Milagro</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F5F1]">
                  Sabores que se disfrutan sin prisas
                </h3>
                <p className="text-sm text-[#8E9B93] leading-relaxed font-light">
                  Homenaje culinario a los ingredientes locales y recetas de campo. Disfruta de nuestro exclusivo Brunch los fines de semana o agenda una Cena Romántica Privada bajo el cielo estrellado de Valle.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={getWhatsAppUrl("restaurante_milagro")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all w-full sm:w-[205px] h-[44px] text-center shadow-md shadow-[#C5B49F]/10"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Reservar Mesa</span>
                </a>

                <Link
                  href="/restaurante"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#F4F5F1] hover:text-[#C5B49F] transition-colors py-2 whitespace-nowrap"
                >
                  <span>Conocer Menú & Brunch</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card Bar Bienaventurado */}
          <div className="relative rounded-2xl overflow-hidden bg-[#121715] border border-white/10 group flex flex-col shadow-2xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/mixologia/bar-mesa.webp"
                alt="Bar Bienaventurado en Orgánico Valle"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121715] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0D0C]/80 border border-white/10 text-xs text-[#C5B49F] backdrop-blur-md">
                <Wine className="w-3.5 h-3.5" />
                <span>Bar Bienaventurado</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F5F1]">
                  El refugio de la tertulia y la mixología
                </h3>
                <p className="text-sm text-[#8E9B93] leading-relaxed font-light">
                  Un espacio íntimo y relajado diseñado para desconectar, brindar y cantar. Disfruta de coctelería botánica de autor, música en vivo, noches de karaoke y el mejor ambiente rodeado de naturaleza.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={getWhatsAppUrl("bar_bienaventurado")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-widest font-semibold hover:bg-[#d8c7b5] transition-all w-full sm:w-[205px] h-[44px] text-center shadow-md shadow-[#C5B49F]/10"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Preguntar por Bar</span>
                </a>

                <Link
                  href="/mixologia"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#F4F5F1] hover:text-[#C5B49F] transition-colors py-2 whitespace-nowrap"
                >
                  <span>Explorar Mixología</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Momentos que se viven en Valle */}
      <section className="relative py-24 sm:py-32 bg-[#080B0A] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-medium block mb-3">
              Colección de Instantes
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F5F1]">
              Momentos que se Viven en Valle
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#8E9B93] font-light">
              Aquí no vienes solo a hospedarte, vienes a celebrar los hitos que marcan tu historia y a vibrar con la naturaleza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOMENTS.map((moment) => (
              <div
                key={moment.id}
                className="group relative rounded-2xl overflow-hidden bg-[#121715] border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121715] via-transparent to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5B49F] font-medium">
                      {moment.categoryTitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#F4F5F1]">
                      {moment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed font-light">
                      {moment.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={getWhatsAppUrl(moment.bookingType)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-[#C5B49F] hover:text-[#0A0D0C] text-[#F4F5F1] text-xs uppercase tracking-widest font-medium transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Reservar Experiencia</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/momentos"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B49F] hover:text-[#d8c7b5] group font-medium"
            >
              <span>Explorar Todos los Momentos & Actividades</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Nuestros Espacios Showcase */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-medium block mb-3">
              Arquitectura Viva & Bosque
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F5F1]">
              Nuestros Espacios
            </h2>
          </div>

          <Link
            href="/nuestros-espacios"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5B49F] hover:text-[#d8c7b5] group font-medium"
          >
            <span>Ver Galería Completa de Espacios</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPACES.slice(0, 6).map((space) => (
            <div
              key={space.id}
              className="group relative rounded-2xl overflow-hidden bg-[#121715] border border-white/10 hover:border-[#C5B49F]/30 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5B49F] font-medium block">
                    {space.category}
                  </span>
                  <h3 className="text-xl font-serif text-[#F4F5F1] mt-1">
                    {space.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Origen Centro Holístico y Spa Section */}
      <OrigenSpaSection />

      {/* 10. Contact Form Section */}
      <section id="contacto" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#0A0D0C]">
        <ContactForm />
      </section>
    </div>
  );
}
