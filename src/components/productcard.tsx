"use client"

import Link from "next/link"

interface ProductCardProps {
  slug: string;
  name: string;
  price: number;
  url: string;
  alt: string;
}

export default function ProductCard({slug, name, price, url, alt} : ProductCardProps) {
  return (
    <Link href={`/product/${slug}`}>
      <div className="flex flex-col w-full bg-gray-400">
        <div className="aspect-[9/10] w-full overflow-hidden">
          <img 
            src={url}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 flex flex-col gap-1">
          <p className="font-semibold text-base text-black">{name}</p>
          <p className="text-base text-black">{price}</p>
        </div>
      </div>
    </Link>
  )
}