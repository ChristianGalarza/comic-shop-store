"use client";

import Hero from "../components/layout/Hero.component";

export default function ShopPage() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Próxima sección: Novedades / Grid de Productos */}
      <section id="novedades" className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Aquí irá el Grid de cómics */}
        </div>
      </section>
    </div>
  );
}
