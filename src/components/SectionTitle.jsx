/* eslint-disable react/prop-types */
import { DotSvg } from './SvgContainer';

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-3">
      <DotSvg />
      <h2 className="text-[#000] font-primaryBold text-xl lowercase -mt-1">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
