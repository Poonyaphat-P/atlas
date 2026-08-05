import PageHeader from '@/components/header/pageHeader'
import Breadcrumbs from '@/components/breadCrumbs'
import { ProductShow } from '@/components/product'

const sampleImages = [
  { url: '/pictures/preview1.jpg', alt: 'preview1', caption: 'men1'},
  { url: '/pictures/preview2.jpg', alt: 'preview2', caption: 'men2'},
  { url: '/pictures/preview3.jpg', alt: 'preview3', caption: 'men3' },
];

export default function Favorite() {
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
        <ProductShow slug="product-1" name="product1" price={100} images={sampleImages} />
        <ProductShow slug="product-2" name="product2" price={200} images={sampleImages} />
        <ProductShow slug="product-3" name="product3" price={300} images={sampleImages} />
        <ProductShow slug="product-4" name="product3" price={300} images={sampleImages} />
        <ProductShow slug="product-5" name="product3" price={300} images={sampleImages} />
        <ProductShow slug="product-6" name="product3" price={300} images={sampleImages} />
      </div>
    </div>
  )
}