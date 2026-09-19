import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Search, HelpCircle, ChevronDown } from 'lucide-react';
import { OFFICIAL_PRICING, SALON_INFO, type SalonServiceItem } from '@/data/salonData';

interface PricingPageProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBookingWithService }) => {
  const [activeTab, setActiveTab] = useState<string>('HAIR');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const tabs = [
    { key: 'HAIR', label: 'HAIR & STYLING' },
    { key: 'COLOUR', label: 'COLOUR & HIGHLIGHTS' },
    { key: 'TREATMENTS', label: 'TREATMENTS & SPA' },
    { key: 'BRIDAL', label: 'BRIDAL MAKEUP' },
    { key: 'MAKEUP', label: 'PARTY MAKEUP' },
    { key: 'GROOMING', label: 'GROOM & SHAVING' },
    { key: 'BEAUTY', label: 'FACIALS, D-TAN & WAX' },
    { key: 'NAILS', label: 'NAILS CARE' },
  ];

  const filteredPricing = OFFICIAL_PRICING.filter((item) => {
    const matchesTab = item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchFilter.toLowerCase()));
    return searchFilter ? matchesSearch : matchesTab;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#0A0807] text-[#FBF8F3] pt-32 pb-32 lg:pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/35 bg-[#171311] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          VERIFIED OFFICIAL RATE CARD
        </div>

        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FBF8F3] mb-6">
          PRICING<br />
          <span className="italic font-light text-gold-gradient">PORTFOLIO.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#9E948C] font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Transparent, authentic pricing sourced directly from 7 Styles Salon. Zero hidden surcharges. All prices are in Indian Rupees (₹).
        </p>

        {/* Search Field */}
        <div className="max-w-md mx-auto relative mb-12">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search price for any service (e.g. Keratin, Shave, Bridal)..."
            className="w-full bg-[#14100E] border border-[#C59D5F]/30 rounded-full py-3.5 pl-12 pr-6 text-base sm:text-sm text-[#FBF8F3] placeholder-[#80756C] focus:outline-none focus:border-[#C59D5F] shadow-lg transition-colors"
          />
          <Search className="w-4 h-4 text-[#C59D5F] absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Tabs - Horizontal swipeable pill bar on mobile */}
        {!searchFilter && (
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:justify-center sm:flex-wrap px-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-[10px] font-sans font-semibold tracking-[0.18em] uppercase transition-all duration-300 shrink-0 ${
                  activeTab === tab.key
                    ? 'bg-gold-gradient text-[#0A0807] shadow-lg'
                    : 'bg-[#14100E] border border-[#C59D5F]/20 text-[#9E948C] hover:text-[#FBF8F3] hover:border-[#C59D5F]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Pricing List Table Container */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto mb-20">
        <div className="bg-[#120F0D] border border-[#C59D5F]/20 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-[#C59D5F]/20 pb-4 text-[11px] font-sans font-bold tracking-widest text-[#C59D5F] uppercase">
            <span>SERVICE DESCRIPTION</span>
            <span>PRICE & BOOKING</span>
          </div>

          <div className="divide-y divide-[#C59D5F]/10">
            {filteredPricing.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="py-4.5 group cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-editorial text-xl sm:text-2xl text-[#FBF8F3] group-hover:text-gold-gradient transition-colors">
                          {item.name}
                        </h3>
                        {item.genderOrDetail && (
                          <span className="text-[10px] text-[#C59D5F] uppercase tracking-wider">
                            ({item.genderOrDetail})
                          </span>
                        )}
                        {item.popular && (
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#C59D5F]/15 text-[#E5C384] font-medium border border-[#C59D5F]/30">
                            POPULAR
                          </span>
                        )}
                      </div>

                      {item.description && (
                        <p className="text-xs text-[#9E948C] font-sans font-light leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-editorial text-xl sm:text-2xl font-bold text-[#FBF8F3] whitespace-nowrap">
                        {item.price}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBookingWithService(`${item.name} (${item.price})`);
                        }}
                        className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/40 hover:border-[#C59D5F] text-[10px] font-sans font-semibold tracking-wider text-[#C59D5F] hover:bg-[#C59D5F] hover:text-[#0A0807] uppercase transition-colors"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>BOOK</span>
                      </button>

                      <ChevronDown
                        className={`w-4 h-4 text-[#9E948C] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#C59D5F]' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expandable info card */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 pt-3 border-t border-[#C59D5F]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#9E948C]"
                      >
                        <span>
                          Category: <strong className="text-[#EADCC9]">{item.category}</strong> • Duration: Consultation approx. 45–90 min
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenBookingWithService(`${item.name} (${item.price})`);
                          }}
                          className="sm:hidden px-4 py-1.5 rounded-full bg-gold-gradient text-[#0A0807] font-bold text-[10px] tracking-wider uppercase"
                        >
                          Book Service
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {filteredPricing.length === 0 && (
            <div className="text-center py-12 text-[#9E948C]">
              <p className="font-editorial text-2xl text-[#FBF8F3]">No services found</p>
              <p className="text-xs mt-1">Please try searching with another keyword.</p>
            </div>
          )}
        </div>
      </section>

      {/* Official Pricing Notice Requirement */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center space-y-3">
        <p className="text-xs text-[#C59D5F] font-sans font-semibold tracking-wider uppercase">
          Prices may change. Please confirm at booking.
        </p>
        <p className="text-xs text-[#9E948C] max-w-lg mx-auto font-sans leading-relaxed">
          Chemical treatments, highlights, and extensions may vary slightly according to strand length, density, and customized restorative ampoules required.
        </p>
      </section>
    </main>
  );
};
