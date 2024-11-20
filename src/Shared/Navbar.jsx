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
import useAuth from '../Hooks/useAuth';
import Hamburger from 'hamburger-react';
import Sidebar from '../components/Sidebar';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { setIsSpanish } = useAuth();
  const [language, setLanguage] = useState('EN');
  const [showLanguage, setShowLanguage] = useState(false); // Main language dropdown
  const [showLanguageHamburger, setShowLanguageHamburger] = useState(false); // Hamburger language dropdown
  const languageRef = useRef(null);
  const sidebarRef = useRef();
  const hamburgerRef = useRef();
  const languages = [
    {
      name: 'English-US',
      code: 'EN',
      svg: <UnitedStatesSvg />,
    },
    {
      name: 'español - Es',
      code: 'ES',
      svg: <SpainSvg />,
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
  const spanishNavLinks = [
    {
      title: 'Acerca de',
      path: '/',
    },
    {
      title: 'Servicios',
      path: '/services',
    },
    {
      title: 'Proyectos',
      path: '/projects',
    },
    {
      title: 'Portafolio',
      path: '/portfolio',
    },
    {
      title: 'Creatividad',
      path: '/creativity',
    },
    {
      title: 'Contacto',
      path: '/contact',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    if (language === 'EN') {
      setIsSpanish(false);
    } else if (language === 'ES') {
      setIsSpanish(true);
    }

    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguage(false);
      }

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, language, setIsSpanish]);

  console.log(language);

  return (
    <nav>
      <div className="bg-primary px-5 md:px-8 2xl:px-0">
        <div className="container mx-auto flex items-center justify-between py-4 md:py-6 lg:py-7">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                className="w-full max-w-[170px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[400px] h-full object-cover"
                src={logo}
                alt=""
              />
            </Link>
          </div>

          {/* Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="relative">
              <div
                onClick={() => setShowLanguageHamburger(!showLanguageHamburger)}
                className="flex items-center gap-2 cursor-pointer"
              >
                {language === 'EN' ? <UnitedStatesSvg /> : <SpainSvg />}
              </div>

              {/* Hamburger Language Flags */}
              <div
                className={`bg-secondary text-white font-primaryMedium p-4 rounded-lg shadow-lg absolute min-w-44 -right-10 ${
                  showLanguageHamburger
                    ? 'translate-y-3 opacity-100 transition-transform duration-300 z-10'
                    : 'translate-y-5 opacity-0 transition-transform duration-300 -z-10'
                }`}
              >
                <div ref={languageRef} className="flex flex-col gap-2">
                  {languages.map((lang) => (
                    <div key={lang.code}>
                      <input
                        type="radio"
                        name="language"
                        id={lang.name}
                        className="peer hidden"
                        onChange={() => {}}
                        checked={language === lang.code}
                      />
                      <label
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguageHamburger(false); // Close dropdown after selection
                        }}
                        htmlFor={lang.name}
                        className={`flex items-center gap-2 cursor-pointer text-sm font-primaryMedium`}
                      >
                        {lang.svg} <span>{lang.name}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div ref={hamburgerRef} className="lg:hidden">
              <Hamburger
                color="#666633"
                size={20}
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
          </div>

          {/* Desktop Language Selector */}
          <div className="lg:flex items-center gap-6 text-secondary hidden">
            <Link to="/" className="text-2xl xl:text-3xl font-primaryRegular">
              ANALAURA
              <span className="font-primaryBold text-secondary">VARGAS</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/">
                <HomeIconSvg />
              </Link>

              {/* Language */}
              <div className="relative">
                <div
                  onClick={() => setShowLanguage(!showLanguage)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {language === 'EN' ? <UnitedStatesSvg /> : <SpainSvg />}
                  <DownArrowSvg />
                </div>

                {/* Desktop Language Flags */}
                <div
                  className={`bg-secondary text-white font-primaryMedium p-4 rounded-lg shadow-lg absolute min-w-44 -right-10 ${
                    showLanguage
                      ? 'translate-y-3 opacity-100 transition-transform duration-300 z-10'
                      : 'translate-y-5 opacity-0 transition-transform duration-300 -z-10'
                  }`}
                >
                  <div ref={languageRef} className="flex flex-col gap-2">
                    {languages.map((lang) => (
                      <div key={lang.code}>
                        <input
                          type="radio"
                          name="language"
                          id={lang.name}
                          className="peer hidden"
                          onChange={() => {}}
                          checked={language === lang.code}
                        />
                        <label
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLanguage(false); // Close dropdown after selection
                          }}
                          htmlFor={lang.name}
                          className="flex items-center gap-2 cursor-pointer before:content-[''] before:size-4 before:bg-white before:rounded-full peer-checked:before:bg-secondary before:border before:border-white peer-checked:before:border-[4px] text-sm"
                        >
                          {lang.svg} <span>{lang.name}</span>
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

      {/* Navbar Links */}
      <div className="mx-5 md:mx-8 2xl:w-[1200px] 2xl:mx-auto lg:py-4 2xl:py-8 border-b-2 border-secondary hidden lg:block">
        <NavLinks navLinks={navLinks} spanishNavLinks={spanishNavLinks} />
      </div>

      {/* Sidebar */}
      <Sidebar
        sidebarRef={sidebarRef}
        isOpen={isOpen}
        setOpen={setOpen}
        navLinks={navLinks}
        spanishNavLinks={spanishNavLinks}
      />
    </nav>
  );
};

export default Navbar;
