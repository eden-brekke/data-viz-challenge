import './Viz.css';
import Chart from './Chart.jsx';
import LineChart from './LineChart.jsx';
import Chart2 from './Chart2.jsx';

export default function Viz({data}) {
  // TODO : Visualize the data!
  return (
  <>
    <Chart data={data} />
    <Chart2 data={data} />
    <LineChart data={data} />
    {/* <main className="viz">Viz goes here</main> */}
  </>
  );
}
