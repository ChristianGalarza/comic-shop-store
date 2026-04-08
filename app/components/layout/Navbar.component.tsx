"use client"; // Directiva obligatoria para usar hooks y eventos

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  ChevronDown,
  BookOpen,
  Star,
  Calendar,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 flex justify-between items-center ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-indigo-50 py-3"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group cursor-pointer">
        <div className="bg-indigo-600 p-2 rounded-xl transform transition-transform group-hover:rotate-12 shadow-lg shadow-indigo-200">
          <BookOpen size={20} className="text-white" />
        </div>
        <span
          className={`font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${
            scrolled
              ? "from-slate-950 to-indigo-600"
              : "from-white to-indigo-400"
          }`}
        >
          ZONACÓMIC
        </span>
      </Link>

      {/* Enlaces de Navegación (Desktop) */}
      <div
        className={`hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] ${
          scrolled ? "text-slate-500" : "text-slate-300"
        }`}
      >
        {/* Menú Desplegable del Catálogo */}
        <div
          className="relative cursor-pointer hover:text-indigo-400 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-400"
          onMouseEnter={() => setIsCatalogOpen(true)}
          onMouseLeave={() => setIsCatalogOpen(false)}
        >
          <span className="flex items-center">
            CATÁLOGO <ChevronDown size={14} className="ml-1" />
          </span>
          {isCatalogOpen && (
            <div
              className="absolute top-full left-0 w-[28rem] bg-white shadow-2xl rounded-xl border border-indigo-50 animate-in fade-in slide-in-from-top-2"
              onMouseEnter={() => setIsCatalogOpen(true)}
              onMouseLeave={() => setIsCatalogOpen(false)}
            >
              <div className="grid grid-cols-[.5fr_1fr] gap-4 px-4 py-4">
                <Link
                  href="/catalogo"
                  className="rounded-3xl px-6 py-5 hover:bg-indigo-50 transition-colors text-slate-600 hover:text-indigo-600"
                >
                  <div className="flex items-center gap-3 font-black uppercase text-sm tracking-[0.2em]">
                    <Star size={16} /> Todo el catálogo
                  </div>
                </Link>
                <div className="rounded-3xl bg-slate-50 px-6 py-5">
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                    Por editorial
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/editoriales/marvel"
                      className="block rounded-xl px-4 py-2 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600"
                    >
                      Marvel
                    </Link>
                    <Link
                      href="/editoriales/dc-comic"
                      className="block rounded-xl px-4 py-2 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600"
                    >
                      DC Comic
                    </Link>
                    <Link
                      href="/editoriales/image"
                      className="block rounded-xl px-4 py-2 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600"
                    >
                      Image
                    </Link>
                    <Link
                      href="/editoriales/otros"
                      className="block rounded-xl px-4 py-2 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600"
                    >
                      Otros
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          href="#novedades"
          className="hover:text-indigo-400 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-400"
        >
          NOVEDADES
        </Link>
        <Link
          href="#proximos"
          className="hover:text-indigo-400 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-400"
        >
          PRÓXIMAMENTE
        </Link>
      </div>

      {/* Iconos y Acciones */}
      <div className="flex items-center gap-6">
        <button
          className={`hidden sm:flex items-center gap-2 ${scrolled ? "text-slate-400" : "text-white/60"} hover:text-indigo-400 transition-colors`}
        >
          <Search size={18} />
        </button>
        <Link href="/carrito" className="relative group p-2 cursor-pointer">
          <ShoppingCart
            size={20}
            className={`${scrolled ? "text-slate-700" : "text-white"} group-hover:text-indigo-400 transition-colors`}
          />
          <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
            0
          </span>
        </Link>
        <Link
          href="/cuenta"
          className={`${
            scrolled ? "bg-slate-950 text-white" : "bg-white text-slate-950"
          } px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-0.5 shadow-lg`}
        >
          MI CUENTA
        </Link>
      </div>
    </nav>
  );
}
