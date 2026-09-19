import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '@/data/salonData';
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterCategories = ['ALL', 'HAIR', 'COLOUR', 'BRIDAL', 'MAKEUP', 'GROOMING', 'SALON'];

  const filteredItems = selectedFilter === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setActiveLightboxIndex(index >= 0 ? index : 0);
  };

  return (
    <main className="min-h-screen bg-[#0A0807] text-[#FBF8F3] pt-32 pb-32 lg:pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/35 bg-[#171311] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          EDITORIAL ARCHIVE
        </div>

        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FBF8F3] mb-6">
          VISUAL<br />
          <span className="italic font-light text-gold-gradient">PORTFOLIO.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#9E948C] max-w-xl mx-auto font-sans font-light leading-relaxed mb-10">
          A visual chronicle of bespoke hair transformations, runway bridal finishes, and our Arera Colony salon sanctuary.
        </p>

        {/* Filter Pills - Horizontal swipe on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:justify-center sm:flex-wrap px-1">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-300 shrink-0 ${
                selectedFilter === cat
                  ? 'bg-gold-gradient text-[#0A0807] shadow-md'
                  : 'bg-[#14100E] border border-[#C59D5F]/20 text-[#9E948C] hover:text-[#FBF8F3] hover:border-[#C59D5F]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-Style Responsive Editorial Gallery */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(item)}
                data-cursor="view"
                data-cursor-text="EXPAND"
                className="group relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#C59D5F]/20 hover:border-[#C59D5F]/60 transition-all duration-500 shadow-xl cursor-pointer bg-[#120F0D]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.75] group-hover:brightness-95 group-hover:scale-108 transition-all duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0807]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0A0807]/70 backdrop-blur-md border border-[#C59D5F]/30 flex items-center justify-center text-[#C59D5F] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C59D5F] uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#FBF8F3] group-hover:text-gold-gradient transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9E948C] font-sans font-light line-clamp-1 mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </main>
  );
};
