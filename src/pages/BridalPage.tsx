import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MessageSquare, Check, ArrowRight, HeartHandshake, Award } from 'lucide-react';
import { SALON_INFO } from '@/data/salonData';

interface BridalPageProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export const BridalPage: React.FC<BridalPageProps> = ({ onOpenBookingWithService }) => {
  const bridalPackages = [
    {
      name: 'Airbrush Bridal Perfection',
      price: '₹20,000',
      description: 'The pinnacle of bridal makeup artistry. Micro-misted silicone-based airbrush foundation creating an ultra-lightweight, 18-hour waterproof finish that photographs flawlessly under 4K lenses.',
      includes: [
        'Complete Airbrush Base & Sculpting',
        'Luxury Mink / Silk False Lashes',
        'High-End Bridal Hair Architecture',
        'Traditional / Modern Saree Draping',
        'Jewelry & Dupatta Placement Assistance',
        'Touch-up Kit for Evening Reception'
      ],
      popular: true
    },
    {
      name: 'HD MAC Signature Bridal',
      price: '₹15,000',
      description: 'Opulent matrimonial radiance crafted with cult-classic MAC HD formulas. Designed to withstand emotional ceremonies, warm stage lighting, and hours of continuous celebrations.',
      includes: [
        'MAC Studio HD Base & Contouring',
        'Custom Eye Glam & Winged Definition',
        'Bridal Hair Styling & Floral Setting',
        'Designer Saree & Dupatta Setting',
        'Skin Glow Primer & Setting Mist'
      ]
    },
    {
      name: 'Advance Kryolan Bridal',
      price: '₹8,000',
      description: 'Time-tested high-coverage Kryolan formulations customized to honor classic Indian bridal aesthetics with deep pigment saturation and velvety matte finish.',
      includes: [
        'Kryolan Advance High-Coverage Base',
        'Traditional Bridal Eye Makeup',
        'Classic Bridal Hair Bun / Plait',
        'Saree Draping Support'
      ]
    },
    {
      name: 'Executive Groom HD Makeup',
      price: '₹6,000',
      description: 'Subtle, imperceptible photographic skin harmonization for the groom. Erases blemishes, cuts stage glare, and sharpens facial contours for cinematic wedding films.',
      includes: [
        'MAC HD Matte Invisible Base',
        'Beard Lineup & Scissor Finish',
        'Brow Tidy & Lip Hydration',
        'Hair Styling & Texture Definition'
      ]
    }
  ];

  const preBridalServices = [
    { name: 'O3+ Bridal Radiance Facial', price: '₹2,500', note: 'Pre-wedding cellular renewal' },
    { name: 'Full Body D-Tan & Bleach', price: '₹3,500', note: 'Head-to-toe uniform tone' },
    { name: 'Full Body Velvet Waxing', price: '₹3,500', note: 'Silky smooth painless strip wax' },
    { name: 'SPA Pedicure & Heel Peel', price: '₹2,000', note: 'Baby-soft crack free heels' },
    { name: 'UV Gel Nail Extensions', price: '₹3,500', note: 'Matrimonial nail art & shaping' },
    { name: 'Keratin Hair Glaze', price: '₹3,000 - ₹5,500', note: 'Glossy frizz-free wedding locks' }
  ];

  return (
    <main className="min-h-screen bg-[#0A0807] text-[#FBF8F3] pt-32 pb-32 lg:pb-24">
      {/* Editorial Bridal Hero */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/35 bg-[#171311] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              MATRIMONIAL COUTURE SANCTUARY
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FBF8F3] mb-6">
              THE BRIDAL<br />
              <span className="italic font-light text-gold-gradient">EDIT.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9E948C] font-sans font-light leading-relaxed max-w-xl mb-8">
              Bhopal's most revered destination for Indian bridal glamour. From royal heritage lehenga styling to contemporary dewy wedding radiance, curated specifically for your dream day.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBookingWithService('Air Brush Bridal Makeup (₹20,000)')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(197,157,95,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>PLAN YOUR BRIDAL LOOK</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%207%20Styles!%20I%20would%20like%20to%20consult%20for%20my%20Bridal%20Makeup.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#C59D5F]/40 hover:border-[#C59D5F] text-[#FBF8F3] font-sans font-medium text-xs tracking-wider uppercase hover:bg-[#C59D5F]/10 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#C59D5F]" />
                <span>WHATSAPP BRIDAL DESK</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-[#C59D5F]/30 h-[480px] md:h-[560px] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1200&auto=format&fit=crop"
                alt="7 Styles Bridal Glamour Bhopal"
                className="w-full h-full object-cover object-center filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0807] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0807]/80 backdrop-blur-md border border-[#C59D5F]/20 text-center">
                <span className="font-editorial text-xl text-[#FBF8F3] block">
                  Reshu Pradhan & Senior Bridal Artists
                </span>
                <span className="text-[10px] text-[#C59D5F] uppercase tracking-widest">
                  Over 500+ Brides Styled Since 2016
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Packages Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-editorial text-4xl sm:text-5xl text-[#FBF8F3] tracking-tight">
            SIGNATURE BRIDAL<br />
            <span className="italic font-light text-[#E5C384]">PACKAGES & PRICING.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#9E948C] font-sans font-light mt-3">
            Official verified rates from 7styles.in. Transparent, all-inclusive luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bridalPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-[#120F0D] border transition-all duration-300 flex flex-col justify-between ${
                pkg.popular
                  ? 'border-[#C59D5F] shadow-[0_0_30px_rgba(197,157,95,0.2)]'
                  : 'border-[#C59D5F]/20 hover:border-[#C59D5F]/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-[#C59D5F] uppercase">
                    WEDDING DAY ARTISTRY
                  </span>
                  {pkg.popular && (
                    <span className="px-3 py-1 rounded-full bg-gold-gradient text-[#0A0807] font-sans text-[9px] font-bold tracking-widest uppercase">
                      MOST REQUESTED
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-3xl text-[#FBF8F3] mb-2">
                  {pkg.name}
                </h3>

                <span className="font-editorial text-4xl font-bold text-gold-gradient block mb-4">
                  {pkg.price}
                </span>

                <p className="text-xs sm:text-sm text-[#9E948C] font-sans font-light leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#C59D5F]/15 mb-8">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-[#C59D5F] uppercase block mb-1">
                    What is Included:
                  </span>
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#EADCC9]">
                      <Check className="w-3.5 h-3.5 text-[#C59D5F] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenBookingWithService(`${pkg.name} (${pkg.price})`)}
                className="w-full py-4 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:shadow-lg transition-all cursor-pointer"
              >
                RESERVE THIS PACKAGE
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Bridal & Groom Rituals */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28 border-t border-[#C59D5F]/15 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#161210] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-4">
              PRE-WEDDING CURATION
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#FBF8F3] tracking-tight mb-4">
              PRE-BRIDAL<br />
              <span className="italic font-light text-[#E5C384]">CARE RITUALS.</span>
            </h2>
            <p className="text-sm text-[#9E948C] font-sans font-light leading-relaxed mb-6">
              Flawless bridal makeup begins with well-hydrated, deeply nurtured skin and glossy hair. We recommend booking these pre-bridal services 1–2 weeks before your wedding celebrations.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {preBridalServices.map((service, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#120F0D] border border-[#C59D5F]/20 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-editorial text-xl text-[#FBF8F3] mb-1">
                    {service.name}
                  </h4>
                  <span className="text-[10px] text-[#9E948C] uppercase tracking-wider block mb-3">
                    {service.note}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#C59D5F]/15">
                  <span className="font-editorial text-lg text-[#C59D5F] font-semibold">
                    {service.price}
                  </span>
                  <button
                    onClick={() => onOpenBookingWithService(`${service.name} (${service.price})`)}
                    className="text-[10px] text-[#EADCC9] hover:text-[#C59D5F] uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    + Add to Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saree Draping & Styling Highlight */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto text-center p-12 rounded-3xl bg-[#14100E] border border-[#C59D5F]/30 shadow-2xl">
        <h3 className="font-editorial text-3xl sm:text-4xl text-[#FBF8F3] mb-4">
          Complete Bridal & Saree Draping Assistance
        </h3>
        <p className="text-sm text-[#9E948C] max-w-lg mx-auto mb-8 font-sans font-light leading-relaxed">
          From complex Kanjeevaram pleats and Banarasi silk drapes to modern cocktail saree gowns, our draping specialists ensure effortless grace and comfortable movement.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onOpenBookingWithService('Saree Draping & Bridal Styling (₹550)')}
            className="px-8 py-3.5 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:shadow-lg transition-all cursor-pointer"
          >
            BOOK SAREE DRAPING (₹550)
          </button>
        </div>
      </section>
    </main>
  );
};
