import React from 'react';

const IntroSection = ({ text, backgroundImage }) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', // You can customize the text color here
  };

  return (
    <section className="intro-section" style={sectionStyle}>
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{text}</h1>
        {/* Add any additional content you want here */}
      </div>
    </section>
  );
};

export default IntroSection;
