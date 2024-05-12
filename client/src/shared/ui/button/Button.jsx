import React from "react";
import classes from './Button.module.scss'

export const Button = ({props, children}) => {
	return (
		<button {...props} className={classes.button}>
			{children}
		</button>
	)
}
