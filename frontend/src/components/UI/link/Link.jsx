import React from "react";
import classes from './Link.module.scss';

const Link = ({href, children}) => {
	return (
		<a href={href} className={classes.link}>
			{children}
		</a>
	)
}

export default Link
