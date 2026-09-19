import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@/data/salonData';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null;
  const currentItem = isOpen ? items[currentIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex! + 1) % items.length);
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex! - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070504]/95 backdrop-blur-xl p-4 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-3 rounded-full bg-[#171311]/80 border border-[#C59D5F]/30 text-[#FBF8F3] hover:text-[#C59D5F] hover:scale-105 transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-[#171311]/70 border border-[#C59D5F]/30 text-[#FBF8F3] hover:text-[#C59D5F] hover:scale-110 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-[#171311]/70 border border-[#C59D5F]/30 text-[#FBF8F3] hover:text-[#C59D5F] hover:scale-110 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Content Modal */}
          <div className="max-w-5xl w-full flex flex-col items-center">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative max-h-[75vh] overflow-hidden rounded-xl border border-[#C59D5F]/30 shadow-2xl bg-[#0A0807]"
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-auto max-h-[72vh] object-contain select-none"
              />
            </motion.div>

            {/* Caption / Details */}
            <div className="text-center mt-4 max-w-xl">
              <span className="inline-block text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C59D5F] uppercase mb-1">
                {currentItem.category} • {currentIndex + 1} OF {items.length}
              </span>
              <h4 className="font-editorial text-xl md:text-2xl text-[#FBF8F3] tracking-wide">
                {currentItem.title}
              </h4>
              <p className="text-xs text-[#9E948C] mt-1 font-sans">
                {currentItem.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
