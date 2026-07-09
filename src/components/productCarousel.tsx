"use client"
import { useRef } from 'react';
import ProductCard from './productcard'

// Space between cards. Change this one value to widen/tighten the gap.
const GAP = '0.5rem';

const products = [
    { name: "Product Name", price: 1000, url: "/pictures/preview2.jpg", alt: "productPreview1" },
    { name: "Product Name", price: 1000, url: "/pictures/preview2.jpg", alt: "productPreview1" },
    { name: "Product Name", price: 1000, url: "/pictures/preview2.jpg", alt: "productPreview1" },
    { name: "Product Name", price: 1000, url: "/pictures/preview2.jpg", alt: "productPreview1" },
    { name: "Product Name", price: 1000, url: "/pictures/preview2.jpg", alt: "productPreview1" },
    { name: "Product Name", price: 1000, url: "/pictures/preview2.jpg", alt: "productPreview1" },
];

export default function ProductCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Scroll by one full page (the width of the visible viewport).
    const scroll = (direction: number) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
    }

    return (
        <div className="relative flex items-center gap-2">
            <button
                aria-label="Previous"
                className="shrink-0 text-white text-3xl px-2 hover:opacity-70"
                onClick={() => scroll(-1)}
            >
                ‹
            </button>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ gap: GAP }}
            >
                {products.map((product, i) => (
                    <div key={i} className="snap-start shrink-0">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>

            <button
                aria-label="Next"
                className="shrink-0 text-white text-3xl px-2 hover:opacity-70"
                onClick={() => scroll(1)}
            >
                ›
            </button>
        </div>
    )
}
