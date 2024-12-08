import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Hooks/useAxiosPublic';

import AboutContainer from '../components/AboutContainer';
import LoadingPage from '../components/LoadingPage';

const fetchAboutData = async (axiosPublic) => {
  const response = await axiosPublic.get('/about',);
  return [response?.data?.data[0]]; // Return the first item wrapped in an array
};

const Homepage = () => {
  const axiosPublic = useAxiosPublic();

  // Use TanStack Query for fetching data
  const {
    data: aboutData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['about'], // Unique key for the query
    queryFn: () => fetchAboutData(axiosPublic), // Fetcher function
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    retry: 1, // Retry once on failure
  });


  console.log(aboutData);
  if (isLoading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  if (isError) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <>
      {aboutData.map((item, index) => (
        <AboutContainer key={index} item={item} />
      ))}
    </>
  );
};

export default Homepage;
