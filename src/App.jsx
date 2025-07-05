import React from 'react';
import './i18n';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="bg-[#e5d1c1] text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
