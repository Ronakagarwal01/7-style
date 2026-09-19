import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CinematicLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Step 1: Reveal 7
    const timer1 = setTimeout(() => {
      setStep(2); // Reveal STYLES & Subtitles
    }, 550);

    // Step 2: Exit loader smoothly after ~1.25s
    const timer2 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1250);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0807] text-[#FBF8F3] overflow-hidden"
        >
          {/* Subtle gold aura background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.25 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-96 h-96 bg-[#C59D5F] rounded-full blur-[100px] pointer-events-none"
          />

          <div className="relative flex flex-col items-center text-center">
            {/* The Animated "7" */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-7xl md:text-9xl text-gold-gradient font-light tracking-wider select-none mb-1"
            >
              7
            </motion.div>

            {/* Revealed "STYLES" and details */}
            <AnimatePresence>
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <span className="font-sans text-xs md:text-sm uppercase tracking-[0.35em] text-[#FBF8F3] font-medium">
                    STYLES
                  </span>
                  <div className="h-[1px] w-8 bg-[#C59D5F]/60 my-2" />
                  <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-[#C59D5F]">
                    UNISEX SALON • BHOPAL
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
