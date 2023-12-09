import React, { useEffect, useRef, useState, useContext } from 'react';
import { EstacionContext } from '../Context/EstacionContext';
import LinearPlot from '../Components/LinePlot';
import "../Styles/Empuje.scss";

const EmpujeSerial = () => {

  const {
    empuje, times, setInit, 
    init, clicks, setClicks,
    isSave, setSave
  } = useContext(EstacionContext);

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

            <button 
              className='Button'
              onClick={()=>setSave(!isSave)}
            >
                Guardar
            </button>
        </div>
      </div>
      <p>Empujes: {empuje.length}</p>
      <p>Tiempos: {times.length}</p>
      <LinearPlot data={empuje} xData={times} id={'Empuje'} xLabel={'Tiempo[ms]'} yLabel={'Empuje [Kg]'} />
    </div>
  );
};

export default EmpujeSerial;
