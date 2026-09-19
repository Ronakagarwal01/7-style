import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

export const Why7Styles: React.FC = () => {
  const statements = [
    {
      title: 'PERSONALIZED SERVICE',
      subtitle: 'Tailored to your facial contours, skin biology & individual lifestyle.',
    },
    {
      title: 'PREMIUM EXPERIENCE',
      subtitle: 'Tranquil luxury ambience in Arera Colony with zero rush or noise.',
    },
    {
      title: 'EXPERIENCED TEAM',
      subtitle: 'Certified master stylists, bridal makeup artists & skincare therapists.',
    },
    {
      title: 'HAIR • BEAUTY • GROOMING • BRIDAL',
      subtitle: 'A holistic unisex destination catering impeccably to every aesthetic need.',
    },
  ];

  return (
    <section className="relative py-28 md:py-40 bg-[#0A0807] text-[#FBF8F3] border-t border-[#C59D5F]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Large Headline */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#161210] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-3 h-3" />
              THE DISTINCTION
            </div>

            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl leading-tight text-[#FBF8F3]">
              WHY<br />
              <span className="font-light italic text-[#E5C384]">7 STYLES?</span>
            </h2>

            <div className="h-[1.5px] w-16 bg-[#C59D5F] my-6" />

            <p className="text-sm text-[#9E948C] font-sans font-light leading-relaxed max-w-sm">
              Since 2016, we have refused to operate like an assembly line. Every appointment is treated as an artistic dialogue.
            </p>
          </div>

          {/* Right Column: 4 Scroll-triggered Statements */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            {statements.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group p-8 rounded-2xl bg-[#120F0D] border border-[#C59D5F]/15 hover:border-[#C59D5F]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="font-editorial text-2xl text-[#C59D5F] font-bold mt-1">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl tracking-wide text-[#FBF8F3] mb-2 group-hover:text-gold-gradient transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-sm text-[#9E948C] font-sans font-light leading-relaxed">
                      {st.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
