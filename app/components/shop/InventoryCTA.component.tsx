export default function InventoryCTA() {
  return (
    <section className="px-6 md:px-12 py-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center text-white shadow-[0_35px_60px_-15px_rgba(79,70,229,0.3)]">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-dark/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              ¿BUSCAS ALGO <br className="sm:hidden" />{" "}
              <span className="italic">ESPECÍFICO?</span>
            </h3>

            <p className="text-indigo-100 mb-12 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Accede a nuestra base de datos completa con más de{" "}
              <strong className="text-white font-bold">10,000 títulos</strong>{" "}
              clasificados por editorial, autor y año de publicación.
            </p>

            <button className="bg-white text-brand-primary px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:scale-105 hover:shadow-2xl transition-all active:scale-95 shadow-xl">
              VER CATÁLOGO COMPLETO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
