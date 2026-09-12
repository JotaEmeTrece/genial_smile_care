import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CapacitacionesSection from "@/components/sections/CapacitacionesSection";
import InspeccionSection from "@/components/sections/InspeccionSection";
import JornadasSection from "@/components/sections/JornadasSection";
import ProductosPreview from "@/components/sections/ProductosPreview";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-sans text-darkText">
      <Navbar />
      <main>
        <Hero />
        <CapacitacionesSection />
        <InspeccionSection />
        <JornadasSection />
        <ProductosPreview />
      </main>
      <Footer />
    </div>
  );
}

