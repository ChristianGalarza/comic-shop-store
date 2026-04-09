import { Award, ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "./ProductCard.component";
import { Comic } from "@/types/Comic.model";

const MONTHLY_ESSENTIALS: Comic[] = [
  {
    id: "m1",
    title: "Kingdom Come: Edición 30 Aniversario",
    author: "Mark Waid & Alex Ross",
    price: 45.0,
    category: "DC BLACK LABEL",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m2",
    title: "Monster #1: Perfect Edition",
    author: "Naoki Urasawa",
    price: 28.5,
    category: "MANGA SEINEN",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m3",
    title: "Civil War: Marvel Deluxe",
    author: "Mark Millar",
    price: 35.0,
    category: "MARVEL DELUXE",
    image:
      "https://images.unsplash.com/photo-1620336655055-088d06e7660c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "m4",
    title: "Watchmen: Absolute Edition",
    author: "Alan Moore",
    price: 55.0,
    category: "NOVELA GRÁFICA",
    image:
      "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?auto=format&fit=crop&q=80&w=800",
  },
];

const CATEGORIES = ["DC", "Marvel", "Image", "Otros"];

export default function MonthlySelection() {
  return (
    <section id="coleccion" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* CABECERA DE SECCIÓN */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-amber-600 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
              <Award size={16} /> SELECCIÓN DE LA CASA
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-brand-dark leading-[0.9]">
              Esenciales <br />{" "}
              <span className="text-slate-300 italic">del Momento</span>
            </h2>
            <p className="text-slate-500 font-light text-lg leading-relaxed">
              Nuestra selección de novelas gráficas premiadas y ediciones de
              lujo que todo coleccionista debe poseer en su biblioteca.
            </p>
          </div>

          {/* BOTONES DE NAVEGACIÓN (Slider Placeholder) */}
          <div className="flex gap-4">
            <button className="group bg-slate-100 p-5 rounded-2xl hover:bg-brand-primary transition-all active:scale-90">
              <ArrowRight
                size={22}
                className="rotate-180 text-slate-400 group-hover:text-white"
              />
            </button>
            <button className="group bg-slate-100 p-5 rounded-2xl hover:bg-brand-primary transition-all active:scale-90">
              <ArrowRight
                size={22}
                className="text-slate-400 group-hover:text-white"
              />
            </button>
          </div>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-28">
          {MONTHLY_ESSENTIALS.map((comic) => (
            <ProductCard key={comic.id} comic={comic} />
          ))}
        </div>

        {/* NAVEGACIÓN POR CATEGORÍAS */}
        <div className="flex flex-col items-center border-t border-slate-100 pt-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-12 bg-slate-200" />
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] text-center">
              EXPLORA POR CATEGORÍAS ÉLITE
            </h4>
            <div className="h-[1px] w-12 bg-slate-200" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-brand-primary hover:text-brand-primary hover:shadow-xl hover:shadow-brand-primary/10 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
