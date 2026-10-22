"use client"

import Link from "next/link"
import { HeartIcon } from 'lucide-react'
import { toggleFavorite, getFavoriteStatus } from '@/lib/actions/favorite'
import { useState, useEffect, type MouseEvent } from "react"
interface ProductCardProps {
  slug: string; 
  name: string;
  price: number;
  url: string;
  alt: string;
  productId: string;
}

export default function ProductCard({slug, name, price, url, alt, productId,} : ProductCardProps) {

  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function loadFavoriteStatus() {
      const result = await getFavoriteStatus(productId)
      if (result.success) {
        setIsFavorite(result.favorited)
      }
    }
    loadFavoriteStatus()
  }, [productId])

  async function handleFavorite(event: MouseEvent<SVGSVGElement>) {
    event.preventDefault()
    event.stopPropagation()

    if (isLoading) return

    setIsLoading(true)
    const result = await toggleFavorite(productId)

    if ( result.success && result.favorited !== undefined) {
      setIsFavorite(result.favorited)
    }

    setIsLoading(false)
  }

  return (
    <Link href={`/product/${slug}`}>
      <div className="flex flex-col relative w-full bg-gray-400">
        <HeartIcon size={15} 
          onClick={handleFavorite} 
          className={`absolute top-3 right-3 cursor-pointer w-5 h-5 z-10 ${
            isFavorite ? 'fill-white text-white' : 'text-white'
          }`}
        />
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