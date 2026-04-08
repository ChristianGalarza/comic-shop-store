import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-[95vh] flex items-center pt-20 px-6 md:px-12 overflow-hidden bg-brand-dark">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.comicbookroundup.com/img/previews/a/absolute-batman-(2024)/18_previews_0.webp?auto=format&fit=crop&q=80&w=2000"
          alt="Fondo de Ilustración de Cómics"
          fill
          priority // Carga esta imagen primero que nada
          className="object-cover opacity-40 animate-slow-zoom"
        />
        {/* Overlays para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-accent border border-brand-primary/30 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-md">
          <Flame size={14} className="text-brand-accent" /> NOVEDAD EXCLUSIVA
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8">
          EL ARTE DE <br />
          <span className="text-brand-primary italic drop-shadow-[0_10px_10px_rgba(79,70,229,0.4)]">
            COLECCIONAR
          </span>
        </h1>

        <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-2xl">
          Bienvenido a la curaduría más selecta de{" "}
          <strong className="font-bold text-white">novelas gráficas</strong> y{" "}
          <strong className="font-bold text-white">cómics premium</strong>.
          Calidad certificada para el lector exigente.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
          <button className="bg-brand-primary text-white px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-brand-accent transition-all shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-3 group">
            VER NOVEDADES
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>

          <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3">
            EXPLORAR PRE-VENTAS
          </button>
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </header>
  );
}
