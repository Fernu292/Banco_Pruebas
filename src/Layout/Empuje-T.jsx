import React, { useEffect, useRef, useState, useContext } from 'react';
import { EstacionContext } from '../Context/EstacionContext';
import LinearPlot from '../Components/LinePlot';
import Button from '../Components/Button';
import "../Styles/Empuje.scss";

const EmpujeSerial = () => {

  const {empuje, setInit, init} = useContext(EstacionContext);
  
  const InitSimulation = () =>{
    setInit(!init);
  }

  return (
    <div>
      <div>
        <h2>Empuje serial en PSI del banco de pruebas</h2>
        <div className='botones-Empuje'>
          <Button 
            text={"Iniciar Prueba"} 
            tool={InitSimulation}
            argument={init}  
          />
          <Button 
            text={"Parar Prueba"} 
            tool={InitSimulation}
            argument={init}  
          />
        </div>
      </div>
      <LinearPlot data={empuje} id={'Empuje'} xLabel={'Tiempo[s]'} yLabel={'Empuje [Kg]'} />
    </div>
  );
};

export default EmpujeSerial;
