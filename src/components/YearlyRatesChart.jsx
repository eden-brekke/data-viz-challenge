import LineChart from './charts/multiseries-line-chart'

export default function Yearly({data}){
  data.sort((a,b) => b.year_id - a.year_id);
  const chart = LineChart(data, {
  x: d => d.year_name,
  y: d => d.mean,
  z: d => d.sex_name,
  yLabel: "↑ Death",
  color: "steelblue",
})
console.log('line chart data ', data);
return (
  <svg ref={chart}></svg>
);
}