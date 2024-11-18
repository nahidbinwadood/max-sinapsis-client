import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { PlusSvg } from '../components/SvgContainer';

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
        'https://i.postimg.cc/7LzZZKCw/10.jpg',
        'https://i.postimg.cc/7LzZZKCw/10.jpg',
        'https://i.postimg.cc/7LzZZKCw/10.jpg',
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
        'https://i.postimg.cc/CLv1PBTT/11.jpg',
        'https://i.postimg.cc/CLv1PBTT/11.jpg',
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
        'https://i.postimg.cc/MZmXB39G/15.jpg',
        'https://i.postimg.cc/MZmXB39G/15.jpg',
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
        'https://i.postimg.cc/MZmXB39G/15.jpg',
        'https://i.postimg.cc/MZmXB39G/15.jpg',
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
        'https://i.postimg.cc/DZdfqmdN/8.jpg',
        'https://i.postimg.cc/DZdfqmdN/8.jpg',
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
        'https://i.postimg.cc/CLv1PBTT/11.jpg',
        'https://i.postimg.cc/CLv1PBTT/11.jpg',
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
        'https://i.postimg.cc/P5PqBXTL/13.jpg',
        'https://i.postimg.cc/P5PqBXTL/13.jpg',
        'https://i.postimg.cc/P5PqBXTL/13.jpg',
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
        'https://i.postimg.cc/MZmXB39G/15.jpg',
        'https://i.postimg.cc/MZmXB39G/15.jpg',
      ],
      details: {
        title: "Nature's Forms",
        description:
          'This collection draws inspiration from nature, utilizing organic shapes and materials to create artworks that reflect the beauty and complexity of the natural world. These pieces often incorporate elements like wood, leaves, and natural dyes.',
      },
    },
    {
      title: 'Textile',
      images: [
        'https://i.postimg.cc/52hfT8sG/1.jpg',
        'https://i.postimg.cc/7LzZZKCw/10.jpg',
        'https://i.postimg.cc/7LzZZKCw/10.jpg',
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sidebarTabRef = useRef(null);
  const [showTab, setShowTab] = useState(false);

  const currentTab = tabs.find((item) => item?.title === activeTab?.title);

  console.log(showTab);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarTabRef.current &&
        !sidebarTabRef.current.contains(event.target)
      ) {
        setShowTab(false);
      }
    };

    const swiper = document.querySelector('.swiper');
    if (showTab) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      if (swiper) {
        swiper.style.zIndex = '-1';
      }
    } else {
      document.body.style.overflow = 'auto';
      if (swiper) {
        swiper.style.zIndex = '1';
      }
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTab]);
  return (
    <section className="min-h-[100vh] mt-5 sm:mt-6 md:mt-8 lg:mt-10">
      <style>
        {`
    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #666633;
      border-radius: 50%;
    }

    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 20px;
      color: white;
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      background-color: #4d4d26;
    }

    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
      opacity: 0.5;
      pointer-events: auto;
      cursor: not-allowed;
    }

    /* Responsive styles for small devices */
    @media (max-width: 640px) {
      .swiper-button-prev,
      .swiper-button-next {
        width: 30px;
        height: 30px;
      }

      .swiper-button-prev:after,
      .swiper-button-next:after {
        font-size: 16px;
      }
    }
  `}
      </style>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-5 md:px-8 2xl:px-0">
        {/* tabs */}

        {/* left side */}
        <div className="md:w-[35%] lg:w-[25%]">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-primaryBold">
              <span>+</span> portfolio
            </h1>

            {/* sidebar tab section */}
            <div
              onClick={() => setShowTab(true)}
              className="size-8 bg-black flex items-center justify-center rounded-md md:hidden"
            >
              <PlusSvg />

              {/* sidebar tabs */}
              <div
                ref={sidebarTabRef}
                className={`fixed top-[80px] transition-transform duration-500 min-w-[210px] min-h-[100vh] z-10 right-0 bg-secondary text-primary font-primaryTest px-10 py-6 shadow-lg ${
                  showTab ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="flex flex-col items-start">
                  {tabs.map((tab) => (
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveTab(tab);
                        setShowTab(false);
                      }}
                      className={`lowercase py-1 ${
                        activeTab.title === tab.title
                          ? 'text-black font-primaryBold'
                          : 'text-primary font-primaryTest'
                      }`}
                      key={tab?.title}
                    >
                      {tab?.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="ml-20 mt-5 hidden md:flex">
            <div className="flex flex-col items-start">
              {tabs.map((tab) => (
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-xl lowercase py-1 ${
                    activeTab.title === tab.title
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

        {/* right side */}
        <div className="md:w-[65%] lg:w-3/4">
          {/* Main Swiper */}
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mb-4"
          >
            {currentTab.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[250px] sm:h-[350px] md:h-[400px]">
                  <img
                    src={image}
                    alt={`${currentTab.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbs Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            spaceBetween={10}
            freeMode={true}
            watchSlidesProgress={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="h-24"
          >
            {currentTab.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${currentTab.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* details */}
          <div className="pb-10">
            <h3 className="text-xl md:text-2xl font-primaryTest mt-5 md:mt-7 lg:mt-10 text-secondary">
              {currentTab?.details?.title}
            </h3>
            <p className="mt-3 md:mt-5 text-sm md:text-base lg:text-lg font-primaryTest text-secondary">
              {currentTab?.details?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
