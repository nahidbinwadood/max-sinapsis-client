/* eslint-disable react/prop-types */
const Title = ({ title }) => {
  return (
    <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10">
      <h1 className="text-xl md:text-2xl font-primaryBold lowercase">
        <span>+</span> {title}
      </h1>
    </div>
  );
};

export default Title;
