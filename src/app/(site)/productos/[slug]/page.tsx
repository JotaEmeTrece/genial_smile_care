interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  // TODO: Fetch del producto por slug desde Sanity
  // const product = await getProduct(slug);
  // if (!product) notFound();

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <a href="/productos" className="text-blue-600 hover:underline">
            ← Volver a Productos
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="h-96 bg-gray-200 rounded-lg" />
          
          <div>
            <h1 className="text-4xl font-bold mb-4">Producto: {slug}</h1>
            <p className="text-gray-600 mb-6">
              Descripción del producto {slug}
            </p>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Solicitar Información
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
