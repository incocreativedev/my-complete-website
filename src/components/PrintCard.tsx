import { motion } from "framer-motion";
import { useState } from "react";

export interface PrintData {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  aspectRatio?: string;
}

interface PrintCardProps {
  print: PrintData;
  onClick: () => void;
  index: number;
}

export const PrintCard = ({ print, onClick, index }: PrintCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-secondary/50">
        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-secondary animate-pulse" />
        )}
        
        <img
          src={print.image}
          alt={print.title}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>

      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-medium group-hover:text-accent transition-colors">
              {print.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{print.category}</p>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            From ${print.price}
          </p>
        </div>
      </div>
    </motion.article>
  );
};
