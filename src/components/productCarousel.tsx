"use client"
import { useRef } from 'react';
import ProductCard from './productcard'

export default function ProductCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (amount: number) => {
        scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
    }

    return (
        <div className="relative">
            <button className="text-white"onClick={() => scroll(-300)}>‹</button>

            <div ref={scrollRef} className="flex overflow-x-auto gap-2 ...">
                <ProductCard name="Product Name" price={1000} url="/pictures/preview2.jpg" alt="productPreview1" />
                <ProductCard name="Product Name" price={1000} url="/pictures/preview2.jpg" alt="productPreview1" />
                <ProductCard name="Product Name" price={1000} url="/pictures/preview2.jpg" alt="productPreview1" />
                <ProductCard name="Product Name" price={1000} url="/pictures/preview2.jpg" alt="productPreview1" />
                <ProductCard name="Product Name" price={1000} url="/pictures/preview2.jpg" alt="productPreview1" />
                <ProductCard name="Product Name" price={1000} url="/pictures/preview2.jpg" alt="productPreview1" />
            </div>

            <button className="text-white" onClick={() => scroll(300)}>›</button>
        </div>
    )
}