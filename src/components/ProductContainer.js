"use client";

import { useShopContext } from "@/contexts/ShopContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { Toast } from "./Toast";

const ProductContainer = ({ id }) => {
  const router = useRouter();
  const { getOneProduct, product, handleAddToCart } = useShopContext();
  const [qty, setQty] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  const addToCart = () => {
    const productToAdd = {
      ...product,
      qty: qty,
    };
    handleAddToCart(productToAdd);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!product || !product._id) {
    return <LoadingSkeleton type="detail" />;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Toast message="¡Producto agregado al carrito!" show={showToast} />

      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition mb-6 cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-semibold">Volver</span>
      </button>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">

          <div>
            {product.images && product.images.length > 0 ? (
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-800">
                  <Image
                    src={
                      product.images[currentImageIndex] || "/placeholder.svg"
                    }
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative aspect-square rounded-lg overflow-hidden bg-neutral-800 border-2 transition cursor-pointer ${
                          currentImageIndex === idx
                            ? "border-amber-500"
                            : "border-transparent hover:border-neutral-600"
                        }`}
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${product.name} ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-square rounded-xl bg-neutral-800 flex items-center justify-center">
                <span className="text-6xl">🎸</span>
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-100 mb-4">
              {product.name}
            </h1>

            <div className="text-4xl font-bold text-amber-500 mb-6">
              {product.price.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              })}
            </div>

            {product.description && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-100 mb-2">
                  Descripción
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {product.specs && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-100 mb-2">
                  Especificaciones
                </h2>
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                  {product.specs.map((spec) => (
                    <p key={spec.key} className="text-gray-400">
                      <strong className="text-gray-200">{spec.key}:</strong>{" "}
                      {spec.value}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-100 mb-2">
                Cantidad
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 rounded-lg bg-neutral-800 text-gray-100 hover:bg-neutral-700 transition font-bold cursor-pointer"
                >
                  -
                </button>
                <span className="w-12 text-center text-gray-100 font-semibold">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 rounded-lg bg-neutral-800 text-gray-100 hover:bg-neutral-700 transition font-bold cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={addToCart}
                className="flex-1 bg-amber-500 text-neutral-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition cursor-pointer"
              >
                Agregar al Carrito
              </button>
              <Link
                href="/cart"
                className="px-6 py-3 rounded-lg border border-neutral-700 text-gray-100 hover:bg-neutral-800 transition flex items-center justify-center cursor-pointer"
              >
                Ver Carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
