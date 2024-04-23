import React from "react";
import classes from'./Advantage.module.scss'


const Advantage = ({title, description, img, animate}) => {
	return (
		<div className={classes.advantage} data-aos={animate}>
			<div className={classes.advantage__head}>
				<img src={img} alt="" />
				<div className={classes.advantage__title}>{title}</div>
			</div>
			<div className={classes.advantage__description}>
				{description}
			</div>
		</div>
	)
}

export default Advantage
