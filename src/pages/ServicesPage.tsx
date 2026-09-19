import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, UserCheck, Heart, ArrowRight, Check, Search, Calendar } from 'lucide-react';
import { OFFICIAL_PRICING, type SalonServiceItem } from '@/data/salonData';

interface ServicesPageProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBookingWithService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'ALL', label: 'ALL DISCIPLINES' },
    { key: 'HAIR', label: 'HAIR & BLOW DRY' },
    { key: 'COLOUR', label: 'COLOUR & HIGHLIGHTS' },
    { key: 'TREATMENTS', label: 'KERATIN & SPA' },
    { key: 'BRIDAL', label: 'BRIDAL MAKEUP' },
    { key: 'MAKEUP', label: 'PARTY MAKEUP' },
    { key: 'GROOMING', label: 'GROOM & SHAVING' },
    { key: 'BEAUTY', label: 'FACIALS & D-TAN' },
    { key: 'NAILS', label: 'NAIL CARE' },
  ];

  const filteredServices = OFFICIAL_PRICING.filter((item) => {
    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.genderOrDetail && item.genderOrDetail.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0A0807] text-[#FBF8F3] pt-32 pb-32 lg:pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/35 bg-[#171311] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          BESPOKE MENU & THERAPIES
        </div>

        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FBF8F3] mb-6">
          THE COMPLETE<br />
          <span className="italic font-light text-gold-gradient">SERVICES REPERTOIRE.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#9E948C] max-w-xl mx-auto font-sans font-light leading-relaxed mb-10">
          Explore our complete verified menu of hair architecture, skin rejuvenation, executive grooming, and bridal couture rituals.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by treatment (e.g. Keratin, O3+, Fade)..."
            className="w-full bg-[#14100E] border border-[#C59D5F]/30 rounded-full py-3.5 pl-12 pr-6 text-base sm:text-sm text-[#FBF8F3] placeholder-[#80756C] focus:outline-none focus:border-[#C59D5F] shadow-lg transition-colors"
          />
          <Search className="w-4 h-4 text-[#C59D5F] absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </section>

      {/* Category Pills - Smooth horizontal swipe on mobile */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:justify-center sm:flex-wrap px-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-sans font-semibold tracking-[0.18em] uppercase transition-all duration-300 shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-gold-gradient text-[#0A0807] shadow-lg'
                  : 'bg-[#14100E] border border-[#C59D5F]/20 text-[#9E948C] hover:text-[#FBF8F3] hover:border-[#C59D5F]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-2xl bg-[#120F0D] border border-[#C59D5F]/20 hover:border-[#C59D5F]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[9px] font-sans font-semibold tracking-[0.25em] text-[#C59D5F] uppercase">
                    {service.category} {service.genderOrDetail ? `• ${service.genderOrDetail}` : ''}
                  </span>
                  {service.popular && (
                    <span className="px-2 py-0.5 rounded-full bg-[#C59D5F]/15 border border-[#C59D5F]/30 text-[9px] font-semibold text-[#E5C384]">
                      POPULAR
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-2xl text-[#FBF8F3] group-hover:text-gold-gradient transition-colors mb-2">
                  {service.name}
                </h3>

                <p className="text-xs text-[#9E948C] font-sans font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C59D5F]/15 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#9E948C] uppercase tracking-wider block">Official Price</span>
                  <span className="font-editorial text-xl font-bold text-[#FBF8F3]">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBookingWithService(`${service.name} (${service.price})`)}
                  className="px-4 py-2 rounded-full border border-[#C59D5F]/40 hover:border-[#C59D5F] text-[10px] font-sans font-semibold tracking-wider text-[#C59D5F] hover:bg-[#C59D5F] hover:text-[#0A0807] uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3 h-3" />
                  <span>BOOK</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 text-[#9E948C]">
            <p className="font-editorial text-2xl text-[#FBF8F3] mb-2">No matching services found</p>
            <p className="text-xs">Try searching with a different term or clear the filter.</p>
          </div>
        )}
      </section>

      {/* Pricing Notice */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="p-6 rounded-2xl bg-[#14100E] border border-[#C59D5F]/20 text-xs text-[#9E948C] leading-relaxed">
          <p className="text-[#C59D5F] font-semibold uppercase tracking-wider mb-1">
            Official Salon Disclaimer
          </p>
          Prices are subject to change without prior notice depending on hair length, density, and chemical products used. Please speak to our salon specialist during consultation for latest custom quotes.
        </div>
      </section>
    </main>
  );
};
