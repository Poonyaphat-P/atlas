'use client';

import Link from 'next/link';
import { CornerUpLeft } from 'lucide-react'

export interface BreadcrumbItemProps {
  label: string;
  href? : string
}

interface BreadcrumbsProps {
  items: BreadcrumbItemProps[];
}

export default function Breadcrumbs({ items = [] } : BreadcrumbsProps) {
  return (
    <div className='flex items-center gap-2 text-sm py-4'>
      <CornerUpLeft className='w-4 h-4'/>
      <button
        onClick={() => window.history.back()}
        className='font-bold underline cursor-pointer'
      >
        back
      </button>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return(
          <div key={index} className='flex items-center gap-2'>
            {index > 0 && <span className='text-gray-500'>/</span>}
            
            {item.href && !isLast ? (
              <Link href={item.href} className='font-bold underline'>{item.label}</Link>
            ) : (
              <span className='text-gray-900'>{item.label}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}