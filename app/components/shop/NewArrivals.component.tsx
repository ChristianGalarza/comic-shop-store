import ProductCard from "./ProductCard.component";
import { ArrowRight, Star } from "lucide-react";

// 1. Función para llamar al backend de NestJS
async function getNewArrivals() {
  // Asegúrate de usar la URL completa de tu backend NestJS
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comics/new-arrivals`,
    {
      cache: "no-store", // Para desarrollo, evita caché persistente
    },
  );

  if (!res.ok) return [];
  const response = await res.json();
  return response.data;
}

// 2. Convertimos el componente en una función asíncrona
export default async function NewArrivals() {
  const backendComics = await getNewArrivals();

  // 3. Mapeamos la respuesta de Prisma al formato que espera tu UI (ProductCard)
  // Basado en tu schema.prisma, el autor viene en la relación 'writer' y la editorial en 'publisher'
  const formattedComics = backendComics.map((comic: any) => ({
    id: comic.id.toString(),
    title: comic.title,
    author: comic.writer?.name || "Autor Desconocido",
    price: comic.price,
    category: comic.publisher?.name || "INDEPENDIENTE", // Convertimos el nombre del publisher a tu 'category'
    image: comic.imageUrl,
  }));

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

        {/* Grid de Productos Dinámico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {formattedComics.length > 0 ? (
            formattedComics.map((comic: any) => (
              <ProductCard key={comic.id} comic={comic} />
            ))
          ) : (
            <p className="text-slate-500 col-span-full text-center py-10">
              No se encontraron lanzamientos recientes.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
