'use client'

import { use, useState } from 'react'
import PageHeader from '@/components/header/pageHeader'
import Breadcrumbs from '@/components/breadCrumbs'

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const product = {
    name: "Classic Tee",
    subTitle: "Cotton Crewneck",
    description: "A soft, everyday tee made from 100% organic cotton.",
    image: [
      "/pictures/preview1.jpg",
      "/pictures/preview2.jpg",
      "/pictures/preview3.jpg",
    ],
    price: 39.99,
    stock: 12,
    size: ["S", "M", "L", "XL"],
  };

  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div>
      <PageHeader/>
      <div className='max-w-5xl mx-auto'>
        <Breadcrumbs 
          items={[
            { label: 'Homepage', href: '/' },
            { label: 'Men', href: '/men' },
            { label: product.name }
          ]}
        />
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
              <button className='col-span-3 border-2 border-gray-300 rounded-3xl p-2 hover:border-black transition-colors mt-5'>Add to Cart</button>
              <button className='col-span-3 border-2 border-gray-300 rounded-3xl p-2 hover:border-black transition-colors mt-1'>Add to Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}