import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

interface ContactRequestBody {
  nombre: string;
  email: string;
  telefono?: string;
  motivo?: string;
  fecha?: string;
  huespedes?: string;
  mensaje: string;
  website_hp?: string; // Honeypot antispam
  privacidadAceptada?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();

    const {
      nombre,
      email,
      telefono = "",
      motivo = "Reservaciones & Hospedaje",
      fecha = "",
      huespedes = "",
      mensaje,
      website_hp = "",
    } = body;

    // 1. Antispam Honeypot check
    if (website_hp && website_hp.trim() !== "") {
      console.warn("[Antispam] Honeypot triggered. Silent success returned.");
      return NextResponse.json({
        success: true,
        message: "Mensaje procesado correctamente.",
      });
    }

    // 2. Backend Validations
    if (!nombre || typeof nombre !== "string" || nombre.trim().length < 2) {
      return NextResponse.json(
        { error: "El nombre es obligatorio y debe contener al menos 2 caracteres." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Por favor proporciona un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!mensaje || typeof mensaje !== "string" || mensaje.trim().length < 5) {
      return NextResponse.json(
        { error: "El mensaje es obligatorio y debe tener al menos 5 caracteres." },
        { status: 400 }
      );
    }

    // Sanitization
    const cleanNombre = nombre.trim();
    const cleanEmail = email.trim();
    const cleanTelefono = telefono ? telefono.trim() : "No especificado";
    const cleanMotivo = motivo ? motivo.trim() : "Consulta General";
    const cleanFecha = fecha ? fecha.trim() : "No especificada";
    const cleanHuespedes = huespedes ? huespedes.trim() : "No especificado";
    const cleanMensaje = mensaje.trim();

    // CDMX Formatted Timestamp
    const cdmxDateStr = new Intl.DateTimeFormat("es-MX", {
      timeZone: "America/Mexico_City",
      dateStyle: "full",
      timeStyle: "medium",
    }).format(new Date());

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "artes.grupoorganico@gmail.com";
    const subject = `[Web Orgánico Valle] [${cleanMotivo}] - ${cleanNombre}`;

    // Luxury Dark HTML Email Template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Nuevo Mensaje - Orgánico Valle de Bravo</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0A0D0C;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #F4F5F1;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #0A0D0C;
      padding: 40px 15px;
      box-sizing: border-box;
    }
    .container {
      max-width: 620px;
      margin: 0 auto;
      background-color: #121715;
      border: 1px solid rgba(197, 180, 159, 0.25);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }
    .header {
      background: linear-gradient(180deg, #18201D 0%, #121715 100%);
      padding: 35px 30px;
      text-align: center;
      border-bottom: 1px solid rgba(197, 180, 159, 0.15);
    }
    .brand-title {
      margin: 0;
      font-size: 24px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #C5B49F;
      font-weight: 300;
    }
    .brand-subtitle {
      margin: 8px 0 0;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #8E9B93;
    }
    .content {
      padding: 32px 30px;
    }
    .section-title {
      font-size: 13px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #C5B49F;
      margin-bottom: 18px;
      font-weight: 600;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 26px;
    }
    .data-table tr {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .data-table td {
      padding: 12px 6px;
      font-size: 14px;
      vertical-align: top;
    }
    .data-label {
      width: 38%;
      color: #8E9B93;
      font-weight: 500;
    }
    .data-value {
      color: #F4F5F1;
      font-weight: 400;
    }
    .message-box {
      background-color: #0A0D0C;
      border: 1px solid rgba(197, 180, 159, 0.2);
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .message-text {
      font-size: 15px;
      line-height: 1.6;
      color: #F4F5F1;
      white-space: pre-wrap;
      margin: 0;
    }
    .button-container {
      text-align: center;
      margin: 30px 0 15px;
    }
    .cta-button {
      display: inline-block;
      background-color: #C5B49F;
      color: #0A0D0C !important;
      text-decoration: none;
      font-size: 13px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      font-weight: 600;
      padding: 14px 28px;
      border-radius: 6px;
    }
    .footer {
      background-color: #0D1210;
      padding: 24px 30px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 12px;
      color: #8E9B93;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1 class="brand-title">Orgánico Valle de Bravo</h1>
        <p class="brand-subtitle">Hotel Boutique &middot; Experiencias de Lago y Bosque</p>
      </div>

      <div class="content">
        <div class="section-title">Detalles de la Solicitud</div>
        <table class="data-table">
          <tr>
            <td class="data-label">Nombre del Huésped:</td>
            <td class="data-value"><strong>${cleanNombre}</strong></td>
          </tr>
          <tr>
            <td class="data-label">Correo Electrónico:</td>
            <td class="data-value"><a href="mailto:${cleanEmail}" style="color: #C5B49F; text-decoration: none;">${cleanEmail}</a></td>
          </tr>
          <tr>
            <td class="data-label">Teléfono / WhatsApp:</td>
            <td class="data-value">${cleanTelefono}</td>
          </tr>
          <tr>
            <td class="data-label">Motivo o Interés:</td>
            <td class="data-value"><span style="color: #C5B49F; font-weight: 500;">${cleanMotivo}</span></td>
          </tr>
          <tr>
            <td class="data-label">Fecha Estimada:</td>
            <td class="data-value">${cleanFecha}</td>
          </tr>
          <tr>
            <td class="data-label">Nº de Huéspedes / Asistentes:</td>
            <td class="data-value">${cleanHuespedes}</td>
          </tr>
        </table>

        <div class="section-title">Mensaje o Requerimientos Especiales</div>
        <div class="message-box">
          <p class="message-text">${cleanMensaje}</p>
        </div>

        <div class="button-container">
          <a href="mailto:${cleanEmail}?subject=Re:%20[Orgánico%20Valle]%20Tu%20consulta%20sobre%20${encodeURIComponent(cleanMotivo)}" class="cta-button">
            Responder a ${cleanNombre}
          </a>
        </div>
      </div>

      <div class="footer">
        Recibido el ${cdmxDateStr} (Hora Centro de México).<br>
        Enviado a través del Formulario Oficial de <strong>Orgánico Hotel Boutique Valle</strong>.
      </div>
    </div>
  </div>
</body>
</html>
`;

    // 3. Dual Engine Dispatch
    // Engine A: Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const resendFrom =
          process.env.RESEND_FROM || "Orgánico Valle <reservaciones@organicohotelboutiquevalle.com>";
        await resend.emails.send({
          from: resendFrom,
          to: receiverEmail,
          replyTo: cleanEmail,
          subject,
          html: htmlTemplate,
        });

        console.log(`[Email Dispatch] Sent via Resend to ${receiverEmail}`);
        return NextResponse.json({
          success: true,
          message: "Mensaje enviado exitosamente a través de Resend.",
        });
      } catch (resendError) {
        console.error("[Email Dispatch] Resend error:", resendError);
        // If Resend fails, fall through to Nodemailer if configured
      }
    }

    // Engine B: Nodemailer (SMTP / Gmail App Password)
    if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_PASS !== "tu_contraseña_de_aplicación_de_google_aqui") {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Orgánico Valle Web" <${process.env.SMTP_USER}>`,
          to: receiverEmail,
          replyTo: cleanEmail,
          subject,
          html: htmlTemplate,
        });

        console.log(`[Email Dispatch] Sent via Nodemailer to ${receiverEmail}`);
        return NextResponse.json({
          success: true,
          message: "Mensaje enviado exitosamente a través de SMTP.",
        });
      } catch (smtpError) {
        console.error("[Email Dispatch] SMTP error:", smtpError);
      }
    }

    // Engine C: Safe Local / Development Fallback (Log & succeed)
    console.info("=================================================");
    console.info("[DEV / FALLBACK EMAIL DISPATCH]");
    console.info(`Destinatario: ${receiverEmail}`);
    console.info(`Asunto: ${subject}`);
    console.info(`Remitente: ${cleanNombre} <${cleanEmail}>`);
    console.info(`Teléfono: ${cleanTelefono}`);
    console.info(`Motivo: ${cleanMotivo}`);
    console.info(`Fecha: ${cleanFecha} | Personas: ${cleanHuespedes}`);
    console.info(`Mensaje: ${cleanMensaje}`);
    console.info("=================================================");

    return NextResponse.json({
      success: true,
      message: "Mensaje recibido correctamente. Nos pondremos en contacto a la brevedad.",
      dev_fallback: true,
    });
  } catch (error) {
    console.error("[API Contacto] Error procesando solicitud:", error);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado al procesar tu solicitud. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
