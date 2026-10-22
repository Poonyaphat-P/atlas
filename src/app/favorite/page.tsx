import { prisma } from "@/lib/prisma"

import PageHeader from '@/components/header/pageHeader'
import Breadcrumbs from '@/components/breadCrumbs'
import ProductCard from '@/components/productcard'
import Link from 'next/link'

export default async function Favorite() {

  const currentUser = await prisma.user.findUnique({
    where: {
      email: 'demo@atlas.com'
    },
    
  })
  
  const userFavorites = currentUser ? await prisma.favorite.findMany({
    where: {
      userId: currentUser.id,
    },
    include: { product: true },
  })
  : []

  const products = userFavorites.map((fav) => fav.product)
  return (
    <div>
      <PageHeader/>
        <div className="max-w-5xl mx-auto">
        <Breadcrumbs 
          items={[
            { label: 'Homepage', href: '/' },
            { label: 'Favorite' }
          ]}
        />
      </div>
      <h6 className="text-2xl font-semibold text-left px-5 md:px-10 lg:px-15 py-5">Favorite</h6>
      <div className='max-w-[85rem] mx-auto grid grid-cols-4 gap-4 mt-5'>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              url={product.image[0]}
              alt={product.name}
            />
          ))
        ) : (
          <div className='col-span-4 flex flex-col min-h-[400px] items-center justify-center'>
            <p className='text-gray-500 text-xl font-semibold'>
              Your favorite list is empty
            </p>

            <Link
              href='/new'
              className='rounded-full text-white bg-black py-2 px-5 hover:bg-gray-800 mt-4'
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
