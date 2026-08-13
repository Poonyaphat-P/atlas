'use client'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

interface CartProductCardProps {
  name : string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartProductCard({ name, description, price, image, quantity: initialQuantity }: CartProductCardProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  return (
    <div className='relative grid grid-cols-12 gap-4 border-gray-200 border rounded-md p-2'>
      <Trash2 size={15} className='absolute top-3 right-3 cursor-pointer w-5 h-5'/>
      <div className='col-span-3'>
        <img src={image} alt={name} className='rounded-lg aspect-square object-cover' />
      </div>
      <div className='col-span-9 flex flex-col gap-1'>
        <div className='w-fit text-lg font-semibold cursor-pointer hover:underline'>{name}</div>
        <div className='text-gray-500 text-sm'>{description}</div>
        <div className='flex justify-start items-center text-sm mt-auto'> Quantity: 
        <button onClick={() => setQuantity(quantity - 1)} className='cursor-pointer border border-gray rounded-full px-2 mx-2'>-</button>
        {quantity}
        <button onClick={() => setQuantity(quantity + 1)} className='cursor-pointer border border-gray rounded-full px-2 mx-2'>+</button>
        </div>
        <div className='font-semibold text-sm mt-auto'>${price}</div>
      </div>
    </div>
    )
}