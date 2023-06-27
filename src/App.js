
import './App.css';
import contadorLogo from './imagenes/Contador.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {
  
  const [numClicks, setNumClicks] = useState(0);


  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () =>{
    setNumClicks(0);

  };


  return (
    <div className='App'>
      <div className='contador_logo_contenedor'>
      <img 
          className='contador-logo'
          src={contadorLogo}
          alt='Logo de Contador'/>
      </div>
      <div className='contenedor_principal'>
        <Contador numClicks={numClicks} />
        <Boton 
            texto='Click'
            esBotondeClick={true}
            manejarClick={manejarClick}/>
        <Boton 
             texto='Reiniciar'
             esBotondeClick={false}
             manejarClick={reiniciarContador} />

    </div>
    </div>
  );
}

export default App;
