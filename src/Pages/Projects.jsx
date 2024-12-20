import { useQuery } from '@tanstack/react-query';
import ProjectsSection from '../components/ProjectsSection';
import Title from '../components/Title';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import LoadingPage from '../components/LoadingPage';


const Projects = () => {
  const axiosPublic = useAxiosPublic();

  // UseQuery Hook
  const {
    data: projects = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['projects', axiosPublic], // Pass query key as an array
    queryFn: async () => {
      const { data } = await axiosPublic('/projects-list');
      return data?.data.sort(
        (a, b) => parseInt(a.position) - parseInt(b.position)
      );
    },
  });
  console.log(projects);
  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return (
      <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
        <Title title={'projects'} spanish={'PROYECTOS'} />
        <div className="ml-5 mt-6 text-red-500">Error: {error.message}</div>
      </section>
    );
  }

  return (
    <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
      <Title title={'projects'} spanish={'PROYECTOS'} />

      {/* Projects section */}
      <div className="ml-5 mt-6 space-y-5">
        {projects.map((project, idx) => (
          <ProjectsSection key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
