import { prisma } from "@/lib/prisma"

import PageHeader from '@/components/header/pageHeader'
import { Slideshow } from '@/components/imageSlideshow'
import Breadcrumbs from '@/components/breadCrumbs';
import ProductCard from "@/components/productcard";

export default async function New() {

  const products = await prisma.product.findMany({
    where : {
      isNew : true
    }
  })

  const sampleImages = [
    { url: '/pictures/preview1.jpg', alt: 'preview1', caption: 'new1'},
    { url: '/pictures/preview2.jpg', alt: 'preview2', caption: 'new2'},
    { url: '/pictures/preview3.jpg', alt: 'preview3', caption: 'new3' },
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
            { label: 'New & Feature', href: '/new' },
          ]}
        />
        <div className='text-5xl font-bold py-4'>New Product</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis ipsum accusantium dolores nostrum molestias eum quam maxime! Repudiandae vitae eligendi numquam magnam commodi iure laborum tenetur enim iusto dolorum!</div>
        <div className='grid grid-cols-4 gap-4 mt-5'>
          {products.map((product) =>
            <ProductCard
              key={product.id}
              productId={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              url={product.image[0] ?? ''}
              alt={product.name}
            />
          )}
        </div>
      </div>

    </div>
  )
}
