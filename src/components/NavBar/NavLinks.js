import React from 'react';
import classes from './NavBar.module.css';
function NavLinks() {
	return (
		<ul className={classes.menu}>
			<li>INICIO</li>
			<li>PRODUCTOS</li>
			<li>CONTACTO</li>
		</ul>
	);
}
export default NavLinks;
