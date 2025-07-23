'use client';

import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

const COOKIE_NAME = 'googtrans';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];
    let languageValue = 'en';

    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split('/');
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }

    setCurrentLanguage(languageValue);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'de' ? 'en' : 'de';
    setCookie(null, COOKIE_NAME, `/auto/${newLang}`);
    window.location.reload();
  };

  const getButtonLabel = () =>
    currentLanguage === 'de' ? 'English' : 'Deutsch';

  return (
    <button onClick={toggleLanguage} className="cursor-pointer font-medium">
      {getButtonLabel()}
    </button>
  );
};

export { LanguageSwitcher };
