import { Package, ShoppingBag, ArrowRight } from "lucide-react";
import { mockProducts } from "@/components/mock/data";

export default function ProductosPreview() {
  return (
    <section id="productos" className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Productos
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-darkText sm:text-4xl">
              Productos para tu cuidado oral
            </h2>
            <p className="mt-4 text-gray-600">
              Selección de productos de higiene bucal recomendados por nuestro
              equipo profesional.
            </p>
          </div>
          <a
            href="/productos"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Ver todos los productos <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mockProducts.map((product) => (
            <article
              key={product._id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Imagen placeholder */}
              <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-primary/15 via-surface to-accent/15">
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary shadow-sm">
                  {product.category}
                </span>
                <Package className="h-16 w-16 text-primary/50 transition group-hover:scale-110 group-hover:text-primary" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold text-darkText">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-lg font-extrabold text-primary">
                    {product.price != null ? `$${product.price}` : "Consultar"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 transition group-hover:text-primary">
                    <ShoppingBag className="h-4 w-4" /> Ver más
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
