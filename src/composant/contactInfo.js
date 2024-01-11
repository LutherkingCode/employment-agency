import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
  return (
    <div className="bg-sky-900 p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">
        <FontAwesomeIcon icon={faClock} className="text-2xl text-amber-300" />
        <p className="text-lg font-semibold mt-2">Heures d'ouverture:</p>
        <p className="text-white">Lundi - Vendredi: 8h - 16h</p>
      </div>

      <div className="mb-4">
        <FontAwesomeIcon icon={faPhone} className="text-2xl text-amber-300" />
        <p className="text-lg font-semibold mt-2">Service Clientèle:</p>
        <p className="text-gray-600">Numéro de téléphone:</p>
        <a href="tel:+5146076254" className="text-white">514 607 6254</a>
      </div>

      <div className="mb-4">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-amber-300" />
        <p className="text-lg font-semibold mt-2">Adresse:</p>
        <p className="text-white">11550 26e Avenue, Montréal, Québec H1E 2Z5, CA</p>
      </div>

      <div>
        <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-amber-300" />
        <p className="text-lg font-semibold mt-2">Email:</p>
        <a href="mailto:Info@groupeintegralevigilance.com" className="text-white">Info@groupeintegralevigilance.com</a>
      </div>
    </div>
  );
};

export default ContactInfo;
