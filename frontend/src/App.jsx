import React, { useContext, useState } from 'react'
import Button from './components/UI/button/Button'
import './styles/style.scss';
import IndexPg from './pages/index/IndexPg';
import AppContext from './context/context';

const App = () => {
	const [language, setLanguage] = useState('ru')
	const lang = useContext(AppContext)

	return (
		<AppContext.Provider value={{language: 'ru',}}>
			<IndexPg/>
		</AppContext.Provider>

	)
}

export default App
