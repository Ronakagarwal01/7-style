import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { REVIEWS_DATA, SALON_INFO } from '@/data/salonData';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevReview = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const nextReview = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const activeReview = REVIEWS_DATA[currentIndex];

  return (
    <section className="relative py-24 md:py-36 bg-[#0E0C0A] text-[#FBF8F3] border-t border-[#C59D5F]/15 overflow-hidden">
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C59D5F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Rating Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#161210] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-4">
              VERIFIED CLIENT APPRECIATION
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#FBF8F3]">
              PRAISE FROM<br />
              <span className="italic font-light text-[#E5C384]">BHOPAL.</span>
            </h2>
          </div>

          {/* Google 4.7 Badge */}
          <div className="p-6 rounded-2xl bg-[#14100E] border border-[#C59D5F]/25 flex items-center gap-6 shadow-xl">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C59D5F] text-[#C59D5F]" />
                ))}
              </div>
              <span className="font-editorial text-3xl font-bold text-[#FBF8F3]">
                {SALON_INFO.rating} ★
              </span>
            </div>
            <div className="h-10 w-[1px] bg-[#C59D5F]/20" />
            <div>
              <p className="font-sans text-xs font-semibold text-[#FBF8F3] tracking-wide">
                {SALON_INFO.reviewCount} Google Reviews
              </p>
              <p className="text-[10px] text-[#9E948C]">
                Arera Colony, Bhopal Branch
              </p>
            </div>
          </div>
        </div>

        {/* Big Testimonial Card Display */}
        <div className="relative max-w-4xl mx-auto min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full text-center px-4 md:px-12"
            >
              <Quote className="w-12 h-12 text-[#C59D5F]/30 mx-auto mb-6" />

              <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#FBF8F3] font-light leading-relaxed mb-8 italic">
                "{activeReview.comment}"
              </p>

              <div className="flex flex-col items-center">
                <span className="font-editorial text-xl text-[#C59D5F] font-semibold tracking-wide">
                  {activeReview.author}
                </span>

                <div className="flex items-center gap-2 text-xs text-[#9E948C] mt-1 font-sans">
                  <span className="text-[#EADCC9]">{activeReview.serviceMentioned}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-[#C59D5F]">
                    <CheckCircle2 className="w-3 h-3" />
                    {activeReview.source}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation & Indicators */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevReview}
            className="p-3 rounded-full border border-[#C59D5F]/30 text-[#FBF8F3] hover:text-[#C59D5F] hover:border-[#C59D5F] transition-colors"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {REVIEWS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlay(false);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-[#C59D5F]' : 'w-2 bg-[#C59D5F]/25'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="p-3 rounded-full border border-[#C59D5F]/30 text-[#FBF8F3] hover:text-[#C59D5F] hover:border-[#C59D5F] transition-colors"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Link to Reviews page */}
        <div className="text-center mt-12">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.2em] text-[#C59D5F] hover:text-[#FBF8F3] uppercase transition-colors group"
          >
            <span>EXPLORE ALL GOOGLE CLIENT STORIES</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
