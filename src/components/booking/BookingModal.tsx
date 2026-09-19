import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Sparkles, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SALON_INFO, OFFICIAL_PRICING } from '@/data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initialService if provided
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      err.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s]{10,14}$/.test(formData.phone.trim())) {
      err.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.service) err.service = 'Please choose a signature service';
    if (!formData.date) err.date = 'Select preferred appointment date';
    if (!formData.time) err.time = 'Select preferred timeslot';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger luxury confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C59D5F', '#E5C384', '#FBF8F3'],
    });

    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello 7 Styles Salon! I would like to book an appointment:\n\n*Name:* ${formData.name || 'Guest'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Service:* ${formData.service || 'General Consultation'}\n*Date:* ${formData.date || 'Earliest available'}\n*Time:* ${formData.time || 'Flexible'}\n${formData.message ? `*Notes:* ${formData.message}` : ''}`;
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-[#0A0807]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl max-h-[90dvh] overflow-y-auto bg-[#120F0D] border border-[#C59D5F]/30 rounded-2xl shadow-2xl p-5 sm:p-8 z-10 text-[#FBF8F3] my-auto scrollbar-none"
          >
            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-full border border-[#C59D5F]/20 text-[#9E948C] hover:text-[#FBF8F3] hover:border-[#C59D5F] transition-colors z-20"
              aria-label="Close appointment modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6 pr-8 sm:pr-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C59D5F]/30 bg-[#1A1512] text-[#C59D5F] text-[10px] font-sans font-semibold tracking-widest uppercase mb-2">
                    <Sparkles className="w-3 h-3" />
                    EXCLUSIVE CONCIERGE
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl tracking-wide text-[#FBF8F3]">
                    Reserve Your Experience
                  </h3>
                  <p className="text-xs text-[#9E948C] mt-1">
                    7 Styles Unisex Salon • Arera Colony, Bhopal
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-lg px-4 py-2.5 text-base sm:text-sm text-[#FBF8F3] placeholder-[#665D56] focus:outline-none focus:border-[#C59D5F] transition-colors"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-lg px-4 py-2.5 text-base sm:text-sm text-[#FBF8F3] placeholder-[#665D56] focus:outline-none focus:border-[#C59D5F] transition-colors"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-1.5">
                      Desired Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-lg px-4 py-2.5 text-base sm:text-sm text-[#FBF8F3] focus:outline-none focus:border-[#C59D5F] transition-colors"
                    >
                      <option value="">Select a service category or treatment...</option>
                      <optgroup label="Signature Highlights & Hair">
                        <option value="Hair Cut & Styling (Male ₹400 / Female ₹800)">Hair Cut & Styling (Male ₹400 / Female ₹800)</option>
                        <option value="Global Colour (₹2,000 / ₹6,500)">Global Colour (₹2,000 / ₹6,500)</option>
                        <option value="Keratin Treatment (₹3,000 / ₹5,500)">Keratin Treatment (₹3,000 / ₹5,500)</option>
                        <option value="Hair Botox Therapy (₹3,000 / ₹5,500)">Hair Botox Therapy (₹3,000 / ₹5,500)</option>
                        <option value="Per Streak Highlights (₹200 / ₹350)">Per Streak Highlights (₹200 / ₹350)</option>
                        <option value="Protein Hair Spa (₹2,500 / ₹3,500)">Protein Hair Spa (₹2,500 / ₹3,500)</option>
                      </optgroup>
                      <optgroup label="Bridal & Event Artistry">
                        <option value="Air Brush Bridal Makeup (₹20,000)">Air Brush Bridal Makeup (₹20,000)</option>
                        <option value="HD MAC Bridal Makeup (₹15,000)">HD MAC Bridal Makeup (₹15,000)</option>
                        <option value="HD Kryolan Bridal Makeup (₹10,000)">HD Kryolan Bridal Makeup (₹10,000)</option>
                        <option value="MAC Party Makeup (₹3,500)">MAC Party Makeup (₹3,500)</option>
                        <option value="Bobbi Brown Party Makeup (₹7,000)">Bobbi Brown Party Makeup (₹7,000)</option>
                        <option value="Saree Draping (₹550)">Saree Draping (₹550)</option>
                      </optgroup>
                      <optgroup label="Groom & Executive Styling">
                        <option value="Groom MAC HD Makeup (₹6,000)">Groom MAC HD Makeup (₹6,000)</option>
                        <option value="Groom MAC Makeup (₹4,000)">Groom MAC Makeup (₹4,000)</option>
                        <option value="Beard Setting & Shave (₹300)">Beard Setting & Shave (₹300)</option>
                        <option value="Head Massage + Wash (₹1,300)">Head Massage + Wash (₹1,300)</option>
                      </optgroup>
                      <optgroup label="Skin & Aesthetics">
                        <option value="Gold Facial (₹2,350)">Gold Facial (₹2,350)</option>
                        <option value="O3+ Advance CleanUp (₹1,800)">O3+ Advance CleanUp (₹1,800)</option>
                        <option value="Full Body D-Tan (₹2,400 / ₹3,600)">Full Body D-Tan (₹2,400 / ₹3,600)</option>
                        <option value="Heel Peel Foot Therapy (₹2,000)">Heel Peel Foot Therapy (₹2,000)</option>
                        <option value="UV Gel Nail Extensions (₹3,500)">UV Gel Nail Extensions (₹3,500)</option>
                      </optgroup>
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-lg px-4 py-2.5 text-base sm:text-sm text-[#FBF8F3] focus:outline-none focus:border-[#C59D5F] transition-colors"
                        />
                      </div>
                      {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-1.5">
                        Preferred Time *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-lg px-4 py-2.5 text-base sm:text-sm text-[#FBF8F3] focus:outline-none focus:border-[#C59D5F] transition-colors"
                      >
                        <option value="">Select a timeslot...</option>
                        <option value="11:00 AM - Morning Slot">11:00 AM - Morning Slot</option>
                        <option value="01:00 PM - Midday Slot">01:00 PM - Midday Slot</option>
                        <option value="03:30 PM - Afternoon Slot">03:30 PM - Afternoon Slot</option>
                        <option value="05:30 PM - Evening Slot">05:30 PM - Evening Slot</option>
                        <option value="07:00 PM - Prime Evening">07:00 PM - Prime Evening</option>
                      </select>
                      {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-[11px] font-medium tracking-wider text-[#C59D5F] uppercase mb-1.5">
                      Special Requests / Hair Concerns (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Wedding date consultation, preferred stylist Murli Sen..."
                      className="w-full bg-[#181412] border border-[#C59D5F]/20 rounded-lg px-4 py-2 text-base sm:text-sm text-[#FBF8F3] placeholder-[#665D56] focus:outline-none focus:border-[#C59D5F] transition-colors"
                    />
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(197,157,95,0.4)] transition-all cursor-pointer"
                    >
                      REQUEST APPOINTMENT
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#C59D5F] text-[#C59D5F] hover:bg-[#C59D5F]/10 font-sans font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      WHATSAPP
                    </button>
                  </div>
                </form>

                <div className="mt-4 pt-4 border-t border-[#C59D5F]/10 flex items-center justify-between text-xs text-[#9E948C]">
                  <span>Instant inquiry: <a href={`tel:${SALON_INFO.phone}`} className="text-[#C59D5F] font-medium">{SALON_INFO.phone}</a></span>
                  <span>Daily: 10:30 AM - 8:30 PM</span>
                </div>
              </>
            ) : (
              /* Success / Acknowledgment View */
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#C59D5F]/15 text-[#C59D5F] flex items-center justify-center mx-auto mb-4 border border-[#C59D5F]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl text-[#FBF8F3] mb-2">
                  Request Received
                </h3>
                <p className="text-sm text-[#9E948C] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-[#FBF8F3]">{formData.name}</strong>. Your appointment request for <strong className="text-[#C59D5F]">{formData.service}</strong> on <strong className="text-[#FBF8F3]">{formData.date}</strong> at <strong className="text-[#FBF8F3]">{formData.time}</strong> has been logged.
                </p>
                <div className="p-4 rounded-xl bg-[#1A1512] border border-[#C59D5F]/20 max-w-md mx-auto mb-6 text-xs text-[#9E948C] leading-relaxed text-left">
                  <p className="font-semibold text-[#C59D5F] uppercase tracking-wider mb-1">
                    Next Step: Salon Confirmation
                  </p>
                  Our salon coordinator will call or WhatsApp you at <span className="text-[#FBF8F3] font-medium">{formData.phone}</span> within business hours to confirm stylist availability.
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="px-6 py-3 rounded-full bg-gold-gradient text-[#0A0807] font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    CONFIRM IMMEDIATELY VIA WHATSAPP
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-full border border-[#C59D5F]/30 text-[#9E948C] hover:text-[#FBF8F3] text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
