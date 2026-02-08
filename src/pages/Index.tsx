import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrintCard, PrintData } from "@/components/PrintCard";
import { PrintLightbox } from "@/components/PrintLightbox";
import { prints } from "@/data/prints";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-landscape.jpg";

const Index = () => {
  const [selectedPrint, setSelectedPrint] = useState<PrintData | null>(null);
  const featuredPrints = prints.slice(0, 4);

  const currentIndex = selectedPrint
    ? featuredPrints.findIndex((p) => p.id === selectedPrint.id)
    : -1;

  const handleNext = () => {
    if (currentIndex < featuredPrints.length - 1) {
      setSelectedPrint(featuredPrints[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPrint(featuredPrints[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen">
      <Header variant="transparent" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dramatic mountain landscape at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-primary-foreground gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
              Fine Art
              <br />
              Photography
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto mb-10 font-light">
              Museum-quality prints capturing the quiet beauty of landscapes
              and natural moments
            </p>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground group"
              >
                View Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Prints Section */}
      <section className="py-24 md:py-32">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              Featured Works
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A curated selection of our most beloved prints, each telling its
              own story through light and landscape
            </p>
          </motion.div>

          {/* Prints Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featuredPrints.map((print, index) => (
              <PrintCard
                key={print.id}
                print={print}
                index={index}
                onClick={() => setSelectedPrint(print)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="group">
                View Full Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                About the Artist
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Brian Chang is a landscape photographer based in the Pacific
                Northwest, known for his contemplative approach to capturing
                natural environments. His work emphasizes the interplay of
                light, atmosphere, and terrain to create images that invite
                quiet reflection.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each print is produced using archival-quality materials,
                ensuring your art will be treasured for generations.
              </p>
              <Link to="/about">
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-secondary overflow-hidden">
                <img
                  src={prints[2].image}
                  alt="Artist's work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-border -z-10" />
            </motion.div>
          </div>
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
        hasNext={currentIndex < featuredPrints.length - 1}
        hasPrev={currentIndex > 0}
      />
    </div>
  );
};

export default Index;
