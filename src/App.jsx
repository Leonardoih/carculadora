import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componetes/Boton';
import Pantalla from './componetes/Pantalla';
import BotonClear from './componetes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
	const [input, setInput] = useState('');

	const agregaerInput = (numero) => {
		setInput(input + numero);
	};

	const Clear = () => {
		setInput('');
	};

	const calcularResultado = () => {
		setInput(evaluate(input));
	};
	return (
		<div className='App'>
			<div className='freecodecamp-logo-contenedor'>
				<img
					src={freeCodeCampLogo}
					className='freecodecamp-logo'
					alt='Logo de freeCodeCamp'
				/>
			</div>
			<div className='contenedor-calculadora'>
				<Pantalla input={input} />
				<div className='fila'>
					<Boton manejarClic={agregaerInput}>1</Boton>
					<Boton manejarClic={agregaerInput}>2</Boton>
					<Boton manejarClic={agregaerInput}>3</Boton>
					<Boton manejarClic={agregaerInput}>+</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={agregaerInput}>4</Boton>
					<Boton manejarClic={agregaerInput}>5</Boton>
					<Boton manejarClic={agregaerInput}>6</Boton>
					<Boton manejarClic={agregaerInput}>-</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={agregaerInput}>7</Boton>
					<Boton manejarClic={agregaerInput}>8</Boton>
					<Boton manejarClic={agregaerInput}>9</Boton>
					<Boton manejarClic={agregaerInput}>*</Boton>
				</div>
				<div className='fila'>
					<Boton manejarClic={calcularResultado}>=</Boton>
					<Boton manejarClic={agregaerInput}>0</Boton>
					<Boton manejarClic={agregaerInput}>.</Boton>
					<Boton manejarClic={agregaerInput}>/</Boton>
				</div>
				<div className='fila'>
					<BotonClear manejarClear={Clear}>Clear</BotonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
