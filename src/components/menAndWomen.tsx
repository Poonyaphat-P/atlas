"use client"

interface ImageProps {
  url: string;
  alt: string;
  header: string; 
}

interface MenAndWomenProps {
  men: ImageProps;
  women: ImageProps;
}


export default function MenAndWomen( {men, women} : MenAndWomenProps ) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 px-2"> 
      <div className="relative">
        <img 
          src={men.url} 
          alt={men.alt}
          className="w-full h-full object-cover" 
        />
        <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          {men.header}
        </span>
       </div>
      <div className="relative">
        <img 
          src={women.url} 
          alt={women.alt} 
          className="w-full h-full object-cover"
        /> 
        <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          {women.header}
        </span>
      </div>
    </div>
  )
}