/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Sidebar = ({
  isOpen,
  navLinks,
  setOpen,
  sidebarRef,
  spanishNavLinks,
}) => {
  const { isSpanish } = useAuth();
  const currentPath = useLocation().pathname;
  console.log(isSpanish);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 z-10 h-full w-60 transform shadow-lg bg-primary transition-transform duration-500 md:w-64 px-5 py-8 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <Link
            onClick={() => setOpen(false)}
            to="/"
            className="text-xl font-primaryRegular"
          >
            ANALAURA
            <span className="font-primaryBold text-secondary">VARGAS</span>
          </Link>
        </div>

        {/* links */}
        <ul className="flex flex-col w-full gap-4 mt-8">
          {!isSpanish
            ? navLinks?.map((link) => (
                <li key={link?.path}>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to={link?.path}
                    className=""
                  >
                    {/* title */}
                    {currentPath == link.path ? (
                      <span className="font-bold inline-block font-primaryBold text-sm transition duration-200 bg-primary px-5 py-1 border rounded-md ">
                        + {link?.title.toUpperCase()}
                      </span>
                    ) : (
                      <span className="text-secondary font-primaryBold text-sm uppercase px-6 transition duration-200">
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
            : spanishNavLinks?.map((link, index) => (
                <li key={index}>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to={link?.path}
                    className=""
                  >
                    {/* title */}
                    {currentPath == link.path ? (
                      <span className="font-bold inline-block font-primaryBold text-sm transition duration-200 bg-primary px-5 py-1 border rounded-md ">
                        + {link?.title.toUpperCase()}
                      </span>
                    ) : (
                      <span className="text-secondary font-primaryBold text-sm uppercase px-6 transition duration-200">
                        {link?.title === 'Portfolio'
                          ? link?.title.slice(0, 4)
                          : link?.title.slice(0, 3)}
                        <span className="font-primaryRegular">
                          {link?.title === 'Portafolio'
                            ? link?.title.slice(4)
                            : link?.title.slice(3)}
                        </span>
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
