import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faStar, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

const ValeursEntreprise = () => {
  return (
    <div className="md:p-8 font-serif">
      <h1 className="text-center text-white font-bold">NOS VALEURS</h1>
      <br />
      <br />

      <div className="flex  md:text-lg flex-wrap justify-center lg:justify-between">
        <div className="mb-4 flex items-center justify-center">
          <div className="mr-4 text-yellow-400">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          </div>
          <div className="text-left">
            <h2 className="font-bold">Intégrité</h2>
            Nous sommes guidés par des normes éthiques élevées et 
            nous nous engageons à agir avec intégrité dans toutes
            nos interactions professionnelles. <br></br>
            Nous traitons nos clients, nos employés et notre communauté avec honnêteté, transparence et respect.
          </div>
        </div>

        <div className="mb-4 flex items-center justify-center">
          <div className="mr-4  text-yellow-400">
            <FontAwesomeIcon icon={faStar} size="2x" />
          </div>
          <div className="text-left">
            <h2 className="font-bold">Qualité</h2>
            Nous nous efforçons d'offrir des services de sécurité de la plus haute qualité.<br></br>
            Nous sommes déterminés à atteindre l'excellence opérationnelle et à dépasser les attentes de nos clients en 
            fournissant des solutions adaptées à leurs besoins spécifiques. Nous nous engageons à maintenir les normes les plus élevées dans tout ce que nous faisons.
          </div>
        </div>

        <div className="mb-4 flex items-center justify-center">
          <div className="mr-4 text-yellow-400">
            <FontAwesomeIcon icon={faHandsHelping} size="2x" />
          </div>
          <div className="text-left">
            <h2 className="font-bold">Collaboration</h2>
            Nous croyons en la puissance de la collaboration et du travail d'équipe. <br></br>
            Nous encourageons la participation active de notre équipe et la collaboration avec
            nos clients pour atteindre des résultats exceptionnels. Nous valorisons les idées,
            les perspectives et les contributions de chacun dans un environnement inclusif et respectueux.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValeursEntreprise;
