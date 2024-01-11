import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return ( 
    <div className="md:px-40 z-40 shadow-lg mx-auto rounded bg-white items-center justify-center text-white p-4 rounded">
      <h1 className="accordion-title w-full text-md md:text-4xl text-sky-900 text-center rounded p-6">
        Découvrons toute la gamme de services que nous offrons
      </h1>
      {items.map((item, index) => (
        <div className="w-full mx-auto rounded border-2 border-white justify-center items-center mb-4" key={index}>
          <div className="bg-yellow rounded">
            <button
              className={`accordion-title w-full rounded font-base text-md md:text-2xl bg-sky-900 p-6 flex justify-between items-center ${
                activeIndex === index ? 'bg-gray-200 rounded-r rounded-l rounded-t shadow-xl' : 'bg-gray-100'
              }`}
              onClick={() => onTitleClick(index)}
            >
              {item.title}
              <span className="accordion-icon px-16 text-xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="bg-sky-900 shadow-md p-4 text-white rounded-b">
                {item.text}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
