import { NextResponse } from "next/server";

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

    const brevoApiKeyRaw = process.env.BREVO_API_KEY;
    const brevoFromEmail = process.env.BREVO_FROM_EMAIL;
    const brevoFromName = process.env.BREVO_FROM_NAME || "Prata, Lacerda & Videira";
    const emailTo = process.env.CONTACT_TO_EMAIL;
    const brevoApiKey = brevoApiKeyRaw?.trim().replace(/^['"]|['"]$/g, "");

    if (!brevoApiKey || !brevoFromEmail || !emailTo) {
      return NextResponse.json(
        { success: false, message: "Configuração de e-mail ausente no servidor" },
        { status: 500 }
      );
    }

    if (!brevoApiKey.startsWith("xkeysib-")) {
      return NextResponse.json(
        { success: false, message: "BREVO_API_KEY inválida. Gere uma nova chave no painel da Brevo." },
        { status: 500 }
      );
    }

    const { nome, email, telefone, areaAtuacao, mensagem } = await req.json();

    if (!nome || !email || !telefone || !areaAtuacao || !mensagem) {
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

    const emailText = `Nome do cliente: ${nome}\nE-mail do cliente: ${email}\nTelefone do cliente: ${telefone}\nÁrea de atuação: ${areaAtuacao}\n\nMensagem do cliente:\n${mensagem}`;

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        sender: {
          email: brevoFromEmail,
          name: brevoFromName,
        },
        to: [{ email: emailTo }],
        replyTo: { email },
        subject: "Nova mensagem do site",
        textContent: emailText,
      }),
    });

    if (!brevoResponse.ok) {
      const brevoError = await brevoResponse.text();
      throw new Error(`Brevo error: ${brevoError}`);
    }

    return NextResponse.json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ success: false, message: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
