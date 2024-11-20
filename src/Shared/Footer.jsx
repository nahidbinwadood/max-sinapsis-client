import { Link } from 'react-router-dom';
import { CaptionSvg } from '../components/SvgContainer';
import useAuth from '../Hooks/useAuth';

const Footer = () => {
  const { isSpanish } = useAuth();
  const navLinks = [
    {
      title: 'Home',
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
      title: 'Hogar',
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
  return (
    <footer className="bg-secondary py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 overflow-x-hidden">
      {/* top part */}
      <div className="flex flex-col text-center items-center justify-center font-primaryTest text-white text-xl px-5 md:px-8 2xl:px-0">
        <div>
          <div>
            <a
              className="underline text-sm md:text-base"
              href="mailto:analaura@projectartwork.com"
            >
              analaura@projectartwork.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base">
            <a href="tel:(506) 2289-7141">(506) 2289-7141</a>
            <span>/</span>
            <a href="tel:(506) 7017-7472"> (506) 7017-7472</a>
          </div>
        </div>
        <div className="mt-5 md:mt-7 lg:mt-8">
          <ul className="flex text-sm md:text-base flex-col md:flex-row gap-3 md:gap-5 items-center justify-between 2xl:gap-24 lg:text-lg tracking-wider">
            {!isSpanish
              ? navLinks.map((link) => (
                  <li key={link?.title}>
                    <Link to={link?.path}>{link?.title}</Link>
                  </li>
                ))
              : spanishNavLinks.map((link) => (
                  <li key={link?.title}>
                    <Link to={link?.path}>{link?.title}</Link>
                  </li>
                ))}
          </ul>
        </div>

        <div className="border-t border-white my-6 md:my-8 lg:my-10 w-[1200px]" />
        <div className="flex items-center justify-center">
          <span className="flex items-center gap-3 justify-center text-sm md:text-base">
            <CaptionSvg />
            <span className="opacity-85">
              {!isSpanish
                ? '2024.All rights reserved.'
                : '2024.Todos los derechos reservados.'}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
