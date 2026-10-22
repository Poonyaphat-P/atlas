'use client'

import { useRef } from 'react'
import ProductCard from './productcard'

type CarouselProduct = {
  id: string
  slug: string
  name: string
  price: number
  url: string
  alt: string
}

export default function ProductCarouselClient({
  products,
}: {
  products: CarouselProduct[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: number) => {
    const element = scrollRef.current
    if (!element) return

    const card = element.children[0] as HTMLElement | undefined
    if (!card) return

    const gap = parseFloat(getComputedStyle(element).columnGap || '0')
    element.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <div className='relative flex items-center justify-center gap-2'>
      <button
        aria-label='Previous'
        className='shrink-0 text-black text-3xl px-2 hover:opacity-70'
        onClick={() => scroll(-1)}
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        className='flex w-full gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
      >
        {products.map((product) => (
          <div
            key={product.id}
            className='snap-start shrink-0 grow-0 basis-full sm:basis-[calc(50%_-_0.375rem)] lg:basis-[calc(33.333%_-_0.5rem)]'
          >
            <ProductCard
              productId={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              url={product.url}
              alt={product.alt}
            />
          </div>
        ))}
      </div>

      <button
        aria-label='Next'
        className='shrink-0 text-black text-3xl px-2 hover:opacity-70'
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  )
}
