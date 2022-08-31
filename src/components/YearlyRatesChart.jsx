import LineChart from './charts/multiseries-line-chart'
import './Chart.css';

export default function Yearly({ data }) {
  data.sort((a, b) => b.year_id - a.year_id);
  const chart = LineChart(data, {
    x: d => d.year_name,
    y: d => d.mean,
    z: d => d.sex_name,
    yLabel: "↑ Death",
    color: "steelblue",
  })
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
        <h3 className="graph title">Yearly Opioid use Disorder Trends by Location</h3>
        <svg ref={chart}></svg>
        <p className="mean-def">Mean: This is the mean death rate (number of deaths per 100,000 people) due to opioid use disorders for a given location, sex, and year.</p>
        <p>In the above graph we see a selected Location:{data.location_name} and it's mean death rate through the years of 1990 to 2017.<br></br>Graphs such as this give us a good idea of not only which biological sex are most and least affected by Opioid use Disorder, but also how the affect of Opioid use disorder fluctuates throughout the years.</p>
      </>
    );
  }
}