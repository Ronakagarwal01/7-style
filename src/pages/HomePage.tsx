import React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicesPanels } from '@/components/home/ServicesPanels';
import { SignatureExperiences } from '@/components/home/SignatureExperiences';
import { BeforeAfterSlider } from '@/components/home/BeforeAfterSlider';
import { Why7Styles } from '@/components/home/Why7Styles';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { FinalCTA } from '@/components/home/FinalCTA';

interface HomePageProps {
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <main className="min-h-screen bg-[#0A0807] text-[#FBF8F3]">
      <HeroSection onOpenBooking={onOpenBooking} />
      <AboutSection />
      <ServicesPanels />
      <SignatureExperiences />
      <BeforeAfterSlider />
      <Why7Styles />
      <TestimonialCarousel />
      <FinalCTA onOpenBooking={onOpenBooking} />
    </main>
  );
};
