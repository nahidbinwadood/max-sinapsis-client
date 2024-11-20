/* eslint-disable react/prop-types */
import useAuth from '../Hooks/useAuth';
import parse from 'html-react-parser';

const AboutContainer = ({ item }) => {
  const { isSpanish } = useAuth();
  console.log(item);
  return (
    <section className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 px-5 md:px-8 pb-10 md:pb-20 lg:pb-44">
      <div className="md:w-[60%]">
        <div>
          <h2 className="text-xl md:text-2xl font-primaryBold">
            <span>+</span> {!isSpanish ? 'about...' : ' acerca de'}
          </h2>
          <div className="mt-3 md:mt-5 text-sm md:text-base font-primaryMedium tracking-wider text-black/70 space-y-1">
            {!isSpanish
              ? item?.sub_title_IINN
                ? parse(item.sub_title_IINN)
                : 'Loading...'
              : item?.sub_title_EESS
              ? parse(item.sub_title_EESS)
              : 'Loading...'}
          </div>
        </div>
      </div>
      <div className="md-[40%]">
        <div className="h-[350px] md:h-[520px]">
          <img
            className="h-full w-full object-cover"
            src={item?.image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
