import './Viz.css';
import * as d3 from 'd3';
import Chart from './Chart.jsx';
import LineChart from './LineChart.jsx';

export default function Viz({data}) {
  // TODO : Visualize the data!
  return (
  <>
    <Chart data={data} />
    <LineChart data={data} />
    {/* <main className="viz">Viz goes here</main> */}
  </>
  );
}
