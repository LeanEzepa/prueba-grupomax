import React from 'react';
import NavLinks from './NavLinks';
import classes from './NavBar.module.css';

function Navigation() {
	return (
		<nav className={classes.Navigation}>
			<img src="../../../img/LOGO.png" alt="logo web de prueba" className={classes.logo} />
			<NavLinks />
		</nav>
	);
}
export default Navigation;
