export default function ProductosPage() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Nuestros Productos y Servicios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: Renderizar productos desde Sanity */}
          <div className="p-6 border rounded-lg shadow-sm">
            <div className="h-48 bg-gray-200 rounded mb-4" />
            <h3 className="font-semibold mb-2">Producto Ejemplo</h3>
            <p className="text-gray-600 text-sm">Descripción del producto</p>
          </div>
        </div>
      </div>
    </main>
  );
}
