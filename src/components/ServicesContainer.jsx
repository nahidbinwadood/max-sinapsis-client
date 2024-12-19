/* eslint-disable react/prop-types */
import useAuth from '../Hooks/useAuth';
import SectionTitle from './SectionTitle';
import parse from 'html-react-parser';

const ServicesContainer = ({ service }) => {
  const { isSpanish } = useAuth();

  // Render description with html-react-parser to preserve tags
  const renderDescription = (description) => {
    return description ? parse(description) : <p>Loading...</p>;
  };

  return (
    <div className="ml-6 mt-3 md:mt-5 mb-6 md:mb-8 lg:mb-10 servicesContainer">
      <div>
        {/* Section Title */}
        <SectionTitle
          title={service?.title_iinn}
          spanish={service?.title_eess}
        />

        {/* Description */}
        <div className="mt-5 ml-6 text-[#333] text-sm md:text-base font-primaryMedium tracking-wider text-black/70 space-y-1">
          {renderDescription(
            isSpanish ? service?.description_eess : service?.description_iinn
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
