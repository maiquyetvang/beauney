'use client';

import { useState, useEffect } from 'react';

export function useScroll(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, threshold]);

  return scrolled;
}
