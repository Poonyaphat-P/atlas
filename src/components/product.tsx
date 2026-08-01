"use client"
import { useState } from 'react';
import Link from 'next/link';

interface SlideImage {
  url: string;
  caption?: string;
  alt: string;
}

interface ProductProps {
  slug: string;
  name: string;
  price: number;
  images: SlideImage[];
}

export const ProductShow: React.FC<ProductProps> = ({ slug, name, price, images }) => {
  const n = images.length;
  const [index, setIndex] = useState<number>(0);

  const nextImage = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % n);
  };

  const prevImage = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + n) % n);
  };

  return (
    <Link href={`/product/${slug}`} className="flex flex-col w-full group bg-gray-300">
      <div className="relative aspect-[9/10] w-full overflow-hidden bg-gray-300">
        <img
          src={images[index]?.url}
          alt={images[index]?.alt}
          className="w-full h-full object-cover"
        />

        {n > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-2 items-center justify-center h-8 w-8 text-lg rounded-full bg-black/30 hover:bg-black/60 text-white cursor-pointer select-none transition"
            >
              &#10094;
            </button>

            <button
              onClick={nextImage}
              aria-label="Next photo"
              className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-2 items-center justify-center h-8 w-8 text-lg rounded-full bg-black/30 hover:bg-black/60 text-white cursor-pointer select-none transition"
            >
              &#10095;
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(idx);
                  }}
                  aria-label={`Go to photo ${idx + 1}`}
                  className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${index === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="mt-3 mb-3 pl-3 flex flex-col gap-1">
        <p className="text-base text-black">{name}</p>
        <p className="text-base text-black">{price}</p>
      </div>
    </Link>
  );
};
