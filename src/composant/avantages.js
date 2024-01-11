import React from 'react';
import { FaMoneyCheckAlt, FaClock, FaUmbrella, FaHandshake } from 'react-icons/fa';


const advantages = [
  {
    icon: FaMoneyCheckAlt,
    title: 'Paiment hebdomadaire',
    description: 'Recevez vos payes toutes les semaines',
    color: 'text-sky-900',
    bgColor: 'bg-white',
  },
  {
    icon: FaClock,
    title: 'Horaire Flexible',
    description: 'Conciliez travail et obligations familiales',
    color: 'text-sky-900',
    bgColor: 'bg-amber-300',
  },
  {
    icon: FaUmbrella,
    title: 'Vacances',
    description: 'Prenez vos vacances ou votre argent comme vous voulez',
    color: 'text-white',
    bgColor: 'bg-gray-500',
  },
  {
    icon: FaHandshake,
    title: 'Avantages Sociaux',
    description: 'Bénéficiez de nombreux avantages sociaux grâce à des programmes spéciaux',
    color: 'text-white',
    bgColor: 'bg-sky-900',
  },
];

const Advantage = ({ icon: Icon, title, description, color, bgColor }) => (
  <fieldset className={`my-4 md:w-1/4 md:relative w-full relative animate-scroll-right ${bgColor} rounded-lg shadow-lg p-4`}>
    <div className="flex items-start justify-start">
      <Icon className={`text-4xl ${color}`} />
      <div className="ml-2">
        <div className={`text-xl font-bold ${color}`}>{title}</div>
        <p className={`text-xs text-center ${color} lg:text-md mt-2`}>{description}</p>
      </div>
    </div>
  </fieldset>
);

const Avantages = () => {
  return (
    <div className="text-center text-md md:text-4xl  text-white p-8 font-serif  font-bold bg-sky-900">
      Ce que nous offrons
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex md:divide-x md:divide-y">
        {advantages.map((advantage, index) => (
          <Advantage key={index} {...advantage} />
        ))}
      </div>
    </div>
  );
};

export default Avantages;
