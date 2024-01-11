import React, { useEffect, useState } from "react";

const Slideshow = () => {
  const images = [
    {
      src: "../soins1.jpg",
    },
    {
      src: "./soins2.jpg",
    },
    {
      src: "./menager1.jpg",
    },
  ];

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
    const interval = setInterval(goToNextSlide,100000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  },);

  return (
    <div className="m-auto relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={` ${index === currentImage ? "block" : "hidden"}`}
        >
          <img
            className="lg: object-cover w-1/2 h-96"
            src={image.src}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}

      <button
        className="absolute top-1/2 left-0 w-auto transform -translate-y-1/2 bg-white p-2 rounded-s-full text-gray-600 shadow"
        onClick={goToPrevSlide}
        style={{ zIndex: 1 }}
      >
        &lt;
      </button>

      <button
        className="absolute top-1/2 right-0 w=auto transform -translate-y-1/2 bg-white p-2 rounded-e-full text-gray-600 shadow"
        onClick={goToNextSlide}
        style={{ zIndex: 1 }}
      >
        &gt;
      </button>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full mx-1 ${
              index === currentImage ? "bg-gray-600" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
