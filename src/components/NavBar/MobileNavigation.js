import React, { useState } from 'react';
import NavLinks from './NavLinks';
import classes from './NavBar.module.css';

const MobileNav = () => {
	const [ open, setIsOpen ] = useState(false);
	return (
		<nav className={classes.MobileNav}>
			<div className={classes.topBar}>
				<img src="../../../img/LOGO.png" alt="logo web de prueba" className={classes.logo} />
				<div className={open ? classes.change : classes.Burguer} onClick={() => setIsOpen(!open)}>
					<div className={classes.bar1} />
					<div className={classes.bar2} />
					<div className={classes.bar3} />
				</div>
			</div>
			{open && <NavLinks />}
		</nav>
	);
};
export default MobileNav;
