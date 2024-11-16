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
  const { isSpanish, setIsSpanish } = useAuth();
  const currentPath = useLocation().pathname;

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 z-10 h-full w-60 transform shadow-lg bg-primary transition-transform duration-500 md:w-64 px-5 py-8  ${
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

        {/* language */}
        <div className=" flex flex-col mt-8 gap-5 text-sm">
          <h4
            onClick={() => setIsSpanish(false)}
            className={`border ${
              !isSpanish
                ? 'border-secondary font-primaryBold'
                : 'border-secondary/50 font-primaryTest'
            } px-2 rounded py-1 w-32 flex items-center justify-center`}
          >
            English
          </h4>
          <h5
            onClick={() => setIsSpanish(true)}
            className={`border ${
              isSpanish
                ? 'border-secondary font-primaryBold'
                : 'border-secondary/50 font-primaryTest'
            } px-2 rounded py-1 w-32 flex items-center justify-center`}
          >
            Spanish
          </h5>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
