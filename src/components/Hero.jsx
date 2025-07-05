import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroImg from '../assets/Hero.jpg'; // o‘zing joylashtirgan rasm

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='grid md:grid-cols-2 items-center px-6 py-10 gap-8'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold mb-4'>{t('title')}</h2>
        <p className='mb-6 max-w-md'>{t('desc')}</p>
        <button className='bg-amber-400 text-white px-6 py-2 rounded-full'>
          {t('button')}
        </button>
      </div>
      <div>
        <img src={HeroImg} alt="Hero" className='w-full rounded-md' />
      </div>
    </section>
  );
};

export default Hero;
