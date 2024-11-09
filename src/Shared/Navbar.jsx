import { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/logo.png';
import {
  DownArrowSvg,
  HomeIconSvg,
  SpainSvg,
  UnitedStatesSvg,
} from '../components/SvgContainer';
import NavLinks from '../components/NavLinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState('EN');
  const [showLanguage, setShowLanguage] = useState(false);
  const languageRef = useRef(null);
  const languages = [
    {
      name: 'English-US',
      code: 'EN',
      svg: <UnitedStatesSvg />,
    },
    {
      name: 'español - Es',
      code: 'ES',
    },
  ];
  const navLinks = [
    {
      title: 'About',
      path: '/',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Projects',
      path: '/projects',
    },
    {
      title: 'Portfolio',
      path: '/portfolio',
    },
    {
      title: 'Creativity',
      path: '/creativity',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguage(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className="">
      <div className="bg-primary">
        <div className="container mx-auto flex items-center justify-between py-7">
          {/* logo */}
          <div>
            <Link to="/">
              <img
                className="w-full max-w-[400px] h-full object-cover"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="flex items-center gap-6 text-secondary ">
            <h2 className="text-3xl font-primaryRegular">
              ANALAURA
              <span className="font-primaryBold text-secondary">VARGAS</span>
            </h2>
            <div className="flex items-center gap-4">
              <HomeIconSvg />

              {/* language */}
              <div className="relative">
                <div
                  onClick={() => setShowLanguage(!showLanguage)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {language === 'EN' ? <UnitedStatesSvg /> : <SpainSvg />}
                  <DownArrowSvg />
                </div>

                {/* flags */}
                <div
                  className={`bg-secondary text-white font-primaryMedium  p-4 rounded-lg shadow-lg absolute min-w-44 -right-10 ${
                    showLanguage
                      ? 'translate-y-3 opacity-100 transition-transform duration-300 z-10'
                      : 'translate-y-5 opacity-0 transition-transform duration-300 -z-10'
                  }`}
                >
                  <div ref={languageRef} className="flex flex-col gap-2">
                    {languages.map((lang) => (
                      <div key={lang?.name}>
                        <input
                          type="radio"
                          name="language"
                          id={lang?.name}
                          className="peer hidden"
                          onChange={() => {}}
                          checked={language == lang?.code}
                        />
                        <label
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLanguage(false);
                          }}
                          htmlFor={lang?.name}
                          className="flex items-center gap-2 cursor-pointer before:content-[''] before:size-4 before:bg-white before:rounded-full peer-checked:before:bg-secondary   before:border before:border-white peer-checked:before:border-[4px]"
                        >
                          <span>{lang?.name}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto py-8 border-b-2 border-secondary">
        <NavLinks navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
