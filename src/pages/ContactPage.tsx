import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SALON_INFO, OFFICIAL_PRICING } from '@/data/salonData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Full name is required';
    if (!formData.phone.trim()) {
      err.phone = 'Contact number is required';
    } else if (!/^[0-9+\-\s]{10,14}$/.test(formData.phone.trim())) {
      err.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.service) err.service = 'Please choose a service';
    if (!formData.date) err.date = 'Please pick a preferred date';
    if (!formData.time) err.time = 'Please pick a preferred timeslot';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C59D5F', '#E5C384', '#FBF8F3'],
    });

    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello 7 Styles Salon Bhopal!\n\n*Name:* ${formData.name || 'Guest'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Service:* ${formData.service || 'General Inquiry'}\n*Date:* ${formData.date || 'Earliest slot'}\n*Time:* ${formData.time || 'Flexible'}\n${formData.message ? `*Notes:* ${formData.message}` : ''}`;
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#0A0807] text-[#FBF8F3] pt-32 pb-32 lg:pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C59D5F]/35 bg-[#171311] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          ARERA COLONY, BHOPAL
        </div>

        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FBF8F3] mb-6">
          CONNECT &<br />
          <span className="italic font-light text-gold-gradient">VISIT US.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#9E948C] max-w-xl mx-auto font-sans font-light leading-relaxed mb-10">
          Whether planning your dream wedding transformation or treating your hair to an afternoon of deep rejuvenation, our doors in Arera Colony are open daily.
        </p>

        {/* Quick Contact CTAs - Mobile full width buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>CALL NOW</span>
          </a>

          <a
            href={SALON_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366]/10 font-sans font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP (+91 89594 45944)</span>
          </a>

          <a
            href="https://maps.google.com/?q=7+Styles+Unisex+Salon+Arera+Colony+Bhopal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#C59D5F]/40 hover:border-[#C59D5F] text-[#FBF8F3] font-sans font-medium text-xs tracking-wider uppercase hover:bg-[#C59D5F]/10 transition-colors flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4 text-[#C59D5F]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>
      </section>

      {/* Main Grid: Form & Location Details */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-12 rounded-3xl bg-[#120F0D] border border-[#C59D5F]/25 shadow-2xl">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FBF8F3] mb-2">
              Request Your Appointment
            </h2>
            <p className="text-xs text-[#9E948C] mb-8 font-sans font-light">
              Submit your preferred slot below. Our concierge will call/WhatsApp you to confirm stylist availability.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Pooja Sharma"
                      className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-xl px-4 py-3 text-base sm:text-sm text-[#FBF8F3] placeholder-[#665D56] focus:outline-none focus:border-[#C59D5F] transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 89594 45944"
                      className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-xl px-4 py-3 text-base sm:text-sm text-[#FBF8F3] placeholder-[#665D56] focus:outline-none focus:border-[#C59D5F] transition-colors"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-2">
                    Select Desired Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-xl px-4 py-3 text-base sm:text-sm text-[#FBF8F3] focus:outline-none focus:border-[#C59D5F] transition-colors"
                  >
                    <option value="">Select a service category...</option>
                    <option value="Hair Cut & Styling (Male ₹400 / Female ₹800)">Hair Cut & Styling (Male ₹400 / Female ₹800)</option>
                    <option value="Global Colour / Highlights (₹2,000 / ₹6,500)">Global Colour / Highlights (₹2,000 / ₹6,500)</option>
                    <option value="Keratin Treatment / Botox (₹3,000 / ₹5,500)">Keratin Treatment / Botox (₹3,000 / ₹5,500)</option>
                    <option value="Air Brush Bridal Makeup (₹20,000)">Air Brush Bridal Makeup (₹20,000)</option>
                    <option value="HD MAC Bridal Makeup (₹15,000)">HD MAC Bridal Makeup (₹15,000)</option>
                    <option value="Groom Makeup & Styling (₹4,000 / ₹6,000)">Groom Makeup & Styling (₹4,000 / ₹6,000)</option>
                    <option value="Gold Facial & CleanUp (₹2,350)">Gold Facial & CleanUp (₹2,350)</option>
                    <option value="SPA Pedicure & Heel Peel (₹2,000)">SPA Pedicure & Heel Peel (₹2,000)</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-xl px-4 py-3 text-base sm:text-sm text-[#FBF8F3] focus:outline-none focus:border-[#C59D5F] transition-colors"
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-2">
                      Preferred Timeslot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-xl px-4 py-3 text-base sm:text-sm text-[#FBF8F3] focus:outline-none focus:border-[#C59D5F] transition-colors"
                    >
                      <option value="">Choose slot...</option>
                      <option value="11:00 AM">11:00 AM - Morning Slot</option>
                      <option value="01:30 PM">01:30 PM - Midday Slot</option>
                      <option value="04:00 PM">04:00 PM - Afternoon Slot</option>
                      <option value="06:30 PM">06:30 PM - Evening Slot</option>
                    </select>
                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-2">
                    Special Notes / Inquiries
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide any details regarding hair condition, wedding timeline, or preferred stylists..."
                    className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-xl px-4 py-2.5 text-base sm:text-sm text-[#FBF8F3] placeholder-[#665D56] focus:outline-none focus:border-[#C59D5F] transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(197,157,95,0.4)] transition-all cursor-pointer"
                  >
                    SUBMIT REQUEST
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="px-6 py-4 rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-sans font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WHATSAPP
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#C59D5F]/15 text-[#C59D5F] flex items-center justify-center mx-auto mb-4 border border-[#C59D5F]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl text-[#FBF8F3] mb-2">
                  Request Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-[#9E948C] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-[#FBF8F3]">{formData.name}</strong>. Your consultation request has been recorded. Our team will contact you at <strong className="text-[#C59D5F]">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={handleWhatsAppBooking}
                  className="px-8 py-3.5 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-wider uppercase inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant WhatsApp Confirmation
                </button>
              </div>
            )}
          </div>

          {/* Right: Location Block & Interactive Map Embed */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="p-8 rounded-3xl bg-[#120F0D] border border-[#C59D5F]/20 space-y-6">
              <h3 className="font-editorial text-2xl text-[#FBF8F3]">
                Salon Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#9E948C] font-sans font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C59D5F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF8F3] font-medium block">7 Styles Unisex Salon</strong>
                    <span>{SALON_INFO.address}</span>
                    <span className="text-[11px] text-[#C59D5F] block mt-0.5">({SALON_INFO.landmark})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C59D5F] shrink-0" />
                  <div>
                    <a href={`tel:${SALON_INFO.phone}`} className="text-[#FBF8F3] hover:text-[#C59D5F] transition-colors block">
                      {SALON_INFO.phone}
                    </a>
                    <a href={`tel:${SALON_INFO.secondaryPhone}`} className="text-[#9E948C] text-xs hover:text-[#FBF8F3] transition-colors">
                      {SALON_INFO.secondaryPhone} (Reception)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C59D5F] shrink-0" />
                  <a href={`mailto:${SALON_INFO.email}`} className="text-[#FBF8F3] hover:text-[#C59D5F] transition-colors">
                    {SALON_INFO.email}
                  </a>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#C59D5F]/15">
                  <Clock className="w-5 h-5 text-[#C59D5F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#FBF8F3] font-medium block">Working Hours</strong>
                    <span>Monday to Sunday: 10:30 AM – 8:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#C59D5F]/30 h-72 shadow-2xl relative bg-[#181412]">
              <iframe
                src={SALON_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="7 Styles Salon Location Map"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
