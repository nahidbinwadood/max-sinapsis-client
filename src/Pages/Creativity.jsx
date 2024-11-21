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
      return data?.data;
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
  return (
    <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
      <Title title="creativity" spanish={'CREATIVIDAD'} />

      <div className=" space-y-5 md:space-y-8 lg:space-y-10">
        {allCreativity?.map((creativity) => (
          <CreativityContainer key={creativity?._id} creativity={creativity} />
        ))}
      </div>
      {/* Content goes here */}

      <div className="mt-5 flex flex-col md:flex-row gap-10 items-stretch">
        {/* <div>
          <div className="md:w-[320px] h-[350px] 2xl:h-full 2xl:max-h-[450px] flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src="https://i.postimg.cc/3JH8tXbc/dp.jpg"
              alt=""
            />
          </div>
        </div> */}
        {/* title */}
        <div>
          {/* <div className="flex items-center gap-3">
            <div className="bg-secondary size-2 sm:size-3 lg:size-[14px] rounded-full" />
            <h2 className="text-[#666633] font-primaryBold md:text-xl lowercase -mt-1 tracking-wide">
              creative leadership
            </h2>
          </div> */}

          {/* description */}
          {/* <p className="ml-5 mt-2 font-primaryTest tracking-wider text-sm md:text-base">
            The leadership of the creative process is the responsibility of{' '}
            <span className="font-primaryMedium">Ana Laura Vargas</span> ,{' '}
            <br />
            costa rican artist:
          </p> */}

          {/* statement */}
          {/* <div className="font-primaryTest text-secondary ml-5 mt-5 md:mt-8 lg:mt-10">
            <h3 className="md:text-xl">Statement</h3>
            <p className="lg:h-3/4 mt-2 text-sm md:text-base tracking-wider text-black">
              The artist is alwlays seeking diverse languages for creativity. I
              have found them exploring painting, drawing, photography,
              ceramics, mosaic, installation, collage, wood, metal, and
              relational art.
            </p>
          </div> */}

          {/* studies */}
          {/* <div className="font-primaryTest text-secondary ml-5 mt-5 md:mt-8 lg:mt-10">
            <h3 className="md:text-xl">Studies</h3>
            <div className="lg:h-3/4 text-sm md:text-base mt-2 tracking-wider text-black space-y-2">
              <p>
                - School of Fine Arts, Universidad Autónoma de Centroamérica,
                emphasis on watercolor.
              </p>
              <p>- Gisela Stradtmann Watercolor Workshop.</p>
              <p>- Pefi Ceramics.</p>
              <p>
                - V Coaching for Management of the Artistic Carreer, MIT from
                the Universidad de Las Palmas de Gran Canaria.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* exhibits */}
      {/* <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 font-primaryTest space-y-5 md:space-y-6 lg:space-y-8 2xl:space-y-10 ml-5 2xl:ml-0">
        {creativityContents?.map((item, idx) => (
          <CreativitySection key={idx} item={item} />
        ))}
      </div> */}

      {/* Membership */}
      {/* <div className="mt-6 md:mt-8 lg:mt-10 font-primaryTest ml-5 2xl:ml-0">
        <div>
          <h3 className="md:text-xl text-secondary">Memberships</h3>
          <div className="space-y-1 mt-2 tracking-wider text-sm md:text-base">
            <p>- Entrenarte Group, guest artist</p>
            <p>- Costa Rican Association of Watercolorists, President.</p>
            <p>- International Watercolor Society</p>
            <p>- Pefi Ceramics, partner.</p>
          </div>
        </div>
      </div> */}

      {/* contributions */}
      {/* <div className="mt-6 md:mt-8 lg:mt-10 ml-5 2xl:ml-0">
        <div className="flex items-center gap-3">
          <div className="bg-secondary size-2 sm:size-3 lg:size-[14px] rounded-full" />
          <h2 className="text-[#666633] font-primaryBold md:text-xl lowercase -mt-1 tracking-wide">
            creative contributions
          </h2>
        </div>

        <div className="font-primaryTest text-sm md:text-base tracking-wider mt-3 md:mt-6 ml-5 space-y-4 md:space-y-6 lg:space-y-8">
          <p>
            Under the leadership of Ana Laura Vargas, creative contributions are
            obtained form other artists and professionals, selected in
            accordance with the specific requirements of each project.
          </p>
          <p>
            We work with specialists in architecture, photography, design and
            hand painting of ceramics, and others, as may be advisable to
            satisfy a client&apos;s artwork needs.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Creativity;
