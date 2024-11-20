/* eslint-disable react/prop-types */
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const NavLinks = ({ navLinks, spanishNavLinks }) => {
  const { isSpanish } = useAuth();
  const currentPath = useLocation().pathname;

  return (
    <>
      <ul className="flex items-center justify-evenly w-full gap-8 ">
        {!isSpanish
          ? navLinks?.map((link) => (
              <li key={link?.path}>
                <NavLink to={link?.path} className="text-nowrap">
                  {/* title */}
                  {currentPath == link.path ? (
                    <span className="font-bold inline-block font-primaryBold 2xl:text-lg transition duration-200 bg-primary lg:px-3 2xl:px-6 py-2 border rounded-md ">
                      + {link?.title.toUpperCase()}
                    </span>
                  ) : (
                    <span className="text-secondary font-primaryBold xl:text-lg 2xl:text-xl uppercase lg:px-3 2xl:px-6 transition duration-200">
                      {link?.title === 'Portfolio'
                        ? link?.title.slice(0, 4)
                        : link?.title.slice(0, 3)}
                      <span className="font-primaryRegular">
                        {link?.title === 'Portfolio'
                          ? link?.title.slice(4)
                          : link?.title.slice(3)}
                      </span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))
          : spanishNavLinks?.map((link) => (
              <li key={link?.path}>
                <NavLink to={link?.path} className="text-nowrap">
                  {/* title */}
                  {currentPath == link.path ? (
                    <span className="font-bold inline-block font-primaryBold 2xl:text-lg transition duration-200 bg-primary lg:px-3 2xl:px-6 py-2 border rounded-md ">
                      + {link?.title.toUpperCase()}
                    </span>
                  ) : (
                    <span className="text-secondary font-primaryBold xl:text-lg 2xl:text-xl uppercase lg:px-3 2xl:px-6 transition duration-200">
                      {link?.title === 'Portfolio'
                        ? link?.title.slice(0, 4)
                        : link?.title.slice(0, 3)}
                      <span className="font-primaryRegular">
                        {link?.title === 'Portfolio'
                          ? link?.title.slice(4)
                          : link?.title.slice(3)}
                      </span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
      </ul>
    </>
  );
};

export default NavLinks;
