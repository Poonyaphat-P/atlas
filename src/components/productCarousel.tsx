"use client"
import { useRef } from 'react';
import ProductCard from './productcard'

// Cards visible per view is set responsively on the card wrapper below:
// 1 on phone (< 640px), 2 on tablet (>= 640px), 3 on desktop (>= 1024px).
// The gap is a constant 0.5rem (the `gap-2` class on the scroll container).

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

    // Scroll by a single card's width (plus the gap) instead of a full page.
    const scroll = (direction: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const card = el.children[0] as HTMLElement | undefined;
        if (!card) return;
        const gap = parseFloat(getComputedStyle(el).columnGap || '0');
        el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
    }

    return (
        <div className="relative flex items-center justify-center gap-2">
            <button
                aria-label="Previous"
                className="shrink-0 text-black text-3xl px-2 hover:opacity-70"
                onClick={() => scroll(-1)}
            >
                ‹
            </button>

            <div
                ref={scrollRef}
                className="flex w-full gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {products.map((product, i) => (
                    <div
                        key={i}
                        className="snap-start shrink-0 grow-0 basis-full sm:basis-[calc(50%_-_0.25rem)] lg:basis-[calc(33.333%_-_0.333rem)]"
                    >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>

            <button
                aria-label="Next"
                className="shrink-0 text-black text-3xl px-2 hover:opacity-70"
                onClick={() => scroll(1)}
            >
                ›
            </button>
        </div>
    )
}
