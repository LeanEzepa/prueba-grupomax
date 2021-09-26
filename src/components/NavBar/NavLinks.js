import React from 'react';
import classes from './NavBar.module.css';
function NavLinks() {
	return (
		<ul className={classes.menu}>
			<li>
				<a href="#inicio">INICIO</a>
			</li>
			<li>
				<a href="#productos">PRODUCTOS</a>
			</li>
			<li>
				<a href="#contacto">CONTACTO</a>
			</li>
		</ul>
	);
}
export default NavLinks;
