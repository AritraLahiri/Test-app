import React from 'react';
import Navlink from './NavLink/Navlink';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<Navlink link="/"> Home </Navlink>
			<Navlink link="/signup"> Singup </Navlink>
			<Navlink link="/login"> Login </Navlink>
			<Navlink link="/dashboard"> Dashboard </Navlink>
		</nav>
	);
};

export default Navbar;
