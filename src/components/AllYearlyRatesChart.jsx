import LineChart from './charts/multiseries-line-chart'
import './Chart.css';

export default function AllYearly({ data }) {
  data.sort((a, b) => b.year_id - a.year_id);
  
  // Linked up with the d3 multi series line chart code, this code passes in parameters that we want for this graph to the function in that file which then returns the rendered graph
  const chart = LineChart(data, {
    x: d => d.year_name,
    y: d => d.mean,
    z: d => d.location_name,
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
        <h3 className="graph-title">All Yearly Opioid use Disorder Trends</h3>
        <div className='graph-div'>
        <svg ref={chart}></svg>
        </div>
        <p className="mean-def">Value Definition of Mean: This is the mean death rate (number of deaths per 100,000 people) due to opioid use disorders for a given location, sex, and year.</p>
        <div className='analysis'>
        <p>In the graph above we see each location, as it's own line, tracking the mean death rate(MDR) and the Year on the Y and X axes, respectively. The graph gets a bit clustered towards the bottom of the <i>MDR</i> axis, however if you focus on the outlying populations, there is a story to tell.</p>
        <p>A few populations stand out: There is South Africa which in 1990 starts as the population most effected by opioid use disorder, but by 2017 it lands fairly far down on the <i>MDR</i> axis.<br></br>In contrast, the United States start the years within the mass of other populations on the <i>MDR</i> axis, but quickly and steadily rises to be the most affected population via opioid use disorder.<br></br> The Russian Federation is another interesting case (See dark blue line) where they start among the top populations effected, the <i>MDR</i> then peaks, and begins to lower again.<br></br>This "low to Peak to low" <i>MDR</i> is a trend found within other locations as well. Most populations <i>MDR</i> peaks occurred in the later 1990s to early 2000s.</p>
        <p>This data suggests that at present day, the population most at risk of opioid use disorder is the United States. It would stand to reason that the "low to peak to low" trend that happens often, may be related to intervention and restriction of the substances within those populations.</p>
        </div>
      </>
    );
  }
}