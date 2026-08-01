"use client"

import { useState, useEffect } from 'react';

interface SlideImage {
  url: string;
  caption?: string;
  alt: string;
}

interface SlideshowProps {
  images: SlideImage[];
  autoplay?: boolean;
  interval?: number;
}

export const Slideshow: React.FC<SlideshowProps> = ({
  images,
  interval = 5000,
  autoplay = true
}) => {
  const n = images.length;
  const extendedImages = n ? [images[n - 1], ...images, images[0]] : images;

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [enableTransition, setEnableTransition] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const realIndex = ((currentIndex - 1) % n + n) % n;

  const nextSlide = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex: number) => prevIndex + 1);
  }

  const prevSlide = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex: number) => prevIndex - 1);
  }

  const goToSlide = (slideIndex: number): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(slideIndex + 1);
  }

  const handleTransitionEnd = (): void => {
    if (currentIndex === 0) {
      setEnableTransition(false);
      setCurrentIndex(n);
    } else if (currentIndex === n + 1) {
      setEnableTransition(false);
      setCurrentIndex(1);
    } else {
      setIsAnimating(false);
    }
  }

  useEffect(() => {
    if (enableTransition) return;
    const raf = requestAnimationFrame(() => {
      setEnableTransition(true);
      setIsAnimating(false);
    });
    return () => cancelAnimationFrame(raf);
  }, [enableTransition]);

  useEffect(() => {
    if (!autoplay || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoplay, interval, isPaused]);

return (
  <div
    className="relative group w-full h-[250px] sm:h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden bg-gray-900"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >

    {/* slide container */}
    <div
      className={`flex h-full w-full ${enableTransition ? 'transition-transform duration-500 ease-out' : 'transition-none'}`}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      onTransitionEnd={handleTransitionEnd}
    >
      {extendedImages.map((image, index) => (
        <div key={index} className="relative h-full w-full flex-shrink-0">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {image.caption && (
            <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 p-4 text-white text-center">
              <p className="justify-center text-5xl font-medium text-red-500">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  
    {/* navigation buttons */}
    <button
      onClick={prevSlide}
      aria-label="Previous slide"
      className="hidden group-hover:flex group-focus-within:flex absolute top-1/2 -translate-y-1/2 left-5 items-center justify-center h-10 w-10 text-2xl rounded-full bg-black/30 hover:bg-black/60 text-white cursor-pointer select-none transition"
    >
      &#10094;
    </button>
    
    <button
      onClick={nextSlide}
      aria-label="Next Slide"
      className="hidden group-hover:flex group-focus-within:flex absolute top-1/2 -translate-y-1/2 right-5 items-center justify-center h-10 w-10 text-2xl rounded-full bg-black/30 hover:bg-black/60 text-white cursor-pointer select-none transition"
    >
      &#10095;
    </button>

    {/* Slide Pagination Dots */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
      {images.map((_, idx) => (
        <button
          key={idx}
          onClick={() => goToSlide(idx)}
          aria-label={`Go to slide ${idx + 1}`}
          className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${realIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
        />
      ))}
    </div>
  </div>
  );
};