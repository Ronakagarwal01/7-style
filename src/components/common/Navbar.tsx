import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { SALON_INFO } from '@/data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'BRIDAL', path: '/bridal' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'PRICING', path: '/pricing' },
    { label: 'REVIEWS', path: '/reviews' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-3.5 bg-[#0A0807]/90 backdrop-blur-md border-b border-[#C59D5F]/20 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="7 Styles Unisex Salon Home"
          >
            <div className="w-9 h-9 rounded-full border border-[#C59D5F]/40 flex items-center justify-center bg-[#120F0D] group-hover:border-[#C59D5F] transition-colors">
              <span className="font-editorial text-lg text-[#C59D5F] font-bold">7</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg tracking-[0.2em] text-[#FBF8F3] font-medium leading-none group-hover:text-[#C59D5F] transition-colors">
                7 STYLES
              </span>
              <span className="font-sans text-[8px] tracking-[0.3em] text-[#C59D5F] uppercase mt-1">
                BHOPAL • 2016
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[11px] font-sans font-medium tracking-[0.22em] transition-colors duration-300 py-1 ${
                    isActive ? 'text-[#C59D5F]' : 'text-[#FBF8F3]/75 hover:text-[#FBF8F3]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#C59D5F]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="p-2.5 rounded-full border border-[#C59D5F]/30 text-[#C59D5F] hover:bg-[#C59D5F]/10 transition-colors"
              title="Call 7 Styles Salon"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group px-5 py-2.5 overflow-hidden rounded-full border border-[#C59D5F] bg-transparent text-[#FBF8F3] text-[11px] font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,157,95,0.35)]"
            >
              <span className="absolute inset-0 bg-[#C59D5F] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0A0807] transition-colors duration-300">
                <Calendar className="w-3.5 h-3.5" />
                BOOK NOW
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full border border-[#C59D5F] text-[#C59D5F] text-[10px] font-semibold tracking-wider uppercase"
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FBF8F3] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C59D5F]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer with Clip-Path Reveal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at top right)' }}
            animate={{ clipPath: 'circle(150% at top right)' }}
            exit={{ clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-50 bg-[#0A0807] flex flex-col justify-between px-6 py-5 sm:p-10 lg:hidden overflow-y-auto"
            style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
          >
            {/* Header row in mobile menu */}
            <div className="flex items-center justify-between border-b border-[#C59D5F]/20 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#C59D5F] flex items-center justify-center">
                  <span className="font-editorial text-base text-[#C59D5F] font-bold">7</span>
                </div>
                <span className="font-editorial text-lg tracking-[0.2em] text-[#FBF8F3]">
                  7 STYLES
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-[#C59D5F]/30 text-[#C59D5F]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-3.5 my-auto py-4 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + idx * 0.04, duration: 0.35 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-editorial tracking-wide text-[#FBF8F3] hover:text-[#C59D5F] transition-colors py-1 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] font-sans text-[#C59D5F]/60 font-semibold tracking-widest">
                        0{idx + 1}
                      </span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#C59D5F]/40 group-hover:text-[#C59D5F] transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-[#C59D5F]/20 pt-5 flex flex-col gap-3 shrink-0">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="py-2.5 rounded-full border border-[#C59D5F]/40 text-[#FBF8F3] text-[11px] font-sans font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 hover:bg-[#C59D5F]/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C59D5F]" />
                  <span>CALL SALON</span>
                </a>
                <a
                  href={SALON_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-full border border-[#25D366]/40 text-[#25D366] text-[11px] font-sans font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-1.5 hover:bg-[#25D366]/10 transition-colors"
                >
                  <span>WHATSAPP</span>
                </a>
              </div>

              <div className="text-center text-[10px] text-[#9E948C] pt-1">
                <span>{SALON_INFO.address}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
