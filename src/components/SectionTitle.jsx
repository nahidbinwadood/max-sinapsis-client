/* eslint-disable react/prop-types */
import { DotSvg } from './SvgContainer';
import useAuth from '../Hooks/useAuth';

const SectionTitle = ({ title, spanish }) => {
  const { isSpanish } = useAuth();
  return (
    <div className="flex items-center gap-3">
      <DotSvg />
      <h2 className="text-secondary font-primaryBold text-lg md:text-xl lowercase -mt-1">
        {!isSpanish ? title : spanish}
      </h2>
    </div>
  );
};

export default SectionTitle;
