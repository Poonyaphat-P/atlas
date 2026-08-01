import { SearchIcon } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import MegaMenu from '@/components/megaMenu'
import Link from "next/link";

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

export default function PageHeader() {
  return (
    <div className="relative grid grid-cols-3 items-center px-15 py-5 bg-black text-white sticky top-0 z-50">
      <div className="justify-self-start">
        <Link href="/">
          <h2 className="text-xl font-bold">ATLAS</h2>
        </Link>
      </div>

      <nav className="justify-self-center flex text-md font-bold ">
        <Link href="#" className='px-5'>New & Featured</Link>

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

      <div className="justify-self-end flex items-center gap-4 text-white">
        <div className="relative">
          <SearchIcon strokeWidth={1} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 rounded-full pl-9 pr-4 py-2 text-md font-semibold outline-none text-gray-500"
          />
        </div>
        <HeartIcon strokeWidth={1} className="w-6 h-6" />
        <ShoppingBag strokeWidth={1} className="w-6 h-6" />
      </div>
    </div>
    )
}