import React from 'react';
import classes from './Modal.module.css';

function Modal(props) {
	return (
		<div className={classes.fondoModal} onClick={() => props.onChangeStatus(!props.status)}>
			<div className={classes.modal} onClick={(event) => event.stopPropagation()}>
				<div className={classes.cerrar} onClick={() => props.onChangeStatus(!props.status)}>
					<div className={classes.cruz1} />
					<div className={classes.cruz2} />
				</div>
				<div className={classes.contenidoModal}>
					<h1>Enviado Correctamente</h1>
				</div>
			</div>
		</div>
	);
}
export default Modal;
