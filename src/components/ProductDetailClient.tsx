'use client'

import { useState } from 'react'
import { addToCart } from '@/lib/actions/cart'
import { toggleFavorite } from '@/lib/actions/favorite'
interface ProductDetailClientProps {
  product: {
    id: string;
    name: string;
    subTitle: string | null;
    description: string | null;
    image: string[];
    price: number;
    stock: number;
    size: string[];
  };
  initialIsFavorite: boolean;
}

export default function ProductDetailClient({ product, initialIsFavorite, }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(product.image[0] ?? '/pictures/preview1.jpg');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite)
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false)

  async function handleToggleFavorite() {
    setIsFavoriteLoading(true)

    const result = await toggleFavorite(product.id)
    if(result.success && result.favorited !== undefined) {
      setIsFavorite(result.favorited)
    } 
    setIsFavoriteLoading(false)
  }
  async function handleAddToCart() {
    if (!selectedSize) {
      setMessage('Please select a size');
      return
    }

    setIsLoading(true);
    setMessage('');

    const result = await addToCart(product.id, selectedSize);

    if (result.success) {
      setMessage('Added to cart')
    } else {
      setMessage(result.error ?? 'Failed to add to cart')
    }
    setIsLoading(false)
  }

  return (
      <div className='grid grid-cols-5 gap-10'>
          <div className='col-span-3 flex gap-4'>
            <div className='flex flex-col gap-2'>
              {product.image.map((img, index) => (
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  key={index}
                  onMouseEnter={() => setSelectedImage(img)}
                  className={`w-15 h-15 object-cover cursor-pointer rounded border-2 ${
                    selectedImage === img ? 'border-black' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
            <div className='flex-1'>
              <img src={selectedImage} alt={product.name} className='aspect-square object-cover rounded-md'/>
            </div>
          </div>
          <div className='col-span-2'>
            <h1 className='text-2xl font-bold'>{product.name}</h1>
            <p className='mt-2'>{product.subTitle}</p>
            <p className='mt-2'>${product.price}</p>
            <p className='mt-2'>{product.description}</p>
            <p className='mt-2'>Stock : {product.stock}</p>

            <p className='mt-8'>Choose Size</p>
            <div className='grid grid-cols-3 gap-2 mt-2'>
              {product.size.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`border-2 rounded-md p-2 transition-colors ${
                    selectedSize === size ? 'border-black' : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
              <button 
                onClick={handleAddToCart}
                disabled={isLoading}
                className='col-span-3 border-2 border-gray-300 rounded-3xl p-2 hover:border-black transition-colors mt-5'>
                  {isLoading ? 'Adding...' : 'Add to Cart'}
                </button>
              <button onClick={handleToggleFavorite} disabled={isFavoriteLoading} className='col-span-3 border-2 border-gray-300 rounded-3xl p-2 hover:border-black transition-colors mt-1'>
                {isFavoriteLoading
                  ? 'Updating...'
                  : isFavorite
                    ? 'Remove from Favorite'
                    : 'Add to Favorite'}
              </button>
              {message && (
                <p className='col-span-3 text-center mt-2 text-sm text-gray-700'>{message}</p>
              )}
            </div>
          </div>
        </div>
  )
}