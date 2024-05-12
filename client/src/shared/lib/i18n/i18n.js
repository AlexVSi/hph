import en from '@shared/langs/en.json';
import ru from '@shared/langs/ru.json';
import ro from '@shared/langs/ro.json';

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
		translation: ro,
	},
}

i18n
.use(initReactI18next)
.init({
	resources,
	lng: JSON.parse(localStorage.getItem('language')),
	fallbackLng: 'ru',
})

export default i18n;
