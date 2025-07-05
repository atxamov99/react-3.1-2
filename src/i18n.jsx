import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: "Home", about: "About us", portfolio: "Portfolio" },
      title: "Work that we produce for our clients",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
      button: "Get more details"
    }
  },
  ru: {
    translation: {
      nav: { home: "Главная", about: "О нас", portfolio: "Портфолио" },
      title: "Работа, которую мы делаем для наших клиентов",
      desc: "Lorem Ipsum - это просто фиктивный текст типографической промышленности.",
      button: "Подробнее"
    }
  },
  uz: {
    translation: {
      nav: { home: "Bosh sahifa", about: "Biz haqimizda", portfolio: "Portfolio" },
      title: "Mijozlarimiz uchun ishlab chiqaradigan ishimiz",
      desc: "Lorem Ipsum bosmaxona sanoatining soxta matnidir.",
      button: "Batafsil ma'lumot"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
