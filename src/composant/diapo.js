import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const images = [
  {
    src: "securite1.jpg",
    caption:
      "Rejoignez-nous en tant qu'agent de sécurité et faites partie de l'équipe qui veille sur la sécurité de notre communauté. Ensemble, nous pouvons contribuer à faire de notre monde un endroit plus sûr et plus sécurisé.",
  },
  {
    src: "soins1.jpg",
    caption: "Caption 2",
  },
  {
    src: "menager1.jpg",
    caption: "Caption 3",
  },
];

function Diapo() {
  const [currentImage, setCurrentImage] = useState(0);

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  const goToNextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="rounded bg-black relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${index === currentImage ? "block" : "hidden"} relative`}
        >
          {/* Image */}
          <img
            className="object-cover w-full h-[30rem] xs:h-[60rem] lg:h-[40rem] xs:h-[40rem] opacity-75"
            src={process.env.PUBLIC_URL + "/" + image.src}
            alt={`Slide ${index + 1}`}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-sky-900 bg-opacity-60 w-full h-full flex items-center justify-center text-white p-4">
              <div>
                <br />
                <div className="text-center space-y-8 lg:text-xl">
                  <h1 className="text-amber-300 leading-light xs:text-4xl tracking-widest font-bold lg:text-5xl">
                    L'emploi de vos rêves se trouve ici
                  </h1>
                  <br />
                  <div className="lg:text-2xl font-['Lucida Console'] text-xl">
                    Que vous cherchiez à trouver un emploi ou à trouver le candidat idéal pour votre entreprise
                    <br />
                    Nous avons la solution qui vous convient le mieux
                  </div>
                  <br />
                  <br />

                  <div className="block lg:flex left-1/2 items-center p-8 margin-auto space-between items-center p-4  lg:space-x-4 space-y-8 lg:space-y-0 justify-center">
                  <div>
                      <Link to='/contact' className="bg-amber-300
                        tracking-widest text-center   border-2  border-amber-300 text-white rounded-md lg:text-sm 
                        lg:font-medium py-3 px-4 lg:py-4 lg:px-4 hover:text-sky-900 hover:bg-amber-300">
                        Faire une soumission
                      </Link> 
                    </div>
                    <div>
                      <Link to='/service' className="hidden md:block border-2 border-amber-300
                        tracking-widest text-center  text-white border-1 text-sky-900 rounded-md lg:text-sm 
                        lg:font-medium py-3 px-4 lg:py-4 lg:px-4 hover:text-white hover:bg-sky-900">
                        Decouvrir nos services
                      </Link>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className=" hidden lg:flex absolute left-10  bottom-1/3 transform -translate-y-1/3
            text-white w-8 h-8  flex justify-center items-center border-2 rounded-full opacity-60 shadow-md
             z-10 bg-gray-800 hover:bg-gray-800 hover:text-sky-900"
            onClick={goToPrevSlide}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>



          <button
            className="hidden lg:flex absolute right-10  bottom-1/3 transform -translate-y-1/3
            text-white w-8 h-8  flex justify-center items-center border-2 rounded-full opacity-60 shadow-md
             z-10 bg-gray-800 hover:bg-gray-800 hover:text-sky-900"
            onClick={goToNextSlide}
          >
                     

            <FontAwesomeIcon icon={faArrowRight} />
            
          </button>

          <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-16">
            
            {images.map((_, index) => (
              <span
                key={index}
                className={`inline-block w-4 h-4 rounded-full mx-1 ${
                  index === currentImage ? "bg-white" : "bg-gray-800, opacity-60 border-2"
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
          <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-16 flex items-center justify-center space-x-4">
  <button
    className="text-white w-8 h-8 flex justify-center items-center border-2 rounded-full opacity-60 shadow-md bg-gray-800 hover:bg-gray-800 hover:text-sky-900"
    onClick={goToPrevSlide}
  >
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>

  {images.map((_, index) => (
    <span
      key={index}
      className={`inline-block w-2 h-2 rounded-full ${
        index === currentImage
          ? "bg-white"
          : "bg-gray-800 opacity-60 border-2"
      }`}
      onClick={() => goToSlide(index)}
    ></span>
  ))}

  <button
    className="text-white w-8 h-8 flex justify-center items-center border-2 rounded-full opacity-60 shadow-md bg-gray-800 hover:bg-gray-800 hover:text-sky-900"
    onClick={goToNextSlide}
  >
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
</div>


       



        </div>
      ))}
    </div>
  );
}

export default Diapo;
