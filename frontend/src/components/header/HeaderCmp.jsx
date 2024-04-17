import { useState, useContext } from 'react';
import AppContext from "../../context/context";

import Nav from '../nav/Nav';
import hphLogo from './../../img/logoBlk.svg';
import menuBurger from './../../img/menuBurger.svg'
import text from '../text/text';
import classes from './HeaderCmp.module.scss';
import MenuBurger from '../menuBurger/MenuBurger';
import DecorElement from '../UI/element/DecorElement';

const HeaderCmp = () => {
	const lang = useContext(AppContext)
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

	function changeLanguage(value) {
		// setLanguage(value)
		AppContext.language = value
	}

	return (
		<header className={classes.header}>
			<div className={classes.header__container}>
				<div className={classes.logo}>
					<a href=""><img src={hphLogo} alt="logo" /></a>
				</div>
				<nav className={burgerActive ? `${classes.header__menu} ${classes.active}` : `${classes.header__menu}`}>
					{/* {burgerActive && <DecorElement/>} */}
					<ul className={classes.menu__list}>

						{text.menuItems.map(item =>
							<li key={item['en']} className="menu__item">{item[lang.language]}</li>
						)}

						<li className="menu__item lang">
							<div className="language">
								<select name="" id="" onChange={(e) => changeLanguage(e.target.value)}>
									<option value="ru">RU</option>
									<option value="ro">RO</option>
									<option value="en">EN</option>
								</select>
							</div>
						</li>
					</ul>
				</nav>

				<div className={burgerActive ? `${classes.burger__button} ${classes.active}` : `${classes.burger__button}`} onClick={() => handlerBurgerActive()}>
				{/* <div className={burgerActive ? `${classes.burger__button} ${classes.active}` : `${classes.burger__button}`} onClick={() => setBurgerActive()}> */}
					{/* <img src={menuBurger} alt="" /> */}
						<span></span>
				</div>
			</div>
			{/* <MenuBurger active={burgerActive}/> */}
		</header>
	)
}

export default HeaderCmp
