import * as d3 from "d3";
import React, { useEffect } from "react";

const LinearPlot = ({ data, id, xLabel, yLabel }) => {

  console.log(data);

  useEffect(() => {
    // LinearPlot properties
    const svgElementProps = {
      margin: { top: 20, right: 20, bottom: 50, left: 50 },
      width: 900 - (50 + 20),
      height: 500 - (20 + 50),
    };

    // Scales
    const xScale = d3.scaleLinear().domain([0, data.length]).range([0, svgElementProps.width]);
    const yScale = d3.scaleLinear().domain([0 - 5, d3.max(data) + 10]).range([svgElementProps.height, 0]);

    // Axis
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Creating the line
    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d, i) => yScale(d))
      .curve(d3.curveMonotoneX);

    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", svgElementProps.width + svgElementProps.margin.left + svgElementProps.margin.right)
      .attr("height", svgElementProps.height + svgElementProps.margin.top + svgElementProps.margin.bottom)
      .append("g")
      .attr("transform", `translate(${svgElementProps.margin.left}, ${svgElementProps.margin.top})`);

    // Adding axis
    svg.append("g").attr("class", "x-axis").attr("transform", `translate(0, ${svgElementProps.height})`).call(xAxis);
    svg.append("g").attr("class", "y-axis").call(yAxis);

    // Adding the line to the chart
    svg.append("path")
      .data([data])
      .attr("d", line)
      .attr("fill", 'none')
      .attr("stroke", "#10c8c6")
      .attr("stroke-width", 5);

    // Modifying the font size of the x-axis
    svg.selectAll(".x-axis text").style("font-size", "12px");

    // Modifying the font size of the y-axis
    svg.selectAll(".y-axis text").style("font-size", "12px");

    // Modifying the font size of the grid on the x-axis
    svg
      .selectAll(".grid line")
      .style("stroke-width", 0.5) // Thickness of grid lines
      .style("stroke-opacity", 0.7) // Opacity of lines
      .selectAll(".tick text")
      .style("font-size", "12px");

    // Modifying the font size of the grid on the y-axis
    svg
      .selectAll(".grid line")
      .style("stroke-width", 0.9)
      .style("stroke-opacity", 0.8)
      .selectAll(".tick text")
      .style("font-size", "12px");

    // Adding labels to the x and y axes
    // X-axis label
    svg
      .append("text")
      .attr("transform", `translate(${svgElementProps.width / 2}, ${svgElementProps.height + svgElementProps.margin.top + 20})`)
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "18px")
      .text(`${xLabel}`);

    // Y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - svgElementProps.margin.left)
      .attr("x", 0 - svgElementProps.height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "18px")
      .text(`${yLabel}`);


  }, [data, id, xLabel, yLabel]);

  return <div id={id}></div>;
};

export default LinearPlot;
