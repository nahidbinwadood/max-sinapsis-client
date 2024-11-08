import { Link } from 'react-router-dom';
import { CaptionSvg } from '../components/SvgContainer';

const Footer = () => {
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
      title: 'Artwork',
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
  return (
    <footer className="bg-secondary py-16">
      {/* top part */}
      <div className="flex flex-col text-center items-center justify-center font-primaryRegular text-white text-xl">
        <div>
          <div>
            <a className="underline" href="mailto:analaura@projectartwork.com">
              analaura@projectartwork.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:(506) 2289-7141">(506) 2289-7141</a>
            <span>/</span>
            <a href="tel:(506) 7017-7472"> (506) 7017-7472</a>
          </div>
        </div>
        <div className="mt-8">
          <ul className="flex items-center justify-between gap-24 text-lg tracking-wider">
            {navLinks.map((link) => (
              <li key={link?.title}>
                <Link to={link?.path}>{link?.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white my-10 w-[1200px]" />
        <div className="flex items-center justify-center">
          <span className='flex items-center gap-3 justify-center text-base'>
            <CaptionSvg />
            <span className='opacity-85'>2024.All rights reserved.</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
