import React, { useRef } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './SwiperRange.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bagImg from './../../img/products/bag.svg'
import containerImg from './../../img/products/container.svg'
import cupImg from './../../img/products/cup.svg'
import papperPackImg from './../../img/products/papper-pack.svg'
import petPackImg from './../../img/products/pet-pack.svg'
import sanitazierImg from './../../img/products/sanitazier.svg'
import Button from "../UI/button/Button";

const SwiperRange = () => {
	const productsList = [
		{
			title: 'ПЭТ-упаковка',
			img: petPackImg
		},
		{
			title: 'Бумажные пакеты',
			img: papperPackImg
		},
		{
			title: 'Хозяйственные сумки',
			img: bagImg
		},
		{
			title: 'Всё для готовки и доставки',
			img: containerImg
		},
		{
			title: 'Одноразовая посуда',
			img: cupImg
		},
		{
			title: 'Товары для уборки и гигиены',
			img: sanitazierImg
		},
	]

	return (
		<div className='slider__wrapper'>
			<ul className="slide__pagination"></ul>
			<Swiper
				modules={[Pagination, A11y, Navigation]}
				navigation
				spaceBetween={50}
				slidesPerView={1}
				pagination={{
					el: '.slide__pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<li class="' + className + '">' + (productsList[index].title) + "</li>";
					},
				}}
			>
				{productsList.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="product-title">{item.title}</div>
							<div className="product-img__block">
								<img src={item.img} alt="" />
							</div>
							<Button>Узнать больше</Button>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default SwiperRange
