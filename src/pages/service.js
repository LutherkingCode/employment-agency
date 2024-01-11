import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Element } from 'react-scroll';

import Gallery from '../composant/gallery';

import IntroSection from '../composant/introSection';

const Service = () => {
  useEffect(() => {
    // Initialize ScrollReveal for bottom animation
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 100,
      reset: true,
    });

    // Initialize ScrollReveal for top animation
    const srTop = ScrollReveal({
      origin: 'top',
      distance: '20px',
      duration: 1000,
      delay: 100,
      reset: true,
    });

    
    srBottom.reveal('.animate-from-bottom');

    // Reveal elements for top animation
    srTop.reveal('.animate-from-top');
  }, []);

  return (
    <div className="text-center font-serif">
      <div className="bg-sky-900">

      <IntroSection
        text="Nos Services"
        backgroundImage="/path/to/service-background.jpg"
      />
        <br />
        
        <br />
        <br />
        <Element name="gallery">
          <div className="animate-from-bottom">
            <Gallery />
          </div>
        </Element>
        <br />
      </div>

     



    </div>



  );
};

export default Service;
