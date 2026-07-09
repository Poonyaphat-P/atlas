import PageHeader from '@/components/pageHeader';
import { Slideshow } from '@/components/imageSlideshow'
import MenAndWomen from '@/components/menAndWomen'
import Poster from '@/components/poster'
import ProductCarousel from '@/components/productCarousel';


export default function Home() {

  const sampleImages = [
    { url: '/pictures/preview1.jpg', alt: 'preview1' },
    { url: '/pictures/preview2.jpg', alt: 'preview2' },
    { url: '/pictures/preview3.jpg', alt: 'preview3' },
  ];

  return (
    <main>
      <PageHeader />

      <div className="w-full pb-5">
        <Slideshow images={sampleImages} autoplay={true} interval={4000} />
      </div>

      <MenAndWomen men={{ url: '/pictures/preview1.jpg', alt: 'men', header: 'MEN' }} women={{ url: '/pictures/preview2.jpg', alt: 'women', header: 'WOMEN' }} />

      <h6 className="text-2xl font-bold text-left mx-2 my-5">New Arrivals</h6>

      <Poster url="/pictures/preview1.jpg" alt="poster" header="OREGON" />

      <ProductCarousel />
    </main>
  );
}
