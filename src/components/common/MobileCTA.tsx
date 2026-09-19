import React from 'react';
import { Calendar, MessageSquare, Phone } from 'lucide-react';
import { SALON_INFO } from '@/data/salonData';

interface MobileCTAProps {
  onOpenBooking: () => void;
}

export const MobileCTA: React.FC<MobileCTAProps> = ({ onOpenBooking }) => {
  return (
    <div 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 bg-[#0A0807]/95 backdrop-blur-xl border-t border-[#C59D5F]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Phone Call */}
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="w-12 h-12 rounded-full border border-[#C59D5F]/30 bg-[#14100E] flex items-center justify-center text-[#C59D5F] active:scale-95 transition-transform"
          aria-label="Call salon directly"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Quick WhatsApp */}
        <a
          href={SALON_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-[#25D366]/40 bg-[#0E1A11] flex items-center justify-center text-[#25D366] active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Primary Book Now Button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 h-12 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(197,157,95,0.35)] active:scale-[0.98] transition-transform"
        >
          <Calendar className="w-4 h-4" />
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
};
