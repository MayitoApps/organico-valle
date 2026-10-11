"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Sparkles,
  Calendar,
  Users,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  RotateCcw,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  fecha: string;
  huespedes: string;
  mensaje: string;
  website_hp: string;
  privacidadAceptada: boolean;
}

const MOTIVOS = [
  "Reservaciones & Hospedaje",
  "Experiencias en Valle de Bravo",
  "Gastronomía & Cenas Privadas",
  "Eventos Empresariales & Retiros",
  "Bodas & Celebraciones Sociales",
  "Spa & Bienestar Holístico",
  "Sesiones Fotográficas & Producción",
  "Consulta General o Especial",
];

const WHATSAPP_PHONE = "525574555091";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "Reservaciones & Hospedaje",
    fecha: "",
    huespedes: "",
    mensaje: "",
    website_hp: "",
    privacidadAceptada: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim() || formData.nombre.trim().length < 2) {
      setErrorMessage("Por favor ingresa tu nombre completo.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage("Por favor ingresa un correo electrónico válido.");
      setStatus("error");
      return;
    }

    if (!formData.telefono.trim()) {
      setErrorMessage("Por favor proporciona un número de teléfono o WhatsApp.");
      setStatus("error");
      return;
    }

    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 5) {
      setErrorMessage("Por favor escribe tu mensaje o los detalles de tu visita.");
      setStatus("error");
      return;
    }

    if (!formData.privacidadAceptada) {
      setErrorMessage("Debes aceptar el aviso de privacidad para continuar.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setErrorMessage(data.error || "Ocurrió un error al enviar tu mensaje. Intenta de nuevo.");
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Error de conexión. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "Reservaciones & Hospedaje",
      fecha: "",
      huespedes: "",
      mensaje: "",
      website_hp: "",
      privacidadAceptada: false,
    });
    setStatus("idle");
    setErrorMessage("");
  };

  const getWhatsAppFollowUpUrl = () => {
    const text = `Hola Orgánico Hotel Boutique Valle de Bravo, acabo de enviar una solicitud desde la web:\n- Nombre: ${formData.nombre}\n- Interés: ${formData.motivo}\n- Fechas/Huéspedes: ${formData.fecha || "Por definir"} / ${formData.huespedes || "No especificado"}\nMe gustaría dar seguimiento a mi solicitud.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Decorative ambient blur glows */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#C5B49F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-[#8E9B93]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5B49F] mb-3 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Atención Personalizada & Concierge
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4F5F1] tracking-wide">
            Comencemos a Diseñar Tu Estancia
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8E9B93] max-w-xl mx-auto font-light">
            Déjanos tus datos y un concierge exclusivo se pondrá en contacto contigo para coordinar cada detalle de tu visita a Valle de Bravo.
          </p>
        </div>

        {/* Success View */}
        {status === "success" ? (
          <div className="py-12 text-center animate-fade-in space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C5B49F]/10 border border-[#C5B49F]/30 text-[#C5B49F]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F5F1]">
                ¡Mensaje Recibido!
              </h3>
              <p className="text-sm text-[#8E9B93] leading-relaxed">
                Gracias, <strong className="text-[#F4F5F1]">{formData.nombre}</strong>. Hemos recibido tu solicitud sobre <strong className="text-[#C5B49F]">{formData.motivo}</strong>. Nuestro equipo se pondrá en contacto a la brevedad.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppFollowUpUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#C5B49F] text-[#0A0D0C] font-medium text-xs uppercase tracking-widest hover:bg-[#d8c7b5] transition-all duration-200 shadow-lg shadow-[#C5B49F]/20"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Seguimiento Inmediato por WhatsApp
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/10 text-[#F4F5F1] text-xs uppercase tracking-widest hover:bg-white/[0.05] transition-all duration-200"
              >
                <RotateCcw className="w-4 h-4 text-[#8E9B93]" />
                Enviar Otro Mensaje
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Notification */}
            {status === "error" && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-red-950/40 border border-red-500/30 text-red-200 text-sm animate-fade-in">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" />
                <p>{errorMessage}</p>
              </div>
            )}

            {/* Honeypot field (hidden from genuine users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">No llenar este campo</label>
              <input
                type="text"
                id="website_hp"
                name="website_hp"
                value={formData.website_hp}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Grid Row 1: Nombre & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] mb-2 font-medium">
                  <User className="w-3.5 h-3.5" />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Ej. Sofía Morales"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-[#F4F5F1] placeholder-[#8E9B93]/50 text-sm focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] mb-2 font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="sofia@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-[#F4F5F1] placeholder-[#8E9B93]/50 text-sm focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>
            </div>

            {/* Grid Row 2: Teléfono & Motivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] mb-2 font-medium">
                  <Phone className="w-3.5 h-3.5" />
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  placeholder="+52 55 1234 5678"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-[#F4F5F1] placeholder-[#8E9B93]/50 text-sm focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] mb-2 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Motivo de Interés *
                </label>
                <div className="relative">
                  <select
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg bg-[#121715] border border-white/10 text-[#F4F5F1] text-sm focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all appearance-none cursor-pointer"
                  >
                    {MOTIVOS.map((m) => (
                      <option key={m} value={m} className="bg-[#121715] text-[#F4F5F1]">
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#8E9B93]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Row 3: Fecha Tentativa & Huéspedes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] mb-2 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  Fecha Tentativa (Opcional)
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-[#F4F5F1] text-sm focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] mb-2 font-medium">
                  <Users className="w-3.5 h-3.5" />
                  Nº de Huéspedes / Asistentes (Opcional)
                </label>
                <input
                  type="text"
                  name="huespedes"
                  placeholder="Ej. 2 adultos, 1 mascota"
                  value={formData.huespedes}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-[#F4F5F1] placeholder-[#8E9B93]/50 text-sm focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] mb-2 font-medium">
                <MessageSquare className="w-3.5 h-3.5" />
                Mensaje o Detalles de tu Visita *
              </label>
              <textarea
                name="mensaje"
                rows={4}
                required
                placeholder="Cuéntanos sobre tu plan: tipo de suite preferida, celebración especial, régimen de alimentos o requerimientos particulares..."
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-lg bg-white/[0.03] border border-white/10 text-[#F4F5F1] placeholder-[#8E9B93]/50 text-sm focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all resize-y"
              />
            </div>

            {/* Checkbox Privacidad */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="privacidadAceptada"
                name="privacidadAceptada"
                checked={formData.privacidadAceptada}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-white/[0.05] text-[#C5B49F] focus:ring-[#C5B49F] focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="privacidadAceptada" className="text-xs text-[#8E9B93] leading-relaxed cursor-pointer select-none">
                He leído y acepto el{" "}
                <span className="text-[#C5B49F] underline underline-offset-2">
                  Aviso de Privacidad
                </span>{" "}
                de Orgánico Hotel Boutique Valle de Bravo para el tratamiento de mis datos de reservación y contacto.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 px-8 rounded-lg bg-[#C5B49F] text-[#0A0D0C] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#d8c7b5] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#C5B49F]/15 group"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0A0D0C]" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Solicitud de Reservación</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
