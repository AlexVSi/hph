import en from './langs/en.json';
import ru from './langs/ru.json';
import ro from './langs/ro.json';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
	en: {
		translation: en,
	},
	ru: {
		translation: ru,
	},
	ro: {
		translation: ro
	},
}

i18n
.use(initReactI18next)
.init({
	resources,
	lng: JSON.parse(localStorage.getItem('language')),
	// lng: 'ru',
	fallbackLng: 'ru',
})

// i18next.init({
// 	lng: 'en', // if you're using a language detector, do not define the lng option
// 	debug: true,
// 	resources: {
// 	  en: {
// 		 translation: {
// 			"key": "hello world"
// 		 }
// 	  }
// 	}
//  });

export default i18n;
