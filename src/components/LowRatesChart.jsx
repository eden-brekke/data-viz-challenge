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
        <p>In the Above Graph the X Axis depicts the Location correlating to the Y axis in which the mean death rate is given.</p>
                <div className='analysis'>
        <p>If you look at each year's graph you see a trend. In 1990 South Africa has the highest mean death rate due to opioid use disorder, the United States is on the graph, but lower in position(19). <br></br>As you progress through the years graphs, South Africa remains the top hit, but you can also see the United States rates climbing each year.<br></br>By 2003 South Africa is no longer in the top spot, but the United States has climbed to the third place.<br></br>Progressing through the years, in 2009 the United States takes top place, and continued to climb in death rates<br></br>In the most recent year(2017) the United States has climbed to a staggering 14.5 mean death rate, when the second highest location(Libya) has a mean death rate of 7.0.<br></br>The trend that exists through the years clearly shows that the United States started off with a population where opioid use disorder is prevalent, but that prevalence only increased as the years go on.</p>
        </div>
      </>
    );
  }
}
