import freeCodeCampLogo from './img/freecodecamp-logo.jpg';
import './App.css';
import Boton from './componentes/Boton';
function App() {

  const manejarClick = ()=> {
    console.log('click');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }
  return (
    <div className="app">
      <div className="freecodecamp-logo-contenedor">
      <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt="logo de FreeCodeCamp"
      />
      </div>

      <div className='contenedor-principal'>
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
        <Boton 
          oton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        /> 
      </div>
    </div>
  );
}

export default App;
