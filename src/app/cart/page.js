"use client";

import { useShopContext } from "@/contexts/ShopContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, cartTotal, handleAddToCart } = useShopContext();

  const updateQuantity = (product, newQty) => {
    if (newQty < 1) return;
    handleAddToCart({ ...product, qty: newQty });
  };

  const removeItem = (product) => {
    handleAddToCart({ ...product, qty: 0 });
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Tu Carrito está Vacío
          </h1>
          <p className="text-gray-400 mb-8">
            Agrega algunos productos para empezar a construir tu tono perfecto
          </p>
          <Link
            href="/products"
            className="inline-block bg-amber-500 text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition cursor-pointer"
          >
            Explorar Equipamiento
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-100 mb-8">
        Tu <span className="text-amber-500">Carrito</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-4">
          {cart.map((product) => (
            <div
              key={product._id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {product.images && product.images.length > 0 && (
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-100 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-amber-500 font-bold mb-3">
                    {product.price.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      minimumFractionDigits: 0,
                    })}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(product, product.qty - 1)}
                        className="w-10 h-10 rounded bg-neutral-800 text-gray-100 hover:bg-neutral-700 transition font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-12 text-center text-gray-100 font-semibold">
                        {product.qty}
                      </span>
                      <button
                        onClick={() => updateQuantity(product, product.qty + 1)}
                        className="w-10 h-10 rounded bg-neutral-800 text-gray-100 hover:bg-neutral-700 transition font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(product)}
                      className="text-red-500 hover:text-red-400 text-sm font-semibold cursor-pointer"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="text-right sm:text-left lg:text-right">
                  <p className="font-bold text-gray-100 text-lg">
                    {(product.price * product.qty).toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      minimumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-gray-100 mb-4">
              Resumen del Pedido
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>
                  {cartTotal.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="border-t border-neutral-800 pt-3 flex justify-between text-xl font-bold">
                <span className="text-gray-100">Total</span>
                <span className="text-amber-500">
                  {cartTotal.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-amber-500 text-neutral-900 text-center px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition cursor-pointer"
            >
              Proceder al Pago
            </Link>

            <Link
              href="/products"
              className="block w-full mt-3 text-center text-gray-400 hover:text-amber-500 transition text-sm cursor-pointer"
            >
              ← Seguir Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
