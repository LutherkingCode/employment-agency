import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  const [years, setYears] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [partners, setPartners] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    let incrementSpeed = 0.5; // Initial increment speed
    let hasIncremented = false; // Flag to track if the counter has incremented

    const updateCounters = () => {
      if (!hasIncremented) {
        if (years < 3) {
          setYears((prevYears) => prevYears + incrementSpeed);
        } else {
          setYears(3); // Arrêter le compteur à 3 ans
        }

        if (employees < 30) {
          setEmployees((prevEmployees) => prevEmployees + incrementSpeed);
        } else {
          setEmployees(30); // Arrêter le compteur à 30 employés
        }

        if (partners < 20) {
          setPartners((prevPartners) => prevPartners + incrementSpeed);
        } else {
          setPartners(20); // Arrêter le compteur à 20 partenaires
        }

        // Augmenter la vitesse d'incrémentation lorsque la section est en vue
        if (inView) {
          incrementSpeed = 5; // Ajustez cette valeur pour une incrémentation plus rapide
          hasIncremented = true; // Définir le drapeau sur true pour empêcher une nouvelle incrémentation
        }
      }
    };

    const handleScroll = () => {
      if (inView || years < 3 || employees < 30 || partners < 20) {
        updateCounters();
      }
    };

    // Attacher l'écouteur d'événements de défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView, years, employees, partners]);

  return (
    <section ref={ref} className="bg-sky-900 text-white py-16">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4">
          <div className=" relative px-2 border-r-2  border-amber-300 relative">
            <h2 className="text-3xl font-bold">{Math.round(years)} +</h2>
            <p>Years</p>
            <div className="border-amber-300 absolute h-full top-0"></div>
          </div>

          <div className="relative px-2 border-r-2  border-amber-300">
            <h2 className="text-3xl font-bold">{Math.round(employees)} + </h2>
            <p>Employees</p>
            <div className=" absolute h-full top-0"></div>
          </div>


          <div className="relative">
            <h2 className="text-3xl font-bold">{Math.round(partners)}+</h2>
            <p>Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
