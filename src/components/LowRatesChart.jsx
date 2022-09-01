import BarChart from './charts/vertical-bar-chart';
import './Chart.css';

export default function Chart({ data }) {
  data.sort((a, b) => a.mean - b.mean);
  const slicedData = data.slice(0, 20)

  // Linked up with the d3 vertical bar chart code, this code passes in parameters that we want for this graph to the function in that file which then returns the rendered graph
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
        <p className="mean-def"> Value Definition of Mean: This is the mean death rate (number of deaths per 100,000 people) due to opioid use disorders for a given location, sex, and year.</p>
        <p>In the Above Graph the X Axis depicts the Location correlating to the Y axis in which the mean death rate(MDR) is given.</p>
                <div className='analysis'>
        <p>If you look at each year's graph you see another trend. The populations with lowest <i>MDR</i> tend to remain pretty consistent. As an example Egypt shows up within the bottom three for <i>MDR</i> in nearly all years, and when it's not in the top three, it remains fairly close with a low <i>MDR</i>. This trend can be seen in a decent amount of populations. <br></br> This does not aid in telling us which populations are <b>most</b> effected by opioid use disorder, but it does allow for a speculative story. Which might be that when a substance is controlled, regulated, and used for it's intended purposes, or not at all, then it does not leak into the recreational side and lowers the risk of opioid use disorder, not just within the year but also keeps it in line throughout the years.</p>
        </div>
      </>
    );
  }
}
