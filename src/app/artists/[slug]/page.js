"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useShopContext } from "@/contexts/ShopContext";
import { ArrowLeft } from "lucide-react";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { Toast } from "@/components/Toast";

export default function ArtistDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { category, getOneCategory, handleAddToCart } = useShopContext();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (params.slug) {
      getOneCategory(params.slug);
    }
  }, [params.slug]);

  const buyCompleteSetup = (setup) => {
    setup.forEach((product) => {
      handleAddToCart({ ...product, qty: 1 });
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!category || !category._id) {
    return <LoadingSkeleton type="detail" />;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Toast message="¡Productos agregados al carrito!" show={showToast} />

      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-semibold">Volver</span>
      </button>

      {/* Artist Header */}
      <div className="mb-12 flex flex-col md:flex-row gap-8">
        {category.imageUrl && (
          <div className="relative w-full md:w-64 h-64 rounded-xl overflow-hidden">
            <Image
              src={category.imageUrl || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            {category.name}
          </h1>
          {category.bio && (
            <p className="text-gray-400 text-lg leading-relaxed">
              {category.bio}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-12">
        {category.songs &&
          category.songs.map((song) => (
            <div
              key={song._id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-amber-500 mb-2">
                  {song.songName}
                </h2>
                {song.album && (
                  <p className="text-gray-400">
                    {song.album} {song.year && `(${song.year})`}
                  </p>
                )}
                {song.description && (
                  <p className="mt-3 text-gray-300">{song.description}</p>
                )}
              </div>

              {song.youtubeUrl && (
                <div className="mb-6">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={song.youtubeUrl.replace("watch?v=", "embed/")}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {song.setup && song.setup.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-100">
                      Setup del Tono
                    </h3>
                    <button
                      onClick={() => buyCompleteSetup(song.setup)}
                      className="bg-amber-500 text-neutral-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition cursor-pointer"
                    >
                      Comprar Sonido Completo
                    </button>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {song.setup.map((product) => (
                      <Link
                        key={product._id}
                        href={`/products/${product._id}`}
                        className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-amber-500 transition cursor-pointer"
                      >
                        {product.images && product.images.length > 0 && (
                          <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={product.images[0] || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-100 text-sm line-clamp-1">
                            {product.name}
                          </h4>
                          <p className="text-amber-500 font-bold text-sm">
                            {product.price.toLocaleString("es-AR", {
                              style: "currency",
                              currency: "ARS",
                              minimumFractionDigits: 0,
                            })}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
