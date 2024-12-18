/* eslint-disable react/prop-types */
import useAuth from '../Hooks/useAuth';
import SectionTitle from './SectionTitle';
import parse from 'html-react-parser';

const ServicesContainer = ({ service }) => {
  const { isSpanish } = useAuth();

  // Helper function to clean and parse descriptions
  const renderDescription = (description) => {
    if (!description) return <p>Loading...</p>;

    // Preserve valid paragraphs and parse HTML
    return description
      .split(/<\/p>/gi) // Split at closing </p> tags
      .map((para) => para.trim()) // Trim extra spaces
      .filter((para) => para && para !== '&nbsp;') // Exclude empty or &nbsp; entries
      .map((para, index) => <p key={index}>{parse(`<p>${para}</p>`)}</p>); // Parse HTML with <p> wrapper
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
        <div className="mt-5 ml-6 text-[#333] text-sm md:text-base font-primaryMedium tracking-wider text-black/70">
          {isSpanish
            ? renderDescription(service?.description_eess)
            : renderDescription(service?.description_iinn)}
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
