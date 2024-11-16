/* eslint-disable react/prop-types */
const ProjectsSection = ({ project }) => {
  const { title, location, description } = project;
  return (
    <div className="flex gap-4 md:gap-5">
      <div className="size-2 sm:size-3 lg:size-[14px] bg-secondary rounded-full flex-shrink-0" />
      <div className="-mt-2">
        <h3 className=" font-primaryBold tracking-wider md:text-xl lowercase text-secondary">
          {title} - <span className="font-primaryTest text-black">{location && location}</span>
        </h3>
        <p className="text-secondary font-primaryTest tracking-wider text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;
