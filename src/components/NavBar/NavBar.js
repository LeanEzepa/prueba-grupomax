import React from 'react';
import Navigation from './Navigation';
import MobileNav from './MobileNavigation';
const NavBar = () => {
	return (
		<nav id="inicio">
			<Navigation />
			<MobileNav />
		</nav>
	);
};

export default NavBar;
