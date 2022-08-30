import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import './Chart.css';
import ControlPanel from './ControlPanel';

export default function Chart({data}){
  const d3Chart = useRef()
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const update = useRef(false)
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      if(update.current){
        d3.selectAll('g').remove()
      } else {update.current = true}
    })
    DrawChart(data,dimensions)
  },)
  
  const margin = {top:50, right:30, bottom:30, left:60}

  function DrawChart(data, dimensions){
    data.sort((a,b)=> b.mean - a.mean);
    const slicedData = data.slice(0,20);
    const chartwidth = parseInt(d3.select('#barchart').style('width')) - margin.left - margin.right
    const chartheight = parseInt(d3.select('#barchart').style('height')) - margin.top - margin.bottom

    const svg = d3.select(d3Chart.current)
              .attr('width', chartwidth + margin.left + margin.right)
              .attr('height', chartheight + margin.top + margin.bottom)

    const x = d3.scaleBand()
              .domain(d3.range(19))
              .range([margin.left, chartwidth - margin.right])
              .padding(0.4)
          
    svg.append('g')
              .attr('transform', 'translate(0,'+chartheight+')')
              .call(d3.axisBottom(x).tickFormat(i=>slicedData[i].location_name).tickSizeOuter(0))

    const max = d3.max(slicedData, function(d){return d.mean})

    const y = d3.scaleLinear()
              .domain([0,max])
              .range([chartheight, margin.top])

    svg.append('g')
              .attr('transform', 'translate(' + margin.left + ',0)')
              .call(d3.axisLeft(y))

    svg.append('g')
              .attr('fill', '#65f0eb')
              .selectAll('rect')
              .data(slicedData)
              .join('rect')
                    .attr('x', (d,i) => x(i))
                    .attr('y', (d,i) => y(d.mean))
                    .attr('height', d=>y(0)-y(d.mean))
                    .attr('width', x.bandwidth())

    svg.append('g')
              .selectAll("rect")
              .sort((a,b)=>d3.ascending(a.mean, b.mean))
              .attr("y", (d,i)=>i*20);
          
    svg.append('g')
              .selectAll("text")
              .sort((a,b)=>d3.ascending(a.mean, b.mean))
              .attr("y", (d,i)=>i*20+17);
  }
  return (
    <>
    <h3>Make Selections to Change the data Graphed</h3>
    <ControlPanel />
    <div id="barchart">
      <svg ref={d3Chart}></svg>
      <p>The Graph above is giving us a good idea of the locations within our dataset, which are most impacted by opioid use disorders</p>
      <p>Fundamental Piece to answering "which populations are most impacted"</p>
    </div>
    </>
  )
}


