import PageHeader from '@/components/pageHeader';
import { Slideshow } from '@/components/imageSlideshow'
import MenAndWomen from '@/components/menAndWomen'
import Poster from '@/components/poster'
import ProductCard from  '@/components/productcard'


export default function Home() {
  
  const sampleImages = [
    { url: '/pictures/preview1.jpg', alt: 'preview1' },
    { url: '/pictures/preview2.jpg', alt: 'preview2' },
    { url: '/pictures/preview3.jpg', alt: 'preview3' },
  ];
  
  return (
    <main>
      <PageHeader />

      <div className="min-h-screen bg-gray-100 flex justify-center">
        <Slideshow images={sampleImages} autoplay={true} interval={4000} />
      </div>

      <MenAndWomen  men={{url:'/pictures/preview1.jpg', alt: 'men', header: 'MEN'}} women={{url: '/pictures/preview2.jpg', alt: 'women', header: 'WOMEN'}}/>

      <h6 className="text-2xl font-bold text-left mx-2 my-5">New Arrivals</h6>

      <Poster url="/pictures/preview1.jpg" alt="poster" header="OREGON"/>

      <div className='flex overflow-x-auto gap-8 pb-8 snap-x' style={{ scrollbarWidth: 'none'}}>
        <ProductCard name="Product Name" price={1000} url="/pictures/preview2.jpg" alt="productPreview1"/>
      </div>
    </main>
  );
}
