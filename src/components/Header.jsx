import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdown, setDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Yangi holat

  useEffect(() => {
    // Sahifa yuklanganda tekshiradi
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdown(false);
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(prev => !prev); // holatni o‘zgartirish
  };

  return (
    <div className='flex justify-between items-center px-6 py-4'>
      <h1 className='font-bold text-lg'>LOGO</h1>

      <nav className='flex font-bold text-lg items-center gap-6'>
        <a href="#">{t('nav.home')}</a>
        <a href="#">{t('nav.about')}</a>
        <a href="#">{t('nav.portfolio')}</a>

        <div className="relative">
          <button onClick={() => setDropdown(!dropdown)} className='bg-white dark:bg-gray-800 px-2 py-1 rounded'>
            {i18n.language.toUpperCase()}
          </button>
          {dropdown && (
            <div className="absolute top-full mt-1 bg-white dark:bg-gray-700 rounded shadow text-sm z-10">
              <button onClick={() => changeLanguage('en')} className='block px-4 py-1 w-full text-left'>English</button>
              <button onClick={() => changeLanguage('ru')} className='block px-4 py-1 w-full text-left'>Русский</button>
              <button onClick={() => changeLanguage('uz')} className='block px-4 py-1 w-full text-left'>O'zbekcha</button>
            </div>
          )}
        </div>

        <button
          onClick={toggleTheme}
          className='bg-black text-white dark:bg-orange-400 dark:text-black px-3 py-1 rounded'
        >
          {darkMode ? t('mode.light') : t('mode.dark')}
        </button>
      </nav>
    </div>
  );
};

export default Header;
