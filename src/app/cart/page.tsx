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

  const items = cart?.items ?? []
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,0
  )
  const tax = subtotal * 0.07
  const shipping = subtotal > 0 ? 50 : 0
  const total = subtotal + tax + shipping

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
                cartItemId={item.id}
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
          <h2>Summary</h2>

          <div className='mt-4 space-y-2 text-base'>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className='flex justify-between'>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className='flex justify-between'>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className='flex justify-between border-t pt-3 text-lg font-bold'>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className='w-full bg-red-950 text-white py-2.5 rounded-full mt-6 text-base hover:bg-red-900'
          >
            Checkout
          </button>
        </aside>
      </div>
    </div>
  )
}