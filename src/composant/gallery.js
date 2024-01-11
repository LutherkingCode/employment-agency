import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="container my-auto mx-auto lg:grid lg:grid-cols-3 lg:gap-2">
  
      {/* First card */}
      <div className="lg:w-10/12 transition-all duration-300 transform hover:-translate-y-4 space-y-2 rounded-md hover:shadow-xl p-4 mx-auto sm:mx-8">
        <img src={process.env.PUBLIC_URL + "/" + "/entretienMenager3.jpg"} alt="entretien" className="w-full rounded h-auto object-cover lg:h-60" />
        <h1 className="lg:font-bold text-yellow-400 text-center font-antialiased text-xl">Entretien Menager</h1>
        <div className="text-center text-white">
          Nous nous efforçons de trouver des candidats qualifiés et motivés pour répondre
           aux besoins de nos clients dans le domaine du nettoyage et de l'entretien.
        </div>
        <div className="flex justify-center items-center">
          <Link className="bg-amber-400 text-sky-900 my-4 place-self-center text-center shadow p-2 rounded" to="entretien-menager">
            Voir en Détails <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </Link>
        </div>
      </div>



      <div className="lg:w-14/15 rounded-md p-4 transition-all duration-300 transform hover:-translate-y-4 space-y-2 hover:shadow-2xl mx-auto
       flex-grow-2"> {/* Use flex-grow-2 to make it take more space */}
        <img src={process.env.PUBLIC_URL + "/" + "/securite3.jpg"} alt="securite" className="w-full h-auto rounded-md object-cover lg:h-60" />
        <h1 className="lg:font-bold text-yellow-400 text-center font-antialiased text-xl">Securite</h1>
        <div className="text-center text-white">
          Nous nous efforçons de trouver des candidats qualifiés et motivés pour répondre aux besoins de nos clients dans le domaine du nettoyage et de l'entretien.
        </div>

        <div className="flex justify-center items-center">


        <Link className="bg-amber-400 text-sky-900 my-4 place-self-center text-center shadow p-2 rounded" to="securite">
            Voir en Détails <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </Link>
      </div>
      </div>

      {/* Second card */}
      <div className="lg:w-10/12 rounded-md transition-all p-4 duration-300 transform hover:-translate-y-4 space-y-2 hover:shadow-2xl mx-auto">
        <img src={process.env.PUBLIC_URL + "/" + "/sante.jpg"} alt="sante" className="w-full rounded-md h-auto object-cover lg:h-60" />
        <h1 className="lg:font-bold text-yellow-400 text-center font-antialiased text-xl">Sante</h1>
        <div className="text-center text-white">
          Nous nous efforçons de trouver des candidats qualifiés et motivés pour répondre aux besoins de nos clients dans 
          le domaine du nettoyage et de l'entretien.

          <div className="flex justify-center items-center">
        </div> <Link className="bg-amber-400 text-sky-900 my-4 place-self-center text-center shadow p-2 rounded" to="sante">
            Voir en Détails <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </Link>
        
      </div>
      </div>

     

    </div>
  );
};

export default Gallery;
