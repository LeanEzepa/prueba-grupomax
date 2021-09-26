import React from 'react';
import classes from './About.module.css';

function About() {
	return (
		<section className={classes.nosotros}>
			<div className={classes.icono}>
				<img src="../../../img/ICONO_Sillon.png" alt="icono de un sillon web prueba" />
			</div>
			<div className={classes.about}>
				<h1>Nosotros</h1>
				<p>
					Nos dedicamos al diseño y restauración de muebles a pedido y a tu gusto, para que sean únicos,
					irrepetibles y funcionales. Nuestros diseños nacen de la imaginación y la pasión que sentimos al
					crearlos. Buscamos generar piezas únicas en tu espacio, priorizando sobre todo el confort.
					Trabajamos muebles con espejos, con pintura glitter y con resina epóxica.
				</p>
			</div>
		</section>
	);
}
export default About;
