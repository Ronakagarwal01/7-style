import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view' | 'goldRing'>('default');
  const [viewText, setViewText] = useState('VIEW');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeaveHandler = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    document.body.addEventListener('mouseleave', mouseLeaveHandler);

    // Event delegation to detect hover targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const galleryItem = target.closest('[data-cursor="view"]');
      const ctaBtn = target.closest('button, a, [data-cursor="cta"]');
      const interactive = target.closest('[data-cursor="pointer"], input, select, textarea');

      if (galleryItem) {
        setCursorVariant('view');
        const customText = galleryItem.getAttribute('data-cursor-text');
        setViewText(customText || 'VIEW');
      } else if (ctaBtn) {
        setCursorVariant('goldRing');
      } else if (interactive) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.body.removeEventListener('mouseleave', mouseLeaveHandler);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C59D5F] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: cursorVariant === 'view' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer context ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: cursorVariant === 'view' ? 64 : cursorVariant === 'goldRing' ? 44 : cursorVariant === 'hover' ? 36 : 28,
          height: cursorVariant === 'view' ? 64 : cursorVariant === 'goldRing' ? 44 : cursorVariant === 'hover' ? 36 : 28,
          backgroundColor: cursorVariant === 'view' ? 'rgba(197, 157, 95, 0.9)' : 'transparent',
          borderColor: cursorVariant === 'goldRing' ? '#C59D5F' : 'rgba(197, 157, 95, 0.4)',
          borderWidth: cursorVariant === 'view' ? 0 : cursorVariant === 'goldRing' ? 1.5 : 1,
          scale: cursorVariant === 'goldRing' ? 1.15 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
      >
        {cursorVariant === 'view' && (
          <span className="text-[10px] font-sans font-bold tracking-widest text-[#0A0807] uppercase">
            {viewText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
