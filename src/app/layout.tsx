import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const camaufalge = localFont({
  src: "./fonts/Camaufalge.ttf",
  weight: "500 600 700",
});

export const metadata: Metadata = {
  title: "prata-larcerda-videira",
  description: "Projeto criado para um escritório",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `${camaufalge.className} antialiased` }
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
