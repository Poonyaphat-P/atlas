import { prisma } from '@/lib/prisma'

import PageHeader from '@/components/header/pageHeader'
import Breadcrumbs from '@/components/breadCrumbs'
import ProductDetailClient from '@/components/ProductDetailClient'

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 

  const product = await prisma.product.findUnique({
    where: { slug }
  })

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <PageHeader/>
      <div className='max-w-5xl mx-auto'>
        <Breadcrumbs 
          items={[
            { label: 'Homepage', href: '/' },
            { label: 'Men', href: '/men' },
            { label: product.name }
          ]}
        />
        <ProductDetailClient product={product} />
      </div>
    </div>

  );
}