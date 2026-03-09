import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
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
