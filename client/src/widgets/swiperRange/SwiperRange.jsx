import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from "react-i18next";
import { LinkButton } from '@shared/ui/linkButton';

import './SwiperRange.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bagImg from '@shared/assets/icons/products/bag.svg'
import containerImg from '@shared/assets/icons/products/container.svg'
import cupImg from '@shared/assets/icons/products/cup.svg'
import papperPackImg from '@shared/assets/icons/products/papper-pack.svg'
import petPackImg from '@shared/assets/icons/products/pet-pack.svg'
import sanitazierImg from '@shared/assets/icons/products/sanitazier.svg'

export const SwiperRange = () => {
	const {t} = useTranslation()
	const productsList = [
		{
			title: t('productsList.petPack'),
			img: petPackImg,
			link: "https://docs.google.com/spreadsheets/d/1ZWaMAldiBkwO5MKzKd7UMiql4yMbXL8uVn6eK7dPPvI/edit#gid=1609823451",
		},
		{
			title: t('productsList.papperPack'),
			img: papperPackImg,
			link: "https://docs.google.com/spreadsheets/d/1ZWaMAldiBkwO5MKzKd7UMiql4yMbXL8uVn6eK7dPPvI/edit#gid=1609823451",
		},
		{
			title: t('productsList.bag'),
			img: bagImg,
			link: "https://docs.google.com/spreadsheets/d/1ZWaMAldiBkwO5MKzKd7UMiql4yMbXL8uVn6eK7dPPvI/edit#gid=1565352626",
		},
		{
			title: t('productsList.container'),
			img: containerImg,
			link: "https://docs.google.com/spreadsheets/d/1ZWaMAldiBkwO5MKzKd7UMiql4yMbXL8uVn6eK7dPPvI/edit#gid=1822848376",
		},
		{
			title: t('productsList.cup'),
			img: cupImg,
			link: "https://docs.google.com/spreadsheets/d/1ZWaMAldiBkwO5MKzKd7UMiql4yMbXL8uVn6eK7dPPvI/edit#gid=1264432496",
		},
		{
			title: t('productsList.sanitazier'),
			img: sanitazierImg,
			link: "https://docs.google.com/spreadsheets/d/1ZWaMAldiBkwO5MKzKd7UMiql4yMbXL8uVn6eK7dPPvI/edit#gid=1300449721",
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
							<LinkButton target={'_blank'} link={item.link}>{t('buttons.learnMore')}</LinkButton>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}
