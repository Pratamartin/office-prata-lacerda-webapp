import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  contactRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitStore =
  globalForRateLimit.contactRateLimit ??
  (globalForRateLimit.contactRateLimit = new Map<string, RateLimitEntry>());

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Muitas tentativas. Tente novamente em instantes." },
        { status: 429 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.CONTACT_TO_EMAIL;

    if (!emailUser || !emailPass || !emailTo) {
      return NextResponse.json(
        { success: false, message: "Configuração de e-mail ausente no servidor" },
        { status: 500 }
      );
    }

    const { nome, email, telefone, mensagem } = await req.json();

    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json(
        { success: false, message: "Preencha todos os campos obrigatórios" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "E-mail inválido" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `Site Prata, Lacerda & Videira <${emailUser}>`,
      replyTo: email,
      to: emailTo,
      subject: "Nova mensagem do site",
      text: `Nome do cliente: ${nome}\nE-mail do cliente: ${email}\nTelefone do cliente: ${telefone}\n\nMensagem do cliente:\n${mensagem}`,
    });

    return NextResponse.json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ success: false, message: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
