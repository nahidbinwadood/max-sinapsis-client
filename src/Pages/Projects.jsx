import { useEffect, useState } from 'react';
import ProjectsSection from '../components/ProjectsSection';
import Title from '../components/Title';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const Projects = () => {
  const axiosPublic = useAxiosPublic();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const response = async () => {
      try{
        const { data } = await axiosPublic('/projects-list');
      const sortedProjects= data?.data.sort((a,b)=>parseInt(a.serial_number)-parseInt(b.serial_number))
      setProjects(sortedProjects || [])
      }catch(err){
        console.log(err.message);
      }
    };
    response();
  }, [axiosPublic]);
  console.log(projects);
  return (
    <section className="pb-12 md:pb-16 lg:pb-24 xl:pb-28 2xl:pb-32 px-5 md:px-8 2xl:px-0">
      <Title title={'projects '} />

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
