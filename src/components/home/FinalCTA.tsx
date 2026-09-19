import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { SALON_INFO } from '@/data/salonData';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden grain-overlay bg-[#0A0807] text-[#FBF8F3]">
      {/* Cinematic Full-bleed Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000&auto=format&fit=crop"
          alt="7 Styles Luxury Hair Consultation"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.15] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070504] via-[#070504]/70 to-[#070504]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C59D5F]/40 bg-[#14100E]/80 backdrop-blur-md text-[#C59D5F] text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          YOUR APPOINTMENT AWAITS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-[#FBF8F3] tracking-tight mb-8"
        >
          READY FOR<br />
          <span className="italic font-light text-gold-gradient">YOUR NEXT LOOK?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-xl text-[#EADCC9] font-serif italic max-w-xl mx-auto mb-12 font-light"
        >
          "Let's create something that feels unmistakably you."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.25em] uppercase hover:shadow-[0_0_35px_rgba(197,157,95,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK APPOINTMENT</span>
          </button>

          <a
            href={SALON_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-5 rounded-full border border-[#C59D5F] hover:bg-[#C59D5F]/10 text-[#FBF8F3] font-sans font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 text-[#C59D5F]" />
            <span>WHATSAPP US</span>
          </a>
        </motion.div>

        <div className="mt-12 text-xs text-[#9E948C]">
          <span>Direct Concierge: </span>
          <a href={`tel:${SALON_INFO.phone}`} className="text-[#C59D5F] font-medium hover:underline">
            {SALON_INFO.phone}
          </a>
          <span className="mx-2">•</span>
          <span>{SALON_INFO.address}</span>
        </div>
      </div>
    </section>
  );
};
