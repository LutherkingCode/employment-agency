import React from 'react';

import Formulaire from '../composant/formulaire';
import GoogleMap from '../composant/googleMap';
import ContactInfo from '../composant/contactInfo';
import IntroSection from '../composant/introSection';

const Contact = () => {
  return (
    <div className="font-serif lg:h-full  lg:w-full bg-gradient-to-r from-sky-900  ">

<IntroSection
        text="Nous Contacter"
        backgroundImage="/path/to/service-background.jpg"
      />

    
      <div className=" justify-center">

        <div className='lg:flex items-center justify-center'> 
      <div className="lg:w-70%  bg-white p-4">
          <Formulaire />
        </div>
        </div>



        <div className="bg-sky-900 w-full">
          <ContactInfo/>
        </div>

        
      </div>

      <div className="w-full">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
