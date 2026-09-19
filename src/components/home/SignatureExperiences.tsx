import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ExperienceItem {
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
}

export const SignatureExperiences: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      number: '01',
      title: 'HAIR TRANSFORMATION',
      category: 'KERATIN • BOTOX • BALAYAGE',
      tagline: 'Sculpted Silhouette & Luminescent Glaze',
      description: 'Experience deep molecular reconstruction through professional Keratin infusion, hair botox plumping, and multidimensional champagne highlights that breathe life and movement into every strand.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
      link: '/services#hair',
    },
    {
      number: '02',
      title: 'BRIDAL GLAMOUR',
      category: 'AIRBRUSH • HD MAC • COUTURE',
      tagline: 'Timeless Matrimonial Radiance',
      description: 'A dedicated sanctuary for the modern Indian bride. From long-wearing 18-hour airbrush coverage to traditional jewelry setting and bespoke saree draping, our master artists create iconic wedding day looks.',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop',
      link: '/bridal',
    },
    {
      number: '03',
      title: 'SIGNATURE GROOMING',
      category: 'HOT TOWEL • BEARD ARCHITECTURE',
      tagline: 'The Executive Gentleman Ritual',
      description: 'Precision scissor fades, straight razor definition, essential oil hot towel steam softens, and subtle HD camera grooming designed for celebrations, meetings, and self-assurance.',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop',
      link: '/services#grooming',
    },
    {
      number: '04',
      title: 'SELF CARE RITUALS',
      category: '24K GOLD FACIAL • HEEL PEEL • SPA',
      tagline: 'Uncompromising Sensory Tranquility',
      description: 'Slow down inside private therapy suites. Indulge in 24K pure gold leaf facials, oxygenating cleanups, deep tissue head massages with botanical elixirs, and crack-free heel peel therapy.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
      link: '/services#beauty',
    },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-[#0E0C0A] text-[#FBF8F3] border-t border-[#C59D5F]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#171311] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            FOUR PILLARS OF INDULGENCE
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#FBF8F3]">
            SIGNATURE<br />
            <span className="italic font-light text-[#E5C384]">EXPERIENCES.</span>
          </h2>
        </div>
      </div>

      {/* Stacked Large Full-Width Editorial Experience Rows */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <motion.div
              key={exp.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-6 md:p-10 rounded-3xl bg-[#14100E] border border-[#C59D5F]/15 hover:border-[#C59D5F]/40 transition-all duration-500 shadow-2xl ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 overflow-hidden rounded-2xl relative h-[360px] md:h-[420px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.7] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700 ease-out select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A0807]/80 backdrop-blur-sm border border-[#C59D5F]/30 text-[10px] tracking-[0.25em] text-[#C59D5F] font-semibold uppercase">
                  {exp.category}
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="font-editorial text-4xl sm:text-5xl font-light text-[#C59D5F]/40 mb-2 block">
                  {exp.number}
                </span>

                <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl tracking-wide text-[#FBF8F3] mb-3 group-hover:text-gold-gradient transition-colors">
                  {exp.title}
                </h3>

                <p className="text-sm font-sans tracking-wide text-[#C59D5F] uppercase font-medium mb-4">
                  {exp.tagline}
                </p>

                {/* Expanding gold accent line on hover */}
                <div className="h-[1.5px] w-12 bg-[#C59D5F] group-hover:w-32 transition-all duration-500 mb-6" />

                <p className="text-sm sm:text-base text-[#9E948C] font-sans font-light leading-relaxed mb-8">
                  {exp.description}
                </p>

                <div>
                  <Link
                    to={exp.link}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#C59D5F]/40 hover:border-[#C59D5F] text-[#FBF8F3] hover:text-[#0A0807] hover:bg-[#C59D5F] text-xs font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                  >
                    <span>DISCOVER EXPERIENCE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
