import BarChart from './charts/vertical-bar-chart';
import './Chart.css';

export default function Chart({ data }) {
  data.sort((a, b) => a.mean - b.mean);
  const slicedData = data.slice(0, 20)

  // Function
  const chart = BarChart(slicedData, {
    y: d => d.mean,
    x: d => d.location_name,
    yFormat: "",
    yLabel: "Mean",
    width: 900,
    color: "#BBDEF9"
  });

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
        <h3 className="graph-title">Bottom Twenty Locations with the Highest Mortality Rates within a Year</h3>
        <div className='graph-div'>
        <svg ref={chart}></svg>
        </div>
        <p className="mean-def">Mean: This is the mean death rate (number of deaths per 100,000 people) due to opioid use disorders for a given location, sex, and year.</p>
        <p>In the Above Graph the X Axis depicts the Location correlating to the Y axis in which the mean death rate is given.<br></br>Graphs such as this give us a good idea of which geographical locations are most and least affected by Opioid use Disorder.</p>
      </>
    );
  }
}
