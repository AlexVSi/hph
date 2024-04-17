import React, { useContext } from "react";
import Aos from "aos";
 
import './IndexPg.scss'

import HeaderCmp from "../../components/header/HeaderCmp";
import Button from "../../components/UI/button/Button";
import FooterCmp from "../../components/footer/FooterCmp";
import DecorElement from "../../components/UI/element/DecorElement";
import text from "../../components/text/text";
import AppContext from "../../context/context";
import Advantage from "../../components/advantage/Advantage";
import SwiperRange from "../../components/swiperRange/SwiperRange";

// img ======================================
import boxyImg from './../../img/boxy.svg'
import emailImg from './../../img/email.svg'
import phoneImg from './../../img/phone.svg'
import locationImg from './../../img/location.svg'
import telegramImg from './../../img/telegram.svg'
import instagramImg from './../../img/instagram.svg'

// advantage-img
import basketImg from './../../img/Basket.svg'
import starImg from './../../img/Star.svg'
import priceImg from './../../img/Price.svg'
import personalImg from './../../img/Personal.svg'
import carImg from './../../img/Car.svg'
import boxImg from './../../img/Box.svg'


const IndexPg = () => {
	const lang = useContext(AppContext)
	Aos.init()

	let animateType = ''
	let animateCount = 0
	const animate = () => {
		animateCount += 1
		if (animateCount % 2 === 0) {
			animateType = 'fade-left'
		} else {
			animateType = 'fade-right'
		}
	}

	const advantagesList = [
		{
			title: 'Широкий ассортимент',
			description: 'Широкий ассортимент товаров для дома, отелей, ресторанов и кафе. Всё что необходимо для вашего бизнеса!',
			img: basketImg
		},
		{
			title: 'Качественная продукция',
			description: 'Работаем исключительно с прошедшей сертификацию продукцией, соответствующей современным стандартам',
			img: starImg
		},
		{
			title: 'Выгодные цены',
			description: 'Держим цены на оптимальном уровне. Предлагаем только лучшие решения по оптимальной стоимости',
			img: priceImg
		},
		{
			title: 'Дружелюбный персонал',
			description: 'Готовы к взаимному сотрудничеству, открыты для диалога',
			img: personalImg
		},
		{
			title: 'Доставка',
			description: 'Быстрая доставка в любую точку Молдовы. Стоимость и условия доставки уточняются индивидуально',
			img: carImg
		},
		{
			title: 'Продажа оптом',
			description: 'Осуществляем продажу оптом и сотрудничаем чет-то там дальше я не знаю что придумать, потом придумаю',
			img: boxImg
		},
	]

	return (
		<div className="wrapper">
			<HeaderCmp/>
			<main>
				<div className=""></div>
				<section className="title__section">
					<div className="title__wrapper">
						<div className="title__container container">
							<div className="title__text">
								<h1>Solution for home, packing and HoReCa</h1>
								<DecorElement/>
								<p className="sub__title">{text.titleText[0][lang.language]}</p>
								<Button>Перейти в каталог</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="about__section">
					<div className="about__container container">
						<div className="about-title__block">
							<h2>Кто мы?</h2>
							<img src={boxyImg} alt="" />
						</div>
						<div className="about__block">
							<div className="text__block">
								<DecorElement/>
								<p>Solution for HPH – ваш надежный партнер для дома и бизнеса.</p>
								<p>Мы предлагаем решения для:</p>
								<ul>
									<li>Дома</li>
									<li>Отелей</li>
									<li>Ресторанов и кафе</li>
									<li>Производителей пищевых продуктов</li>
								</ul>
								<DecorElement/>
								<p>Сотрудничая с нами, вы получаете:</p>
								<ul>
									<li>Высокое качество продукции</li>
									<li>Широкий ассортимент</li>
									<li>Выгодные цены</li>
									<li>Дружелюбный сервис</li>
								</ul>
								<Button>Связаться с нами</Button>
							</div>
							<div className="boxy">
								<img src={boxyImg} alt="boxy" />
							</div>
						</div>
					</div>
				</section>
				<section className="product-range__section" id="scroll-magic">
					<div className="product-range__container container">
						<h2>Наш ассортимент</h2>
						<DecorElement/>
						<SwiperRange/>
					</div>
				</section>
				<section className="advantages__section">
					<div className="advantages__container container">
						<h2>Наши преимущества</h2>
						<div className="advantages__block">
							{advantagesList.map(item => {
								animate()
								return (
									<Advantage title={item.title} description={item.description} img={item.img} key={item.title} animate={animateType}/>
								)
							})}
						</div>
					</div>
				</section>
				<section className="map__section">
					<div className="map__container container">
						<div className="contacts__block">
							<h2>Как нас найти?</h2>
							<ul>
								<li><img src={emailImg} alt="email" className="contacts__icon"/>ambalaj.balti@gmail.com</li>
								<li><img src={phoneImg} alt="phone" className="contacts__icon"/>+373 69 120 914</li>
								<li><img src={locationImg} alt="location" className="contacts__icon"/>Strada Mihai Viteazul 25, Bălți 3100</li>
							</ul>
							<div className="social-media__block">
								<img src={telegramImg} alt="telegram" />
								<img src={instagramImg} alt="instagram" />
							</div>
						</div>
						<div className="map__block">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.942525951135!2d27.92727562963702!3d47.75935696363785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb6773016b4203%3A0x8c735cffddd6316!2sSolution%20for%20HPH!5e0!3m2!1sru!2sru!4v1712390487600!5m2!1sru!2sru" width="600" height="450" allowFullScreen="allowfullscreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</section>
			</main>
			<FooterCmp/>
		</div>
	)
}

export default IndexPg
