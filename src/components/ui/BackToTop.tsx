'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-4 z-50 rounded-full bg-primary p-3 text-white shadow-lg transition-all duration-300 hover:bg-primary/90',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
} 