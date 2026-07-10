"use client"

interface ImageProps {
  url: string;
  alt: string;
  header: string;
}

export default function Poster({url, alt, header} : ImageProps) {
  return (
    <div className="w-full aspect-[5/2] relative">
      <img 
        src={url} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
        {header}
      </span>
    </div>
  )
}