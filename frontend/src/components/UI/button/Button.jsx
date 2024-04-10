import React from "react";
import './Button.scss'

const Button = ({props, children}) => {
	return (
		<button>
			{children}
		</button>
	)
}

export default Button
