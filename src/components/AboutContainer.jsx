/* eslint-disable react/prop-types */
import parse from 'html-react-parser';
import useAuth from '../Hooks/useAuth';

const AboutContainer = ({ item }) => {
  const { isSpanish } = useAuth();

  // Dynamically parse content based on language
  const content = isSpanish ? item?.content_IINN : item?.content_EESS;

  return (
    <section className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 px-5 md:px-8 pb-10 ">
      {/* Text Content Section */}
      <div className="md:w-[60%]">
        <div>
          <h2 className="text-xl md:text-2xl font-primaryBold">
            <span>+</span> {isSpanish ? 'acerca de' : 'about...'}
          </h2>
          <div className="mt-3 md:mt-5 text-sm md:text-base font-primaryMedium tracking-wider text-black/70 space-y-2">
            {/* Parse the content with existing <p> tags */}
            {content && parse(content)}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-[40%]">
        <div className="h-[350px] md:h-[520px]">
          {item?.image ? (
            <img
              className="h-full w-full object-cover"
              src={item.image}
              alt="About Content"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-200">
              <span>No Image Available</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
