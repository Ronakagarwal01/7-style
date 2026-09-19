import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { CustomCursor } from '@/components/common/CustomCursor';
import { MobileCTA } from '@/components/common/MobileCTA';
import { CinematicLoader } from '@/components/common/CinematicLoader';
import { BookingModal } from '@/components/booking/BookingModal';

import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { BridalPage } from '@/pages/BridalPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { PricingPage } from '@/pages/PricingPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { ContactPage } from '@/pages/ContactPage';

// ScrollToTop component ensures navigation scrolls to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [loaderFinished, setLoaderFinished] = useState(false);

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Luxury Cinematic 1.2s Initial Loader */}
      {!loaderFinished && (
        <CinematicLoader onComplete={() => setLoaderFinished(true)} />
      )}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent Floating Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<HomePage onOpenBooking={() => handleOpenBooking()} />} />
        <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBooking()} />} />
        <Route
          path="/services"
          element={<ServicesPage onOpenBookingWithService={(svc) => handleOpenBooking(svc)} />}
        />
        <Route
          path="/bridal"
          element={<BridalPage onOpenBookingWithService={(svc) => handleOpenBooking(svc)} />}
        />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route
          path="/pricing"
          element={<PricingPage onOpenBookingWithService={(svc) => handleOpenBooking(svc)} />}
        />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Luxury Footer */}
      <Footer />

      {/* Mobile Fixed Action Bar */}
      <MobileCTA onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </Router>
  );
}

export default App;
