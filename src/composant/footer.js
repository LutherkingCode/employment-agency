import React from "react";
import { Link } from "react-router-dom";
import FormulaireSubscription from "./subscription";

const Footer = () => {
  return (
    <div className="border-2 sticky top-0 border-white bg-white">
      <div className="lg:hidden flex justify-center items-center">
        <FormulaireSubscription />
      </div>

      <div className="grid m-auto p-3 grid-cols-2 lg:flex md:flex text-sky-900 lg:space-x-64 items-center lg:justify-center">
        <div className="lg:w-1/4 hidden lg:flex items-center justify-center">
          <FormulaireSubscription />
        </div>
        <div>
          <p className="font-bold font-sans-serif">Plan du site</p>
          <ul>
            <li>
              <Link to="/" className="underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/service" className="underline">
                Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold">Entreprise</p>

          <Link to="/apropos" className="text-sky-900 underline">
            A propos
          </Link>
          <div className="flex items-center space-x-2">
            <a href="/politique.pdf" download className="underline text-sky-900">
              Politique
            </a>
          </div>

          <Link to="/terms" className="underline">
            Termes et conditions
          </Link>
        </div>
      </div>

      <p className="text-center bg-sky-900 text-white">
        &copy; 2023 All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
