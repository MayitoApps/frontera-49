import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export const runtime = 'nodejs';

// Helper sanitization
function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '')
    .trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const honeypot = body.website_hp;
    // Antispam Honeypot: si el campo señuelo fue completado por bots, devolvemos éxito silencioso
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn('[Anti-Spam] Bot submission blocked via honeypot.');
      return NextResponse.json({ success: true, message: 'Mensaje recibido correctamente' });
    }

    const nombre = sanitize(body.nombre);
    const email = sanitize(body.email);
    const telefono = sanitize(body.telefono);
    const motivo = sanitize(body.motivo) || 'Consulta General o Especial';
    const fecha = sanitize(body.fecha);
    const huespedes = sanitize(body.huespedes);
    const mensaje = sanitize(body.mensaje);

    // Validaciones backend
    if (!nombre || nombre.length < 2) {
      return NextResponse.json(
        { error: 'Por favor ingresa un nombre válido (mínimo 2 caracteres).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor ingresa una dirección de correo electrónico válida.' },
        { status: 400 }
      );
    }

    if (!telefono || telefono.length < 7) {
      return NextResponse.json(
        { error: 'Por favor proporciona un número de teléfono o WhatsApp válido.' },
        { status: 400 }
      );
    }

    if (!mensaje || mensaje.length < 5) {
      return NextResponse.json(
        { error: 'El mensaje debe contener al menos 5 caracteres con los detalles de tu consulta.' },
        { status: 400 }
      );
    }

    // Configuración de destinatario
    const defaultRecipient = 'artes.grupoorganico@gmail.com';
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || defaultRecipient;

    // Asunto del correo solicitado
    const emailSubject = `[Web Frontera 49] ${motivo} - ${nombre}`;

    // Fecha y hora Ciudad de México
    const cdmxTime = new Intl.DateTimeFormat('es-MX', {
      timeZone: 'America/Mexico_City',
      dateStyle: 'full',
      timeStyle: 'medium',
    }).format(new Date());

    // Plantilla HTML de lujo optimizada para móviles (Dark Earth Aesthetic con acentos Rojo Frontera 49: #0A0D0C, #121715, #981A15, #F4F5F1, #8E9B93)
    const htmlEmail = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frontera 49</title>
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
      padding: 30px 12px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #121715;
      border: 1px solid rgba(197, 180, 159, 0.25);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0,0,0,0.6);
    }
    .header {
      padding: 36px 24px 28px;
      text-align: center;
      background: linear-gradient(180deg, #18201C 0%, #121715 100%);
      border-bottom: 1px solid rgba(152, 26, 21, 0.25);
    }
    .hotel-title {
      margin: 0;
      font-size: 26px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #981A15;
      font-weight: 300;
    }
    .subtitle {
      margin: 8px 0 0;
      font-size: 11px;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #8E9B93;
    }
    .content {
      padding: 28px 24px;
    }
    .badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 20px;
      background-color: rgba(152, 26, 21, 0.15);
      border: 1px solid rgba(152, 26, 21, 0.4);
      color: #F4F5F1;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }
    .table-details {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .table-details td {
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 14px;
      vertical-align: top;
    }
    .label-cell {
      width: 36%;
      color: #8E9B93;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .value-cell {
      color: #F4F5F1;
      font-weight: 500;
      word-break: break-word;
    }
    .message-box {
      background-color: #0A0D0C;
      border: 1px solid rgba(152, 26, 21, 0.3);
      border-left: 3px solid #981A15;
      border-radius: 8px;
      padding: 18px 20px;
      margin: 24px 0 28px;
    }
    .message-box-title {
      font-size: 11px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #981A15;
      margin: 0 0 10px;
      font-weight: 600;
    }
    .message-text {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: #F4F5F1;
      white-space: pre-wrap;
    }
    .cta-container {
      text-align: center;
      margin: 32px 0 20px;
    }
    .cta-button {
      display: inline-block;
      background: #981A15;
      color: #F4F5F1 !important;
      text-decoration: none;
      padding: 14px 32px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
    .footer {
      padding: 24px 20px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      background-color: #0F1312;
      font-size: 12px;
      color: #8E9B93;
      line-height: 1.6;
    }
    .footer strong {
      color: #981A15;
    }
    @media only screen and (max-width: 480px) {
      .container { width: 100% !important; border-radius: 8px !important; }
      .header { padding: 24px 16px 20px !important; }
      .hotel-title { font-size: 22px !important; }
      .content { padding: 20px 16px !important; }
      .table-details td { display: block !important; width: 100% !important; padding: 6px 0 !important; }
      .label-cell { border-bottom: none !important; font-size: 11px !important; }
      .value-cell { padding-bottom: 12px !important; }
      .cta-button { display: block !important; padding: 14px 18px !important; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1 class="hotel-title">Frontera 49</h1>
        <div class="subtitle">Roma Norte · Nueva Solicitud Web</div>
      </div>
      <div class="content">
        <div class="badge">${escapeHtml(motivo)}</div>
        
        <table class="table-details" role="presentation">
          <tr>
            <td class="label-cell">Remitente:</td>
            <td class="value-cell">${escapeHtml(nombre)}</td>
          </tr>
          <tr>
            <td class="label-cell">Correo electrónico:</td>
            <td class="value-cell"><a href="mailto:${escapeHtml(email)}" style="color:#981A15; text-decoration:none;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td class="label-cell">Teléfono / WhatsApp:</td>
            <td class="value-cell"><a href="https://wa.me/${escapeHtml(telefono.replace(/\D/g, ''))}" style="color:#981A15; text-decoration:none;">${escapeHtml(telefono)}</a></td>
          </tr>
          <tr>
            <td class="label-cell">Motivo de Interés:</td>
            <td class="value-cell">${escapeHtml(motivo)}</td>
          </tr>
          ${
            fecha
              ? `<tr><td class="label-cell">Fecha Estimada:</td><td class="value-cell">${escapeHtml(fecha)}</td></tr>`
              : ''
          }
          ${
            huespedes
              ? `<tr><td class="label-cell">Nº Huéspedes / Asistentes:</td><td class="value-cell">${escapeHtml(huespedes)}</td></tr>`
              : ''
          }
        </table>

        <div class="message-box">
          <div class="message-box-title">Detalles del mensaje</div>
          <p class="message-text">${escapeHtml(mensaje)}</p>
        </div>

        <div class="cta-container">
          <a class="cta-button" href="mailto:${escapeHtml(email)}?subject=Re:%20${encodeURIComponent(emailSubject)}">
            Responder a ${escapeHtml(nombre)}
          </a>
        </div>
      </div>
      <div class="footer">
        Enviado a través del portal oficial <strong>Frontera 49 Roma Norte</strong><br>
        Fecha y hora de recepción (CDMX): <strong>${cdmxTime}</strong><br>
        Grupo Orgánico Hoteles Boutique
      </div>
    </div>
  </div>
</body>
</html>
`;

    // 1. Motor Resend si existe RESEND_API_KEY
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        // Si no se especifica remitente verificado, onboarding@resend.dev funciona de inmediato sin configurar DNS en Resend
        const fromAddress = process.env.RESEND_FROM_EMAIL || 'Frontera 49 <onboarding@resend.dev>';

        const { data: resendData, error: resendError } = await resend.emails.send({
          from: fromAddress,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          html: htmlEmail,
        });

        if (resendError) {
          console.error('[Email Dispatch] Error devuelto por Resend API:', resendError);
          // Si falló Resend, pasamos a intentar con SMTP si está configurado
        } else {
          console.log('[Email Dispatch] Correo enviado exitosamente vía Resend:', resendData?.id);
          return NextResponse.json({
            success: true,
            provider: 'resend',
            message: 'Tu mensaje ha sido enviado correctamente a nuestro equipo.',
          });
        }
      } catch (resendException) {
        console.error('[Email Dispatch] Excepción con Resend:', resendException);
        // Continuar al fallback SMTP si falla
      }
    }

    // 2. Motor Nodemailer SMTP (Gmail Port 465 SSL)
    const cleanUser = (process.env.SMTP_USER || 'artes.grupoorganico@gmail.com').trim();
    const cleanPass = (process.env.SMTP_PASS || 'nefuypoxqlbtfclz').trim().replace(/\s+/g, '');
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    if (cleanUser && cleanPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: cleanUser,
            pass: cleanPass,
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000,
        });

        const info = await transporter.sendMail({
          from: `"Frontera 49 Roma Norte" <${cleanUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          html: htmlEmail,
        });

        console.log('[Email Dispatch] Correo enviado exitosamente vía SMTP:', info.messageId);

        return NextResponse.json({
          success: true,
          provider: 'smtp',
          message: 'Tu mensaje ha sido enviado con éxito.',
        });
      } catch (smtpError) {
        console.error('[Email Dispatch] Error con Nodemailer SMTP:', smtpError);
        return NextResponse.json(
          {
            error: 'No se pudo enviar el mensaje por correo electrónico en este momento. Por favor contáctanos directamente por WhatsApp para atenderte de inmediato.',
          },
          { status: 500 }
        );
      }
    }

    // 3. Manejo en producción si no hay credenciales válidas
    if (process.env.NODE_ENV === 'production') {
      console.error('[API Contacto] Error: No se configuraron credenciales válidas (RESEND_API_KEY o SMTP_USER/PASS) en el entorno de producción.');
      return NextResponse.json(
        {
          error: 'No se pudo enviar el mensaje por correo electrónico en este momento. Por favor contáctanos directamente por WhatsApp para atenderte de inmediato.',
        },
        { status: 503 }
      );
    }

    // 4. Fallback de desarrollo local
    console.log('----------------------------------------------------');
    console.log('[MODO DESARROLLO / SIN CREDENCIALES] Correo Simulado:');
    console.log(`Para: ${recipientEmail}`);
    console.log(`De: ${nombre} <${email}>`);
    console.log(`Asunto: ${emailSubject}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Motivo: ${motivo}`);
    if (fecha) console.log(`Fecha: ${fecha}`);
    if (huespedes) console.log(`Huéspedes: ${huespedes}`);
    console.log(`Mensaje: ${mensaje}`);
    console.log('----------------------------------------------------');

    return NextResponse.json({
      success: true,
      provider: 'dev_mock',
      message: 'Mensaje recibido en modo desarrollo (configura RESEND_API_KEY o SMTP_PASS en Vercel para envíos reales).',
    });
  } catch (error) {
    console.error('[API Contacto Error]:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error inesperado al procesar tu solicitud. Por favor intenta de nuevo o escríbenos por WhatsApp.' },
      { status: 500 }
    );
  }
}
