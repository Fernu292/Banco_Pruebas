import React, { useEffect, useRef } from 'react';
import Header from "../Layout/Header";
import LinearPlot from '../Components/LinePlot';

const EmpujeSerial = () => {
  const data = [9, 4, 6, 6, 4, 12];

  return (
    <div>
      <Header />
      <h2>Empuje serial en PSI del banco de pruebas</h2>
      <LinearPlot data={data} id={'#Empuje'} xLabel={'Tiempo[s]'} yLabel={'Empuje [Kg]'} />
    </div>
  );
};

export default EmpujeSerial;
