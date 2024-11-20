import { ScaleLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="text-center">
        <ScaleLoader
          color="#000" // Spinner color
          height={35}
          width={4}
          radius={2}
          margin={2}
          aria-label="Loading Spinner"
        />
        <p className="mt-4 text-lg text-secondary font-primaryLightBold">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
