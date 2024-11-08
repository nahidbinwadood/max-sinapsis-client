/* eslint-disable react/prop-types */
const Title = ({ title }) => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-primaryBold">
        <span>+</span> {title}
      </h1>
    </div>
  );
};

export default Title;
