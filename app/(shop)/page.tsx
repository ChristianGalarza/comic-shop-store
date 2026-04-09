"use client";

import Hero from "../components/layout/Hero.component";
import InventoryCTA from "../components/shop/InventoryCTA.component";
import MonthlySelection from "../components/shop/MonthlySelection.component";
import NewArrivals from "../components/shop/NewArrivals.component";
import UpcomingReleases from "../components/shop/Upcoming.component";

export default function ShopPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      {/* Sección de productos */}
      <NewArrivals />

      {/* Banner de búsqueda/inventario */}
      <InventoryCTA />

      {/* Seccion proximos lanzamientos */}
      <UpcomingReleases />

      {/* Esenciales / Selección de la casa */}
      <MonthlySelection />
    </div>
  );
}
