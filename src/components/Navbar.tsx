"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nuestras-habitaciones", label: "Habitaciones" },
  { href: "/quienes-somos", label: "¿Quiénes Somos?" },
  { href: "/restaurante", label: "Restaurante" },
  { href: "/mixologia", label: "Mixología" },
  { href: "/momentos", label: "Momentos" },
  { href: "/nuestros-espacios", label: "Nuestros Espacios" },
  { href: "/eventos", label: "Eventos" },
  { href: "/conoce-valle", label: "Conoce Valle" },
  { href: "/contacto", label: "Contáctanos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0D0C]/92 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
            : "bg-gradient-to-b from-[#0A0D0C]/90 via-[#0A0D0C]/40 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="w-full px-6 sm:px-8 lg:px-10 2xl:px-12 flex items-center justify-between relative">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0 z-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-32 sm:w-36 2xl:w-40 h-7 sm:h-8 2xl:h-9 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo/logo-blanco.png"
                  alt="Orgánico Hotel Boutique Valle de Bravo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links (Absolute Centered with Compact Aesthetic Font) */}
          <nav className="hidden xl:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-2.5 xl:gap-3 2xl:gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[9.5px] xl:text-[10px] 2xl:text-[11px] uppercase tracking-[0.09em] xl:tracking-[0.11em] 2xl:tracking-[0.14em] font-medium transition-all duration-200 relative py-1 whitespace-nowrap ${
                    isActive
                      ? "text-[#C5B49F]"
                      : "text-[#F4F5F1]/80 hover:text-[#C5B49F]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5B49F] animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Reservar Button & Mobile Menu Button */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 z-10">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#C5B49F]/30 bg-[#C5B49F]/10 hover:bg-[#C5B49F] text-[#F4F5F1] hover:text-[#0A0D0C] text-[10.5px] 2xl:text-[11px] uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(197,180,159,0.25)]"
            >
              <span>Reservar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 text-[#F4F5F1] hover:text-[#C5B49F] focus:outline-none transition-colors"
              aria-label="Abrir Menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0D0C]/95 backdrop-blur-2xl transition-all duration-500 xl:hidden flex flex-col justify-between p-6 pt-24 ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-4 overflow-y-auto max-h-[75vh] py-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-serif tracking-wider transition-colors py-1.5 border-b border-white/5 flex items-center justify-between ${
                  isActive ? "text-[#C5B49F] font-semibold" : "text-[#F4F5F1]/80 hover:text-[#C5B49F]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#C5B49F]" />}
              </Link>
            );
          })}
        </div>

        <div className="pt-6 border-t border-white/10 space-y-4">
          <a
            href={HOTEL_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#C5B49F]/40 bg-[#C5B49F] text-[#0A0D0C] text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(197,180,159,0.3)] active:scale-[0.98]"
          >
            <span>Reservar</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-between text-xs text-[#8E9B93]">
            <span>Reservaciones:</span>
            <a href="tel:+525596910966" className="text-[#C5B49F] font-mono hover:underline">
              (55) 9691-0966
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
