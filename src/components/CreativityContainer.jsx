/* eslint-disable react/prop-types */
import useAuth from '../Hooks/useAuth';
import parse from 'html-react-parser';
const CreativityContainer = ({ creativity }) => {
  const { isSpanish } = useAuth();
  console.log(creativity?.image_position);
  return (
    <div>
      <div
        className={`mt-5 flex flex-col ${
          creativity?.image_position === 'left'
            ? 'md:flex-row'
            : creativity?.image_position === 'right'
            ? 'md:flex-row-reverse'
            : 'md:flex-row'
        } gap-10 items-stretch`}
      >
        <div>
          <div className="md:w-[320px] h-[350px] 2xl:h-full 2xl:max-h-[450px] flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={creativity?.image}
              alt=""
            />
          </div>
        </div>
        <div className='flex flex-col justify-start items-start w-full'>
          {/* title */}
          <div className="flex items-center gap-3">
            <div className="bg-secondary size-2 sm:size-3 lg:size-[14px] rounded-full" />
            <h2 className="text-[#666633] font-primaryBold md:text-xl lowercase -mt-1 tracking-wide">
              {!isSpanish ? creativity?.title_IINN : creativity?.title_EESS}
            </h2>
          </div>

          <div className={`font-primaryTest text-secondary md:text-lg ${ creativity?.image_position === 'left'?"ml-5" :"ml-0"}  mt-3 creativitySection`}>
            {!isSpanish
              ? creativity?.sub_title_IINN
                ? parse(creativity.sub_title_IINN)
                : 'Loading...'
              : creativity?.sub_title_EESS
              ? parse(creativity.sub_title_EESS)
              : 'Loading...'}
          </div>
        </div>
      </div>

      {/* exhibits */}
      <div className="mt-8 md:mt-10 creativitySection md:text-lg tracking-wide lg:mt-12 xl:mt-14 2xl:mt-16 font-primaryTest space-y-2 ml-5 2xl:ml-0">
        {!isSpanish
          ? creativity?.content_IINN
            ? parse(creativity.content_IINN)
            : 'Loading...'
          : creativity?.content_EESS
          ? parse(creativity.content_EESS)
          : 'Loading...'}
      </div>
    </div>
  );
};

export default CreativityContainer;
