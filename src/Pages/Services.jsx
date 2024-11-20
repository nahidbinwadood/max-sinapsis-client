import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ServicesContainer from '../components/ServicesContainer';
import Title from '../components/Title';

const Services = () => {
  const axiosPublic = useAxiosPublic();
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const { data } = await axiosPublic('/services');
      return data?.data;
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    cacheTime: 1000 * 60 * 30, // Retain cache for 30 minutes
    retry: 1, // Retry once on failure
  });

  return (
    <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
      <Title title={'services'} spanish={'SERVICIOS'} />
      {services?.map((service) => (
        <ServicesContainer service={service} key={service?._id} />
      ))}
    </section>
  );
};

export default Services;
