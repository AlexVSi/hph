import React, { useContext, useState } from 'react'
import Button from './components/UI/button/Button'
import './styles/style.scss';
import IndexPg from './pages/index/IndexPg';
import { useTranslation } from 'react-i18next';
import useLocalStorage from './hooks/useLocalStorage';
import i18n from './i18n';

const App = () => {
	const {t} = useTranslation();
	const [language, setLanguage] = useLocalStorage('language', 'ru')

	const handleLanguageChange = () => {
		if (language === 'en') {
			i18n.changeLanguage('')
		}
	}

	return (
		<>
			<IndexPg/>
		</>
	)
}

export default App
