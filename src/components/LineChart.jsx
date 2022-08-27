// import React, {useEffect, useRef, useState} from 'react';
// import * as d3 from 'd3';
// import './Chart.css';
// import LineControlPanel from './LineControlPanel.jsx';

// export default function LineChart({data}){
//   const d3Chart = useRef()
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   })
//   const update = useRef(false)

//   useEffect(()=>{
//     window.addEventListener('resize', ()=>{
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       })
//       if(update.current){
//         d3.selectAll('g').remove()
//       } else {update.current = true}
//     })
//     DrawChart(data,dimensions)
//   },)
  
//   const margin = {top:50, right:30, bottom:30, left:60}

//   function DrawChart(data, dimensions){
//     const chartwidth = parseInt(d3.select('#linechart').style('width')) - margin.left - margin.right
//     const chartheight = parseInt(d3.select('#linechart').style('height')) - margin.top - margin.bottom

//     const svg = d3.select(d3Chart.current)
//                                   .append("svg")
//                                     .attr('width', chartwidth + margin.left + margin.right)
//                                     .attr('height', chartheight + margin.top + margin.bottom)
//                                   .append("g")
//                                     .attr("transform",
//                                           "translate(" + margin.left + "," + margin.top + ")")
//      // Add X axis --> it is a date format
//       var x = d3.scaleTime()
//       .domain(d3.extent(data, function(d) { return d.year_id; }))
//       .range([ 0, chartwidth ]);
//     svg.append("g")
//       .attr("transform", "translate(0," + chartheight + ")")
//       .call(d3.axisBottom(x));

//     // Add Y axis
//     var y = d3.scaleLinear()
//       .domain([0, d3.max(data, function(d) { return +d.mean; })])
//       .range([ chartheight, 0 ]);
//     svg.append("g")
//       .call(d3.axisLeft(y));

//     // Add the line
//     svg.append("path")
//       .datum(data)
//       .attr("fill", "none")
//       .attr("stroke", "steelblue")
//       .attr("stroke-width", 1.5)
//       .attr("d", d3.line()
//         .x(function(d) { return x(d.year_id) })
//         .y(function(d) { return y(d.mean) })
//         )
//     // const x = d3.scaleBand()
//     //                         .domain(d3.range(data.length))
//     //                         .range([margin.left, chartwidth - margin.right])
//     //                         .padding(0.4)
                        
//     // svg.append('g')
//     //         .attr('transform', 'translate(0,'+chartheight+')')
//     //         .call(d3.axisBottom(x).tickFormat(i=>data[i].location_name).tickSizeOuter(0))

//     // const max = d3.max(data, function(d){return d.mean})

//     // const y = d3.scaleLinear()
//     //                           .domain([0,max])
//     //                           .range([chartheight, margin.top])

//     // svg.append('g')
//     //           .attr('transform', 'translate(' + margin.left + ',0)')
//     //           .call(d3.axisLeft(y))

//     // svg.append('g')
//     //           .attr('fill', '#65f0eb')
//     //           .selectAll('rect')
//     //           .data(data)
//     //           .join('rect')
//     //                 .attr('x', (d,i) => x(i))
//     //                 .attr('y', (d,i) => y(d.mean))
//     //                 .attr('height', d=>y(0)-y(d.mean))
//     //                 .attr('width', x.bandwidth())
//   }
//   return (
//     <>
//     <LineControlPanel />
//     <div id="linechart">
//       <svg ref={d3Chart}></svg>
//     </div>
//     </>
//   )
// }


import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';

function LineChart({data}){
  const svgRef = useRef();

  useEffect(() => {
    // setting up svg
    const width = 400;
    const height = 100;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', 'd3d3d3')
      .style('margin-top', '50')
    // setting up the scaling
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    
    const yScale = d3.scaleLinear()
      .domain([0, height])
      .range([height, 0]);
    
    const generateScaledLine = d3.line()
      .x((d, i)=> xScale(i))
      .y(yScale)
    // setting axes
    // setting up the data for the svg
  }, [data]);
  return(
    <div>
      <svg ref={svgRef}></svg>
    </div>
  )
}

export default LineChart;