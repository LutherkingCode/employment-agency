import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Choisir = () => {
  useEffect(() => {
    // Initialize ScrollReveal for alternating right and left animations
    const sr = ScrollReveal({
      duration: 1000,
      reset: true,
    });

    const items = document.querySelectorAll('.animate-item');
    items.forEach((item, index) => {
      const direction = index % 2 === 0 ? 'right' : 'left';
      sr.reveal(item, {
        origin: direction,
        distance: '20px',
        delay: 200 * index,
      });
    });
  }, []);

  return (
    <div className="text-center font-serif text-sky-900 font-bold mx-auto bg-white">
      <br />
      <div className="text-center text-SKY-900">
      
        <br />
        POURQUOI FAIRE AFFAIRE AVEC NOUS ?
      </div>
      <br />
      
      <div className="my-auto mx-auto md:flex items-center md:space-x-8 justify-center">
        
        <fieldset className="animate-item mx-8 my-8 ml-8 rounded-md md:w-1/4 border border-sky-900 flex flex-col md:h-96">
          <legend className="text-center font-xl bg-gradient-to-r from-sky-900 to-yellow-400 text-transparent bg-clip-text font-extrabold border border-sky-900 rounded-full px-3 py-3 w-16 h-16">
            <img className="h-8 w-8" src= {process.env.PUBLIC_URL + "/respect.png"}alt="Respect" />
          </legend>
          <div className="text-center font-xl bg-gradient-to-r from-sky-900 to-yellow-400 text-transparent bg-clip-text font-extrabold flex-grow">
            <br />
            RESPECT
          </div>
          <p className="text-xs text-center lg:text-lg p-2 flex-grow">
            Chez GROUPE INTÉGRALE VIGILANCE, le respect est au cœur de notre engagement envers nos clients. Nous traitons chaque individu avec dignité et considération, en veillant à répondre à leurs besoins spécifiques en matière de placement de personnel.
          </p>
        </fieldset>

        {/* Second fieldset */}
        <fieldset className="animate-item mx-8 my-8 ml-8 rounded-md md:w-1/4 border border-sky-900 flex flex-col md:h-96">
          <legend className="text-center font-xl bg-gradient-to-r from-sky-900 to-yellow-400 text-transparent bg-clip-text font-extrabold border border-sky-900 rounded-full px-3 py-3 w-16 h-16">
            {/* Icon or Image */}
            <img className="h-8 w-8" src= {process.env.PUBLIC_URL + "/honesty.png"} alt="Honesty" />
          </legend>
          <div className="text-center font-xl bg-gradient-to-r from-sky-900 to-yellow-400 text-transparent bg-clip-text font-extrabold flex-grow">
            <br />
            CONFIANCE
          </div>
          <p className="text-xs text-center lg:text-lg p-2 flex-grow">
            La confiance est un élément essentiel de notre approche envers nos clients. Nous nous engageons à être transparents, honnêtes et fiables dans tous nos échanges, en bâtissant des relations solides basées sur la confiance mutuelle.
          </p>
        </fieldset>

        {/* Third fieldset */}
        <fieldset className="animate-item mx-8 my-8 ml-8 rounded-md md:w-1/4 border border-sky-900 flex flex-col md:h-96">
          <legend className="text-center font-xl bg-gradient-to-r from-sky-900 to-yellow-400 text-transparent bg-clip-text font-extrabold border border-sky-900 rounded-full px-3 py-3 w-16 h-16">
            {/* Icon or Image */}
            <img className="h-8 w-8" src= {process.env.PUBLIC_URL + "/transparency.png"} alt="Transparency" />
          </legend>
          <div className="text-center font-xl bg-gradient-to-r from-sky-900 to-yellow-400 text-transparent bg-clip-text font-extrabold flex-grow">
            <br />
            TRANSPARENCE
          </div>
          <p className="text-xs text-center lg:text-lg p-2 flex-grow">
            Nous croyons en l'importance de la transparence dans toutes nos actions. Nous fournissons des informations claires et compréhensibles sur nos services, nos tarifs et nos pratiques, afin que nos clients puissent prendre des décisions éclairées en matière de sécurité.
          </p>
        </fieldset>
      </div> 
      <br />
      <br />
    </div>
  );
};

export default Choisir;
