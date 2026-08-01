import { SearchIcon } from "lucide-react";
import { HeartIcon } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import MegaMenu from '@/components/megaMenu'
import Link from "next/link";

const menSections = [
  {
		title: 'Shoes',
		links: [
			{ name: 'sneakers', href: ''},
			{ name: 'running', href: '' },
      { name: 'basketball', href: '' },
      { name: 'football', href: '' }
		]
  },
  {
    title: 'Clothing',
    links: [
      { name: 't-shirts', href: '' },
      { name: 'shirts', href: '' },
      { name: 'pants', href: '' },
      { name: 'jackets', href: '' }
    ]
  },
  {
    title: 'Accessories',
    links: [
      { name: 'hats', href: '' },
      { name: 'socks', href: '' },
      { name: 'bags', href: '' }
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
			{ name: 'sneakers', href: ''},
			{ name: 'running', href: '' },
      { name: 'basketball', href: '' },
      { name: 'football', href: '' }
		]
  },
  {
    title: 'Clothing',
    links: [
      { name: 't-shirts', href: '' },
      { name: 'shirts', href: '' },
      { name: 'pants', href: '' },
      { name: 'jackets', href: '' }
    ]
  },
  {
    title: 'Accessories',
    links: [
      { name: 'hats', href: '' },
      { name: 'socks', href: '' },
      { name: 'bags', href: '' }
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
      { name: 'sneakers', href: ''},
      { name: 'clothing', href: '' }
    ]
  },
  {
    title: 'Girls',
    links: [
      { name: 'sneakers', href: ''},
      { name: 'clothing', href: '' }
    ]
  }
]

const saleSections = [
  {
    title: 'Men',
    links: [
      { name: 'sneakers', href: ''},
      { name: 'clothing', href: '' },
      { name: 'accessories', href: '' }
    ]
  },
  {
    title: 'Women',
    links: [
      { name: 'sneakers', href: ''},
      { name: 'clothing', href: '' },
      { name: 'accessories', href: '' }
    ]
  },
  {
    title: 'Kids',
    links: [
      { name: 'sneakers', href: ''},
      { name: 'clothing', href: '' }
    ]
  }
]

export default function PageHeader() {
  return (
    <div className="relative grid grid-cols-3 items-center px-15 py-3 bg-gray-300">
      <div className="justify-self-start">
        <Link href="/">
          <h2 className="text-xl font-bold">ATLAS</h2>
        </Link>
      </div>

      <nav className="justify-self-center flex gap-10 text-md font-medium ">
        <Link href="#">New & Featured</Link>

        <div className='group'>
					<Link href="/men" className='py-5'>Men</Link>
					<MegaMenu sections={menSections} />
        </div>

        <div className='group'>
          <Link href="/women" className='py-5'>Women</Link>
          <MegaMenu sections={womenSections} />
        </div>

        <div className='group'>
          <Link href="/kids" className='py-5'>Kids</Link>
          <MegaMenu sections={kidsSections} />
        </div>
        
        <div className='group'>
          <Link href="/sale" className='py-5'>Sale</Link>
          <MegaMenu sections={saleSections} />
        </div>
      </nav>

      <div className="justify-self-end flex items-center gap-4 text-black">
        <div className="relative">
          <SearchIcon strokeWidth={1} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 rounded-full pl-9 pr-4 py-2 text-sm outline-none"
          />
        </div>
        <HeartIcon strokeWidth={1} className="w-6 h-6" />
        <ShoppingBag strokeWidth={1} className="w-6 h-6" />
      </div>
    </div>
    )
}