"use client";

import Link from "next/link";
import { useShopContext } from "@/contexts/ShopContext";
import ProductCard from "@/components/ProductCard";
import ArtistCard from "@/components/ArtistCard";
import { Marquee } from "@/components/Marquee";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export default function Home() {
  const { products, categories } = useShopContext();

  return (
    <>
      <Marquee />

      <section className="relative bg-gradient-to-b from-neutral-900 via-black to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 bg-black/70">
          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              backgroundImage: 'url(/placeholder.svg?height=800&width=1200&query=dark+guitar+amplifier+grill+texture)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center justify-center py-24 md:py-32">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                Encontrá tu sonido.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl leading-relaxed">
              Desde el equipo que utilizan tus héroes hasta información personalizada sobre equipos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/artists"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 bg-amber-500 text-neutral-900 font-bold text-lg hover:bg-amber-600 transition-all hover:scale-105 cursor-pointer"
              >
                Explorar Artistas
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 border-2 border-amber-500 text-amber-500 font-bold text-lg hover:bg-amber-500 hover:text-neutral-900 transition-all hover:scale-105 cursor-pointer"
              >
                Ver Equipamiento
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-100">
            Artistas <span className="text-amber-500">Destacados</span>
          </h2>
          <Link href="/artists" className="text-amber-500 hover:text-amber-600 transition text-sm cursor-pointer">
            Ver todos →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.length === 0 ? (
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
          ) : (
            categories.slice(0, 4).map((artist) => (
              <ArtistCard key={artist._id} artist={artist} />
            ))
          )}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-100">
            Equipamiento <span className="text-amber-500">Destacado</span>
          </h2>
          <Link href="/products" className="text-amber-500 hover:text-amber-600 transition text-sm cursor-pointer">
            Ver todo →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.length === 0 ? (
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
          ) : (
            products.slice(0, 4).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </section>
    </>
  );
}
