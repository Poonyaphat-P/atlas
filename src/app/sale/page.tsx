import PageHeader from '@/components/header/pageHeader'
import { Slideshow } from '@/components/imageSlideshow'
import {ProductShow } from '@/components/product'
import Breadcrumbs from '@/components/breadCrumbs';
export default function Sale() {

  const sampleImages = [
    { url: '/pictures/preview1.jpg', alt: 'preview1', caption: 'sale1'},
    { url: '/pictures/preview2.jpg', alt: 'preview2', caption: 'sale2'},
    { url: '/pictures/preview3.jpg', alt: 'preview3', caption: 'sale3' },
  ];

  return (
    <div>
      <PageHeader />
      <div className="w-full pb-5">
        <Slideshow images={sampleImages} autoplay={true} interval={4000} />
      </div>

      <div className="max-w-[85rem] mx-auto">
        <Breadcrumbs 
          items={[
            { label: 'Homepage', href: '/' },
            { label: 'Sale', href: '/sale' },
          ]}
        />
        <div className='text-5xl font-bold py-4'>Sale Product</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis ipsum accusantium dolores nostrum molestias eum quam maxime! Repudiandae vitae eligendi numquam magnam commodi iure laborum tenetur enim iusto dolorum!</div>
        <div className='grid grid-cols-4 grid-rows-1 gap-4 mt-5'>
          <ProductShow slug="product-1" name="product1" price={100} images={sampleImages} />
          <ProductShow slug="product-2" name="product2" price={200} images={sampleImages} />
          <ProductShow slug="product-3" name="product3" price={300} images={sampleImages} />
          <ProductShow slug="product-4" name="product3" price={300} images={sampleImages} />
          <ProductShow slug="product-5" name="product3" price={300} images={sampleImages} />
          <ProductShow slug="product-6" name="product3" price={300} images={sampleImages} />
        </div>
      </div>

    </div>
  )
}