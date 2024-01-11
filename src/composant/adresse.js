import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Adresse() {
  const handlePhoneClick = () => {
    window.location.href = "tel:+5146076254";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:Info@groupeintegralevigilance.com";
  };

  return (
    <div className="rounded p-4 justify-center items-center flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 shadow-lg">
      <div className="md:w-12 md:h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" />
      </div>
      <div className="bg-blue-500 rounded p-4 text-white flex flex-col justify-center items-center">
        <p className="text-center text-lg font-semibold">Adresse: 11550 26e Avenue, <br />Montréal, Québec H1E 2Z5, CA</p>
      </div>

      <div className="md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
      </div>
      <div className="bg-yellow-500 rounded p-4 text-white flex flex-col justify-center items-center cursor-pointer" onClick={handleEmailClick}>
        <p className="text-center text-lg font-semibold">Email: Info@groupeintegralevigilance.com</p>
      </div>

      <div className="md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-blue-600">
        <FontAwesomeIcon icon={faPhone} className="text-2xl" />
      </div>
      <div className="bg-yellow-500 rounded p-4 text-blue-600 flex flex-col justify-center items-center cursor-pointer" onClick={handlePhoneClick}>
        <p className="text-center text-lg font-semibold leading-relaxed">Tel: 514 607 6254</p>
      </div>
    </div>
  );
}
