"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShopContext } from "@/contexts/ShopContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cartQty } = useShopContext();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-bold tracking-tight text-xl text-gray-100 cursor-pointer"
          >
            <span className="text-amber-500">El Ritual</span> del Tono
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <Link
              href="/"
              className={`transition cursor-pointer ${
                pathname === "/"
                  ? "text-amber-500 font-bold"
                  : "text-gray-400 hover:text-amber-500"
              }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/artists"
              className={`transition cursor-pointer ${
                pathname.startsWith("/artists")
                  ? "text-amber-500 font-bold"
                  : "text-gray-400 hover:text-amber-500"
              }`}
            >
              Artistas
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`transition cursor-pointer ${
                pathname.startsWith("/products")
                  ? "text-amber-500 font-bold"
                  : "text-gray-400 hover:text-amber-500"
              }`}
            >
              Equipamiento
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`transition cursor-pointer ${
                pathname.startsWith("/about")
                  ? "text-amber-500 font-bold"
                  : "text-gray-400 hover:text-amber-500"
              }`}
            >
              About
            </Link>
          </li>
        </ul>

        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-sm rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 hover:bg-neutral-700 transition text-gray-100 cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">Carrito</span>
          <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-500 text-neutral-900 text-xs font-bold px-1.5">
            {cartQty()}
          </span>
        </Link>
      </nav>
    </header>
  );
}
