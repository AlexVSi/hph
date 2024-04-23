import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from "react-i18next";
import Link from '../UI/link/Link';

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

const SwiperRange = () => {
	const {t} = useTranslation()
	const productsList = [
		{
			title: t('productsList.petPack'),
			img: petPackImg
		},
		{
			title: t('productsList.papperPack'),
			img: papperPackImg
		},
		{
			title: t('productsList.bag'),
			img: bagImg
		},
		{
			title: t('productsList.container'),
			img: containerImg
		},
		{
			title: t('productsList.cup'),
			img: cupImg
		},
		{
			title: t('productsList.sanitazier'),
			img: sanitazierImg
		},
	]

	return (
		<div className="slider__wrapper">
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
							<Link href={'#'}>{t('buttons.learnMore')}</Link>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default SwiperRange
