/* eslint-disable react/prop-types */
import { NavLink, useLocation } from 'react-router-dom';

const NavLinks = ({ navLinks }) => {
  const currentPath = useLocation().pathname;

  return (
    <>
      <ul className="flex items-center w-full gap-8 ">
        {navLinks?.map((link) => (
          <li key={link?.path}>
            <NavLink
              to={link?.path}
              className=''
            >
              {/* title */}
              {currentPath == link.path ? (
                <span className="font-bold inline-block font-primaryBold text-xl px-6 transition duration-200 bg-primary pt-[5px] pb-2.5 border rounded-md ">+ {link?.title}</span>
              ) : (
                <span className="text-secondary font-primaryBold text-xl uppercase px-6 transition duration-200">
                  {link?.title === 'Portfolio'
                    ? link?.title.slice(0, 4)
                    : link?.title.slice(0, 3)}
                  <span className="font-primaryRegular">
                    {link?.title.slice(3)}
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
