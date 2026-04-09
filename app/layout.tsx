import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar.component";
import Footer from "./components/layout/Footer.component";

// Puedes cambiar esta fuente luego si lo deseas
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZonaCómic Elite | Tienda de Novedades",
  description: "Curaduría selecta de novelas gráficas y cómics premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#FDFDFA] text-slate-900 antialiased selection:bg-indigo-100`}
      >
        <Navbar />
        {/* Aquí se renderizarán todas tus páginas */}
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
