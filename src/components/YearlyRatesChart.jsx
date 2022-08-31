import LineChart from './charts/multiseries-line-chart'
import './Chart.css';

export default function Yearly({ data }) {
  data.sort((a, b) => b.year_id - a.year_id);
  
  // Linked up with the d3 multi series line chart code, this code passes in parameters that we want for this graph to the function in that file which then returns the rendered graph
  const chart = LineChart(data, {
    x: d => d.year_name,
    y: d => d.mean,
    z: d => d.sex_name,
    yLabel: "Mean Rate of Death",
    width: 900,
  })

  if (data[0] === "Loading") {
    return (
      <>
        <div className="spin-container">
        <div className="spinner">
          <p>Waiting for Input...</p>
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
        <p className="mean-def">Value Definition of Mean: This is the mean death rate (number of deaths per 100,000 people) due to opioid use disorders for a given location, sex, and year.</p>
        <p>In the above graph we see a selected Location and it's mean death rate through the years of 1990 to 2017.</p>
        <div className='analysis'>
        <p></p>
        </div>
      </>
    );
  }
}