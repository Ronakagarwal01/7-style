import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Scissors, Sparkles, UserCheck, Heart } from 'lucide-react';

interface ServicePanel {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  link: string;
  highlights: string[];
}

export const ServicesPanels: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const panels: ServicePanel[] = [
    {
      id: 'hair',
      title: 'HAIR ARTISTRY',
      subtitle: 'Precision & Couture Form',
      category: 'HAIR',
      description: 'Architectural cuts, dimensional highlights, global colour gradients, and intense restorative Keratin & Botox treatments.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
      link: '/services#hair',
      highlights: ['Precision Cut ₹400/₹800', 'Keratin & Botox', 'Global Balayage']
    },
    {
      id: 'beauty',
      title: 'SKIN & BEAUTY',
      subtitle: 'Cellular Glow & Therapy',
      category: 'BEAUTY',
      description: 'Revitalizing 24K gold facials, O3+ clarifying cleanups, de-pigmenting D-Tan therapies, and restorative foot reflexology.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
      link: '/services#beauty',
      highlights: ['O3+ Advance CleanUp', 'Insta Glow Facial', 'Heel Peel Pedicure']
    },
    {
      id: 'grooming',
      title: 'SIGNATURE GROOMING',
      subtitle: 'Modern Gentlemen Suite',
      category: 'GROOMING',
      description: 'Old-world hot towel razor shaving, bespoke beard sculpting, clarifying scalp steam therapies, and executive groom makeup.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
      link: '/services#grooming',
      highlights: ['Beard Setting & Shave', 'Groom MAC Makeup', 'Head Massage + Wash']
    },
    {
      id: 'bridal',
      title: 'THE BRIDAL EDIT',
      subtitle: 'Matrimonial Couture Art',
      category: 'BRIDAL & MAKEUP',
      description: 'Weightless airbrush bridal makeup, studio HD Kryolan & MAC finishes, designer saree draping, and pre-bridal skin prep.',
      image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1200&auto=format&fit=crop',
      link: '/bridal',
      highlights: ['Air Brush Bridal', 'HD MAC Artistry', 'Designer Saree Draping']
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-[#0A0807] text-[#FBF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#161210] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-3 h-3" />
              BESPOKE DISCIPLINES
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#FBF8F3]">
              THE ART OF<br />
              <span className="italic font-light text-[#E5C384]">TRANSFORMATION.</span>
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.2em] text-[#C59D5F] hover:text-[#FBF8F3] uppercase transition-colors group"
          >
            <span>VIEW COMPLETE SERVICES MENU</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden px-6 mb-3 flex items-center justify-between text-[10px] text-[#C59D5F] uppercase tracking-widest">
        <span>← SWIPE TO EXPLORE DISCIPLINES →</span>
      </div>

      {/* Horizontal Interactive Large Panels (Snap-scroll on mobile, grid on desktop) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 scrollbar-none">
        {panels.map((panel) => {
          const isHovered = activePanel === panel.id;
          return (
            <div
              key={panel.id}
              onMouseEnter={() => setActivePanel(panel.id)}
              onMouseLeave={() => setActivePanel(null)}
              data-cursor="view"
              data-cursor-text="EXPLORE"
              className="group relative min-w-[82vw] sm:min-w-[320px] md:min-w-0 snap-center h-[460px] md:h-[560px] rounded-2xl overflow-hidden border border-[#C59D5F]/20 flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 hover:border-[#C59D5F]/60 shadow-xl cursor-pointer shrink-0 md:shrink"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.4] group-hover:brightness-[0.32] group-hover:scale-108 transition-all duration-700 ease-out"
                />
                {/* Gradient darkening towards bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0807] via-[#0A0807]/60 to-transparent" />
              </div>

              {/* Content Box */}
              <div className="relative z-10 flex flex-col">
                <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C59D5F] uppercase mb-2">
                  {panel.subtitle}
                </span>

                <h3 className="font-editorial text-2xl sm:text-3xl tracking-wide text-[#FBF8F3] mb-3 group-hover:text-gold-gradient transition-colors">
                  {panel.title}
                </h3>

                {/* Animated Gold Accent Line that grows on hover */}
                <div className="h-[1.5px] w-12 bg-[#C59D5F] group-hover:w-full transition-all duration-500 ease-out mb-4" />

                <p className="text-xs text-[#9E948C] font-sans font-light leading-relaxed line-clamp-3 mb-6 group-hover:text-[#FBF8F3]/90 transition-colors">
                  {panel.description}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {panel.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-sans tracking-wider px-2 py-0.5 rounded-full border border-[#C59D5F]/30 bg-[#0A0807]/60 text-[#EADCC9]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Explore Link Button */}
                <Link
                  to={panel.link}
                  className="inline-flex items-center justify-between py-2 text-xs font-sans font-semibold tracking-[0.2em] text-[#C59D5F] group-hover:text-[#FBF8F3] uppercase transition-colors"
                >
                  <span>EXPLORE DISCIPLINE</span>
                  <div className="w-8 h-8 rounded-full border border-[#C59D5F]/30 flex items-center justify-center group-hover:bg-[#C59D5F] group-hover:text-[#0A0807] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
