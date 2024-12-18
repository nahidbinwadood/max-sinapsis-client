/* eslint-disable react/prop-types */
import parse from 'html-react-parser';
import useAuth from '../Hooks/useAuth';

const AboutContainer = ({ item }) => {
  console.log(item);

  const { isSpanish } = useAuth();

  // Helper function to split content into paragraphs and remove empty ones
  const splitParagraphs = (content) => {
    return content
      .split('</p>') // Split by closing </p> tags
      .map((para) => para.replace(/<[^>]+>/g, '').trim()) // Remove any tags and trim
      .filter((para) => para.length > 0); // Filter out empty paragraphs
  };

  const paragraphs = !isSpanish
    ? splitParagraphs(item?.content_EESS)
    : splitParagraphs(item?.content_IINN);

  return (
    <section className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 px-5 md:px-8 pb-10 md:pb-20 lg:pb-44">
      <div className="md:w-[60%]">
        <div>
          <h2 className="text-xl md:text-2xl font-primaryBold">
            <span>+</span> {!isSpanish ? 'about...' : ' acerca de'}
          </h2>
          <div className="mt-3 md:mt-5 text-sm md:text-base font-primaryMedium tracking-wider text-black/70  space-y-2">
            {paragraphs.map((para, index) => (
              <p key={index}>{parse(para)}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="md-[40%]">
        <div className="h-[350px] md:h-[520px]">
          <img
            className="h-full w-full object-cover"
            src={item.image}
            alt="Example Image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
