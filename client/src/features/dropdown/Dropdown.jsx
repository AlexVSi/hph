import React, { useState } from 'react';
import useLocalStorage from '@shared/hooks/useLocalStorage';
import i18n from '@shared/lib/i18n/i18n';
import arrowLang from '@shared/assets/icons/arrow-lang.svg';
import classes from './Dropdown.module.scss';

export const Dropdown = () => {
	const [language, setLanguage] = useLocalStorage('language', 'en')

	const optionsLangs = ["RU", "RO", "EN"]

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(JSON.parse(localStorage.getItem('language')).toUpperCase());

	function handleLanguageChange(option) {
		i18n.changeLanguage(option.toLowerCase())
		setLanguage(option.toLowerCase())
		setSelectedOption(option);
		setIsOpen(false);
		window.location.reload()
	}

	return (
		<div className={classes.custom_dropdown}>
			<div
				className={isOpen ? `${classes.dropdown_toggle} ${classes.open}` : `${classes.dropdown_toggle}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selectedOption}
				<img src={arrowLang} alt="arrow"/>
			</div>
				<div className={isOpen ? `${classes.dropdown_menu} ${classes.open}` : `${classes.dropdown_menu}`}>
					{optionsLangs.map((item, index) => {
						return (
							<div
								key={index}
								className={classes.dropdown_item}
								onClick={() => handleLanguageChange(item)}
							>
								{item}
							</div>
						)
					}
					)}
				</div>
		</div>
	);
};
