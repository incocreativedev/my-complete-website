import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import { PrintData } from "./PrintCard";
import { Button } from "./ui/button";

interface PrintLightboxProps {
  print: PrintData | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const PrintLightbox = ({
  print,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: PrintLightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext && hasNext) onNext();
      if (e.key === "ArrowLeft" && onPrev && hasPrev) onPrev();
    },
    [onClose, onNext, onPrev, hasNext, hasPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!print) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Navigation arrows */}
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev?.();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
          )}
          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext?.();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Content */}
          <div
            className="h-full flex flex-col lg:flex-row items-center justify-center p-6 md:p-12 lg:p-16 gap-8 lg:gap-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex-1 flex items-center justify-center max-h-[60vh] lg:max-h-[80vh]"
            >
              <img
                src={print.image}
                alt={print.title}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 30, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="lg:w-80 shrink-0 text-center lg:text-left"
            >
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {print.category}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                {print.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Museum-quality fine art print on archival paper. Available in
                multiple sizes with optional framing.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <span className="text-2xl font-serif">From ${print.price}</span>
                </div>

                <Button size="lg" className="w-full">
                  View Print Options
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
