import React from 'react';
import Navigation from './Navigation';
import MobileNav from './MobileNavigation';
const NavBar = () => {
	return (
		<nav>
			<Navigation />
			<MobileNav />
		</nav>
	);
};

export default NavBar;
