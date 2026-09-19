import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '@/data/salonData';

export const BeforeAfterSlider: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['ALL', 'HAIR', 'COLOUR', 'MAKEUP', 'GROOMING'];

  const filteredItems = selectedCategory === 'ALL'
    ? BEFORE_AFTER_ITEMS
    : BEFORE_AFTER_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem = filteredItems[0] || BEFORE_AFTER_ITEMS[0];

  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleTouchOrMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchOrMouseUp = () => {
    setIsDragging(false);
  };

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative py-20 md:py-36 bg-[#0A0807] text-[#FBF8F3] border-t border-[#C59D5F]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#161210] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-3 h-3" />
              VISIBLE PROOF
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#FBF8F3]">
              THE TRANSFORMATION<br />
              <span className="italic font-light text-[#E5C384]">STUDIO.</span>
            </h2>
          </div>

          {/* Category Tabs - Clean horizontal swipe on mobile */}
          <div className="flex items-center gap-2 bg-[#14100E] p-1.5 rounded-full border border-[#C59D5F]/20 overflow-x-auto scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSliderPosition(50); // reset slider to center on switch
                }}
                className={`px-4 py-2 rounded-full text-[10px] font-sans font-semibold tracking-widest uppercase transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-gold-gradient text-[#0A0807] shadow-md'
                    : 'text-[#9E948C] hover:text-[#FBF8F3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Split Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={handleTouchOrMouseDown}
              onMouseUp={handleTouchOrMouseUp}
              onMouseLeave={handleTouchOrMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchOrMouseUp}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[320px] sm:h-[440px] md:h-[540px] rounded-2xl overflow-hidden border border-[#C59D5F]/30 shadow-2xl select-none cursor-ew-resize touch-none"
            >
              {/* After Image (Full background layer) */}
              <img
                src={activeItem.afterImage}
                alt={`${activeItem.title} - After`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Before Image (Clipped layer) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt={`${activeItem.title} - Before`}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none max-w-none"
                  style={{
                    width: containerWidth > 0 ? `${containerWidth}px` : (containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'),
                  }}
                />
              </div>

              {/* Draggable Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#C59D5F] pointer-events-none shadow-[0_0_12px_rgba(197,157,95,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Central Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#120F0D] border-2 border-[#C59D5F] flex items-center justify-center text-[#C59D5F] shadow-2xl pointer-events-none">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Floating BADGES */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 px-2.5 sm:px-3 py-1 rounded-full bg-[#0A0807]/80 backdrop-blur-md border border-[#C59D5F]/30 text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-[#9E948C] uppercase pointer-events-none">
                BEFORE
              </div>

              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-2.5 sm:px-3 py-1 rounded-full bg-[#C59D5F]/90 text-[#0A0807] backdrop-blur-md text-[9px] sm:text-[10px] font-sans font-bold tracking-widest uppercase pointer-events-none shadow-lg">
                AFTER
              </div>

              {/* Drag Hint at bottom */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-[#0A0807]/80 backdrop-blur-sm border border-[#C59D5F]/25 text-[8px] sm:text-[9px] font-sans tracking-widest text-[#EADCC9] uppercase pointer-events-none text-center whitespace-nowrap">
                DRAG SLIDER TO COMPARE
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C59D5F] uppercase mb-2">
              CASE STUDY • {activeItem.category}
            </span>

            <h3 className="font-editorial text-3xl sm:text-4xl text-[#FBF8F3] tracking-wide mb-4">
              {activeItem.title}
            </h3>

            <div className="h-[1.5px] w-12 bg-[#C59D5F] mb-6" />

            <div className="space-y-4 text-sm text-[#9E948C] font-sans font-light leading-relaxed mb-8">
              <p>
                <strong className="text-[#FBF8F3] font-normal">Result: </strong>
                {activeItem.transformation}
              </p>
              <div className="p-4 rounded-xl bg-[#14100E] border border-[#C59D5F]/20">
                <span className="text-[10px] font-sans font-bold tracking-wider text-[#C59D5F] uppercase block mb-1">
                  Stylist Technique:
                </span>
                <p className="text-xs text-[#EADCC9]">
                  {activeItem.stylistNote}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#9E948C]">
              Every client consultation begins with an in-depth scalp & skin diagnosis to formulate the optimal treatment path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
