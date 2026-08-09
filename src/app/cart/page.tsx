import PageHeader from '@/components/header/pageHeader'
import Breadcrumbs from '@/components/breadCrumbs'
import CartProductCart from '@/components/cartproductCard'

export default function CartPage() {
  return (
    <div>
      <PageHeader />
      <div className='grid grid-cols-12 max-w-4xl mx-auto mt-15 gap-3'>
        <section className='col-span-8 font-medium text-xl'>
          Cart
          <div className='grid grid-row-1 auto-rows-auto gap-5 mt-2'>
            <CartProductCart />
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