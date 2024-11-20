import useAuth from '../Hooks/useAuth';

/* eslint-disable react/prop-types */
const Title = ({ title, spanish }) => {
  const { isSpanish } = useAuth();
  return (
    <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10">
      <h1 className="text-xl md:text-2xl font-primaryBold lowercase">
        <span>+</span> {!isSpanish ? title : spanish}
      </h1>
    </div>
  );
};

export default Title;
