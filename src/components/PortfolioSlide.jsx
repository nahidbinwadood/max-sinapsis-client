const PortfolioSlide = () => {
  return (
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
            <img className="w-full h-full object-cover" src={img} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioSlide;
