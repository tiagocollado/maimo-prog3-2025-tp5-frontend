"use client";

import { useShopContext } from "@/contexts/ShopContext";
import ArtistCard from "@/components/ArtistCard";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export default function ArtistsPage() {
  const { categories } = useShopContext();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">
          Explora <span className="text-amber-500">Artistas</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Descubre los tonos legendarios de los guitarristas más icónicos
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.length === 0 ? (
          <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </>
        ) : (
          categories.map((artist) => (
            <ArtistCard key={artist._id} artist={artist} />
          ))
        )}
      </div>
    </div>
  );
}
