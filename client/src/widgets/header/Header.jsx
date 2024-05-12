import { useState } from 'react';
import useLocalStorage from '@shared/hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';
import i18n from '@shared/lib/i18n/i18n';
import classes from './Header.module.scss';

import hphLogo from '@shared/assets/icons/logoBlk.svg';
// import DecorElement from '../UI/element/DecorElement';

export const Header = () => {
	const [burgerActive, setBurgerActive] = useState(false)

	function handlerBurgerActive () {
		setBurgerActive(!burgerActive)
		const body = document.querySelector('body')
		if (!burgerActive) {
			body.classList.add('lock')
		} else {
			body.classList.remove('lock')
		}
	}
	const {t} = useTranslation()
	const [language, setLanguage] = useLocalStorage('language', 'ru')

	function handleLanguageChange(value) {
		i18n.changeLanguage(value)
		setLanguage(value)
		window.location.reload()
	}

	const optionsLangs = ["RU", "RO", "EN"]

	return (
		<header className={classes.header}>
			<div className={classes.header__container}>
				<div className={classes.logo}>
					<a href="#"><img src={hphLogo} alt="logo" /></a>
				</div>
				<nav className={burgerActive ? `${classes.header__menu} ${classes.active}` : `${classes.header__menu}`}>
					{/* {burgerActive && <DecorElement/>} */}
					{/* <DecorElement/> */}
					<div className={classes.burgerElement}></div>
					<ul className={classes.menu__list}>
						<a href="https://docs.google.com/spreadsheets/d/1ZWaMAldiBkwO5MKzKd7UMiql4yMbXL8uVn6eK7dPPvI/edit#gid=1264432496"><li className={classes.menu__item}>{t('menuItems.catalog')}</li></a>
						<a href='#contacts'><li className={classes.menu__item}>{t('menuItems.contacts')}</li></a>
						<li className={classes.menu__item}>
							<div className={classes.language__select__box}>
								<select name="languages" defaultValue={JSON.parse(localStorage.getItem('language'))} onChange={(e) => handleLanguageChange(e.target.value)}>
									{optionsLangs.map((item, index) => {
										return (
											<option value={item.toLowerCase()} key={index}>{item}</option>
										)
									})}
								</select>
							</div>
						</li>
					</ul>
				</nav>
				<div className={burgerActive ? `${classes.burger__button} ${classes.active}` : `${classes.burger__button}`} onClick={() => handlerBurgerActive()}>
						<span></span>
				</div>
			</div>
		</header>
	)
}
