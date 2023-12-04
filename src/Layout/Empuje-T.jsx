import React, { useEffect, useRef, useState, useContext } from 'react';
import { EstacionContext } from '../Context/EstacionContext';
import Header from "../Layout/Header";
import LinearPlot from '../Components/LinePlot';

const EmpujeSerial = () => {

  const {empuje} = useContext(EstacionContext);
  
  return (
    <div>
      <h2>Empuje serial en PSI del banco de pruebas</h2>
      <LinearPlot data={empuje} id={'Empuje'} xLabel={'Tiempo[s]'} yLabel={'Empuje [Kg]'} />
    </div>
  );
};

export default EmpujeSerial;
