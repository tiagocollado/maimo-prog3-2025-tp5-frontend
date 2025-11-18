"use client";

import Image from "next/image";
import Link from "next/link";
import { useShopContext } from "@/contexts/ShopContext";
import { useState } from "react";
import { Toast } from "./Toast";

export default function ProductCard({ product }) {
  const { handleAddToCart } = useShopContext();
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    handleAddToCart({ ...product, qty: 1 });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <Toast message="¡Agregado al carrito!" show={showToast} />

      <article className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 hover:border-amber-500/50 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20">
        {product.images && product.images.length > 0 && (
          <div className="relative aspect-[4/3]">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-4">
          <h3 className="font-semibold text-gray-100 line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-2 text-amber-500 font-bold">
            {product.price.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
            })}
          </p>

          <div className="mt-4 flex gap-2">
            <Link
              href={`/products/${product._id}`}
              className="flex-1 text-center rounded-lg border border-neutral-700 px-3 py-2 text-sm text-gray-100 hover:bg-neutral-800 transition cursor-pointer"
            >
              Ver
            </Link>
            <button
              onClick={addToCart}
              className="flex-1 rounded-lg bg-amber-500 text-neutral-900 px-3 py-2 text-sm font-semibold hover:bg-amber-600 transition cursor-pointer"
            >
              Agregar
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
