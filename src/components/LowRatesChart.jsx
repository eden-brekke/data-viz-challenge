import './Chart.css';
import BarChart from './charts/vertical-bar-chart';

export default function Chart({ data }) {
  data.sort((a, b) => a.mean - b.mean);
  const slicedData = data.slice(0, 20)
  const chart = BarChart(slicedData, {
    y: d => d.mean,
    x: d => d.location_name,
    yFormat: "",
    yLabel: "Mean",
    width: 800,
    color: "green"
  });
  return (
    <svg ref={chart}></svg>
  );
}
