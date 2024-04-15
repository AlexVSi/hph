import React from "react";
import './Advantage.scss'


const Advantage = ({title, description, img, animate}) => {
	return (
		<div className="advantage" data-aos={animate}>
			<div className="advantage__head">
				<img src={img} alt="" />
				<div className="advantage__title">{title}</div>
			</div>
			<div className="advantage__description">
				{description}
			</div>
		</div>
	)
}

export default Advantage
