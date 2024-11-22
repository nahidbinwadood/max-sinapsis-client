/* eslint-disable react/prop-types */
import useAuth from '../Hooks/useAuth';
import SectionTitle from './SectionTitle';
import parse from 'html-react-parser';

const ServicesContainer = ({ service }) => {
  // console.log(service);
  const { isSpanish } = useAuth();
  return (
    <>
      {/* Contents */}
      <div className="ml-6 mt-3 md:mt-5 mb-6 md:mb-8 lg:mb-10 servicesContainer">
        <div>
          {/* title */}
          <SectionTitle title={service?.title_IINN} spanish={service?.title_EESS} />
          <div className="mt-2 ml-6 text-[#333] text-sm md:text-base font-primaryMedium tracking-wider text-black/70 space-y-1">
            {!isSpanish
              ? service?.description_IINN
                ? parse(service.description_IINN)
                : 'Loading...'
              : service?.description_EESS
              ? parse(service.description_EESS)
              : 'Loading...'}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesContainer;
