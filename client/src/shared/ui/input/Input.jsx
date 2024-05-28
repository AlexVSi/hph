import React from 'react';
import classes from './Input.module.scss'

export const Input = ({props, children}) => {
	return (
		<input className={classes.input} {...props}>{children}</input>
	)
}
