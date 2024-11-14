import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

import { NextArrowSvg, PrevArrowSvg } from '../components/SvgContainer';
const Portfolio = () => {
  const tabs = [
    {
      title: 'Acrylic',
      images: [
        'https://i.postimg.cc/MT91ccCW/1.avif',
        'https://i.postimg.cc/FRrjsbnW/2.avif',
        'https://i.postimg.cc/KjVLN6cw/3.avif',
        'https://i.postimg.cc/wM3LDqzD/4.avif',
        'https://i.postimg.cc/cJMRSkTt/5.avif',
      ],
      details: {
        title: 'A Journey of Texture and Color',
        description:
          'This portfolio showcases a collection of acrylic artworks that delve into the vibrant world of texture, layering, and color interplay. Each piece experiments with the versatility of acrylics, from fluid brushstrokes and dynamic splashes to intricate textures and bold, vivid hues. These works embody my artistic exploration, pushing the boundaries of traditional techniques.',
      },
    },
    {
      title: 'Drawings',
      images: [
        'https://i.postimg.cc/52hfT8sG/1.jpg',
        'https://i.postimg.cc/7LzZZKCw/10.jpg',
      ],
      details: {
        title: 'Pencil and Charcoal Creations',
        description:
          'A portfolio that explores the raw beauty of monochromatic mediums. From realistic portraits to abstract concepts, these drawings showcase depth and emotion through pencil and charcoal, with a focus on intricate details and contrasts.',
      },
    },
    {
      title: 'Ceramics',
      images: [
        'https://i.postimg.cc/CLv1PBTT/11.jpg',
        'https://i.postimg.cc/52TtJh2s/12.jpg',
        'https://i.postimg.cc/P5PqBXTL/13.jpg',
      ],
      details: {
        title: 'Earth and Fire',
        description:
          'This ceramic collection highlights the beauty of clay and glaze. Each piece is a unique exploration of texture, form, and color, achieved through handcrafting and glazing techniques that bring out the earthy tones and tactile qualities of ceramics.',
      },
    },
    {
      title: 'Watercolor',
      images: [
        'https://i.postimg.cc/Yq20zNPz/14.jpg',
        'https://i.postimg.cc/MZmXB39G/15.jpg',
        'https://i.postimg.cc/X7DjKRdn/2.jpg',
      ],
      details: {
        title: 'Fluid Expressions',
        description:
          'This collection of watercolors captures the ethereal nature of the medium. Each painting uses delicate washes and vibrant pigments to create expressive landscapes and abstract forms, showcasing the transparency and fluidity that only watercolor can offer.',
      },
    },
    {
      title: 'Installation',
      images: [
        'https://i.postimg.cc/GtLLzrXm/7.jpg',
        'https://i.postimg.cc/MZmXB39G/15.jpg',
        'https://i.postimg.cc/X7DjKRdn/2.jpg',
      ],
      details: {
        title: 'Immersive Experiences',
        description:
          'A collection of large-scale installation artworks that transform spaces and engage audiences. These installations combine sculpture, light, and sound to create immersive experiences that invite viewers to explore and interact with art in a physical space.',
      },
    },
    {
      title: 'Mosaic',
      images: [
        'https://i.postimg.cc/7P9YhGLG/6.jpg',
        'https://i.postimg.cc/GtLLzrXm/7.jpg',
        'https://i.postimg.cc/DZdfqmdN/8.jpg',
      ],
      details: {
        title: 'Pieces of Harmony',
        description:
          'This mosaic series combines tiny pieces of glass, stone, and tile to form intricate patterns and images. Each piece is meticulously arranged to create colorful and detailed artworks that capture the beauty of fragmented forms coming together as a whole.',
      },
    },
    {
      title: 'Metal',
      images: [
        'https://i.postimg.cc/ydzYg099/9.jpg',
        'https://i.postimg.cc/7LzZZKCw/10.jpg',
        'https://i.postimg.cc/CLv1PBTT/11.jpg',
      ],
      details: {
        title: 'Forged Art',
        description:
          'A showcase of metalworking pieces that combine industrial strength with artistic finesse. These sculptures and functional art pieces use welding, forging, and casting to manipulate metal into unique forms that exude both power and elegance.',
      },
    },
    {
      title: 'Photography',
      images: [
        'https://i.postimg.cc/52TtJh2s/12.jpg',
        'https://i.postimg.cc/P5PqBXTL/13.jpg',
        'https://i.postimg.cc/MZmXB39G/15.jpg',
      ],
      details: {
        title: 'Moments in Time',
        description:
          'A collection of photographs that capture fleeting moments and tell stories through the lens. From portraits to landscapes, these images showcase a diverse range of subjects and emotions, each frozen in time to evoke a unique narrative.',
      },
    },
    {
      title: 'Organic',
      images: [
        'https://i.postimg.cc/GtLLzrXm/7.jpg',
        'https://i.postimg.cc/52TtJh2s/12.jpg',
        'https://i.postimg.cc/P5PqBXTL/13.jpg',
        'https://i.postimg.cc/MZmXB39G/15.jpg',
      ],
      details: {
        title: 'Nature’s Forms',
        description:
          'This collection draws inspiration from nature, utilizing organic shapes and materials to create artworks that reflect the beauty and complexity of the natural world. These pieces often incorporate elements like wood, leaves, and natural dyes.',
      },
    },
    {
      title: 'Textile',
      images: [
        'https://i.postimg.cc/52hfT8sG/1.jpg',
        'https://i.postimg.cc/7LzZZKCw/10.jpg',
        'https://i.postimg.cc/52TtJh2s/12.jpg',
      ],
      details: {
        title: 'Fabric of Art',
        description:
          'A collection that showcases the artistry of textile work, from woven fabrics to embroidery. Each piece explores texture and pattern through threads and fibers, creating a tactile experience that celebrates traditional craftsmanship in a contemporary context.',
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [swiperRef, setSwiperRef] = useState(null);

  const currentTab = tabs.find((item) => item?.title == activeTab?.title);

  return (
    <section className="min-h-[100vh] mt-10">
      {/* left side */}
      <div className="flex gap-16">
        <div className="w-[25%]">
          {/* title */}
          <div>
            <h1 className="text-2xl font-primaryBold">
              <span>+</span> portfolio
            </h1>
          </div>

          {/* tabs */}
          <div className="ml-20 mt-5">
            <div className="flex flex-col items-start">
              {tabs.map((tab) => (
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-xl lowercase  py-1 ${
                    activeTab.title == tab.title
                      ? 'text-black font-primaryBold'
                      : 'text-[#666633] font-primaryTest'
                  }`}
                  key={tab?.title}
                >
                  {tab?.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <Swiper
            onSwiper={setSwiperRef}
            loop
            centeredSlides
            spaceBetween={20}
            className="relative cursor-pointer w-full"
          >
            {/* nav buttons */}
            <div className="w-full flex items-center justify-between px-12 absolute top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={() => {
                  swiperRef?.slidePrev();
                }}
                className="bg-secondary rounded-full size-10 p-2 flex items-center justify-center"
              >
                <PrevArrowSvg />
              </button>
              <button
                onClick={() => {
                  swiperRef?.slideNext();
                }}
                className="bg-secondary rounded-full size-10 p-2 flex items-center justify-center"
              >
                <NextArrowSvg />
              </button>
            </div>
            {currentTab.images.map((img) => (
              <SwiperSlide key={img}>
                <div className="h-[500px] w-full">
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* details */}
          <div>
            {/* title */}
            <div>
              <h3 className="text-2xl font-primaryTest mt-10 text-secondary">
                {currentTab?.details?.title}
              </h3>
              <p className="mt-5 text-lg font-primaryTest text-secondary">
                {currentTab?.details?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
