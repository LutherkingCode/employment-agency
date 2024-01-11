import React from 'react';
import { Link } from 'react-router-dom';

const Merci = ({ name }) => {
  return (
    <header className="fixed  p-20 mx-auto top-0 left-0 w-5/6 h-screen right-0 z-50 bg-white py-4 text-center shadow-lg">
      <div className="container mx-auto text-sky-900 flex items-center justify-center">
        {/* Your logo image or component */}
        <img
                src={process.env.PUBLIC_URL + "/logo2.jpg"}
          
          alt="Logo"
          className="w-12  text-xs lg:text-2xl font-bold font-base text-sky-900 h-12 mr-2"
        />Groupe Integrale Vigilence

        
      </div>
      <br></br>
      {/* Display the name prop */}
      <h1 className="text-xl text-sky-900 font-bold"> Merci {name} de nous avoir contacte</h1>
      <br></br>
      <br></br>
      <div className='text-center text-sky-900'>Nous allons traite votre demande avec le plus de precision possible <br></br> 
      Nous en faisons une suite dans les meilleurs delais</div>

      <br></br>
      <Link  className="bg-amber-400 rounded p-4 text-sky-900" to="/">Accueil</Link>

    </header>
  );
};

export default Merci;
