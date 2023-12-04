import * as d3 from "d3";
import React, {useState, useEffect} from "react";

const LinearPlot = ({
    data, id, xLabel, yLabel
  }) => {

  useEffect(()=>{
    //LinearPlot properties
    const svgElementProps = {
      margin: {top:20, right: 20, bottom: 50, left: 50},
      width: 900 - this.margin.left - this.margin.right,
      height: 500 - this.margin.top - this.bottom
    }
  
    //Scales
    const xScale = d3.scaleLinear()
          .domain([0, data.length - 1])
          .range([0, svgElementProps.width]);
    const yScale = d3.scaleLinear()
          .domain([d3.min(data) + 10, d3.max(data) + 10])
          .range([height, 0])
    
    //Axis
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    const line = d3.line()
          .x((d,i)=> xScale(i))
          .y((d,i)=>yScale(d))
          .curve(d3.curveMonotoneX);

    const svg = d3
          .select(`${id}`)
          .append('svg')
          .attr('width', svgElementProps.width)
          .attr('height', svgElementProps.height)
          .append('g')
          .attr('transform', `traslate(${svgElementProps.margin.left}, ${svgElementProps.margin.top})`);

    //Adding axis
    svg.append('g').attr('class', 'x-axis').attr('transform', `traslate(0,${svgElementProps.height})`).call(xAxis);
    svg.append('g').attr('class', 'y-axis').call(yAxis);

    //Agregar la linea al grafico 
    svg
      .append('path')
      .data([data])
      .attr('d', line)
      .attr('fill', none)
      .attr('stroke', '#10c8c6')
      .attr('stroke-width', 5);
    
    //Modificando el tamaño de la fuente del eje x
    svg
      .selectAll('.x-axis text')
      .style('font-size', '12px');


    //Modificando el tamaño de la fuente del eje y
    svg
      .selectAll('.y-axis text')
      .style('font-size', '12px');

    //Modificando el tamaño de la fuente en la rejilla en el eje x
    svg
      .selectAll('.grid line')
      .style('stroke-width', 0.5) //Grosor de las lineas de la rejila
      .style('strike-opacity', 0.7) //Opacidad de las lineas
      .selectAll('.tick text')
      .style('font-size', '12px');
    
    //Modificando el tamaño de la fuente de la rejilla en el eje y
    svg
      .selectAll('.grid line')
      .style('stroke-width', 0.9)
      .style('stroke-opacity', 0.8)
      .selectAll('.tick text')
      .style('font-size', '12px');
    
    //Agrendo labels a los ejes x e y 
    //Label del eje x
    svg
      .append('text')
      .attr('transform', `traslate(${svgElementProps.width/2}, ${svgElementProps.height + svgElementProps.margin.top + 20})`)
      .style('text-anchor', 'middle')
      .style('fill', 'white')
      .style('font-size', '18px')
      .text(`${xLabel}`);
    //Label del eje y
    svg
      .append('text')
      .attr('transform', 'rotate(-90')
      .attr('y', 0 - svgElementProps.margin.left)
      .attr('x', 0 - svgElementProps.height/2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('fill', 'white')
      .style('font-size', '18px')
      .text(`${yLabel}`)

  }, [data]);


  return (  
    <div id={id}></div>
  );
}
 
export default LinearPlot;
