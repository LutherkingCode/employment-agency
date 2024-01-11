
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faInfoCircle, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }
  

  return (
    <>
      <nav
        className='bg-white font-sans shadow text-slim-800 z-40 sticky border-b border-1 border-sky-900  fixed top-0 w-full'
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src={process.env.PUBLIC_URL + "/logo2.jpg"}

                alt="logo"
                className="h-16 text-white font-bold text-lg"
              />
              <span className="ml-2 text-sky-900   text-xs  md:text-base font-bold font-monospace lg:text-xl">
                Groupe Integrale Vigilence
              </span>
            </div>

            <div className="hidden lg:flex ">
              <ul className="flex justify-center space-x-20">
                <li>
                  <NavLink
                    exact
                    to="/"
                    activeClassName="underline"
                    className="text-sky-900 hover:bg-sky-900
                     hover:text-white flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <FontAwesomeIcon icon={faHome} />
                    <span>Accueil</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    activeClassName="underline"
                    className="text-sky-900 hover:bg-sky-900 hover:text-white 
                    flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <FontAwesomeIcon icon={faCog} />
                    <span>Service</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/apropos"
                    activeClassName="underline"
                    className="text-sky-900 hover:bg-sky-900 hover:text-white flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <span>A propos</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <NavLink
                to="/contact"

                className="bg-sky-900 border-2 text-yellow-400 
                rounded-md text-base font-medium py-1 px-4 hover:text-white ml-auto"
              >
                Nous Contacter
              </NavLink>
            </div>




            <div className="sm:flex lg:hidden items-center">
              <button
              
              onClick={toggleMenu}
                type="button"
                className="bg-sky-900  text-white
                 flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 z-50 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                exact
                to="/"
                activeClassName="underline"
                className="text-black hover:text-white flex items-center
                 space-x-2 block px-3 py-2 rounded-md text-base font-medium"
              >
                <FontAwesomeIcon icon={faHome} />
                <span>Accueil</span>
              </NavLink>

              <NavLink
                to="/service"
                activeClassName="underline"
                className="text-black hover:text-white flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium"
              >
                <FontAwesomeIcon icon={faCog} />
                <span>Service</span>
              </NavLink>
              <NavLink
                to="/apropos"
                activeClassName="underline"
                className="text-black hover:text-white flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium"
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                <span>A propos</span>
              </NavLink>

              <NavLink
                to="/contact"
                className="bg-sky-900 border-2 text-white rounded py-1 px-4 hover:text-white block mt-2"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
