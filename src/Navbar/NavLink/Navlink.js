import React from 'react';
import styles from './NavLink.module.css';
import { NavLink } from 'react-router-dom';

const Navlink = (props) => {
	return (
		<div className={styles.nav__links}>
			<ul>
				<li>
					<NavLink to={props.link}>{props.children}</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navlink;
