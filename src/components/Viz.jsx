import './Viz.css';
import * as d3 from 'd3';
import Chart from './Chart.jsx';

export default function Viz({data}) {
  // TODO : Visualize the data!
  return (
  <>
    <Chart data={data} />
    {/* <main className="viz">Viz goes here</main> */}
  </>
  );
}
