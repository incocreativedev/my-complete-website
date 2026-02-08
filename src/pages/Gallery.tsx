import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrintCard, PrintData } from "@/components/PrintCard";
import { PrintLightbox } from "@/components/PrintLightbox";
import { prints } from "@/data/prints";

const categories = ["All", "Seascapes", "Landscapes", "Forests", "Mountains", "Architecture"];

const Gallery = () => {
  const [selectedPrint, setSelectedPrint] = useState<PrintData | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrints =
    activeCategory === "All"
      ? prints
      : prints.filter((p) => p.category === activeCategory);

  const currentIndex = selectedPrint
    ? filteredPrints.findIndex((p) => p.id === selectedPrint.id)
    : -1;

  const handleNext = () => {
    if (currentIndex < filteredPrints.length - 1) {
      setSelectedPrint(filteredPrints[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPrint(filteredPrints[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-medium mb-4">
              Gallery
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Explore the complete collection of fine art prints
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-all border ${
                  activeCategory === category
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 md:pb-32">
        <div className="gallery-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredPrints.map((print, index) => (
              <PrintCard
                key={print.id}
                print={print}
                index={index}
                onClick={() => setSelectedPrint(print)}
              />
            ))}
          </div>

          {filteredPrints.length === 0 && (
            <p className="text-center text-muted-foreground py-16">
              No prints found in this category.
            </p>
          )}
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <PrintLightbox
        print={selectedPrint}
        isOpen={!!selectedPrint}
        onClose={() => setSelectedPrint(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={currentIndex < filteredPrints.length - 1}
        hasPrev={currentIndex > 0}
      />
    </div>
  );
};

export default Gallery;
