import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Identidad de Marca */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-brand-primary p-2 rounded-xl">
                <BookOpen size={24} className="text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase italic">
                ZONACÓMIC
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[240px]">
              Líderes en la distribución de cultura gráfica. Especialistas en
              envíos protegidos para coleccionistas.
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <button
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 fill-slate-400 group-hover:fill-white transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* Instagram */}
              <button
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 fill-slate-400 group-hover:fill-white transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>

              {/* X (Twitter) */}
              <button
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group"
                aria-label="X"
              >
                <svg
                  className="w-4 h-4 fill-slate-400 group-hover:fill-white transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.487h2.039L6.486 3.24H4.298l13.311 17.399z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menú: Tienda Online */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent mb-10">
              TIENDA ONLINE
            </h4>
            <ul className="space-y-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              {[
                "Catálogo Marvel",
                "Universo DC",
                "Cómics Independientes",
                "Novedades de la Semana",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Menú: Servicios Élite */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent mb-10">
              SERVICIOS ÉLITE
            </h4>
            <ul className="space-y-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              {[
                "Membresía VIP",
                "Sistema de Casilleros",
                "Garantía de Estado 10/10",
                "Envíos Internacionales",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-accent mb-10">
              NEWSLETTER
            </h4>
            <p className="text-slate-500 text-xs mb-8 uppercase tracking-widest font-bold leading-relaxed">
              Suscríbete para lanzamientos exclusivos y preventas.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="TU@EMAIL.COM"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-[10px] font-black tracking-widest focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-primary px-5 rounded-xl hover:bg-brand-accent transition-all active:scale-90 flex items-center justify-center">
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] text-center md:text-left">
            © 2026 ZONACÓMIC ELITE STORE | EXPERTOS EN NOVELA GRÁFICA
          </div>
          <div className="flex gap-8 text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">
            <Link
              href="/privacidad"
              className="hover:text-white transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="hover:text-white transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
