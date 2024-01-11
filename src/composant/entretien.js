import React from 'react';

import Accordion from './accordion';
import Avantages from './avantages';

const Entretien = () => {


  const accordionItems = [
    {
      title: 'Entretien général et régulier',
      text: 'Description for Entretien général et régulier goes here.',
    },
    {
      title: 'Décapage, récurage, polissage et cirage des planchers',
      text: 'Description for Décapage, récurage, polissage et cirage des planchers goes here.',
    },
    {
      title: 'Lavage des tapis',
      text: 'Description for Lavage des tapis goes here.',
    },
    {
      title: 'Nettoyage après construction',
      text: 'Description for Nettoyage après construction goes here.',
    },
    {
      title: 'Entretien de systèmes d’éclairage',
      text: 'Description for Entretien de systèmes d’éclairage goes here.',
    },
    {
      title: 'Désinfection et stérilisation',
      text: 'Description for Désinfection et stérilisation goes here.',
    },
    {
      title: 'Lavage de vitres',
      text: 'Description for Lavage de vitres goes here.',
    },
  ];
  
  return (

    <div id="sante" className="bg-gradient-to-r from-sky-900">
    <di></di>

    <br />
    <br />
    <h2 className="text-xl text-center text-amber-400  text-sky-900 text-shadow-xl font-extrabold py-2 mt-2">
      SECURITE
    </h2>
    <br />
    <br />

    <div className="md:flex flex-wrap justify-center text-left mx-2 md:mx-32">
      <div className="w-full md:w-1/3">
        <div className="text-white text-md font-base md:text-4xl">
          La securite de vos biens et immmeubles<br></br>Notre Souci...
        </div>
        <br></br>
        Confiez nous la tache de proteger votre entreprise <br></br>
        et tout se deroulera bien Nous avons une equipe motivée, mobilisee,
        passionee et tout une gamme de solutions afin de rendre heureux nos
        precieux clients
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-center">
          <a
            className="bg-yellow-400 text-sky-900 w-64 my-4 place-self-center text-center shadow p-2 rounded"
            href="/contact"
          >
            Je suis intéressé (e)
          </a>
        </div>
      </div>

      <div className="w-full p-2 md:w-1/4">
        <img
          src={process.env.PUBLIC_URL + "/entretien7.jpg"}
          alt="entretien"
          className="rounded shadow"
        />
      </div>

      <div className="w-full p-4 space-y-4 md:w-1/3">
        <img
          src={process.env.PUBLIC_URL +  "/entretien5.jpg"}
          alt="entretien"
          className="rounded hidden md:block shadow w-full md:w-1/2"
        />
        <img
          src={process.env.PUBLIC_URL +  "/entretien6.jpg"}
          alt="entretien"
          className="rounded hidden md:block shadow w-full  object-cover md:w-1/2"
        />
      </div>
    </div>

    <Accordion items={accordionItems} />
    

    <Avantages />
    
  </div>
   
  );
};

export default Entretien;
