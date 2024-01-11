import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import HistoireEntreprise from '../composant/histoire';
import MissionEntreprise from '../composant/mission';
import VisionEntreprise from '../composant/vision';
import ValeurEntreprise from '../composant/valeurs';

const Apropos = () => {
  useEffect(() => {
    
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 100,
      reset: true,
    });

    
    const srTop = ScrollReveal({
      origin: 'top',
      distance: '20px',
      duration: 1000,
      delay: 100,
      reset: true,
    });

    
    srBottom.reveal('.animate-from-bottom');

    
    srTop.reveal('.animate-from-top');
  }, []);

  return (
    <div className="mx-auto text-center font-serif bg-gradient-to-r from-sky-900 space-y-8 p-8">
      <h1 className="text-center text-2xl font-bold text-sky-900">Decouvrons notre histoire</h1>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 animate-from-bottom">
          <HistoireEntreprise />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between animate-from-top">
          <VisionEntreprise />
          <MissionEntreprise />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="animate-from-bottom">
        <ValeurEntreprise />
      </div>
    </div>
  );
};

export default Apropos;
