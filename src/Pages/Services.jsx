import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ServicesContainer from '../components/ServicesContainer';
import Title from '../components/Title';
import LoadingPage from '../components/LoadingPage';

const Services = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch services using TanStack Query
  const {
    data: services = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['services'], // Unique query key for caching
    queryFn: async () => {
      const { data } = await axiosPublic('/services');
      const updatedServices = data?.data?.sort(
        (a, b) => a.serial_number - b.serial_number
      );
      return updatedServices;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    cacheTime: 1000 * 60 * 30, // Retain cache for 30 minutes
    retry: 1, // Retry once on failure
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return (
      <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
        <Title title={'services'} spanish={'SERVICIOS'} />
        <div className="text-red-500">
          Error loading services: {error.message}
        </div>
      </section>
    );
  }

  console.log(services);

  return (
    <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
      <Title title={'services'} spanish={'SERVICIOS'} />
      {services?.length > 0 ? (
        services.map((service) => (
          <ServicesContainer service={service} key={service?._id} />
        ))
      ) : (
        <div>No services available at the moment.</div>
      )}
    </section>
  );
};

export default Services;
