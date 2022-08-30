import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Landing from './Landing.jsx';
import ControlPanel from '../ControlPanel';
import './Header.css'

export default function Header({ data, sexMeta, locMeta, yearMeta }) {

  return (
    <>
    <div>
      <h1>Opioid Use Disorder Data</h1>
    </div>
    <div>
      <h2>Data Visualization Challenge</h2>
    </div>
    <Router>
      <div id='nav'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/highrates">Highest Mortality Rates</Link>
          <Link to="/lowrates">Lowest Mortality Rates</Link>
          <Link to="/yearlyrates">Yearly Death Rates per Location</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/highrates" element={<ControlPanel sexMeta={sexMeta} yearMeta={yearMeta} chartType="highrates"/>} />
        <Route path="/lowrates" element={<ControlPanel sexMeta={sexMeta} yearMeta={yearMeta} chartType="lowrates"/>} />
        <Route path="/yearlyrates" element={<ControlPanel locMeta={locMeta} chartType="yearly" />} />
      </Routes>
    </Router>
    </>
  )
};