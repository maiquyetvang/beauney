'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CarouselItem } from './ui/carousel';

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

export default function CarouselHomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create autoplay plugin with stopOnInteraction set to true
  // This will pause autoplay when user interacts with the carousel
  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: true,
    playOnInit: true,
  };
  const autoplay = useRef(Autoplay(autoplayOptions));
  const items: CarouselItem[] = [
    {
      image: '/img/fv-banner/1.png',
      title: 'The New Standard of K-Beauty',
      description: 'Where Youth and\nBeauty Begin',
    },
    {
      image: '/img/fv-banner/2.png',
      title: 'The Future of K-Beauty',
      description: 'Where Radiance\nBegins',
    },
    {
      image: '/img/fv-banner/3.png',
      title: 'Redefining K-Beauty',
      description: 'Unlocking Timeless\nElegance',
    },
  ];

  // Initialize Embla Carousel with corrected options for better interaction
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      // draggable: true,
      dragFree: false, // Changed to false for more predictable dragging
      containScroll: 'trimSnaps',
      align: 'center',
      // speed: 30, // More moderate speed for better control
      slidesToScroll: 1,
    },
    [autoplay.current],
  );

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Call onSelect when the carousel is ready
    onSelect();

    // Setup event listeners
    emblaApi.on('select', onSelect);
    emblaApi.on('pointerDown', () => autoplay.current.stop()); // Stop autoplay on interaction
    emblaApi.on('pointerUp', () => autoplay.current.play()); // Resume autoplay after interaction

    // Add a reInit event to handle window resizing
    const handleResize = () => emblaApi.reInit();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('pointerDown', () => autoplay.current.stop());
      emblaApi.off('pointerUp', () => autoplay.current.play());
      window.removeEventListener('resize', handleResize);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-gray-50">
      <div className="hidden h-24 lg:block"></div>
      <div className="h-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                fill
                quality={100}
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-16 lg:pb-16 lg:pl-60">
        <div className="mb-16">
          <>
            {/* desktop */}
            <span className="hidden max-w-[50vw] text-[36px] font-bold text-white drop-shadow-lg lg:block">
              {items[currentIndex].title}
            </span>
            <h1 className="hidden w-full whitespace-pre-line text-white drop-shadow-lg lg:block">
              {items[currentIndex].description}
            </h1>
          </>
          {/* mobile */}
          <span className="block text-[20px] font-bold text-white drop-shadow-lg lg:hidden">
            {items[currentIndex].title}
          </span>{' '}
          <h3 className="block font-bold whitespace-pre-line text-white drop-shadow-lg lg:hidden">
            {items[currentIndex].description}
          </h3>
        </div>
      </div>

      {/* Navigation Dots - Improved for better interaction */}
      <div className="absolute bottom-12 left-12 z-20 flex w-[50vw] max-w-[350px] flex-1 space-x-3 lg:left-16 md:lg:left-60">
        {items.map((_, index) => (
          <button
            key={index}
            type="button" // Explicitly set button type
            onClick={() => scrollTo(index)}
            className={`h-2 flex-1 rounded-sm transition-all duration-300 hover:opacity-100 ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            style={{ cursor: 'pointer' }} // Ensure the cursor shows pointer
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}
