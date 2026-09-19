import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Heart, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { SALON_INFO, SALON_TEAM } from '@/data/salonData';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <main className="min-h-screen bg-[#0A0807] text-[#FBF8F3] pt-32 pb-32 lg:pb-24">
      {/* Editorial Header */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/35 bg-[#171311] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          OUR HERITAGE & ARTISTRY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FBF8F3] mb-6"
        >
          BEAUTY ROOTED IN<br />
          <span className="italic font-light text-gold-gradient">PURPOSE & DETAIL.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-[#9E948C] max-w-2xl mx-auto font-sans font-light leading-relaxed"
        >
          Established in 2016 at Arera Colony, 7 Styles was envisioned as Bhopal's benchmark luxury unisex sanctuary — where individual aesthetics reign supreme.
        </motion.p>
      </section>

      {/* Heritage Narrative & Imagery */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#C59D5F]/20 relative h-[440px] md:h-[520px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
              alt="7 Styles Luxury Salon Sanctuary Bhopal"
              className="w-full h-full object-cover object-center filter brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0807] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0A0807]/80 backdrop-blur-md border border-[#C59D5F]/30">
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#C59D5F] uppercase block mb-1">
                BHOPAL • SINCE 2016
              </span>
              <p className="text-xs text-[#EADCC9] leading-relaxed">
                60, E-2, Arera Colony — designed as a private sanctuary of beauty and serenity away from city clamor.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-[#9E948C] font-sans font-light leading-relaxed">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FBF8F3] tracking-wide">
              The First Luxurious Salon at Bhopal
            </h2>

            <p>
              In 2016, 7 Styles opened its doors with a simple yet uncompromising philosophy: salon visits should never feel generic, rushed, or intimidating. Instead, they should be restful, luxurious rituals delivered with precision.
            </p>

            <p>
              Over the past decade, we have honed our craft across precision cuts, custom hair coloring gradients, restorative therapies, and high-fashion Indian bridal beauty. We take time to understand each client's unique hair texture, facial structure, and personal style.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#C59D5F]/15">
              <div className="p-4 rounded-xl bg-[#14100E] border border-[#C59D5F]/20">
                <span className="font-editorial text-3xl font-bold text-[#C59D5F] block">
                  10+ Yrs
                </span>
                <span className="text-[11px] text-[#9E948C] uppercase tracking-wider">
                  Operational Mastery
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#14100E] border border-[#C59D5F]/20">
                <span className="font-editorial text-3xl font-bold text-[#C59D5F] block">
                  697+
                </span>
                <span className="text-[11px] text-[#9E948C] uppercase tracking-wider">
                  Google Client Endorsements
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Verified Team Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28 border-t border-[#C59D5F]/15 pt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#161210] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-4">
            MASTERS OF THE CRAFT
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#FBF8F3] tracking-tight">
            THE PEOPLE BEHIND<br />
            <span className="italic font-light text-[#E5C384]">THE STYLE.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#9E948C] font-sans font-light mt-4">
            Certified senior hair stylists, aesthetic therapists, and bridal artists verified at 7 Styles Salon Bhopal.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SALON_TEAM.map((member) => (
            <div
              key={member.id}
              className="group p-5 rounded-2xl bg-[#120F0D] border border-[#C59D5F]/20 hover:border-[#C59D5F]/60 transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="relative h-64 w-full rounded-xl overflow-hidden mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-transparent to-transparent opacity-80" />
              </div>

              <h3 className="font-editorial text-2xl text-[#FBF8F3] group-hover:text-gold-gradient transition-colors">
                {member.name}
              </h3>

              <p className="text-[11px] font-sans font-semibold tracking-wider text-[#C59D5F] uppercase mb-3">
                {member.role}
              </p>

              <p className="text-xs text-[#9E948C] font-sans font-light leading-relaxed mb-4 flex-1">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-1 pt-3 border-t border-[#C59D5F]/15">
                {member.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-sans px-2 py-0.5 rounded-full bg-[#181412] text-[#EADCC9] border border-[#C59D5F]/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto text-center p-12 rounded-3xl bg-[#14100E] border border-[#C59D5F]/30 shadow-2xl">
        <h3 className="font-editorial text-3xl sm:text-4xl text-[#FBF8F3] mb-4">
          Experience the 7 Styles Hospitality
        </h3>
        <p className="text-sm text-[#9E948C] max-w-md mx-auto mb-8 font-sans font-light">
          Visit us at Arera Colony or reserve your personalized hair, beauty, or bridal consultation.
        </p>
        <button
          onClick={onOpenBooking}
          className="px-8 py-4 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(197,157,95,0.4)] transition-all cursor-pointer"
        >
          BOOK WITH OUR TEAM
        </button>
      </section>
    </main>
  );
};
