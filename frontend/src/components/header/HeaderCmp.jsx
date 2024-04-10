import Nav from '../nav/Nav'
import hphLogo from './../../img/logoBlk.svg'
import menuBurger from './../../img/menuBurger.svg'
import text from '../text/text'
import './HeaderCmp.scss'

const HeaderCmp = () => {

	return (
		<header>
			<div className="header__container">
				<div className="logo">
					<img src={hphLogo} alt="logo" />
				</div>
				<Nav menuItems={text.menuItems}></Nav>
				<div className="menu__burger burger">
					<img src={menuBurger} alt="" />
				</div>
			</div>
		</header>
	)
}

export default HeaderCmp
