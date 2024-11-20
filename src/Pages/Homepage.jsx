import { useEffect, useState } from 'react';
import useAuth from './../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';

import AboutContainer from '../components/AboutContainer';

const Homepage = () => {

  const [aboutData, setAboutData] = useState([]);

  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const response = async () => {
      const { data } = await axiosPublic.get('/about');
      setAboutData([data.data[0]]);
    };
    response();
  }, [axiosPublic]);



  return (
    <>
      {aboutData?.map((item, index) => (
        <AboutContainer key={index} item={item} />
      ))}
    </>
  );
};

export default Homepage;
