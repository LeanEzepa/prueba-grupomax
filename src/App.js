import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import axios from 'axios';
function App() {
	const [ status, setStatus ] = useState(false);
	function dataSubmit(data) {
		const key =
			'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ';
		const headers = {
			'Access-Control-Allow-Headers' : 'Content-type',
			'Access-Control-Allow-Origin'  : 'http://127.0.0.1:3000',
			'Access-Control-Allow-Methods' : 'POST',
			'test-key'                     : key,
			'Content-type'                 : 'application/json'
		};
		axios
			.post('https://thingproxy.freeboard.io/fetch/https://sistemacaliva.com/api/front-test', data, {
				headers : headers
			})
			.then((json) => {
				if (json.data.status) {
					setStatus(true);
				}
			});
	}

	return (
		<div>
			{status && <Modal status={status} onChangeStatus={setStatus} />}
			<NavBar />
			<Slider />
			<About />
			<Banner />
			<Productos />
			<Contacto onFormSubmit={dataSubmit} />
			<Footer />
		</div>
	);
}

export default App;
