import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Diapo from '../composant/diapo';
import Choisir from '../composant/whychooseus';
import Avantages from '../composant/avantages';
import Counter from '../composant/counter';

import Apropos from './apropos';
import Service from './service';

const Accueil = () => {
  useEffect(() => {
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '40px',
      duration: 2500,
      delay: 400,
      reset: true,
    });

    const srTop = ScrollReveal({
      origin: 'top',
      distance: '40px',
      duration: 2500,
      delay: 400,
      reset: true,
    });

    srBottom.reveal('.animate-from-bottom');
    srTop.reveal('.animate-from-top');
  }, []);

  return (
    <div className="top-16">
      <div className="w-full opacity-1"><Diapo /></div>

      <div className=" bg-yellow-900  z-40 top-16 animate-from-bottom">
        <Avantages />
      </div>
      

    

      <div className="animate-from-bottom">
        <Choisir />
      </div>
      <Service/>

      
      <Counter />
      <Apropos/>
      
      
    </div> 
  );
};

export default Accueil;
