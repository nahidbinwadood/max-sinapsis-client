import { useQuery } from '@tanstack/react-query';
import Title from '../components/Title';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import LoadingPage from '../components/LoadingPage';
import CreativityContainer from '../components/CreativityContainer';

const Creativity = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allCreativity = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['allCreativity'],
    queryFn: async () => {
      const { data } = await axiosPublic('/creativity');
      const updatedCreativity = data.data.sort(
        (a, b) => a.position - b.position
      );
      return updatedCreativity;
    },
  });

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return (
      <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
        <Title title="creativity" spanish={'CREATIVIDAD'} />
        <div className="text-red-500">
          Error loading Creativity: {error.message}
        </div>
      </section>
    );
  }

  console.log(allCreativity);
  return (
    <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
      <Title title="creativity" spanish={'CREATIVIDAD'} />

      <div className=" space-y-5 md:space-y-8 lg:space-y-10">
        {allCreativity?.map((creativity) => (
          <CreativityContainer key={creativity?._id} creativity={creativity} />
        ))}
      </div>
    </section>
  );
};

export default Creativity;
