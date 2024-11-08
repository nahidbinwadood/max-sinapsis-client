import { useEffect, useRef, useState } from 'react';
import {
  DownArrowSvg,
  HomeIconSvg,
  SpainSvg,
  UnitedStatesSvg,
} from '../components/SvgContainer';

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
    <nav className="bg-primary font-primaryRegular ">
      <div className="container mx-auto flex items-center justify-between py-7">
        {/* logo */}
        <div>
          <div>
            <h1 className="font-logoFont text-secondary text-5xl">
              project artwork
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <h2 className="text-3xl font-extralight">
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
    </nav>
  );
};

export default Navbar;
