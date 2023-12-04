import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Header from "../Layout/Header";


const EmpujeSerial = () => {
  const data = [9, 4, 6, 6, 4, 12];

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 900 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    const line = d3.line()
        .x((d, i) => xScale(i))
        .y((d) => yScale(d))
        .curve(d3.curveMonotoneX);

    const svg = d3
      .select('#line-chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Agregar ejes
    svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${height})`).call(xAxis);
    svg.append('g').attr('class', 'y-axis').call(yAxis);

    // Agregar la línea al gráfico
    svg
      .append('path')
      .data([data])
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#10c8c6')
      .attr('stroke-width', 5);

    // Modificar el tamaño de la fuente del eje x
    svg
    .selectAll('.x-axis text')
    .style('font-size', '12px'); // Ajusta el valor según tus preferencias

    // Modificar el tamaño de la fuente del eje y
    svg
    .selectAll('.y-axis text')
    .style('font-size', '12px'); // Ajusta el valor según tus preferencias

    // Modificar el tamaño de la fuente de la rejilla en el eje x
    svg
    .selectAll('.grid line')
    .style('stroke-width', 0.5) // Grosor de las líneas de la rejilla
    .style('stroke-opacity', 0.7) // Opacidad de las líneas de la rejilla
    .selectAll('.tick text')
    .style('font-size', '12px'); // Ajusta el valor según tus preferencias

    // Modificar el tamaño de la fuente de la rejilla en el eje y
    svg
    .selectAll('.grid line')
    .style('stroke-width', 0.9) // Grosor de las líneas de la rejilla
    .style('stroke-opacity', 0.8) // Opacidad de las líneas de la rejilla
    .selectAll('.tick text')
    .style('font-size', '12px'); // Ajusta el valor según tus preferencias

        // Después de crear los ejes x e y
    svg
    .append('text')
    .attr('transform', `translate(${width / 2},${height + margin.top + 20})`)
    .style('text-anchor', 'middle')
    .style("fill", "white")
    .style("font-size", "18px")
    .text('Tiempo [s]'); // Ajusta el texto según tus necesidades

    svg
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left)
    .attr('x', 0 - height / 2)
    .attr('dy', '1em')
    .style('text-anchor', 'middle')
    .style("fill", "white")
    .style("font-size", "18px")
    .text('Empuje [kg]'); // Ajusta el texto según tus necesidades


  }, [data]);

  return (
    <div>
      <Header />
      <h2>Empuje serial en PSI del banco de pruebas</h2>
      <div id='line-chart'></div>
    </div>
  );
};

export default EmpujeSerial;
