import React from "react";
import './Header.css'

export default function Header(){
  return (
    <>
    <div>
      <h1>Opioid Disease Data</h1>
    </div>
    <div>
      <h2>Data Visualization Challenge</h2>
    </div>
    <nav>
      <ul>
        <li>Highest Mortality Rates</li>
        <li>Lowest Mortality Rates</li>
        <li>Yearly Death Rates per Location</li>
      </ul>
    </nav>
    </>
  )
}