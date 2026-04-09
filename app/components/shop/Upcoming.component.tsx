import Image from "next/image";
import { Bell } from "lucide-react";
import { UpcomingComic } from "@/types/UpcomingComic.model";

// MOCK DATA: Listo para ser reemplazado por un 'fetch' a tu API en el futuro
const MOCK_UPCOMING: UpcomingComic[] = [
  {
    id: "u1",
    title: "Absolute Batman #1",
    publisher: "DC Comics",
    releaseDate: "15 MAY 2026",
    image:
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800",
    brandColor: "#3b82f6",
  }, // Azul DC
  {
    id: "u2",
    title: "Ultimate Spider-Man #6",
    publisher: "Marvel",
    releaseDate: "22 MAY 2026",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800",
    brandColor: "#ef4444",
  }, // Rojo Marvel
  {
    id: "u3",
    title: "Spawn #350",
    publisher: "Image",
    releaseDate: "01 JUN 2026",
    image:
      "https://images.unsplash.com/photo-1618519764620-7403abdbcdc9?auto=format&fit=crop&q=80&w=800",
    brandColor: "#10b981",
  }, // Verde Image
  {
    id: "u4",
    title: "Teenage Mutant Ninja Turtles #1",
    publisher: "IDW",
    releaseDate: "10 JUN 2026",
    image:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&q=80&w=800",
    brandColor: "#f59e0b",
  }, // Naranja IDW
];

export default function UpcomingReleases() {
  return (
    <section id="proximos" className="py-24 px-6 md:px-12 bg-background">
      {/* Contenedor principal oscuro con bordes redondeados */}
      <div className="max-w-7xl mx-auto bg-brand-dark rounded-[3rem] md:rounded-[4rem] text-white overflow-hidden relative px-6 py-16 md:p-20 shadow-2xl">
        {/* Efecto de luz difuminada en el fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          {/* Cabecera de la sección */}
          <div className="text-center mb-20">
            <span className="text-brand-primary text-[11px] font-black uppercase tracking-[0.4em]">
              PRÓXIMOS LANZAMIENTOS
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mt-4 text-white">
              Próximos por Llegar
            </h2>
            <p className="text-slate-400 mt-6 font-light max-w-xl mx-auto text-lg">
              No te pierdas los estrenos más esperados del próximo mes.
              Suscríbete para recibir alertas de stock.
            </p>
          </div>

          {/* Grid de Próximos Lanzamientos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_UPCOMING.map((comic) => (
              <div
                key={comic.id}
                className="group bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-[2rem] hover:bg-white/10 transition-all duration-500 flex flex-col"
              >
                {/* Contenedor de Imagen */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-2xl relative bg-brand-dark">
                  <Image
                    src={comic.image}
                    alt={comic.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Badge flotante de fecha y alerta */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">
                      {comic.releaseDate}
                    </span>
                    <button
                      className="text-white hover:text-brand-primary transition-colors"
                      aria-label="Avisarme"
                    >
                      <Bell size={16} />
                    </button>
                  </div>
                </div>

                {/* Metadatos */}
                <div className="flex items-center gap-2 mb-3">
                  {/* Puntito dinámico de la editorial */}
                  <div
                    className="w-2 h-2 rounded-full shadow-sm"
                    style={{ backgroundColor: comic.brandColor }}
                  />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {comic.publisher}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-6 line-clamp-2 text-white flex-grow">
                  {comic.title}
                </h3>

                <button className="w-full py-4 rounded-xl border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-all mt-auto active:scale-95">
                  RESERVAR AHORA
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
