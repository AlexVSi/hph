import React, { useContext } from "react";
import { useState } from "react";
import AppContext from "../../context/context";

const Nav = ({menuItems, classes}) => {
	const lang = useContext(AppContext)

	function changeLanguage(value) {
		// setLanguage(value)
		AppContext.language = value
	}

	return (
		<nav className='header__menu menu'>
			<ul className={classes.menu__list}>

				{menuItems.map(item =>
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
	)
}

export default Nav
