import React, { useRef } from 'react';
import classes from './Contacto.module.css';

function Contacto(props) {
	var nameInputRef = useRef();
	var emailInputRef = useRef();
	var telInputRef = useRef();
	var provInputRef = useRef();
	var hrInputRef = useRef();
	var consultaInputRef = useRef();
	function submitHandler(event) {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredEmail = emailInputRef.current.value;
		const enteredTel = telInputRef.current.value;
		const enteredProv = provInputRef.current.value;
		const enteredHr = hrInputRef.current.value;
		const enteredConsulta = consultaInputRef.current.value;
		const data = {
			name      : enteredName,
			email     : enteredEmail,
			tel       : enteredTel,
			provincia : enteredProv,
			horario   : enteredHr,
			consulta  : enteredConsulta
		};
		props.onFormSubmit(data);
		nameInputRef = '';
		emailInputRef = '';
		telInputRef = '';
		provInputRef = '';
		hrInputRef = '';
		consultaInputRef = '';
	}

	return (
		<section className={classes.contacto}>
			<div className={classes.ct}>
				<div className={[ classes.ct_col, classes.ctForm ].join(' ')}>
					<h1>Formulario</h1>
					<form className={classes.form} onSubmit={submitHandler} method="POST" autoComplete="off">
						<div className={classes.formDiv}>
							<div>
								<label htmlFor="name">Nombre</label>
								<input id="name" name={props.name} type="text" required ref={nameInputRef} />
							</div>
							<div>
								<label htmlFor="e-mail">E-mail</label>
								<input id="e-mail" type="email" required ref={emailInputRef} />
							</div>
							<div>
								<label htmlFor="tel">Teléfono</label>
								<input id="tel" type="text" required ref={telInputRef} />
							</div>
						</div>
						<div className={classes.formDiv}>
							<div className={classes.FA}>
								<label htmlFor="provs">Provincia</label>
								<select id="provs" ref={provInputRef}>
									<option value="" />
									<option value="Buenos Aires">Buenos Aires</option>
									<option value="Catamarca">Catamarca</option>
									<option value="Chaco">Chaco</option>
									<option value="Chubut">Chubut</option>
									<option value="CABA">Ciudad Autónoma de Buenos Aires</option>
									<option value="Cordoba">Córdoba</option>
									<option value="Corrientes">Corrientes</option>
									<option value="Entre Rios">Entre Ríos</option>
									<option value="Formosa">Formosa</option>
									<option value="Jujuy">Jujuy</option>
									<option value="La Pampa">La Pampa</option>
									<option value="La Rioja">La Rioja</option>
									<option value="Mendoza">Mendoza</option>
									<option value="Misiones">Misiones</option>
									<option value="Neuquen">Neuquén</option>
									<option value="Rio Negro">Río Negro</option>
									<option value="Salta">Salta</option>
									<option value="San Juan">San Juan</option>
									<option value="San Luis">San Luis</option>
									<option value="Santa Cruz">Santa Cruz</option>
									<option value="Santa Fe">Santa Fe</option>
									<option value="Santigo del Estero">Santigo del Estero</option>
									<option value="Tierra del Fuego">Tierra del Fuego</option>
									<option value="Tucuman">Tucumán</option>
								</select>
							</div>
							<div className={classes.FA}>
								<label htmlFor="hora">Horario de Contacto</label>
								<select id="hora" ref={hrInputRef}>
									<option value="" />
									<option value="10:00">10:00</option>
									<option value="10:30">10:30</option>
									<option value="11:00">11:00</option>
									<option value="11:30">11:30</option>
									<option value="12:00">12:00</option>
									<option value="12:30">12:30</option>
									<option value="13:00">13:00</option>
									<option value="13:30">13:30</option>
									<option value="14:00">14:00</option>
									<option value="14:30">14:30</option>
									<option value="15:00">15:00</option>
									<option value="15:30">15:30</option>
									<option value="16:00">16:00</option>
									<option value="16:30">16:30</option>
									<option value="17:00">17:00</option>
									<option value="17:30">17:30</option>
									<option value="18:00">18:00</option>
									<option value="18:30">18:30</option>
									<option value="19:00">19:00</option>
								</select>
							</div>
							<div>
								<label htmlFor="consulta">Consulta</label>
								<input id="consulta" type="text" ref={consultaInputRef} />
							</div>
						</div>
						<div className={classes.formBtn}>
							<button className={classes.enviar} id="enviar">
								ENVIAR
							</button>
						</div>
					</form>
				</div>
				<div className={classes.ct_col}>
					<h1>Contacto</h1>
					<div className={classes.medios}>
						<div>
							<i class="fas fa-phone-alt" /> 0800-000-0000
						</div>
						<div>
							<i class="fab fa-whatsapp" /> 11-00000000
						</div>
						<div>
							<i class="fas fa-map-marker-alt" /> Lorem ipsum 555
						</div>
					</div>
				</div>
				<div className={classes.ct_col}>
					<h1>Horarios</h1>
					<div className={classes.horarios}>
						<p>Lunes a Viernes</p>
						<p>10:00 - 19:00 hs.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Contacto;
