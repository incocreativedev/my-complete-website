import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Camera, Award, Heart } from "lucide-react";

import printForest from "@/assets/print-forest.jpg";

const About = () => {
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
              About
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The story behind the lens
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 md:pb-32">
        <div className="gallery-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-secondary overflow-hidden">
                <img
                  src={printForest}
                  alt="Brian Chang - Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-border -z-10" />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:py-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                Brian Chang
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a landscape photographer based in the Pacific Northwest,
                where the intersection of mountain, forest, and sea provides
                endless inspiration for my work.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My approach to photography is rooted in patience and
                contemplation. I often return to the same locations across
                different seasons and conditions, waiting for those rare moments
                when light and atmosphere converge to create something
                extraordinary.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Each print in my collection represents not just a moment
                captured, but countless hours spent in nature, observing,
                learning, and ultimately creating images that I hope will bring
                a sense of peace and wonder to your space.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <Camera className="h-5 w-5 mx-auto mb-2 text-accent" />
                  <p className="font-serif text-2xl font-medium">15+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Years
                  </p>
                </div>
                <div className="text-center">
                  <Award className="h-5 w-5 mx-auto mb-2 text-accent" />
                  <p className="font-serif text-2xl font-medium">40+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Awards
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="h-5 w-5 mx-auto mb-2 text-accent" />
                  <p className="font-serif text-2xl font-medium">2K+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Collectors
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Print Quality Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Print Quality
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Every print is crafted to museum standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Archival Papers",
                description:
                  "Printed on 100% cotton rag or archival photo papers rated for 100+ years of color stability.",
              },
              {
                title: "Giclée Printing",
                description:
                  "Using professional-grade pigment inks for exceptional detail, dynamic range, and longevity.",
              },
              {
                title: "Hand Inspection",
                description:
                  "Every print is personally inspected and signed before shipping to ensure the highest quality.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-xl font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
