import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Landing from './Landing.jsx';
import ControlPanel from '../ControlPanel';
import './Header.css'

export default function Main({sexMeta, locMeta, yearMeta }) {

  return (
    <>
      <div className="main-full">
        <div className="header">
          <div>
            <h1>Opioid Use Disorder</h1>
          </div>
          <div className="header-lower">
            <h2>Data Visualization</h2>
          </div>
        </div>
        <div className="nav-bar">
          <Router>
            <div id='nav'>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/highrates">Highest Mortality Rates by Year</Link>
                <Link to="/lowrates">Lowest Mortality Rates by Year</Link>
                <Link to="/allyearlyrates">All Mortality Rates Over the Years</Link>
                <Link to="/yearlyrates">Mortality Rates Over the Years by Location</Link>
              </nav>
            </div>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/highrates" element={<ControlPanel sexMeta={sexMeta} yearMeta={yearMeta} chartType="highrates" />} />
              <Route path="/lowrates" element={<ControlPanel sexMeta={sexMeta} yearMeta={yearMeta} chartType="lowrates" />} />
              <Route path="/yearlyrates" element={<ControlPanel locMeta={locMeta} chartType="yearly" />} />              <Route path="/allyearlyrates" element={<ControlPanel sexMeta={sexMeta} yearMeta={yearMeta} locMeta={locMeta} chartType="allyearly" />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
};