import { Comic } from "@/types/Comic.model";
import ProductCard from "./ProductCard.component";
import { ArrowRight, Star } from "lucide-react";

// Datos de ejemplo basados en tu interés por Marvel, DC e Image
const MOCK_COMICS: Comic[] = [
  {
    id: "1",
    title: "Batman: The Gargoyle of Gotham",
    author: "Rafael Grampá",
    price: 29.99,
    category: "DC COMICS",
    image:
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "The Amazing Spider-Man #50",
    author: "Zeb Wells",
    price: 15.5,
    category: "MARVEL",
    image:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "Saga #68",
    author: "Brian K. Vaughan",
    price: 12.99,
    category: "IMAGE",
    image:
      "https://images.unsplash.com/photo-1618519764620-7403abdbcdc9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    title: "X-Men: From the Ashes",
    author: "Jed MacKay",
    price: 18.0,
    category: "MARVEL",
    image:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&q=80&w=800",
  },
];

export default function NewArrivals() {
  return (
    <section id="novedades" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-indigo-600 text-[11px] font-black uppercase tracking-widest mb-3">
              <Star size={14} /> LANZAMIENTOS DE LA SEMANA
            </div>
            <h2 className="text-5xl font-black tracking-tighter mb-4 text-slate-900">
              Recién Llegados
            </h2>
            <p className="text-slate-500 font-light">
              Explora las últimas adiciones de Marvel, DC e Image Comics.
              Disponibilidad limitada.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest hover:text-slate-900 transition-colors">
            Catálogo Completo{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {MOCK_COMICS.map((comic) => (
            <ProductCard key={comic.id} comic={comic} />
          ))}
        </div>
      </div>
    </section>
  );
}
