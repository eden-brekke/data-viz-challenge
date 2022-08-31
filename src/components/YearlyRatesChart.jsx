import LineChart from './charts/multiseries-line-chart'
import './Chart.css';
import * as d3 from 'd3';

export default function Yearly({ data }) {
  data.sort((a, b) => b.year_id - a.year_id);
  const chart = LineChart(data, {
    x: d => d.year_name,
    y: d => d.mean,
    z: d => d.sex_name,
    yLabel: "Mean Rate of Death",
    width: 900,
    // color: ["#EAC4D5", "#BBDEF9", "#a1ef7a"],
  })
  // let parser = d3.timeParse("%Y-%m-%d")
  // const chart = LineChart(data, {
  //   x: (d) => d.year_id,
  //   y: (d) => d.mean,
  //   z: (d) => d.sex_name,
  //   yLabel: "Mean deaths per 100,000",
  //   width: 900,
  //   height: 700,
  // })
  console.log('line chart data ', data);
  if (data[0] === "Loading") {
    return (
      <>
        <div className="spin-container">
        <div className="spinner">
          <p>loading...</p>
          <div className="spinner-area spinner-first"></div>
          <div className="spinner-area spinner-second"></div>
          <div className="spinner-area spinner-third"></div>
        </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h3 className="graph-title">Yearly Opioid use Disorder Trends by Location</h3>
        <div className='graph-div'>
        <div className="legend">
          <div className="legend-title">Legend</div>
            <div className="males">&nbsp;&nbsp;&nbsp;&nbsp;Male</div>
            <div className="females">&nbsp;&nbsp;&nbsp;&nbsp;Female</div>
            <div className="both">&nbsp;&nbsp;&nbsp;&nbsp;Both</div>
          </div>
        <svg ref={chart}></svg>
        </div>
        <p className="mean-def">Mean: This is the mean death rate (number of deaths per 100,000 people) due to opioid use disorders for a given location, sex, and year.</p>
        <p>In the above graph we see a selected Location and it's mean death rate through the years of 1990 to 2017.<br></br>Graphs such as this give us a good idea of not only which biological sex are most and least affected by Opioid use Disorder, but also how the affect of Opioid use disorder fluctuates throughout the years.</p>
      </>
    );
  }
}