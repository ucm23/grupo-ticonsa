// src/i18n/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, getTranslation } from './translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Obtener idioma guardado en localStorage o usar 'esp' como predeterminado
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('app-language');
    if (savedLanguage && (savedLanguage === 'esp' || savedLanguage === 'eng')) {
      return savedLanguage;
    }
    return 'esp';
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  const [t, setT] = useState(translations[language]);

  // Cambiar idioma y guardar en localStorage
  const changeLanguage = (newLanguage) => {
    if (newLanguage === 'esp' || newLanguage === 'eng') {
      setLanguage(newLanguage);
      localStorage.setItem('app-language', newLanguage);
      setT(translations[newLanguage]);
    }
  };

  // Función para obtener traducciones anidadas
  const translate = (path) => {
    return getTranslation(language, path);
  };

  // Actualizar t cuando cambie el idioma
  useEffect(() => {
    setT(translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;