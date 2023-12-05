import React, { useEffect, useRef, useState, useContext } from 'react';
import { EstacionContext } from '../Context/EstacionContext';
import LinearPlot from '../Components/LinePlot';
import Button from '../Components/Button';
import "../Styles/Empuje.scss";

const EmpujeSerial = () => {

  const {empuje, setInit, init, time} = useContext(EstacionContext);
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <div>
        <h2>Empuje serial en N del banco de pruebas</h2>
        <div className='botones-Empuje'>
            <button 
              className='Button'
              onClick={()=>{
                setInit(!init)
                setClicks(clicks+1)
              }} 
              disabled={(clicks>=2) ? true : false}
            >
              Iniciar/Parar
            </button>
        </div>
        <p>{clicks}</p>
        <p>Empujes: {empuje.length}</p>
      </div>
      <LinearPlot data={empuje} id={'Empuje'} xLabel={'Tiempo[s]'} yLabel={'Empuje [Kg]'} />
    </div>
  );
};

export default EmpujeSerial;
