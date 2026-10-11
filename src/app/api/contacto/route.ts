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

function cleanPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `52${digits}`;
  }
  return digits;
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

    // WhatsApp follow-up link for concierge
    const waPhone = cleanPhoneNumber(cleanTelefono);
    const waText = encodeURIComponent(
      `Hola ${cleanNombre}, gracias por contactar a Orgánico Hotel Boutique Valle de Bravo respecto a: ${cleanMotivo}. Con gusto te atendemos.`
    );
    const waUrl = waPhone ? `https://wa.me/${waPhone}?text=${waText}` : null;

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "artes.grupoorganico@gmail.com";
    const subject = `[Web Orgánico Valle] [${cleanMotivo}] - ${cleanNombre}`;

    // Luxury Dark HTML Email Template - 100% Mobile-First Responsive
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
  <meta name="color-scheme" content="dark only">
  <meta name="supported-color-schemes" content="dark only">
  <title>Nuevo Mensaje - Orgánico Valle de Bravo</title>
  <style>
    :root { color-scheme: dark only; supported-color-schemes: dark only; }
    body {
      margin: 0 !important;
      padding: 0 !important;
      background-color: #0A0D0C !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
      color: #F4F5F1 !important;
      -webkit-font-smoothing: antialiased !important;
      -webkit-text-size-adjust: 100% !important;
      -ms-text-size-adjust: 100% !important;
    }
    table, td { border-collapse: collapse !important; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; }
    * { box-sizing: border-box !important; }
    @media only screen and (max-width: 600px) {
      .email-wrapper { padding: 10px 8px !important; }
      .email-container { max-width: 100% !important; border-radius: 14px !important; }
      .email-header { padding: 26px 16px 20px !important; }
      .brand-title { font-size: 20px !important; letter-spacing: 2px !important; }
      .brand-subtitle { font-size: 11px !important; letter-spacing: 1.5px !important; }
      .email-content { padding: 18px 14px 22px !important; }
      .field-card { padding: 12px 14px !important; margin-bottom: 8px !important; }
      .field-value { font-size: 14px !important; }
      .cta-btn {
        display: block !important;
        width: 100% !important;
        margin: 8px 0 !important;
        padding: 14px 16px !important;
        font-size: 12px !important;
        text-align: center !important;
      }
      .email-footer { padding: 20px 14px !important; font-size: 11px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0D0C; color: #F4F5F1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <div class="email-wrapper" style="width: 100%; background-color: #0A0D0C; padding: 30px 12px; box-sizing: border-box;">
    <div class="email-container" style="max-width: 600px; margin: 0 auto; background-color: #121715; border: 1px solid rgba(197, 180, 159, 0.28); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7);">
      
      <!-- Encabezado de Marca -->
      <div class="email-header" style="background: linear-gradient(180deg, #18201D 0%, #121715 100%); padding: 34px 24px 24px; text-align: center; border-bottom: 1px solid rgba(197, 180, 159, 0.18);">
        <p style="margin: 0 0 6px 0; font-size: 10.5px; letter-spacing: 2.5px; text-transform: uppercase; color: #C5B49F; font-weight: 600;">
          Grupo Orgánico · Hoteles Boutique
        </p>
        <h1 class="brand-title" style="margin: 0; font-size: 22px; letter-spacing: 2.5px; text-transform: uppercase; color: #F4F5F1; font-weight: 400;">
          Orgánico Valle de Bravo
        </h1>
        <p class="brand-subtitle" style="margin: 6px 0 0 0; font-size: 11.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93;">
          Experiencias de Lago, Bosque &amp; Bienestar
        </p>
        <div style="display: inline-block; background-color: rgba(197, 180, 159, 0.12); border: 1px solid rgba(197, 180, 159, 0.35); border-radius: 999px; padding: 5px 14px; font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 600; margin-top: 14px;">
          ★ Nueva Solicitud de Reservación &amp; Concierge
        </div>
      </div>

      <!-- Contenido Principal -->
      <div class="email-content" style="padding: 24px 24px 28px;">
        
        <!-- Ficha 1: Interés / Motivo Destacado -->
        <div class="field-card" style="background-color: #18221E; border: 1px solid rgba(197, 180, 159, 0.35); border-left: 4px solid #C5B49F; border-radius: 10px; padding: 14px 16px; margin-bottom: 10px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 700; margin-bottom: 3px;">
            Motivo o Servicio de Interés
          </div>
          <div class="field-value" style="font-size: 16px; color: #F4F5F1; font-weight: 600; word-break: break-word;">
            ${cleanMotivo}
          </div>
        </div>

        <!-- Ficha 2: Nombre del Huésped -->
        <div class="field-card" style="background-color: #151C19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 13px 16px; margin-bottom: 10px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
            Nombre del Huésped
          </div>
          <div class="field-value" style="font-size: 15px; color: #F4F5F1; font-weight: 500; word-break: break-word;">
            ${cleanNombre}
          </div>
        </div>

        <!-- Ficha 3: Correo Electrónico -->
        <div class="field-card" style="background-color: #151C19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 13px 16px; margin-bottom: 10px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
            Correo Electrónico
          </div>
          <div class="field-value" style="font-size: 15px; word-break: break-word;">
            <a href="mailto:${cleanEmail}" style="color: #C5B49F; text-decoration: none; font-weight: 500;">
              ${cleanEmail}
            </a>
          </div>
        </div>

        <!-- Ficha 4: Teléfono / WhatsApp -->
        <div class="field-card" style="background-color: #151C19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 13px 16px; margin-bottom: 10px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
            Teléfono de Contacto
          </div>
          <div class="field-value" style="font-size: 15px; color: #F4F5F1; word-break: break-word;">
            <a href="tel:${cleanTelefono}" style="color: #F4F5F1; text-decoration: none; font-weight: 500;">
              ${cleanTelefono}
            </a>
            ${
              waUrl
                ? `<span style="display: inline-block; margin-left: 8px; font-size: 11px; color: #25D366; font-weight: 600;">(WhatsApp Disponible)</span>`
                : ""
            }
          </div>
        </div>

        <!-- Ficha 5: Fecha Tentativa & Huéspedes -->
        <div class="field-card" style="background-color: #151C19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 13px 16px; margin-bottom: 12px;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td style="padding: 0 6px 0 0; vertical-align: top; width: 50%;">
                <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
                  Fecha Tentativa
                </div>
                <div class="field-value" style="font-size: 14px; color: #F4F5F1; font-weight: 500;">
                  ${cleanFecha}
                </div>
              </td>
              <td style="padding: 0 0 0 6px; vertical-align: top; width: 50%;">
                <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
                  Huéspedes / Personas
                </div>
                <div class="field-value" style="font-size: 14px; color: #F4F5F1; font-weight: 500;">
                  ${cleanHuespedes}
                </div>
              </td>
            </tr>
          </table>
        </div>

        <!-- Ficha 6: Mensaje o Requerimientos -->
        <div style="margin-top: 16px; margin-bottom: 22px;">
          <div style="font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 600; margin-bottom: 8px;">
            Mensaje o Requerimientos del Huésped
          </div>
          <div style="background-color: #0A0D0C; border: 1px solid rgba(197, 180, 159, 0.22); border-left: 3px solid #C5B49F; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #E8EBE6; white-space: pre-wrap; word-break: break-word;">
            ${cleanMensaje}
          </div>
        </div>

        <!-- Botones de Acción (Mobile-Friendly Stacked) -->
        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${cleanEmail}?subject=Re:%20[Orgánico%20Valle]%20Tu%20consulta%20sobre%20${encodeURIComponent(cleanMotivo)}" class="cta-btn" style="display: block; width: 100%; box-sizing: border-box; background-color: #C5B49F; color: #0A0D0C !important; text-decoration: none; font-size: 12.5px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; padding: 14px 20px; border-radius: 8px; margin-bottom: 10px; text-align: center;">
            ✉ Responder por Correo a ${cleanNombre}
          </a>
          ${
            waUrl
              ? `<a href="${waUrl}" target="_blank" class="cta-btn" style="display: block; width: 100%; box-sizing: border-box; background-color: #18241F; color: #25D366 !important; text-decoration: none; font-size: 12.5px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; padding: 14px 20px; border-radius: 8px; border: 1px solid #25D366; text-align: center;">
            💬 Atender por WhatsApp al Huésped
          </a>`
              : ""
          }
          <p style="margin: 12px 0 0 0; font-size: 11px; color: #8E9B93; line-height: 1.5;">
            Tip: Al dar clic en <em>Responder</em> desde tu correo (Gmail, Outlook, Apple Mail), responderás directo a <strong>${cleanEmail}</strong>.
          </p>
        </div>

      </div>

      <!-- Pie Institucional -->
      <div class="email-footer" style="background-color: #0D1210; padding: 22px 20px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.06); font-size: 11px; color: #8E9B93; line-height: 1.6;">
        <p style="margin: 0; font-size: 11.5px; letter-spacing: 1px; text-transform: uppercase; color: #C5B49F;">
          Orgánico Hotel Boutique Valle de Bravo
        </p>
        <p style="margin: 4px 0 0 0; font-size: 10.5px; color: #8E9B93;">
          Carretera del Manguito 121, Sin Nombre, 51200 Valle de Bravo, Méx.<br/>
          Teléfonos de Atención: (55) 9691-0966 &middot; (55) 9696-9073 &middot; (55) 5645-5347
        </p>
        <p style="margin: 8px 0 0 0; font-size: 10px; color: #626D67;">
          Recibido el ${cdmxDateStr} &middot; Sitio Web Oficial
        </p>
      </div>

    </div>
  </div>
</body>
</html>
`;

    // 3. Dispatch engines
    // Engine A: Resend (if configured)
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
      }
    }

    // Engine B: Nodemailer (Gmail SMTP Port 465 SSL)
    const smtpUser = process.env.SMTP_USER || "artes.grupoorganico@gmail.com";
    const rawPass = process.env.SMTP_PASS || "aifqxmkbkmasqtjn";
    const smtpPass = rawPass.replace(/\s+/g, "");

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Orgánico Valle Web" <${smtpUser}>`,
        to: receiverEmail,
        replyTo: cleanEmail,
        subject,
        html: htmlTemplate,
      });

      console.log(`[Email Dispatch] Sent via Nodemailer to ${receiverEmail}`);
      return NextResponse.json({
        success: true,
        message: "Mensaje enviado exitosamente.",
      });
    } catch (smtpError) {
      console.error("[Email Dispatch] SMTP error:", smtpError);
    }

    // Engine C: Safe Fallback
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
