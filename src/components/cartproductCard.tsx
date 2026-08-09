'use client'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

export default function CartProductCard() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='relative grid grid-cols-12 gap-4 border-gray-200 border rounded-md p-2'>
      <Trash2 size={15} className='absolute top-3 right-3 cursor-pointer w-5 h-5'/>
      <div className='col-span-3'>
        <img src="/pictures/preview1.jpg" alt='product' className='rounded-lg aspect-square object-cover' />
      </div>
      <div className='col-span-9 flex flex-col gap-1'>
        <div className='w-fit text-lg font-semibold cursor-pointer hover:underline'>Product Name</div>
        <div className='text-gray-500 text-sm'>Product Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div className='flex justify-start items-center text-sm mt-auto'> Quantity: 
        <button onClick={() => setQuantity(quantity - 1)} className='cursor-pointer border border-gray rounded-full px-2 mx-2'>-</button>
        {quantity}
        <button onClick={() => setQuantity(quantity + 1)} className='cursor-pointer border border-gray rounded-full px-2 mx-2'>+</button>
        </div>
        <div className='font-semibold text-sm mt-auto'>$120.00</div>
      </div>
    </div>
    )
}