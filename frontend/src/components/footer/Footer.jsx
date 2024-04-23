import React from "react";
import classes from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={`${classes.footer__container}`}>
				<p>SRL Solution for HPH</p>
			</div>
		</footer>
	)
}

export default Footer
