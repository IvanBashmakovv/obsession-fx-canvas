import React, { createContext, useContext, useState } from 'react';

type Lang = 'en' | 'sk';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (en: string, sk: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');
  const t = (en: string, sk: string) => lang === 'en' ? en : sk;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
