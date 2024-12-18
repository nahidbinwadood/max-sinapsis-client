import { useEffect, useRef, useState } from 'react';
import { PlusSvg } from '../components/SvgContainer';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAuth from '../Hooks/useAuth';
import PortfolioItem from '../components/PortfolioItem';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../components/LoadingPage';

const fetchPortfolio = async (axiosPublic) => {
  const { data } = await axiosPublic('/get-all-portfolio');
  const updatedPortfolio = data?.data.sort((a, b) => a.position - b.position);
  return updatedPortfolio;
};

const Portfolio = () => {
  const { isSpanish } = useAuth();
  const axiosPublic = useAxiosPublic();
  const sidebarTabRef = useRef(null);

  const [activeTab, setActiveTab] = useState(null);
  const [showTab, setShowTab] = useState(false);

  // Fetch portfolio data using TanStack Query
  const {
    data: allPortfolio = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['portfolio'],
    queryFn: () => fetchPortfolio(axiosPublic),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    cacheTime: 1000 * 60 * 30, // Keep cache for 30 minutes
    retry: 1, // Retry once if the query fails
  });

  // Set the active tab to the first portfolio item when data is fetched
  useEffect(() => {
    if (allPortfolio.length > 0 && !activeTab) {
      setActiveTab(allPortfolio[0]);
    }
  }, [allPortfolio, activeTab]);

  // Handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarTabRef.current &&
        !sidebarTabRef.current.contains(event.target)
      ) {
        setShowTab(false);
      }
    };

    if (showTab) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTab]);

  // Loading state
  if (isLoading) {
    return <LoadingPage />;
  }

  // Error state
  if (isError) {
    return <div>Error loading portfolio: {error.message}</div>;
  }

  console.log(allPortfolio);
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
        {/* Left side (Tabs) */}
        <div className="md:w-[35%] lg:w-[25%]">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-primaryBold lowercase">
              <span>+</span> {!isSpanish ? 'Portfolio' : 'Portafolio'}
            </h1>

            {/* Sidebar toggle button */}
            <div
              onClick={() => setShowTab(true)}
              className="size-8 bg-black flex items-center justify-center rounded-md md:hidden"
            >
              <PlusSvg />
            </div>
          </div>

          {/* Sidebar tabs for mobile */}
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
                    activeTab?._id === tab?._id
                      ? 'text-black font-primaryBold'
                      : 'text-primary font-primaryTest'
                  }`}
                  key={index}
                >
                  {isSpanish ? tab?.title_EESS : tab?.title_IINN}
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar tabs for desktop */}
          <div className="ml-20 mt-5 hidden md:flex">
            <div className="flex flex-col items-start">
              {allPortfolio.map((tab, index) => (
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-xl lowercase py-1 ${
                    activeTab?.id === tab?.id
                      ? 'text-black font-primaryBold'
                      : 'text-[#666633] font-primaryTest'
                  }`}
                  key={index}
                >
                  {isSpanish ? tab?.title_IINN : tab?.title_EESS}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side (Portfolio Item) */}
        {activeTab && <PortfolioItem item={activeTab} />}
      </div>
    </section>
  );
};

export default Portfolio;
