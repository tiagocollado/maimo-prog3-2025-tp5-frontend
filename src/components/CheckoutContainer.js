"use client";

import { useShopContext } from "@/contexts/ShopContext";
import { CheckoutForm } from "./FormCheckout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CheckoutContainer = () => {
  const { cart, addOrder, cartTotal, clearCart } = useShopContext();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleAddOrder = async (values) => {
    const success = await addOrder(values);
    return success;
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-100 mb-4">
              ¡Gracias por tu compra!
            </h1>
            <p className="text-gray-400 mb-6">
              Tu pedido ha sido procesado exitosamente. Recibirás un email de
              confirmación pronto.
            </p>
            <Link
              href="/"
              className="inline-block bg-amber-500 text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-100 mb-8">
        <span className="text-amber-500">Checkout</span>
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <CheckoutForm
            handleAddOrder={handleAddOrder}
            setOrderPlaced={setOrderPlaced}
          />
        </div>

        <div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 sticky top-20">
            <h2 className="text-xl font-bold text-gray-100 mb-4">
              Resumen del Pedido
            </h2>

            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
              {cart.map((product) => (
                <div
                  key={product._id}
                  className="flex gap-3 p-3 bg-neutral-800 rounded-lg"
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
                    <h3 className="text-sm font-semibold text-gray-100 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      Cantidad: {product.qty}
                    </p>
                    <p className="text-sm text-amber-500 font-bold">
                      {(product.price * product.qty).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-800 pt-4 space-y-2">
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
              <div className="flex justify-between text-xl font-bold pt-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;
