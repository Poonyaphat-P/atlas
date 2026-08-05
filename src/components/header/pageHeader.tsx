'use client'

import { HeartIcon } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import MegaMenu from '@/components/header/megaMenu'
import SearchBar from '@/components/header/searchbar'
import Atlas from '@/components/header/atlas'
import Link from "next/link";
import { useState } from "react";

const menSections = [
  {
		title: 'Shoes',
		links: [
			{ name: 'Sneakers', href: ''},
			{ name: 'Running', href: '' },
      { name: 'Basketball', href: '' },
      { name: 'Football', href: '' }
		]
  },
  {
    title: 'Clothing',
    links: [
      { name: 'T-shirts', href: '' },
      { name: 'Shirts', href: '' },
      { name: 'Pants', href: '' },
      { name: 'Jackets', href: '' }
    ]
  },
  {
    title: 'Accessories',
    links: [
      { name: 'Hats', href: '' },
      { name: 'Socks', href: '' },
      { name: 'Bags', href: '' }
    ]
  },
  {
    title: 'New Arrivals',
    links: [
      { name: 'Oregon', href: '' },
      { name: 'Neptune', href: ''}
    ]
  }
]

const womenSections = [
  {
		title: 'Shoes',
		links: [
			{ name: 'Sneakers', href: ''},
			{ name: 'Running', href: '' },
            { name: 'Basketball', href: '' }
		]
  },
  {
    title: 'Clothing',
    links: [
      { name: 'T-shirts', href: '' },
      { name: 'Shirts', href: '' },
      { name: 'Pants', href: '' },
      { name: 'Jackets', href: '' }
    ]
  },
  {
    title: 'Accessories',
    links: [
      { name: 'Hats', href: '' },
      { name: 'Socks', href: '' },
      { name: 'Bags', href: '' }
    ]
  },
  {
    title: 'New Arrivals',
    links: [
      { name: 'Oregon', href: '' },
      { name: 'Neptune', href: ''}
    ]
  }
]

const kidsSections = [
  {
    title: 'Boys',
    links: [
      { name: 'Sneakers', href: ''},
      { name: 'Clothing', href: '' }
    ]
  },
  {
    title: 'Girls',
    links: [
      { name: 'Sneakers', href: ''},
      { name: 'Clothing', href: '' }
    ]
  },
  {
    title: 'Accessories',
    links: [
      { name: 'Hats', href: ''},
      { name: 'Bags', href: ''}
    ]
  }
]

const saleSections = [
  {
    title: 'Men',
    links: [
      { name: 'Sneakers', href: ''},
      { name: 'Clothing', href: '' },
      { name: 'Accessories', href: '' }
    ]
  },
  {
    title: 'Women',
    links: [
      { name: 'Sneakers', href: ''},
      { name: 'Clothing', href: '' },
      { name: 'Accessories', href: '' }
    ]
  },
  {
    title: 'Kids',
    links: [
      { name: 'Sneakers', href: ''},
      { name: 'Clothing', href: '' }
    ]
  }
]

const newSections = [
  {
    title: 'New Collection',
    links: [
      { name: 'Oregon', href: '' },
      { name: 'Neptune', href: '' }
    ]
  },
  {
    title: 'Collaboration',
    links: [
      { name: 'Artist 1', href: '' },
      { name: 'Artist 2', href: '' }
    ]
  },
  {
    title: 'Choose by Sport',
    links: [
      { name: 'Running', href: '' },
      { name: 'Training', href: '' },
      { name: 'Basketball', href: '' }
    ]
  }
]

export default function PageHeader() {

  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="relative flex items-center px-15 py-4 bg-black text-white sticky top-0 z-50">
      <Atlas />

      <div className="flex-1 flex justify-center">
        <nav className={`flex text-md font-bold transition-all duration-500 ease-in-out pointer-events-auto ${
          isSearching ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-xl'
        }`}>
          <div className='group'>
            <Link href="/new" className='px-5 py-8 whitespace-nowrap'>New & Featured</Link>
            <MegaMenu sections={newSections} />
          </div>

          <div className='group'>
            <Link href="/men" className='px-5 py-8'>Men</Link>
            <MegaMenu sections={menSections} />
          </div>

          <div className='group'>
            <Link href="/women" className='px-5 py-8'>Women</Link>
            <MegaMenu sections={womenSections} />
          </div>

          <div className='group'>
            <Link href="/kids" className='px-5 py-8'>Kids</Link>
            <MegaMenu sections={kidsSections} />
          </div>
          
          <div className='group'>
            <Link href="/sale" className='px-5 py-8'>Sale</Link>
            <MegaMenu sections={saleSections} />
          </div>
        </nav>
      </div>

      <div className={`absolute inset-y-0 z-10 flex items-center transition-all duration-500 ease-in-out ${
        isSearching 
          ? 'max-lg:left-15 max-lg:right-15 max-lg:w-auto lg:right-[calc(50%_-_28rem)] lg:w-[56rem]' 
          : 'right-[8.75rem] w-52'
      }`}>
        <SearchBar 
          className="w-full" 
          onFocus={() => setIsSearching(true)} 
        />
      </div>

      <div className={`ml-auto flex items-center gap-4 transition-all duration-300 ${
        isSearching ? 'opacity-0 w-0 overflow-hidden pointer-events-none' : 'opacity-100'
      }`}>
        <Link href="/favorite"><HeartIcon strokeWidth={1} className="w-6 h-6 shrink-0" /></Link>
        <ShoppingBag strokeWidth={1} className="w-6 h-6 shrink-0" />
      </div>
      
      <button className={`cursor-pointer text-md font-semibold shrink-0 transition-all duration-0 ease-in-out ${
        isSearching ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none w-0 overflow-hidden'
      }`} 
      onClick={() => setIsSearching(false)}
      >
        Cancel
      </button>
    </div>
  );
}
