import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to: "prataelacerdaadv@gmail.com", 
      subject: "Nova mensagem do site",
      text: `Nome do cliente: ${nome}\nE-mail do cliente: ${email}\nTelefone do cliente: ${telefone}\n\nMensagem do cliente:\n${mensagem}`,
    });

    return NextResponse.json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ success: false, message: "Erro ao enviar e-mail" });
  }
}
