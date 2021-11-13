import './navbar.css';
import logo from '../../assets/logo.svg';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/pro-regular-svg-icons';

const Menu = () => {
	return (
		<>
			<p><a href="#home">Home</a></p>
			<p><a href="#wgpt3">What is GPT-3?</a></p>
			<p><a href="#possibility">Open AI</a></p>
			<p><a href="#features">Case Studies</a></p>
			<p><a href="#blog">Library</a></p>
		</>
	);
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	
	return (
		<div className="navbar">
			<div className="navbar__links">
				<div className="navbar__links__logo">
					<img src={logo} alt="Logo" />
				</div>
				
				<div className="navbar__links__container">
					<Menu />
				</div>
			</div>
			
			<div className="navbar--sign">
				<p>Sign In</p>
				<button type="button">Sign Up</button>
			</div>
			
			<div className="navbar__menu">
				{toggleMenu
					? <FontAwesomeIcon icon={faXmark} color="#FFFFFF" size="3x" onClick={() => setToggleMenu(false)} />
					: <FontAwesomeIcon icon={faBars} color="#FFFFFF" size="3x" onClick={() => setToggleMenu(true)} />
				}
				
				{toggleMenu && (
					<div className="navbar__menu__container scale-up-center">
						<div className="navbar__menu__container__links">
							<Menu />
							<div className="navbar__menu__container__links--sign">
								<p>Sign In</p>
								<button type="button">Sign Up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;