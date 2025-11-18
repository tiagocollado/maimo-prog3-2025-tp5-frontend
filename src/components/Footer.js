export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-900 mt-16">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-gray-400">
          © {year} El Ritual del Tono. Todos los derechos reservados.
        </p>

        <nav aria-label="Footer" className="text-sm">
          <ul className="flex flex-wrap items-center gap-4 text-gray-400">
            <li>
              <a href="/artists" className="hover:text-amber-500 transition">
                Artistas
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-amber-500 transition">
                Equipamiento
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-amber-500 transition">
                Carrito
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
