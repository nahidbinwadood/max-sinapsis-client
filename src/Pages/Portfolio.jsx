import { useEffect, useRef, useState } from 'react';

import { PlusSvg } from '../components/SvgContainer';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAuth from '../Hooks/useAuth';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  const [allPortfolio, setAllPortfolio] = useState([]);
  const { isSpanish } = useAuth();
  const [activeTab, setActiveTab] = useState(null);

  const sidebarTabRef = useRef(null);
  const [showTab, setShowTab] = useState(false);

 // const currentTab = allPortfolio.find((item) => item?._id === activeTab?._id);

  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosPublic('/get-all-portfolio');

        setAllPortfolio(data?.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();

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
  }, [axiosPublic, showTab]);

  useEffect(() => {
    if (allPortfolio.length > 0 && !activeTab) {
      setActiveTab(allPortfolio[0]);
    }
  }, [activeTab, allPortfolio]);

  console.log(activeTab);

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
              <span>+</span> {!isSpanish ? 'Portfolio' : 'Portafolio'}
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
                  {allPortfolio.map((tab, index) => (
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveTab(tab);
                        setShowTab(false);
                      }}
                      className={`lowercase py-1 ${
                        activeTab?.title_IINN === tab?.title_IINN
                          ? 'text-black font-primaryBold'
                          : 'text-primary font-primaryTest'
                      }`}
                      key={index}
                    >
                      {tab?.title_IINN}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="ml-20 mt-5 hidden md:flex">
            <div className="flex flex-col items-start">
              {allPortfolio.map((tab, index) =>
                !isSpanish ? (
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`text-xl lowercase py-1 ${
                      activeTab?.title_IINN === tab?.title_IINN
                        ? 'text-black font-primaryBold'
                        : 'text-[#666633] font-primaryTest'
                    }`}
                    key={index}
                  >
                    {tab?.title_IINN}
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`text-xl lowercase py-1 ${
                      activeTab?.title_EESS === tab?.title_EESS
                        ? 'text-black font-primaryBold'
                        : 'text-[#666633] font-primaryTest'
                    }`}
                    key={index}
                  >
                    {tab?.title_EESS}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* right side */}
        <>
          <PortfolioItem item={activeTab} />
        </>
      </div>
    </section>
  );
};

export default Portfolio;
