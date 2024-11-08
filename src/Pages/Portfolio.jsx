import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Portfolio = () => {
  const tabs = [
    {
      title: 'Acrylic',
    },
    {
      title: 'Drawings',
    },
    {
      title: 'Ceramics',
    },
    {
      title: 'Watercolor',
    },
    {
      title: 'Installation',
    },
    {
      title: 'Mosaic',
    },
    {
      title: 'Metal',
    },
    {
      title: 'Photography',
    },
    {
      title: 'Organic',
    },
    {
      title: 'Textile',
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
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
                  className={`text-xl font-primaryTest py-1 ${
                    activeTab.title == tab.title
                      ? 'text-black'
                      : 'text-black/50'
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
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <button></button>
              <div className="h-[500px] w-full ">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.postimg.cc/MT91ccCW/1.avif"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] w-full ">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.postimg.cc/FRrjsbnW/2.avif"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] w-full ">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.postimg.cc/KjVLN6cw/3.avif"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] w-full ">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.postimg.cc/wM3LDqzD/4.avif"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] w-full ">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.postimg.cc/cJMRSkTt/5.avif"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* details */}
          <div>
            {/* title */}
            <div>
              <h3 className="text-2xl font-primaryTest mt-10 text-secondary">
                A Journey of Texture and Color
              </h3>
              <p className='mt-5 text-lg font-primaryTest text-secondary'>
                This portfolio showcases a collection of acrylic artworks that
                delve into the vibrant world of texture, layering, and color
                interplay. Each piece experiments with the versatility of
                acrylics, from fluid brushstrokes and dynamic splashes to
                intricate textures and bold, vivid hues. These works embody my
                artistic exploration, pushing the boundaries .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
