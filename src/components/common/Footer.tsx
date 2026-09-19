import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { SALON_INFO } from '@/data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070504] text-[#FBF8F3] border-t border-[#C59D5F]/20 pt-20 pb-32 lg:pb-12 overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59D5F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#C59D5F]/15">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-[#C59D5F] flex items-center justify-center bg-[#120F0D]">
                  <span className="font-editorial text-xl text-[#C59D5F] font-bold">7</span>
                </div>
                <h3 className="font-editorial text-2xl tracking-[0.25em] text-[#FBF8F3]">
                  7 STYLES
                </h3>
              </div>
              <p className="font-sans text-xs tracking-[0.25em] text-[#C59D5F] uppercase mb-4">
                UNISEX SALON • ARERA COLONY, BHOPAL
              </p>
              <p className="text-[#9E948C] text-sm leading-relaxed max-w-sm">
                Established in 2016, 7 Styles Unisex Salon is Bhopal's benchmark for bespoke luxury haircare, couture bridal transformations, and tranquil restorative aesthetics.
              </p>
            </div>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={SALON_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C59D5F]/30 flex items-center justify-center text-[#FBF8F3] hover:text-[#0A0807] hover:bg-[#C59D5F] transition-all"
                aria-label="7 Styles Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SALON_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C59D5F]/30 flex items-center justify-center text-[#FBF8F3] hover:text-[#0A0807] hover:bg-[#C59D5F] transition-all"
                aria-label="7 Styles Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href={SALON_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C59D5F]/30 flex items-center justify-center text-[#FBF8F3] hover:text-[#0A0807] hover:bg-[#C59D5F] transition-all"
                aria-label="7 Styles X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-editorial text-lg tracking-wider text-[#C59D5F] mb-3">
              NAVIGATION
            </h4>
            <Link to="/" className="text-sm text-[#9E948C] hover:text-[#FBF8F3] transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-[#9E948C] hover:text-[#FBF8F3] transition-colors">Our Heritage</Link>
            <Link to="/services" className="text-sm text-[#9E948C] hover:text-[#FBF8F3] transition-colors">Services Menu</Link>
            <Link to="/bridal" className="text-sm text-[#9E948C] hover:text-[#FBF8F3] transition-colors">The Bridal Edit</Link>
            <Link to="/gallery" className="text-sm text-[#9E948C] hover:text-[#FBF8F3] transition-colors">Editorial Gallery</Link>
            <Link to="/pricing" className="text-sm text-[#9E948C] hover:text-[#FBF8F3] transition-colors">Official Price Card</Link>
            <Link to="/reviews" className="text-sm text-[#9E948C] hover:text-[#FBF8F3] transition-colors">Client Reviews (4.7★)</Link>
            <Link to="/contact" className="text-sm text-[#9E948C] hover:text-[#FBF8F3] transition-colors">Find Salon & Contact</Link>
          </div>

          {/* Services Category highlights */}
          <div className="flex flex-col gap-3">
            <h4 className="font-editorial text-lg tracking-wider text-[#C59D5F] mb-3">
              EXPERIENCES
            </h4>
            <span className="text-sm text-[#9E948C]">Precision Haircuts</span>
            <span className="text-sm text-[#9E948C]">Global Balayage & Colour</span>
            <span className="text-sm text-[#9E948C]">Keratin & Hair Botox</span>
            <span className="text-sm text-[#9E948C]">Airbrush & HD Bridal Makeup</span>
            <span className="text-sm text-[#9E948C]">Groom Styling & Shave</span>
            <span className="text-sm text-[#9E948C]">O3+ Glow Facials</span>
            <span className="text-sm text-[#9E948C]">Spa Pedicure & Heel Peel</span>
            <span className="text-sm text-[#9E948C]">UV Gel Nail Extensions</span>
          </div>

          {/* Salon Details */}
          <div className="flex flex-col gap-4 text-sm text-[#9E948C]">
            <h4 className="font-editorial text-lg tracking-wider text-[#C59D5F] mb-2">
              SALON LOCATION
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C59D5F] shrink-0 mt-1" />
              <span>{SALON_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#C59D5F] shrink-0" />
              <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#FBF8F3] transition-colors">
                {SALON_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#C59D5F] shrink-0" />
              <a href={`mailto:${SALON_INFO.email}`} className="hover:text-[#FBF8F3] transition-colors">
                {SALON_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-3 pt-2 border-t border-[#C59D5F]/15">
              <Clock className="w-4 h-4 text-[#C59D5F] shrink-0 mt-1" />
              <div>
                <p className="text-[#FBF8F3] font-medium">Monday to Sunday</p>
                <p className="text-xs text-[#9E948C]">10:30 AM – 8:30 PM Daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Architectural Brand Typography */}
        <div className="py-12 text-center select-none overflow-hidden">
          <span className="font-editorial text-[14vw] font-light leading-none tracking-[0.08em] text-[#171311] block transition-colors hover:text-[#1E1916]">
            7 STYLES
          </span>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 border-t border-[#C59D5F]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E948C]">
          <p>© 2026 7 Styles Unisex Salon Bhopal. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Arera Colony, Bhopal, MP</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#C59D5F] hover:text-[#FBF8F3] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
