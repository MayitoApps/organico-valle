import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ExternalLink,
  Sparkles,
  Heart,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { HOTEL_INFO } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-[#080B0A] border-t border-white/10 text-[#F4F5F1] pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5B49F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#8E9B93]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-52 h-12">
                <Image
                  src="/images/logo/logo-blanco.png"
                  alt="Orgánico Hotel Boutique Valle"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-[#8E9B93] leading-relaxed font-light">
              Un refugio de lujo rústico y naturaleza viva en Valle de Bravo. Donde el aire puro del bosque, la calidez del lago y las experiencias con alma se encuentran a solo 2 horas de la Ciudad de México.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={HOTEL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#8E9B93] hover:text-[#C5B49F] hover:border-[#C5B49F] transition-all"
                aria-label="Instagram de Orgánico Valle"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={HOTEL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#8E9B93] hover:text-[#C5B49F] hover:border-[#C5B49F] transition-all"
                aria-label="Facebook de Orgánico Valle"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5B49F]/10 border border-[#C5B49F]/30 text-[#C5B49F] text-xs font-medium hover:bg-[#C5B49F] hover:text-[#0A0D0C] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Oficial</span>
              </a>
            </div>

            {/* Pet Friendly Note */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-[#8E9B93]">
              <Heart className="w-3.5 h-3.5 text-[#C5B49F]" />
              <span>Somos orgullosamente <strong>Pet Friendly</strong></span>
            </div>
          </div>

          {/* Col 2: Exploración & Navegación */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
              Explorar el Hotel
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8E9B93]">
              <li>
                <Link href="/nuestras-habitaciones" className="hover:text-[#F4F5F1] transition-colors">
                  Suites & Habitaciones
                </Link>
              </li>
              <li>
                <Link href="/restaurante" className="hover:text-[#F4F5F1] transition-colors">
                  Restaurante Milagro & Brunch
                </Link>
              </li>
              <li>
                <Link href="/mixologia" className="hover:text-[#F4F5F1] transition-colors">
                  Bar Bienaventurado & Fogateros
                </Link>
              </li>
              <li>
                <Link href="/momentos" className="hover:text-[#F4F5F1] transition-colors">
                  Momentos & Experiencias
                </Link>
              </li>
              <li>
                <Link href="/nuestros-espacios" className="hover:text-[#F4F5F1] transition-colors">
                  Nuestros Espacios
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-[#F4F5F1] transition-colors">
                  Eventos, Bodas & Retiros
                </Link>
              </li>
              <li>
                <Link href="/conoce-valle" className="hover:text-[#F4F5F1] transition-colors">
                  Conoce Valle de Bravo
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-[#F4F5F1] transition-colors">
                  ¿Quiénes Somos?
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Bienestar & Grupo Orgánico */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
              Ecosistema
            </h4>
            <div className="space-y-4 text-xs text-[#8E9B93]">
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                <span className="flex items-center gap-1.5 text-[#C5B49F] font-medium text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Bienestar Holístico
                </span>
                <p className="text-[12px] leading-relaxed text-[#8E9B93]">
                  Servicios y rituales corporales por <strong>Origen Centro Holístico y Spa</strong>.
                </p>
                <a
                  href="https://www.origencentroholisticoyspa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C5B49F] hover:underline text-[11px] pt-1"
                >
                  <span>Conocer Origen Spa</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[#C5B49F] font-medium text-[11px] uppercase tracking-wider block">
                  Grupo Orgánico
                </span>
                <p className="text-[12px] leading-relaxed text-[#8E9B93]">
                  Colección de Hoteles Boutique en Valle de Bravo, Ajusco, Tepoztlán, CDMX y Veracruz.
                </p>
                <a
                  href="https://www.gohb.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C5B49F] hover:underline text-[11px] pt-1"
                >
                  <span>Visitar Grupo Orgánico</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Ubicación & Contacto Directo */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
              Contacto & Ubicación
            </h4>
            <ul className="space-y-3.5 text-xs text-[#8E9B93]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5B49F] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Carretera del Manguito 121, Sin Nombre, 51200 Valle de Bravo, Estado de México. (A 5 min del centro).
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5B49F] flex-shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#C5B49F]/90 font-medium block">
                    Números Empresariales:
                  </span>
                  <div className="flex flex-wrap items-center gap-x-1.5 text-xs font-mono">
                    <a href="tel:+525596910966" className="hover:text-[#F4F5F1] transition-colors">
                      (55) 9691-0966
                    </a>
                    <span className="text-[#8E9B93]/40">/</span>
                    <a href="tel:+525596969073" className="hover:text-[#F4F5F1] transition-colors">
                      (55) 9696-9073
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-1.5 text-xs font-mono">
                    <a href="tel:+525556455347" className="hover:text-[#F4F5F1] transition-colors">
                      (55) 5645-5347
                    </a>
                    <span className="text-[#8E9B93]/40">/</span>
                    <a href="tel:+525555737822" className="hover:text-[#F4F5F1] transition-colors">
                      (55) 5573-7822
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contacto"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#C5B49F] text-[#F4F5F1] text-xs uppercase tracking-wider transition-all"
              >
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E9B93]/70 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Orgánico Hotel Boutique Valle de Bravo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Valle de Bravo, México</span>
            <span>&middot;</span>
            <a
              href="https://www.gohb.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5B49F] hover:underline"
            >
              Parte de Grupo Orgánico Hoteles Boutique
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
