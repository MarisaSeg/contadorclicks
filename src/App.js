import freeCodeCampLogo from './img/freecodecamp-logo.jpg';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  //Hooks
  const [numClicks, setNumCliks] = useState(0);

  const manejarClick = ()=> {
    setNumCliks(numClicks + 1);
  };

  const reiniciarContador = () => {
   setNumCliks(0);
  };
  
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

        <Contador numClicks={numClicks} />

        <Boton  
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        /> 

        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
