import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Sparkles, ExternalLink, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, SALON_INFO } from '@/data/salonData';

export const ReviewsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0A0807] text-[#FBF8F3] pt-32 pb-32 lg:pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/35 bg-[#171311] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          COMMUNITY ENDORSEMENT
        </div>

        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FBF8F3] mb-6">
          CLIENT<br />
          <span className="italic font-light text-gold-gradient">TESTIMONIALS.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#9E948C] max-w-xl mx-auto font-sans font-light leading-relaxed mb-12">
          Genuine, unvarnished words from clients who trust 7 Styles with their signature haircuts, hair restorations, and most cherished matrimonial moments.
        </p>

        {/* Big 4.7 Rating Feature Box */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#14100E] border border-[#C59D5F]/30 shadow-2xl flex flex-col sm:flex-row items-center justify-around gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C59D5F] text-[#C59D5F]" />
              ))}
            </div>
            <span className="font-editorial text-5xl font-bold text-[#FBF8F3]">
              {SALON_INFO.rating} <span className="text-3xl font-light text-[#C59D5F]">/ 5.0</span>
            </span>
            <p className="text-xs text-[#9E948C] font-sans mt-1">
              Based on {SALON_INFO.reviewCount} Verified Google Reviews
            </p>
          </div>

          <div className="h-16 w-[1px] bg-[#C59D5F]/20 hidden sm:block" />

          <div className="text-center sm:text-left text-xs text-[#9E948C] space-y-1.5 font-sans">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C59D5F]" />
              <span>Certified Professional Stylists</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C59D5F]" />
              <span>Pristine Hygiene & Tranquil Space</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C59D5F]" />
              <span>Arera Colony Landmark Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-[#120F0D] border border-[#C59D5F]/20 hover:border-[#C59D5F]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C59D5F] text-[#C59D5F]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#9E948C] font-sans">
                    {review.date}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-[#C59D5F]/25 mb-3" />

                <p className="font-serif italic text-base text-[#FBF8F3] leading-relaxed mb-6 font-light">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#C59D5F]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-editorial text-lg text-[#C59D5F] font-semibold">
                    {review.author}
                  </h4>
                  <span className="text-[10px] text-[#9E948C] block">
                    {review.serviceMentioned}
                  </span>
                </div>

                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#181412] text-[#EADCC9] border border-[#C59D5F]/20 font-sans uppercase">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Review Link Bar */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center p-10 rounded-3xl bg-[#14100E] border border-[#C59D5F]/30 shadow-2xl">
        <h3 className="font-editorial text-3xl text-[#FBF8F3] mb-3">
          Have You Visited 7 Styles?
        </h3>
        <p className="text-xs sm:text-sm text-[#9E948C] max-w-md mx-auto mb-6 font-sans font-light leading-relaxed">
          We treat every piece of client feedback as essential to maintaining our standard of luxury and warmth. Share your experience with Bhopal on Google.
        </p>
        <a
          href="https://maps.app.goo.gl/3Q8Y7mZ7mZ7mZ7mZ7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-wider uppercase hover:shadow-lg transition-all"
        >
          <span>WRITE A GOOGLE REVIEW</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </section>
    </main>
  );
};
