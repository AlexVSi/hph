import React from "react";
import rectangleImg from './../../img/rectangle.svg';

import './ProductCard.scss';
import Button from "../UI/button/Button";

const ProductCard = ({title, img}) => {
	return (
		<div className="product__card">
			<a href=""></a>
				<div className="title">{title}</div>
				<img src={img} alt="" className="product__img"/>
				<Button>Узнать больше</Button>
				{/* <img src={rectangleImg} alt="" className="rectangle"/> */}
				<div className="rectangle__img"></div>
		</div>
	)
}

export default ProductCard
