import * as d3 from "d3";
import React, {useState, useEffect} from "react";

const LinearPlot = ({data, ref}) => {

  useEffect(()=>{
    const svgElementProps = {
      margin: {top:20, right: 20, bottom: 50, left: 50},
      width: 900 - this.margin.left - this.margin.right,
      height: 500 - this.margin.top - this.bottom
    }
  
    const xScale = d3.scaleLinear()
          .domain([0, data.length - 1])
          .range([0, svgElementProps.width]);
    const yScale = d3.scaleLinear()
          .domain([d3.min(data) + 10, d3.max(data) + 10])
          .range([height, 0])
    
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    const line = d3.line()
          .x((d,i)=> xScale(i))
          .y((d,i)=>yScale(d))
          .curve(d3.curveMonotoneX);
    const svg = d3.select(ref)
  
  }, []);


  return (  
    <div ref={svgRef}></div>
  );
}
 
export default LinearPlot;
