/* eslint-disable react/prop-types */

const CreativitySection = ({ item }) => {
  const { title, description } = item;
  return (
    <div>
      {/* title */}
      <h3 className="md:text-xl tracking-wider text-secondary">{title}</h3>
      <div className="text-base text-black mt-2 tracking-wider leading-[1.7]">
        {description?.map((item) => (
          <p className="text-sm md:text-base" key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default CreativitySection;
