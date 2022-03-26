import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
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

      </div>
		</div>
	);
}

export default App;
