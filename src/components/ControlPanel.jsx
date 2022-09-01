import * as api from '../api';
import { useState } from 'react'
import HighRates from './HighRatesChart'
import LowRates from './LowRatesChart'
import Yearly from './YearlyRatesChart'
import AllYearly from './AllYearlyRatesChart'
import './ControlPanel.css'

function ControlPanel({ sexMeta, locMeta, yearMeta, chartType }) {
  const [data, setData] = useState(['Loading']);

  // Event handler that will grab the user input for parameters, fetches the data associated with those parameters from the API and sets that data to State to be handed down and used by the graphs.
  async function dataHandler(event) {
    event.preventDefault();
    const location = document.getElementById('userSelectedLoc') === null ? [] : event.target.userSelectedLoc.value;
    const year = document.getElementById('userSelectedYear') === null ? [] : event.target.userSelectedYear.value;
    const sex = document.getElementById('userSelectedSex') === null ? [] : event.target.userSelectedSex.value;
    const newData = await api.fetchData({
      location_id: location,
      year_id: year,
      sex_id: sex,
    });
    setData(newData);
  }


  if (chartType === 'highrates' || chartType === 'lowrates') {
    return (
      <>
        <p className="control-panel-text">Here you can generate data for mortality rates of Opioid Use Disease. <br></br> Choose a Sex and a Year to narrow the scope of the data.</p>
        <div className="App">
          <form className='form' onSubmit={dataHandler}>
            <div className="control">
              <span className="control__label">Sex: </span>
              <select id="userSelectedSex" className="select-sex__options">
                {sexMeta.map((option) => (
                  <option value={`${option.sex_id}`} key={option.sex_id}>{option.sex_short_name}</option>
                ))}
              </select>
            </div>
            <div className="control">
              <span className="control__label">Year: </span>
              <select id="userSelectedYear" className="select-year__options">
                {yearMeta.map((option) => (
                  <option value={`${option.year_id}`} key={option.year_id}>{option.year_name}</option>
                ))}
              </select>
            </div>
            <button className="rainbow-button" type="submit">Click to Generate Data (click x2)</button>
          </form>
        </div>
        {chartType === 'highrates' ? <HighRates data={data} /> : <LowRates data={data} />}
      </>
    );
  } else if (chartType === 'yearly') {
    const sortLoc = locMeta.sort((a,b) => a.location_name.localeCompare(b.location_name));
    return (
      <>
        <p className="control-panel-text">Here you can generate biological sex comparison data for the mortality rates of through the years due to Opioid Use Disease. <br></br> Choose a Location to narrow the scope of the data.</p>
        <div className="App">
          <form className="form" onSubmit={dataHandler}>
            <div className="control">
              <span className="control__label">Location: </span>
              <select id="userSelectedLoc" className="select-loc__options">
                {sortLoc.map((option) => (
                  <option value={`${option.location_id}`} key={option.location_id}>{option.location_name}</option>
                ))}
              </select>
            </div>
            <button className="rainbow-button" type="submit">Click to Generate Data (click x2)</button>
          </form>
        </div>
        <Yearly data={data} />
      </>
    );
  }else if (chartType === 'allyearly') {
    return (
      <>
        <p className="control-panel-text">Here you can generate location comparison data for the mortality rates of through the years due to Opioid Use Disease. <br></br> Choose a Sex to narrow the scope of the data.</p>
        <div className="App">
          <form className="form" onSubmit={dataHandler}>
          <div className="control">
              <span className="control__label">Sex: </span>
              <select id="userSelectedSex" className="select-sex__options">
                {sexMeta.map((option) => (
                  <option value={`${option.sex_id}`} key={option.sex_id}>{option.sex_short_name}</option>
                ))}
              </select>
            </div>
            <button className="rainbow-button" type="submit">Click to Generate Data (click x2)</button>
          </form>
        </div>
        <AllYearly data={data} />
      </>
    );
  }
}

export default ControlPanel;
