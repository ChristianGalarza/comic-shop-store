"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { Comic } from "@/types/Comic.model";

export default function ProductCard({ comic }: { comic: Comic }) {
  console.log("COMIC", comic);
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        <Image
          src={comic.image}
          alt={comic.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge de Categoría */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-brand-dark">
            {comic.category}
          </span>
        </div>
        {/* Botón rápido de añadir (Overlay) */}
        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-brand-dark p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Plus size={24} />
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-1">
        <h3 className="font-black text-lg leading-tight text-brand-dark uppercase tracking-tight group-hover:text-brand-primary transition-colors">
          {comic.title}
        </h3>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
          {comic.author}
        </p>
        <p className="text-brand-primary font-black text-xl mt-2">
          ${comic.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
