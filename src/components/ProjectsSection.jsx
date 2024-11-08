/* eslint-disable react/prop-types */
const ProjectsSection = ({ project }) => {
  const { title, location, description } = project;
  return (
    <div className="flex gap-5">
      <div className="size-2 bg-secondary rounded-full flex-shrink-0" />
      <div className="-mt-2">
        <h3 className="text-secondary font-primaryTest tracking-wider text-xl lowercase">
          {title} -<span className="text-[#333]">{location && location}</span>
        </h3>
        <p className="text-[#333] font-primaryTest tracking-wider text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;
