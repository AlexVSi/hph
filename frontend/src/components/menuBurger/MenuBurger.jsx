import React from "react";
import Nav from "../nav/Nav";
import text from "../text/text";
import classes from './MenuBurger.module.scss'
import DecorElement from "../UI/element/DecorElement";

const MenuBurger = ({active}) => {
	return (
		<>
		<div className={active ? `${classes.burger} ${classes.active}` : `${classes.burger}`}>
			<dir className={classes.burger__container}>
				<DecorElement/>
				<Nav menuItems={text.menuItems} classes={classes}></Nav>
			</dir>
		</div>
		</>
	)
}

export default MenuBurger
