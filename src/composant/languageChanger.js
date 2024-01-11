import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageChanger() {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={handleLanguageChange}>
      Switch to {i18n.language === 'fr' ? 'English' : 'French'}
    </button>
  );
}

export default LanguageChanger;
