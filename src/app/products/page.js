"use client";

import { useShopContext } from "@/contexts/ShopContext";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export default function ProductsPage() {
  const { products } = useShopContext();
  const [activeFilter, setActiveFilter] = useState("all");

  let filteredProducts;
  if (activeFilter === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((p) => p.type === activeFilter);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">
          <span className="text-amber-500">Equipamiento</span> Completo
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Encuentra pedales, guitarras y amplificadores de los mejores artistas
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeFilter === "all"
                ? "bg-amber-500 text-neutral-900"
                : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveFilter("pedal")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeFilter === "pedal"
                ? "bg-amber-500 text-neutral-900"
                : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
            }`}
          >
            Pedales
          </button>
          <button
            onClick={() => setActiveFilter("guitarra")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeFilter === "guitarra"
                ? "bg-amber-500 text-neutral-900"
                : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
            }`}
          >
            Guitarras
          </button>
          <button
            onClick={() => setActiveFilter("amplificador")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeFilter === "amplificador"
                ? "bg-amber-500 text-neutral-900"
                : "bg-neutral-800 text-gray-400 hover:bg-neutral-700"
            }`}
          >
            Amplificadores
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No se encontraron productos en esta categoría.
          </p>
        </div>
      )}
    </div>
  );
}
