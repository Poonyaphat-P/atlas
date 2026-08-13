import { prisma } from '@/lib/prisma'

import PageHeader from '@/components/header/pageHeader'
import Breadcrumbs from '@/components/breadCrumbs'
import CartProductCart from '@/components/cartproductCard'

export default async function CartPage() {
  const cart = await prisma.cart.findFirst({
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  })

  return (
    <div>
      <PageHeader />
      <div className='max-w-[85rem] mx-auto'>
        <Breadcrumbs 
          items={[
            { label: 'Homepage', href: '/' },
            { label: 'Cart', href: '/cart' },
          ]}
        />
      </div>
      
      <div className='grid grid-cols-12 max-w-4xl mx-auto mt-15 gap-5'>
        <section className='col-span-8 font-medium text-xl'>
          Cart
          <div className='grid grid-row-1 auto-rows-auto gap-5 mt-2'>
            {cart?.items.map((item) => (
              <CartProductCart
                key={item.id}
                name={item.product.name}
                description={item.product.description ?? ''}
                price={item.product.price}
                image={item.product.image[0] ?? '/pictures/preview1.jpg'}
                quantity={item.quantity} 
              />
            ))}
          </div>
        </section>

        <aside className='col-span-4 font-medium text-xl'>
          Summary
          <div> Price : </div>
          <button className='w-full bg-black rounded-full cursor-pointer text-white font-semibold text-md py-2 mt-50'>Checkout</button>
        </aside>
      </div>
    </div>
  )
}