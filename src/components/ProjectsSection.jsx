import useAuth from '../Hooks/useAuth';
import parse from 'html-react-parser';

/* eslint-disable react/prop-types */
const ProjectsSection = ({ project }) => {
  const { isSpanish } = useAuth();
  const {
    title_IINN,
    title_EESS,
    location_IINN,
    location_EESS,
    description_IINN,
    description_EESS,
  } = project;

  return (
    <div className="flex gap-4 md:gap-5">
      <div className="size-2 sm:size-3 lg:size-[14px] bg-secondary rounded-full flex-shrink-0" />
      <div className="-mt-2">
        <h3 className=" font-primaryBold tracking-wider md:text-xl lowercase text-secondary">
          {!isSpanish ? title_EESS : title_IINN} -{' '}
          <span className="font-primaryTest text-black">
            {!isSpanish ? location_EESS : location_IINN}
          </span>
        </h3>
        <p className="text-secondary font-primaryTest tracking-wider text-sm md:text-base">
          {!isSpanish ? parse(description_EESS) : parse(description_IINN)}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;
