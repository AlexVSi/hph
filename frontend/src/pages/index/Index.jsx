import React from "react";
import Aos from "aos";
import { useTranslation } from "react-i18next";

import './Index.scss'

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DecorElement from "../../components/UI/element/DecorElement";
import Advantage from "../../components/advantage/Advantage";
import SwiperRange from "../../components/swiperRange/SwiperRange";
import Link from "../../components/UI/link/Link";


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
	const {t} = useTranslation()
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
			title: t('advantagesList.range.title'),
			description: t('advantagesList.range.description'),
			img: basketImg
		},
		{
			title: t('advantagesList.quality.title'),
			description: t('advantagesList.quality.description'),
			img: starImg
		},
		{
			title: t('advantagesList.prices.title'),
			description: t('advantagesList.prices.description'),
			img: priceImg
		},
		{
			title: t('advantagesList.friendly.title'),
			description: t('advantagesList.friendly.description'),
			img: personalImg
		},
		{
			title: t('advantagesList.delivery.title'),
			description: t('advantagesList.delivery.description'),
			img: carImg
		},
		{
			title: t('advantagesList.wholasels.title'),
			description: t('advantagesList.wholasels.description'),
			img: boxImg
		},
	]

	return (
		<div className="wrapper">
			<Header/>
			<main>
				<div className=""></div>
				<section className="title__section">
					<div className="title__wrapper">
						<div className="title__container container">
							<div className="title__text">
								<h1>{t('h1')}</h1>
								<DecorElement/>
								<p className="sub__title">{t('subTitle')}</p>
								<Link href={'#'}>{t('buttons.toCatalog')}</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="about__section">
					<div className="about__container container">
						<div className="about-title__block">
							<h2>{t('h2.who')}</h2>
							<img src={boxyImg} alt="" />
						</div>
						<div className="about__block">
							<div className="text__block">
								<DecorElement/>
								<p>{t('aboutUs.partner')}</p>
								<p>{t('aboutUs.ourSolution')}</p>
								<ul>
									<li>{t('aboutUs.ourSolutionList.home')}</li>
									<li>{t('aboutUs.ourSolutionList.hotels')}</li>
									<li>{t('aboutUs.ourSolutionList.restourantAndCasee')}</li>
									<li>{t('aboutUs.ourSolutionList.products')}</li>
								</ul>
								<DecorElement/>
								<p>{t('aboutUs.contribute')}</p>
								<ul>
									<li>{t('aboutUs.contributeList.quality')}</li>
									<li>{t('aboutUs.contributeList.range')}</li>
									<li>{t('aboutUs.contributeList.prices')}</li>
									<li>{t('aboutUs.contributeList.friendly')}</li>
								</ul>
								<Link href={'#contacts'}>{t('buttons.callback')}</Link>
							</div>
							<div className="boxy">
								<img src={boxyImg} alt="boxy" />
							</div>
						</div>
					</div>
				</section>
				<section className="product-range__section" id="scroll-magic">
					<div className="product-range__container container">
						<h2>{t('h2.range')}</h2>
						<DecorElement/>
						<SwiperRange/>
					</div>
				</section>
				<section className="advantages__section">
					<div className="advantages__container container">
						<h2>{t('h2.advantages')}</h2>
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
				<section className="contacts__section" id="contacts">
					<div className="contacts__container container">
						<div className="contacts__block">
							<h2>{t('h2.findUs')}</h2>
							<ul>
								<li><img src={emailImg} alt="email" className="contacts__icon"/>ambalaj.balti@gmail.com</li>
								<li><img src={phoneImg} alt="phone" className="contacts__icon"/>+373 69 120 914</li>
								<li><img src={locationImg} alt="location" className="contacts__icon"/>Strada Mihai Viteazul 25, Bălți 3100</li>
							</ul>
							<div className="social-media__block">
								<a href=""><img src={telegramImg} alt="telegram" /></a>
								<a href=""><img src={instagramImg} alt="instagram" /></a>
							</div>
						</div>
						<div className="map__block">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.942525951135!2d27.92727562963702!3d47.75935696363785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb6773016b4203%3A0x8c735cffddd6316!2sSolution%20for%20HPH!5e0!3m2!1sru!2sru!4v1712390487600!5m2!1sru!2sru" width="600" height="450" allowFullScreen="allowfullscreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</section>
			</main>
			<Footer/>
		</div>
	)
}

export default IndexPg
