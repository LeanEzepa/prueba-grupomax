import React from 'react';
import classes from './Productos.module.css';

function Productos() {
	return (
		<section className={classes.productos}>
			<div className={classes.prodCards}>
				<div className={classes.categorias}>
					<div className={classes.catImg}>
						<img src="../../../img/IMG_Cómoda.png" alt="Productos de dormitorio" />
					</div>
					<div className={classes.catTitle}>
						<h1>Cómoda</h1>
						<h4>Dormitorio</h4>
					</div>
				</div>
				<div className={classes.categorias}>
					<div className={classes.catImg}>
						<img src="../../../img/IMG_Sillon.png" alt="Productos de Cocina" />
					</div>
					<div className={classes.catTitle}>
						<h1>Silla</h1>
						<h4>Cocina</h4>
					</div>
				</div>
				<div className={classes.categorias}>
					<div className={classes.catImg}>
						<img src="../../../img/IMG_MesaRatona.png" alt="Productos de Living o Comedor" />
					</div>
					<div className={classes.catTitle}>
						<h1>Mesa ratona</h1>
						<h4>Living/Comedor</h4>
					</div>
				</div>
			</div>
			<div className={classes.prodBtn}>
				<button className={classes.verMas}>VER MÁS</button>
			</div>
		</section>
	);
}
export default Productos;
