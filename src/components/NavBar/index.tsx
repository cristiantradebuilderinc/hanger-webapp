import { Image } from 'react-bootstrap';
import { navBarMenuItems } from './menuItems';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from './NavBar.module.scss';

import hangerLogo from '@assets/logos/hanger_logo.svg';
import { useState } from 'react';
const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMobileMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<>
			<div className={styles.__main}>
				<div className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
					<AiOutlineMenu />
				</div>
				<div className={styles.logoArea}>
					<Image src={hangerLogo.src} alt="HANGER" className={styles.logo} />
				</div>
				<div className={styles.menuArea}>
					{navBarMenuItems.map((item, index) => {
						return (
							<a href={item.link} key={index} className="text-uppercase">
								{item.title}
							</a>
						);
					})}
				</div>
				<div className={styles.rightMenuArea}>
					<a className="text-uppercase">Sign In</a>
				</div>
			</div>
			{showMenu && (
				<div className={styles.mobileMenu}>
					<div className={styles.closeMobileMenu} onClick={toggleMobileMenu}>
						<AiOutlineClose />
					</div>
					{navBarMenuItems.map((item, index) => {
						return (
							<a href={item.link} key={index} className="text-uppercase">
								{item.title}
							</a>
						);
					})}
				</div>
			)}
		</>
	);
};

export { NavBar };
