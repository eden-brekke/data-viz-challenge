import React from "react";
import './Header.css'
import LineChart from "./LineChart";
import Chart from "./Chart";
import Chart2 from "./Chart2";
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Header({data}){
  return (
    <>
    <div>
      <h1>Opioid Disease Data</h1>
    </div>
    <div>
      <h2>Data Visualization Challenge</h2>
    </div>
    <Router>
      <nav>
        <Link to="/highrates">Highest Mortality Rates</Link>
        <Link to='/lowrates'>Lowest Mortality Rates</Link>
        <Link to="/yearlyrates">Yearly Death Rates per Location</Link>
      </nav>
      <Routes>
        <Route path="/highrates" element={<Chart data={data}/>} />
        <Route path="/lowrates" element={<Chart2 data={data}/>} />
        <Route path="/yearlyrates" element={<LineChart data={data}/>} />
      </Routes>
    </Router>
    </>
  )
}