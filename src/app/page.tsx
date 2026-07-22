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

      <h6 className="text-2xl font-semibold text-left px-5 md:px-10 lg:px-15 py-5 mt-15">New Arrivals</h6>

      <Poster url="/pictures/preview1.jpg" alt="poster" header="OREGON" />

      <div className='mt-17 mx-5 md:mx-10 lg:mx-20 mb-10'>
        <p className='text-2xl font-semibold text-left py-5 px-9'>New Collection OREGON</p>
        <ProductCarousel />
      </div>

      <Poster url="/pictures/preview3.jpg" alt="poster" header="NEPTUNE" />

      <div className='mt-17 mx-5 md:mx-10 lg:mx-20 mb-10'>
        <p className='text-2xl font-semibold text-left py-5 px-9'>New Collection NEPTUNE</p>
        <ProductCarousel />
      </div>

      <div className="max-w-2xl mx-auto my-15 text-justify text-white">
        <p className='text-2xl font-semibold text-center py-5'>ATLAS</p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugiat vitae error placeat quibusdam aut, sit minus necessitatibus voluptatem numquam eveniet quasi labore suscipit sed dolores ad quam officiis corrupti rerum ratione porro aliquam exercitationem? Porro natus assumenda commodi vitae? Recusandae fugiat voluptatibus quis commodi excepturi optio quidem architecto. Atque nihil error cum ad, quam quis. Corrupti, eius alias. Pariatur incidunt vel veniam, quia ut unde repudiandae laboriosam. Nihil repellendus tempora ad fugit deleniti quae accusantium, possimus, doloremque nulla adipisci quos maiores quam. Corrupti culpa est assumenda, ab, illum dolorem recusandae cumque rerum praesentium fugiat magnam nihil numquam aut facere sit, eaque ut earum ex? Quia maxime asperiores nobis quibusdam? Nam optio ratione minus unde, exercitationem eos laudantium dolorem fuga quod et, veniam molestias odio adipisci temporibus rerum, animi illo nemo. Odio dolorem asperiores quas assumenda deleniti saepe iure aperiam incidunt exercitationem, sequi totam necessitatibus ducimus, deserunt vitae repudiandae. Consectetur modi vero blanditiis quia nemo quos rem optio, eveniet rerum sapiente dignissimos voluptates facere nostrum accusantium! Minima dolore totam deserunt nihil unde consequuntur esse delectus quam aspernatur magni. Rem sequi est possimus laboriosam maiores a expedita, magni cumque sint ratione. Hic qui sapiente numquam nam corrupti recusandae? Earum, sint illum?
      </div>

    </main>
  );
}
