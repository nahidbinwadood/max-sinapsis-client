/* eslint-disable react/prop-types */
// Import Swiper styles
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import useAuth from '../Hooks/useAuth';

const PortfolioItem = ({ item }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { isSpanish } = useAuth();

  // Calculate dynamic slidesPerView based on images length
  const slidesPerView = item?.images?.length
    ? Math.min(item.images.length, 5)
    : 1; // Max 5 slides per view, default to 1 if no images

  return (
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
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mb-4"
      >
        {item?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[250px] sm:h-[350px] md:h-[400px]">
              <img
                src={image}
                alt={`Portfolio image ${index + 1}`}
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
        slidesPerView={slidesPerView} // Dynamic slidesPerView
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
        {item?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumbnail image ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Details */}
      <div className="pb-10">
        <h3 className="text-xl md:text-2xl font-primaryTest mt-5 md:mt-7 lg:mt-10 text-secondary">
          {!isSpanish
            ? item?.details?.sub_Title_IINN || 'No description available'
            : item?.details?.sub_Title_EESS || 'No description available'}
        </h3>
        <p className="mt-3 md:mt-5 text-sm md:text-base lg:text-lg font-primaryTest text-secondary">
          {!isSpanish
            ? item?.details?.sub_desc_IINN || 'No description available'
            : item?.details?.sub_desc_EESS || 'No description available'}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
