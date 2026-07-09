"use client"

interface ProductCardProps {
  name: string;
  price: number;
  url: string;
  alt: string;
}

export default function ProductCard({name, price, url, alt} : ProductCardProps) {
  return (
    <div className="flex flex-col">
      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <img 
          src={url}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-base text-gray-900">{name}</p>
        <p className="text-base text-gray-900">{price}</p>
      </div>
    </div>
  )
}