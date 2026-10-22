import { prisma } from '@/lib/prisma'
import ProductCarouselClient from './productCarouselClient'

const productSlugs = [
  'nike-air-max-270',
  'nike-dri-fit-tshirt',
  'nike-air-force-1-women',
]

export default async function ProductCarousel() {
  const products = await Promise.all(
    productSlugs.map((slug) =>
      prisma.product.findUnique({
        where: { slug },
      })
    )
  )

  const carouselProducts = products
    .filter((product): product is NonNullable<typeof product> => Boolean(product))
    .map((product) => ({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      url: product.image[0] ?? '/pictures/preview1.jpg',
      alt: product.name,
    }))

  return <ProductCarouselClient products={carouselProducts} />
}
