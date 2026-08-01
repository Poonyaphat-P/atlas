"use client"

interface ProductCardProps {
  name: string;
  price: number;
  url: string;
  alt: string;
}

export default function ProductCard({name, price, url, alt} : ProductCardProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="aspect-[9/10] w-full overflow-hidden">
        <img 
          src={url}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-base text-white">{name}</p>
        <p className="text-base text-white">{price}</p>
      </div>
    </div>
  )
}