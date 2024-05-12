import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@features/dropdown/Dropdown';
import classes from './Header.module.scss';
import hphLogo from '@shared/assets/icons/logoBlk.svg';

export const Header = () => {
	const {t} = useTranslation()
	const [burgerActive, setBurgerActive] = useState(false)

	function handlerBurgerActive() {
		setBurgerActive(!burgerActive)
		const body = document.querySelector('body')
		if (!burgerActive) {
			body.classList.add('lock')
		} else {
			body.classList.remove('lock')
		}
	}
	const headerNavLinks = [
		{
			title: t('menuItems.catalog'),
			link: 'https://docs.google.com/spreadsheets/d/1ZWaMAldiBkwO5MKzKd7UMiql4yMbXL8uVn6eK7dPPvI/edit#gid=1264432496',
		},
		{
			title: t('menuItems.contacts'),
			link: '#contacts',
		},
	]

	return (
		<header className={classes.header}>
			<div className={classes.header__container}>
				<div className={classes.logo}>
					<a href="#"><img src={hphLogo} alt="logo" /></a>
				</div>
				<nav className={burgerActive ? `${classes.header__menu} ${classes.active}` : `${classes.header__menu}`}>
					<div className={classes.burgerElement}></div>
					<ul className={classes.menu__list}>
						{headerNavLinks.map((item, index) => {
							return (
								<a onClick={handlerBurgerActive} target={item.link[0] !== '#' ? '_blank' : '_self'} href={item.link} key={index}><li className={classes.menu__item} key={index}>{item.title}</li></a>
							)
						})}
						<li className={classes.menu__item}>
							<Dropdown/>
						</li>
					</ul>
				</nav>
				<div className={burgerActive ? `${classes.burger__button} ${classes.active}` : `${classes.burger__button}`} onClick={() => handlerBurgerActive()}>
						<span></span>
				</div>
			</div>
		</header>
	)
}
